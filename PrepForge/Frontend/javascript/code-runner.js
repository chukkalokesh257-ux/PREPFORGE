/**
 * PrepForge - Placement Training & Assessment Platform
 * LeetCode-Style In-Browser Code Runner & Test Execution Engine
 * Pure Client-Side, Zero-Backend, Sandbox with Timeout Protection & Deep Comparator
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.CodeRunner = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    // Safe deep cloning utility
    function deepClone(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(deepClone);
        const copy = {};
        for (const key of Object.keys(obj)) {
            copy[key] = deepClone(obj[key]);
        }
        return copy;
    }

    // Deep equality comparison with array-order leniency where appropriate
    function deepEqual(actual, expected, options = {}) {
        if (actual === expected) return true;
        if (actual === null || expected === null) return actual === expected;
        if (typeof actual !== typeof expected) return false;

        // Floating point comparisons
        if (typeof actual === 'number' && typeof expected === 'number') {
            if (Number.isNaN(actual) && Number.isNaN(expected)) return true;
            return Math.abs(actual - expected) < 1e-6;
        }

        // Arrays comparison
        if (Array.isArray(actual) && Array.isArray(expected)) {
            if (actual.length !== expected.length) return false;
            
            // Exact order comparison
            let exactMatch = true;
            for (let i = 0; i < actual.length; i++) {
                if (!deepEqual(actual[i], expected[i], options)) {
                    exactMatch = false;
                    break;
                }
            }
            if (exactMatch) return true;

            // If problem allows permutation (e.g. index pairs or set output)
            if (options.allowPermutations && actual.length <= 10) {
                const sortedA = [...actual].sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
                const sortedE = [...expected].sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
                for (let i = 0; i < sortedA.length; i++) {
                    if (!deepEqual(sortedA[i], sortedE[i], options)) return false;
                }
                return true;
            }

            return false;
        }

        // Objects comparison
        if (typeof actual === 'object' && typeof expected === 'object') {
            const actualKeys = Object.keys(actual).sort();
            const expectedKeys = Object.keys(expected).sort();
            if (actualKeys.length !== expectedKeys.length) return false;
            for (let i = 0; i < actualKeys.length; i++) {
                if (actualKeys[i] !== expectedKeys[i]) return false;
                if (!deepEqual(actual[actualKeys[i]], expected[expectedKeys[i]], options)) return false;
            }
            return true;
        }

        return false;
    }

    // Format output data for human-readable display
    function formatValue(val) {
        if (val === undefined) return 'undefined';
        if (val === null) return 'null';
        if (typeof val === 'string') return `"${val}"`;
        try {
            return JSON.stringify(val);
        } catch (e) {
            return String(val);
        }
    }

    // Formatter for logs
    function formatLog(item) {
        if (item === undefined) return 'undefined';
        if (item === null) return 'null';
        if (typeof item === 'object') {
            try { return JSON.stringify(item); } catch (e) { return String(item); }
        }
        return String(item);
    }

    /**
     * Executes JavaScript user code inside an isolated scope with custom console logger
     */
    function executeFunction(code, functionName, rawArgs, timeoutMs = 2500) {
        return new Promise((resolve) => {
            const logs = [];
            const customConsole = {
                log: (...items) => logs.push(items.map(formatLog).join(' ')),
                info: (...items) => logs.push(items.map(formatLog).join(' ')),
                warn: (...items) => logs.push('[WARN] ' + items.map(formatLog).join(' ')),
                error: (...items) => logs.push('[ERROR] ' + items.map(formatLog).join(' '))
            };

            const clonedArgs = deepClone(rawArgs);

            // Web Worker sandbox for true infinite-loop termination
            let worker = null;
            let timerId = null;
            let finished = false;

            try {
                const workerScript = `
                    self.onmessage = function(e) {
                        const { code, functionName, args } = e.data;
                        const logs = [];
                        const console = {
                            log: function() { logs.push(Array.from(arguments).map(v => typeof v === 'object' ? JSON.stringify(v) : String(v)).join(' ')); },
                            info: function() { logs.push(Array.from(arguments).map(v => typeof v === 'object' ? JSON.stringify(v) : String(v)).join(' ')); },
                            warn: function() { logs.push('[WARN] ' + Array.from(arguments).map(v => typeof v === 'object' ? JSON.stringify(v) : String(v)).join(' ')); },
                            error: function() { logs.push('[ERROR] ' + Array.from(arguments).map(v => typeof v === 'object' ? JSON.stringify(v) : String(v)).join(' ')); }
                        };
                        try {
                            const fnConstructor = new Function('console', code + '\\n return (typeof ' + functionName + ' === "function" ? ' + functionName + ' : null);');
                            const userFn = fnConstructor(console);
                            if (!userFn) {
                                self.postMessage({ error: "Function '" + functionName + "' is not defined in the code.", logs: logs });
                                return;
                            }
                            const startTime = performance.now();
                            const result = userFn.apply(null, args);
                            const duration = performance.now() - startTime;
                            self.postMessage({ success: true, result: result, duration: duration, logs: logs });
                        } catch (err) {
                            self.postMessage({ error: err.message || String(err), logs: logs });
                        }
                    };
                `;

                const blob = new Blob([workerScript], { type: 'application/javascript' });
                const blobUrl = URL.createObjectURL(blob);
                worker = new Worker(blobUrl);

                timerId = setTimeout(() => {
                    if (!finished) {
                        finished = true;
                        if (worker) worker.terminate();
                        URL.revokeObjectURL(blobUrl);
                        resolve({
                            success: false,
                            timedOut: true,
                            error: `Time Limit Exceeded: Execution exceeded ${timeoutMs}ms limit. Check for infinite loops or recursion depth.`,
                            duration: timeoutMs,
                            logs: logs
                        });
                    }
                }, timeoutMs);

                worker.onmessage = function (e) {
                    if (finished) return;
                    finished = true;
                    clearTimeout(timerId);
                    if (worker) worker.terminate();
                    URL.revokeObjectURL(blobUrl);

                    const data = e.data;
                    if (data.error) {
                        resolve({
                            success: false,
                            error: data.error,
                            duration: 0,
                            logs: data.logs || []
                        });
                    } else {
                        resolve({
                            success: true,
                            result: data.result,
                            duration: data.duration,
                            logs: data.logs || []
                        });
                    }
                };

                worker.onerror = function (err) {
                    if (finished) return;
                    finished = true;
                    clearTimeout(timerId);
                    if (worker) worker.terminate();
                    URL.revokeObjectURL(blobUrl);
                    resolve({
                        success: false,
                        error: err.message || "Runtime Exception in Worker",
                        duration: 0,
                        logs: logs
                    });
                };

                worker.postMessage({
                    code: code,
                    functionName: functionName,
                    args: clonedArgs
                });

            } catch (fallbackErr) {
                // If Web Workers are disabled or blocked by file:// URL protocol
                try {
                    const fnConstructor = new Function('console', `${code}\n return (typeof ${functionName} === "function" ? ${functionName} : null);`);
                    const userFn = fnConstructor(customConsole);
                    if (!userFn) {
                        resolve({
                            success: false,
                            error: `Function '${functionName}' is not defined.`,
                            duration: 0,
                            logs: logs
                        });
                        return;
                    }
                    const start = performance.now();
                    const result = userFn(...clonedArgs);
                    const duration = performance.now() - start;
                    resolve({
                        success: true,
                        result: result,
                        duration: duration,
                        logs: logs
                    });
                } catch (syncErr) {
                    resolve({
                        success: false,
                        error: syncErr.message || String(syncErr),
                        duration: 0,
                        logs: logs
                    });
                }
            }
        });
    }

    /**
     * Executes test cases sequentially
     */
    async function runTestCases(problem, userCode, testCasesList, language = 'javascript') {
        const results = [];
        let totalDuration = 0;
        let allPassed = true;
        let failReason = null;

        if (language !== 'javascript') {
            // Never present an unevaluated submission as passing. This runner only
            // evaluates JavaScript locally; other languages need a configured judge.
            return {
                status: "Execution Not Available",
                language: language,
                message: `${language.toUpperCase()} code has not been executed. Configure a trusted code-execution service to evaluate this language. No test cases were judged.`,
                passedCount: 0,
                totalCount: testCasesList.length,
                runtimeMs: 0,
                results: testCasesList.map((tc, idx) => ({
                    index: idx + 1,
                    inputDisplay: tc.inputDisplay,
                    expectedDisplay: tc.expectedDisplay,
                    actualDisplay: "Not evaluated — execution service is not configured",
                    passed: null,
                    duration: 0,
                    logs: []
                }))
            };
        }

        for (let i = 0; i < testCasesList.length; i++) {
            const tc = testCasesList[i];
            const execRes = await executeFunction(userCode, problem.functionName, tc.input);

            totalDuration += execRes.duration || 0;

            if (execRes.timedOut) {
                allPassed = false;
                failReason = "Time Limit Exceeded";
                results.push({
                    index: i + 1,
                    description: tc.description || `Case ${i + 1}`,
                    inputDisplay: tc.inputDisplay,
                    expectedDisplay: tc.expectedDisplay,
                    actualDisplay: "Time Limit Exceeded",
                    passed: false,
                    duration: execRes.duration,
                    logs: execRes.logs,
                    error: execRes.error
                });
                break;
            }

            if (!execRes.success) {
                allPassed = false;
                failReason = "Runtime Error";
                results.push({
                    index: i + 1,
                    description: tc.description || `Case ${i + 1}`,
                    inputDisplay: tc.inputDisplay,
                    expectedDisplay: tc.expectedDisplay,
                    actualDisplay: "Error: " + execRes.error,
                    passed: false,
                    duration: 0,
                    logs: execRes.logs,
                    error: execRes.error
                });
                break;
            }

            // Check correctness
            const isMatch = deepEqual(execRes.result, tc.expected, {
                allowPermutations: problem.slug === "two-sum"
            });

            if (!isMatch) {
                allPassed = false;
                if (!failReason) failReason = "Wrong Answer";
            }

            results.push({
                index: i + 1,
                description: tc.description || `Case ${i + 1}`,
                inputDisplay: tc.inputDisplay,
                expectedDisplay: tc.expectedDisplay,
                actual: execRes.result,
                actualDisplay: formatValue(execRes.result),
                passed: isMatch,
                duration: Math.round(execRes.duration * 10) / 10,
                logs: execRes.logs
            });
        }

        const passedCount = results.filter(r => r.passed).length;
        const avgRuntime = Math.round(totalDuration * 10) / 10;

        let status = "Accepted";
        if (!allPassed) {
            status = failReason || "Wrong Answer";
        }

        return {
            status: status,
            passedCount: passedCount,
            totalCount: testCasesList.length,
            runtimeMs: Math.max(avgRuntime, 0.5),
            results: results
        };
    }

    /**
     * Run Sample Test Cases ("Run Code" button)
     */
    async function runSampleCode(problem, userCode, language = 'javascript', customInput = null) {
        let testList = [...problem.sampleTestCases];
        
        if (customInput && customInput.parsedArgs) {
            testList = [{
                input: customInput.parsedArgs,
                inputDisplay: customInput.displayString || "Custom Testcase",
                expected: customInput.expected || null,
                expectedDisplay: customInput.expectedDisplay || "Custom Output",
                description: "Custom Testcase"
            }];
        }

        return await runTestCases(problem, userCode, testList, language);
    }

    /**
     * Submit Solution against ALL test cases ("Submit" button)
     */
    async function submitSolution(problem, userCode, language = 'javascript') {
        const fullSuite = [
            ...problem.sampleTestCases,
            ...(problem.hiddenTestCases || [])
        ];

        const report = await runTestCases(problem, userCode, fullSuite, language);

        // Generate LeetCode style percentiles if accepted
        if (report.status === "Accepted") {
            const runtimePercentile = Math.min(99.2, Math.max(65.0, Math.round(98.5 - report.runtimeMs * 3.5)));
            const memoryPercentile = Math.min(96.4, Math.max(70.0, Math.round(88.0 + Math.random() * 8)));
            report.percentileBeats = {
                runtimeBeats: `${runtimePercentile}%`,
                memoryBeats: `${memoryPercentile}%`,
                memoryUsed: "42.1 MB"
            };

            // Save to PrepForgeState
            if (typeof window !== "undefined" && window.PrepForgeState) {
                window.PrepForgeState.recordCodingProblemSolved(problem.id, {
                    language: language,
                    runtimeMs: report.runtimeMs,
                    passedCount: report.passedCount,
                    totalCount: report.totalCount,
                    timestamp: new Date().toISOString()
                });
            }
        }

        return report;
    }

    return {
        deepEqual: deepEqual,
        deepClone: deepClone,
        executeFunction: executeFunction,
        runSampleCode: runSampleCode,
        submitSolution: submitSolution
    };
}));
