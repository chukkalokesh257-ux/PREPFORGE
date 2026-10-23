/* Shared coding challenges for each company's dedicated mock-test page. */
const PREPFORGE_MOCK_CODING_CHALLENGES = [
    {
        id: "mock-code-two-sum", title: "1. Two Sum", difficulty: "Easy", points: 10,
        statement: "Given an integer array nums and an integer target, return the indices of two different elements whose values add up to target. Return the indices as a two-element array.",
        signature: "solve(nums, target)",
        starter: "function solve(nums, target) {\n  // Return the two indices whose values add up to target.\n  \n}",
        tests: [
            { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
            { args: [[3, 2, 4], 6], expected: [1, 2] },
            { args: [[3, 3], 6], expected: [0, 1] }
        ]
    },
    {
        id: "mock-code-palindrome", title: "2. Valid Palindrome", difficulty: "Easy", points: 10,
        statement: "Return true if a string is a palindrome after converting letters to lowercase and ignoring every character that is not a letter or digit. Otherwise return false.",
        signature: "solve(text)",
        starter: "function solve(text) {\n  // Normalize the string, then compare from both ends.\n  \n}",
        tests: [
            { args: ["A man, a plan, a canal: Panama"], expected: true },
            { args: ["race a car"], expected: false },
            { args: [" "], expected: true }
        ]
    },
    {
        id: "mock-code-max-subarray", title: "3. Maximum Subarray Sum", difficulty: "Medium", points: 15,
        statement: "Given a non-empty integer array, find the largest possible sum of a contiguous subarray. The subarray must contain at least one element.",
        signature: "solve(nums)",
        starter: "function solve(nums) {\n  // Try tracking the best subarray ending at each index.\n  \n}",
        tests: [
            { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
            { args: [[1]], expected: 1 },
            { args: [[5, 4, -1, 7, 8]], expected: 23 },
            { args: [[-3, -2, -5]], expected: -2 }
        ]
    }
];


function renderCompanyAptitudeQuestions() {
    const questions = (window.PREPFORGE_DATA?.practiceQuestions || [])
        .filter(question => question.id && question.id.startsWith("pq-apt-"))
        .slice(0, 10);
    if (!questions.length) {
        return `<section class="card" style="padding:20px;margin-bottom:24px;"><h2>Quantitative Aptitude Round</h2><p>Unable to load the aptitude questions. Please refresh the page.</p></section>`;
    }
    const questionCards = questions.map((question, index) => `
        <article class="card" style="padding:20px;margin-bottom:14px;" id="company-aptitude-card-${index}">
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">
                <span class="badge badge-service">Question ${index + 1} of ${questions.length}</span>
                <span class="badge badge-difficulty-${String(question.difficulty || 'Medium').toLowerCase()}">${question.difficulty || 'Medium'}</span>
                <span class="topic-tag">${question.topic || 'Aptitude'}</span>
            </div>
            <h3 style="font-size:1rem;line-height:1.55;margin:0 0 14px;color:var(--text-primary);white-space:pre-line;">${question.statement}</h3>
            <div style="display:grid;gap:9px;">
                ${question.options.map((option, optionIndex) => `
                    <label class="company-aptitude-option" style="display:flex;gap:10px;align-items:flex-start;border:1px solid var(--border-color);border-radius:9px;padding:11px 12px;cursor:pointer;">
                        <input type="radio" name="company-aptitude-${index}" value="${optionIndex}" style="margin-top:4px;">
                        <span>${String.fromCharCode(65 + optionIndex)}. ${option}</span>
                    </label>`).join('')}
            </div>
            <div id="company-aptitude-feedback-${index}" style="display:none;margin-top:12px;padding:12px;border-radius:8px;background:var(--bg-card-subtle);font-size:.88rem;white-space:pre-line;"></div>
        </article>`).join('');
    return `<section aria-labelledby="companyAptitudeHeading" style="margin:0 0 30px;">
        <div class="section-header" style="margin-bottom:14px;">
            <div class="section-title-wrap"><h2 class="section-title" id="companyAptitudeHeading">Quantitative Aptitude Round</h2>
            <p class="section-subtitle">Answer all 10 aptitude questions first, then submit to see your score and explanations.</p></div>
        </div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:16px;">
            <span class="badge badge-product">10 Questions</span><span class="badge badge-service">10 Marks</span>
            <span id="companyAptitudeScore" role="status" style="font-weight:700;color:var(--text-primary);"></span>
        </div>
        <form id="companyAptitudeForm">${questionCards}
            <div style="display:flex;gap:10px;flex-wrap:wrap;margin:16px 0 28px;">
                <button class="btn btn-primary" type="submit">Submit Aptitude Test</button>
                <button class="btn btn-secondary" type="button" id="resetCompanyAptitude">Reset Answers</button>
            </div>
        </form>
    </section>`;
}

function initCompanyAptitudeQuestions() {
    const container = document.getElementById('companyAptitudeQuestionsContainer');
    if (!container) return;
    container.innerHTML = renderCompanyAptitudeQuestions();
    const questions = (window.PREPFORGE_DATA?.practiceQuestions || [])
        .filter(question => question.id && question.id.startsWith('pq-apt-'))
        .slice(0, 10);
    const form = document.getElementById('companyAptitudeForm');
    const resetButton = document.getElementById('resetCompanyAptitude');
    const score = document.getElementById('companyAptitudeScore');
    form?.addEventListener('submit', event => {
        event.preventDefault();
        let correct = 0;
        let answered = 0;
        questions.forEach((question, index) => {
            const selected = form.querySelector(`input[name="company-aptitude-${index}"]:checked`);
            const feedback = document.getElementById(`company-aptitude-feedback-${index}`);
            const card = document.getElementById(`company-aptitude-card-${index}`);
            if (selected) answered++;
            const isCorrect = selected && Number(selected.value) === question.correctOption;
            if (isCorrect) correct++;
            if (feedback) {
                feedback.style.display = 'block';
                feedback.style.border = `1px solid ${isCorrect ? '#10B981' : '#F59E0B'}`;
                feedback.innerHTML = `<strong>${isCorrect ? 'Correct' : 'Incorrect'}.</strong> Correct answer: ${question.options[question.correctOption]}<br><br><strong>Explanation:</strong><br>${String(question.explanation || 'No explanation available.').replace(/\n/g, '<br>')}`;
            }
            card?.querySelectorAll('input').forEach(input => { input.disabled = true; });
        });
        if (score) score.textContent = `Score: ${correct}/10 · Answered: ${answered}/10`;
        const submit = form.querySelector('button[type="submit"]');
        if (submit) submit.disabled = true;
    });
    resetButton?.addEventListener('click', () => initCompanyAptitudeQuestions());
}

function renderMockCodingChallenges() {
    const cards = PREPFORGE_MOCK_CODING_CHALLENGES.map((challenge, index) => `
        <article class="card" style="padding:20px; margin-bottom:16px;">
            <div style="display:flex;gap:12px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;">
                <div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:8px;">
                    <span class="badge badge-service">Coding · ${challenge.points} points</span>
                    <span class="badge badge-difficulty-${challenge.difficulty.toLowerCase()}">${challenge.difficulty}</span>
                </div><h3 style="margin:0 0 8px;color:var(--text-primary);">${challenge.title}</h3>
                <p style="margin:0 0 10px;color:var(--text-secondary);">${challenge.statement}</p>
                <p style="font-size:.84rem;color:var(--text-muted);margin:0 0 14px;">Implement <code>${challenge.signature}</code>. Return a value; do not print it.</p></div>
            </div>
            <label for="${challenge.id}-editor" style="display:block;font-weight:700;margin-bottom:6px;">JavaScript solution</label>
            <textarea id="${challenge.id}-editor" spellcheck="false" autocapitalize="off" autocomplete="off" style="width:100%;min-height:155px;resize:vertical;border:1px solid var(--border-color);border-radius:10px;padding:14px;background:#0f172a;color:#e2e8f0;font:13px/1.55 Consolas,Monaco,monospace;tab-size:2;">${challenge.starter}</textarea>
            <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;align-items:center;">
                <button type="button" class="btn btn-primary" onclick="runMockCodingChallenge('${challenge.id}')">▶ Run test cases</button>
                <button type="button" class="btn btn-secondary" onclick="resetMockCodingChallenge('${challenge.id}')">Reset code</button>
                <span id="${challenge.id}-status" role="status" style="font-size:.85rem;color:var(--text-muted);">${challenge.tests.length} sample/edge test cases</span>
            </div>
            <pre id="${challenge.id}-output" style="white-space:pre-wrap;overflow-wrap:anywhere;background:var(--bg-card-subtle);border:1px solid var(--border-color);border-radius:10px;padding:12px;margin:12px 0 0;min-height:42px;font-size:.82rem;">Run your solution to see results.</pre>
        </article>`).join("");
    return `<section aria-labelledby="mockCodingHeading" style="margin:0 0 30px;">
        <div class="section-header" style="margin-bottom:14px;"><div class="section-title-wrap"><h2 class="section-title" id="mockCodingHeading">Coding Challenge Round</h2><p class="section-subtitle">Solve these 3 placement-style coding questions. Run checks against sample and edge cases before moving on.</p></div></div>
        <div style="padding:12px 14px;margin-bottom:16px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-card-subtle);font-size:.84rem;color:var(--text-secondary);">These challenges currently execute JavaScript locally in a temporary Web Worker. This is suitable for practice, not secure grading for untrusted production submissions; hidden tests and server-side judging are not configured.</div>
        ${cards}
    </section>`;
}

function runMockCodingChallenge(challengeId) {
    const challenge = PREPFORGE_MOCK_CODING_CHALLENGES.find(item => item.id === challengeId);
    const editor = document.getElementById(`${challengeId}-editor`);
    const output = document.getElementById(`${challengeId}-output`);
    const status = document.getElementById(`${challengeId}-status`);
    if (!challenge || !editor || !output || !status) return;
    const code = editor.value;
    output.textContent = "Running test cases…";
    status.textContent = "Running…";
    status.style.color = "var(--text-muted)";

    if (typeof Worker === "undefined" || typeof Blob === "undefined" || !window.URL?.createObjectURL) {
        status.textContent = "Execution unavailable";
        output.textContent = "This browser does not support the isolated Web Worker runner required for these challenges.";
        return;
    }

    const workerSource = `self.onmessage = function(event) {
      const { code, tests } = event.data;
      const normalize = value => JSON.stringify(value);
      try {
        const solve = new Function(code + "\\n; return typeof solve === 'function' ? solve : null;")();
        if (typeof solve !== 'function') throw new Error('Define the required function named solve.');
        const results = tests.map((test, index) => {
          try {
            const actual = solve.apply(null, test.args);
            return { index, passed: normalize(actual) === normalize(test.expected), actual, expected: test.expected };
          } catch (error) { return { index, passed: false, error: String(error && error.message || error), expected: test.expected }; }
        });
        self.postMessage({ results });
      } catch (error) { self.postMessage({ error: String(error && error.message || error) }); }
    };`;
    const workerUrl = URL.createObjectURL(new Blob([workerSource], { type: "text/javascript" }));
    const worker = new Worker(workerUrl);
    let finished = false;
    const timeout = window.setTimeout(() => {
        if (finished) return;
        finished = true;
        worker.terminate(); URL.revokeObjectURL(workerUrl);
        status.textContent = "Timed out"; status.style.color = "#b45309";
        output.textContent = "Execution exceeded 2 seconds and was stopped. Check for an infinite loop.";
    }, 2000);
    worker.onmessage = event => {
        if (finished) return;
        finished = true; window.clearTimeout(timeout); worker.terminate(); URL.revokeObjectURL(workerUrl);
        const data = event.data;
        if (data.error) {
            status.textContent = "Compilation/runtime error"; status.style.color = "#b91c1c";
            output.textContent = `Error: ${data.error}`; return;
        }
        const passed = data.results.filter(result => result.passed).length;
        status.textContent = `${passed}/${challenge.tests.length} test cases passed`;
        status.style.color = passed === challenge.tests.length ? "#047857" : "#b45309";
        output.textContent = data.results.map(result => result.passed
            ? `Test ${result.index + 1}: PASS`
            : `Test ${result.index + 1}: FAIL\nExpected: ${JSON.stringify(result.expected)}\n${result.error ? `Error: ${result.error}` : `Actual: ${JSON.stringify(result.actual)}`}`
        ).join("\n\n");
    };
    worker.onerror = event => {
        if (finished) return;
        finished = true; window.clearTimeout(timeout); worker.terminate(); URL.revokeObjectURL(workerUrl);
        status.textContent = "Runner error"; status.style.color = "#b91c1c";
        output.textContent = `Runner error: ${event.message || "Unable to execute code."}`;
    };
    worker.postMessage({ code, tests: challenge.tests });
}

function resetMockCodingChallenge(challengeId) {
    const challenge = PREPFORGE_MOCK_CODING_CHALLENGES.find(item => item.id === challengeId);
    if (!challenge) return;
    const editor = document.getElementById(`${challengeId}-editor`);
    const output = document.getElementById(`${challengeId}-output`);
    const status = document.getElementById(`${challengeId}-status`);
    if (editor) editor.value = challenge.starter;
    if (output) output.textContent = "Run your solution to see results.";
    if (status) { status.textContent = `${challenge.tests.length} sample/edge test cases`; status.style.color = "var(--text-muted)"; }
}


function initCompanyMockTestPage() {
    initCompanyAptitudeQuestions();
    const container = document.getElementById("companyCodingChallengesContainer");
    if (container) container.innerHTML = renderMockCodingChallenges();

    const companyNames = {
        tcs: "TCS", infosys: "Infosys", accenture: "Accenture", google: "Google",
        microsoft: "Microsoft", amazon: "Amazon", capgemini: "Capgemini",
        cognizant: "Cognizant", deloitte: "Deloitte", flipkart: "Flipkart",
        hcl: "HCL", ibm: "IBM", meesho: "Meesho", "tech-mahindra": "Tech Mahindra",
        walmart: "Walmart", wipro: "Wipro", zoho: "Zoho"
    };
    const params = new URLSearchParams(window.location.search);
    const companyId = (params.get("company") || "tcs").toLowerCase();
    const companyName = companyNames[companyId] || "Company";
    const title = document.getElementById("companyMockTestTitle");
    const subtitle = document.getElementById("companyMockTestSubtitle");
    const breadcrumb = document.getElementById("companyMockTestBreadcrumb");
    document.title = `${companyName} Mock Test - PrepForge`;
    if (title) title.textContent = `${companyName} Mock Test`;
    if (subtitle) subtitle.textContent = `Complete the 10-question aptitude round and then attempt 3 coding challenges for ${companyName} placement preparation.`;
    if (breadcrumb) breadcrumb.textContent = `${companyName} Mock Test`;
    const backLink = document.getElementById("backToCompanyLink");
    if (backLink) backLink.href = `${companyId}.html`;
}

initCompanyMockTestPage();
