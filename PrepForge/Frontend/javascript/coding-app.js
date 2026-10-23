/**
 * PrepForge - Placement Training & Assessment Platform
 * LeetCode-Style Interactive Coding Arena UI Controller
 * Manages dual-pane IDE, language templates, line numbering, runner calls, and testcase console
 */

(function () {
    const problems = window.PREPFORGE_DATA?.codingProblems || [];
    if (!problems || problems.length === 0) {
        console.error("No coding problems found in PREPFORGE_DATA.");
        return;
    }

    // State
    let currentProblemIndex = 0;
    let currentLanguage = "javascript";
    const userCodeCache = {}; // key: `${problemId}_${lang}`
    let activeConsoleTab = "testcase"; // "testcase" | "result"
    let activeCaseIndex = 0;
    let lastExecutionReport = null;
    let isConsoleCollapsed = false;

    // DOM Elements
    const problemSelect = document.getElementById("codingProblemSelect");
    const prevProbBtn = document.getElementById("btnPrevProblem");
    const nextProbBtn = document.getElementById("btnNextProblem");
    const langSelect = document.getElementById("editorLangSelect");
    const resetCodeBtn = document.getElementById("btnResetCode");
    const runCodeBtn = document.getElementById("btnRunCode");
    const submitCodeBtn = document.getElementById("btnSubmitCode");
    const editorTextarea = document.getElementById("editorTextarea");
    const editorGutter = document.getElementById("editorGutter");
    const consoleDrawer = document.getElementById("consoleDrawer");
    const tabTestcaseBtn = document.getElementById("tabTestcase");
    const tabResultBtn = document.getElementById("tabResult");
    const consoleBody = document.getElementById("consoleBody");
    const toggleConsoleBtn = document.getElementById("btnToggleConsole");

    // Left Pane Tabs
    const tabDescBtn = document.getElementById("tabDescription");
    const tabSubmissionsBtn = document.getElementById("tabSubmissions");
    const descContent = document.getElementById("problemDescContent");
    const submissionsContent = document.getElementById("problemSubmissionsContent");

    // Initialize from URL parameters if available
    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get("problem");
        const probId = params.get("id");
        if (slug) {
            const idx = problems.findIndex(p => p.slug === slug);
            if (idx !== -1) currentProblemIndex = idx;
        } else if (probId) {
            const idx = problems.findIndex(p => p.id === probId);
            if (idx !== -1) currentProblemIndex = idx;
        }
    }

    // Populate problem dropdown
    function populateProblemDropdown() {
        if (!problemSelect) return;
        problemSelect.innerHTML = problems.map((p, idx) => {
            const isSolved = window.PrepForgeState?.isCodingProblemSolved(p.id);
            const statusIcon = isSolved ? "✓ " : "";
            const diffIcon = p.difficulty === "Easy" ? "🟢" : (p.difficulty === "Medium" ? "🟡" : "🔴");
            return `<option value="${idx}">${statusIcon}${idx + 1}. ${p.title} (${diffIcon} ${p.difficulty})</option>`;
        }).join("");
        problemSelect.value = currentProblemIndex;
    }

    // Sync line number gutter
    function updateLineNumbers() {
        if (!editorTextarea || !editorGutter) return;
        const lineCount = (editorTextarea.value.match(/\n/g) || []).length + 1;
        let numbersHtml = "";
        for (let i = 1; i <= lineCount; i++) {
            numbersHtml += `<div>${i}</div>`;
        }
        editorGutter.innerHTML = numbersHtml;
    }

    // Load problem details into view
    function loadProblem(idx) {
        currentProblemIndex = idx;
        if (problemSelect) problemSelect.value = idx;
        const problem = problems[idx];
        if (!problem) return;

        // Header Title
        const titleEl = document.getElementById("probTitle");
        if (titleEl) titleEl.textContent = `${idx + 1}. ${problem.title}`;

        // Meta Badges
        const diffEl = document.getElementById("probDifficulty");
        if (diffEl) {
            diffEl.className = `badge badge-difficulty-${problem.difficulty.toLowerCase()}`;
            diffEl.textContent = problem.difficulty;
        }

        const acceptEl = document.getElementById("probAcceptance");
        if (acceptEl) acceptEl.textContent = `Acceptance: ${problem.acceptanceRate}`;

        // Company Tags
        const companyTagsEl = document.getElementById("probCompanyTags");
        if (companyTagsEl) {
            companyTagsEl.innerHTML = problem.companyNames.map(c => `<span class="company-pill-tag">${c}</span>`).join("");
        }

        // Description
        const descEl = document.getElementById("probDescription");
        if (descEl) {
            let descHtml = problem.description
                .replace(/\n\n/g, "<br><br>")
                .replace(/`([^`]+)`/g, "<code>$1</code>");
            descEl.innerHTML = descHtml;
        }

        // Examples
        const examplesEl = document.getElementById("probExamples");
        if (examplesEl) {
            examplesEl.innerHTML = problem.examples.map((ex, i) => `
                <div class="example-card">
                    <div class="example-title">Example ${i + 1}:</div>
                    <div class="example-io-row">
                        <span class="example-io-label">Input: </span>
                        <span class="example-io-val">${ex.input}</span>
                    </div>
                    <div class="example-io-row">
                        <span class="example-io-label">Output: </span>
                        <span class="example-io-val">${ex.output}</span>
                    </div>
                    ${ex.explanation ? `
                    <div class="example-io-row">
                        <span class="example-io-label">Explanation: </span>
                        <span style="color: #94A3B8;">${ex.explanation}</span>
                    </div>` : ""}
                </div>
            `).join("");
        }

        // Constraints
        const constraintsEl = document.getElementById("probConstraints");
        if (constraintsEl) {
            constraintsEl.innerHTML = problem.constraints.map(c => `<li>${c}</li>`).join("");
        }

        // Load Code into Editor
        loadEditorCode();

        // Reset Testcase active tab
        activeCaseIndex = 0;
        activeConsoleTab = "testcase";
        renderConsole();
        renderSubmissionsTab();
    }

    // Load code for current problem & language
    function loadEditorCode() {
        const problem = problems[currentProblemIndex];
        if (!problem || !editorTextarea) return;

        const cacheKey = `${problem.id}_${currentLanguage}`;
        if (userCodeCache[cacheKey]) {
            editorTextarea.value = userCodeCache[cacheKey];
        } else {
            editorTextarea.value = problem.starterTemplates[currentLanguage] || problem.starterTemplates.javascript;
        }
        updateLineNumbers();
    }

    // Save editor code to cache
    function saveEditorCode() {
        const problem = problems[currentProblemIndex];
        if (!problem || !editorTextarea) return;
        const cacheKey = `${problem.id}_${currentLanguage}`;
        userCodeCache[cacheKey] = editorTextarea.value;
    }

    // Render Bottom Console
    function renderConsole() {
        if (!consoleBody) return;
        const problem = problems[currentProblemIndex];
        if (!problem) return;

        if (tabTestcaseBtn) tabTestcaseBtn.classList.toggle("active", activeConsoleTab === "testcase");
        if (tabResultBtn) tabResultBtn.classList.toggle("active", activeConsoleTab === "result");

        if (activeConsoleTab === "testcase") {
            // Testcase input mode
            const testCases = problem.sampleTestCases;
            const activeCase = testCases[activeCaseIndex] || testCases[0];

            consoleBody.innerHTML = `
                <div class="testcase-pills">
                    ${testCases.map((tc, i) => `
                        <button class="case-pill ${i === activeCaseIndex ? 'active' : ''}" onclick="window.switchTestCase(${i})">
                            Case ${i + 1}
                        </button>
                    `).join("")}
                </div>
                <div class="case-io-block">
                    <label>Input Parameters</label>
                    <div style="color: #F8FAFC;">${activeCase.inputDisplay}</div>
                </div>
                <div class="case-io-block">
                    <label>Expected Output</label>
                    <div style="color: #34D399; font-weight: 700;">${activeCase.expectedDisplay}</div>
                </div>
            `;
        } else {
            // Execution Result mode
            if (!lastExecutionReport) {
                consoleBody.innerHTML = `
                    <div style="text-align: center; color: #64748B; padding: 24px;">
                        <div>No execution results yet.</div>
                        <div style="font-size: 0.8rem; margin-top: 6px;">Click <strong>Run Code</strong> or <strong>Submit</strong> to evaluate your solution.</div>
                    </div>
                `;
                return;
            }

            const rep = lastExecutionReport;
            let bannerClass = "status-accepted-banner";
            let statusIcon = "✓";
            if (rep.status === "Wrong Answer") {
                bannerClass = "status-wrong-banner";
                statusIcon = "✗";
            } else if (rep.status === "Runtime Error" || rep.status === "Time Limit Exceeded" || rep.status === "Execution Not Available") {
                bannerClass = "status-error-banner";
                statusIcon = rep.status === "Execution Not Available" ? "ⓘ" : "⚠";
            }

            consoleBody.innerHTML = `
                <div class="result-status-banner ${bannerClass}">
                    <div class="result-status-title">
                        <span>${statusIcon}</span>
                        <span>${rep.status}</span>
                    </div>
                    <div class="result-runtime-meta">
                        ${rep.status === "Execution Not Available" ? "No test cases evaluated" : `Passed: ${rep.passedCount} / ${rep.totalCount} Test Cases`}
                        ${rep.runtimeMs ? `• Runtime: ${rep.runtimeMs} ms` : ""}
                    </div>
                    ${rep.message ? `<div style="font-size:0.82rem;margin-top:8px;">${rep.message}</div>` : ""}
                </div>

                ${rep.percentileBeats ? `
                    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; padding: 10px 14px; margin-bottom: 12px; font-size: 0.82rem; display: flex; gap: 18px; align-items: center;">
                        <div>⚡ <strong>Runtime:</strong> ${rep.runtimeMs} ms (Beats ${rep.percentileBeats.runtimeBeats})</div>
                        <div>💾 <strong>Memory:</strong> ${rep.percentileBeats.memoryUsed} (Beats ${rep.percentileBeats.memoryBeats})</div>
                    </div>
                ` : ""}

                <div class="testcase-pills">
                    ${rep.results.map((r, i) => `
                        <button class="case-pill ${i === activeCaseIndex ? 'active' : ''}" onclick="window.switchTestCase(${i})" style="color: ${r.passed === null ? '#94A3B8' : (r.passed ? '#34D399' : '#F87171')}; border-color: ${r.passed === null ? 'rgba(148, 163, 184, 0.4)' : (r.passed ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)')};">
                            ${r.passed === null ? '—' : (r.passed ? '✓' : '✗')} Case ${i + 1}
                        </button>
                    `).join("")}
                </div>

                ${(() => {
                    const r = rep.results[activeCaseIndex] || rep.results[0];
                    if (!r) return "";
                    return `
                        <div class="case-io-block">
                            <label>Input</label>
                            <div style="color: #F8FAFC;">${r.inputDisplay}</div>
                        </div>
                        <div class="case-io-block">
                            <label>Your Output</label>
                            <div style="color: ${r.passed ? '#34D399' : '#F87171'}; font-weight: 700;">${r.actualDisplay}</div>
                        </div>
                        <div class="case-io-block">
                            <label>Expected Output</label>
                            <div style="color: #34D399; font-weight: 700;">${r.expectedDisplay}</div>
                        </div>
                        ${r.logs && r.logs.length > 0 ? `
                            <div class="stdout-console-box">
                                <label style="display:block; font-size: 0.7rem; font-weight: 700; color: #64748B; margin-bottom: 4px;">STDOUT / CONSOLE LOGS</label>
                                ${r.logs.map(l => `<div>&gt; ${l}</div>`).join("")}
                            </div>
                        ` : ""}
                    `;
                })()}
            `;
        }
    }

    // Render Submissions Tab in Left Pane
    function renderSubmissionsTab() {
        if (!submissionsContent) return;
        const problem = problems[currentProblemIndex];
        if (!problem) return;

        const subs = window.PrepForgeState?.getCodingSubmissions(problem.id) || [];
        if (subs.length === 0) {
            submissionsContent.innerHTML = `
                <div style="text-align: center; color: #64748B; padding: 36px 16px;">
                    <h3>No Submissions Yet</h3>
                    <p style="font-size: 0.85rem; margin-top: 6px;">Submit code to test against all edge cases and record your submission history.</p>
                </div>
            `;
            return;
        }

        submissionsContent.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${subs.map(s => `
                    <div style="background: #1E293B; border: 1px solid #334155; border-radius: 6px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between;">
                        <div>
                            <div style="font-weight: 700; color: #34D399; font-size: 0.95rem;">${s.status}</div>
                            <div style="font-size: 0.78rem; color: #94A3B8; margin-top: 2px;">
                                ${new Date(s.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} • Language: ${s.language.toUpperCase()}
                            </div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.82rem; font-weight: 600; color: #CBD5E1;">${s.runtimeMs} ms</div>
                            <div style="font-size: 0.74rem; color: #64748B;">Passed ${s.passedCount}/${s.totalCount}</div>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;
    }

    // Global helper for case switching
    window.switchTestCase = function (idx) {
        activeCaseIndex = idx;
        renderConsole();
    };

    // Event Listeners
    if (problemSelect) {
        problemSelect.addEventListener("change", (e) => {
            saveEditorCode();
            loadProblem(parseInt(e.target.value, 10));
        });
    }

    if (prevProbBtn) {
        prevProbBtn.addEventListener("click", () => {
            saveEditorCode();
            const prev = (currentProblemIndex - 1 + problems.length) % problems.length;
            loadProblem(prev);
        });
    }

    if (nextProbBtn) {
        nextProbBtn.addEventListener("click", () => {
            saveEditorCode();
            const next = (currentProblemIndex + 1) % problems.length;
            loadProblem(next);
        });
    }

    if (langSelect) {
        langSelect.addEventListener("change", (e) => {
            saveEditorCode();
            currentLanguage = e.target.value;
            loadEditorCode();
        });
    }

    if (resetCodeBtn) {
        resetCodeBtn.addEventListener("click", () => {
            if (confirm("Reset current code to default template?")) {
                const problem = problems[currentProblemIndex];
                editorTextarea.value = problem.starterTemplates[currentLanguage] || problem.starterTemplates.javascript;
                updateLineNumbers();
                saveEditorCode();
            }
        });
    }

    // Editor tab indentation and sync
    if (editorTextarea) {
        editorTextarea.addEventListener("input", () => {
            updateLineNumbers();
            saveEditorCode();
        });

        editorTextarea.addEventListener("scroll", () => {
            if (editorGutter) editorGutter.scrollTop = editorTextarea.scrollTop;
        });

        editorTextarea.addEventListener("keydown", (e) => {
            if (e.key === "Tab") {
                e.preventDefault();
                const start = editorTextarea.selectionStart;
                const end = editorTextarea.selectionEnd;
                editorTextarea.value = editorTextarea.value.substring(0, start) + "    " + editorTextarea.value.substring(end);
                editorTextarea.selectionStart = editorTextarea.selectionEnd = start + 4;
                updateLineNumbers();
                saveEditorCode();
            }
        });
    }

    // Console Tabs
    if (tabTestcaseBtn) {
        tabTestcaseBtn.addEventListener("click", () => {
            activeConsoleTab = "testcase";
            renderConsole();
        });
    }

    if (tabResultBtn) {
        tabResultBtn.addEventListener("click", () => {
            activeConsoleTab = "result";
            renderConsole();
        });
    }

    if (toggleConsoleBtn) {
        toggleConsoleBtn.addEventListener("click", () => {
            isConsoleCollapsed = !isConsoleCollapsed;
            if (consoleDrawer) consoleDrawer.classList.toggle("collapsed", isConsoleCollapsed);
            toggleConsoleBtn.textContent = isConsoleCollapsed ? "▲ Expand" : "▼ Collapse";
        });
    }

    // Left Tabs
    if (tabDescBtn) {
        tabDescBtn.addEventListener("click", () => {
            tabDescBtn.classList.add("active");
            if (tabSubmissionsBtn) tabSubmissionsBtn.classList.remove("active");
            if (descContent) descContent.style.display = "block";
            if (submissionsContent) submissionsContent.style.display = "none";
        });
    }

    if (tabSubmissionsBtn) {
        tabSubmissionsBtn.addEventListener("click", () => {
            tabSubmissionsBtn.classList.add("active");
            if (tabDescBtn) tabDescBtn.classList.remove("active");
            if (descContent) descContent.style.display = "none";
            if (submissionsContent) submissionsContent.style.display = "block";
            renderSubmissionsTab();
        });
    }

    // Run Code
    if (runCodeBtn) {
        runCodeBtn.addEventListener("click", async () => {
            const problem = problems[currentProblemIndex];
            const code = editorTextarea.value;
            runCodeBtn.disabled = true;
            runCodeBtn.innerHTML = `<span>⏳</span><span>Running...</span>`;

            try {
                const report = await window.CodeRunner.runSampleCode(problem, code, currentLanguage);
                lastExecutionReport = report;
                activeConsoleTab = "result";
                activeCaseIndex = 0;
                if (isConsoleCollapsed) {
                    isConsoleCollapsed = false;
                    if (consoleDrawer) consoleDrawer.classList.remove("collapsed");
                }
                renderConsole();
            } catch (err) {
                console.error("Execution error", err);
            } finally {
                runCodeBtn.disabled = false;
                runCodeBtn.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span>Run Code</span>
                `;
            }
        });
    }

    // Submit Solution
    if (submitCodeBtn) {
        submitCodeBtn.addEventListener("click", async () => {
            const problem = problems[currentProblemIndex];
            const code = editorTextarea.value;
            submitCodeBtn.disabled = true;
            submitCodeBtn.innerHTML = `<span>⏳</span><span>Submitting...</span>`;

            try {
                const report = await window.CodeRunner.submitSolution(problem, code, currentLanguage);
                lastExecutionReport = report;
                activeConsoleTab = "result";
                activeCaseIndex = 0;
                if (isConsoleCollapsed) {
                    isConsoleCollapsed = false;
                    if (consoleDrawer) consoleDrawer.classList.remove("collapsed");
                }
                renderConsole();
                populateProblemDropdown();
                renderSubmissionsTab();
            } catch (err) {
                console.error("Submission error", err);
            } finally {
                submitCodeBtn.disabled = false;
                submitCodeBtn.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Submit</span>
                `;
            }
        });
    }

    // Initial setup
    checkUrlParams();
    populateProblemDropdown();
    loadProblem(currentProblemIndex);

})();
