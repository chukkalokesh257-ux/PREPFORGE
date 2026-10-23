/**
 * PrepForge - Placement Training & Assessment Platform
 * Exam Engine, Instructions Modal & Post-Exam Scorecard (Pure Vanilla JS)
 */

class PrepForgeExamEngine {
    constructor() {
        this.currentTest = null;
        this.questions = [];
        this.currentIndex = 0;
        this.userAnswers = {}; // questionId -> optionIndex
        this.questionStatus = {}; // questionId -> 'not_visited' | 'not_answered' | 'answered' | 'marked_review'
        this.timerInterval = null;
        this.remainingSeconds = 0;
        this.totalSeconds = 0;
        this.startTime = null;

        this.initEventListeners();
    }

    initEventListeners() {
        // Modal instructions agreement checkbox
        const agreeCheckbox = document.getElementById("examAgreeCheckbox");
        const startBtn = document.getElementById("btnModalStartExam");

        if (agreeCheckbox && startBtn) {
            agreeCheckbox.addEventListener("change", (e) => {
                startBtn.disabled = !e.target.checked;
                startBtn.style.opacity = e.target.checked ? "1" : "0.5";
            });
        }
    }

    /**
     * Step 1: Open Pre-Exam Instructions Modal
     * Instructions appear ONLY after the student clicks "Start Test"
     */
    openInstructionsModal(testId) {
        const test = window.PREPFORGE_DATA?.mockTests.find(t => t.id === testId);
        if (!test) return;

        this.currentTest = test;

        // Populate instruction fields
        const titleEl = document.getElementById("instrTestTitle");
        const durationEl = document.getElementById("instrDuration");
        const questionsEl = document.getElementById("instrQuestions");
        const sectionsEl = document.getElementById("instrSections");
        const markingEl = document.getElementById("instrMarking");
        const agreeCheckbox = document.getElementById("examAgreeCheckbox");
        const startBtn = document.getElementById("btnModalStartExam");

        if (titleEl) titleEl.textContent = test.title;
        if (durationEl) durationEl.textContent = `${test.durationMins} Minutes`;
        if (questionsEl) questionsEl.textContent = `${test.totalQuestions || test.questionIds.length} Questions`;
        if (sectionsEl) sectionsEl.textContent = test.sections.join(" • ");
        if (markingEl) markingEl.textContent = test.markingScheme || "+1 for correct, no negative marking";

        if (agreeCheckbox) {
            agreeCheckbox.checked = false;
        }
        if (startBtn) {
            startBtn.disabled = true;
            startBtn.style.opacity = "0.5";
            startBtn.onclick = () => {
                this.closeInstructionsModal();
                this.launchExam(test.id);
            };
        }

        const modal = document.getElementById("examInstructionsModal");
        if (modal) modal.classList.add("show");
    }

    closeInstructionsModal() {
        const modal = document.getElementById("examInstructionsModal");
        if (modal) modal.classList.remove("show");
    }

    /**
     * Step 2: Launch Actual Fullscreen Exam Interface
     */
    launchExam(testId) {
        const test = window.PREPFORGE_DATA?.mockTests.find(t => t.id === testId);
        if (!test) return;

        this.currentTest = test;

        // Retrieve full question objects from practice bank
        const allQuestions = window.PREPFORGE_DATA?.practiceQuestions || [];
        this.questions = test.questionIds.map(qid => allQuestions.find(q => q.id === qid)).filter(Boolean);

        // Fallback if question set is smaller than required
        if (this.questions.length === 0) {
            this.questions = allQuestions.slice(0, 10);
        }

        // Initialize question tracking states
        this.currentIndex = 0;
        this.userAnswers = {};
        this.questionStatus = {};
        this.questions.forEach((q, idx) => {
            this.questionStatus[q.id] = (idx === 0) ? "not_answered" : "not_visited";
        });

        this.totalSeconds = test.durationMins * 60;
        this.remainingSeconds = this.totalSeconds;
        this.startTime = Date.now();

        // Setup DOM
        const examScreen = document.getElementById("fullscreenExamScreen");
        if (examScreen) {
            examScreen.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        document.getElementById("examNavTestTitle").textContent = test.title;
        document.getElementById("examNavBadge").textContent = test.badge || test.difficulty;

        this.startTimer();
        this.renderQuestionView();
        this.renderQuestionPalette();
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        const clockEl = document.getElementById("examTimerClock");

        const updateClock = () => {
            const mins = Math.floor(this.remainingSeconds / 60);
            const secs = this.remainingSeconds % 60;
            if (clockEl) {
                clockEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
                if (this.remainingSeconds <= 300) {
                    clockEl.classList.add("warning");
                } else {
                    clockEl.classList.remove("warning");
                }
            }

            if (this.remainingSeconds <= 0) {
                clearInterval(this.timerInterval);
                alert("Exam time has expired! Your responses are being automatically submitted.");
                this.submitExam(true);
            } else {
                this.remainingSeconds--;
            }
        };

        updateClock();
        this.timerInterval = setInterval(updateClock, 1000);
    }

    renderQuestionView() {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        // Update Question Number and Domain Tag
        const qNumEl = document.getElementById("examQuestionNumber");
        const domainEl = document.getElementById("examQuestionDomain");
        const statementEl = document.getElementById("examQuestionStatement");
        const optionsContainer = document.getElementById("examOptionsContainer");

        if (qNumEl) qNumEl.textContent = `Question ${this.currentIndex + 1} of ${this.questions.length}`;
        if (domainEl) domainEl.textContent = q.domain;
        if (statementEl) statementEl.textContent = q.statement;

        // Render Options with selection state
        const selectedOpt = this.userAnswers[q.id];

        if (optionsContainer) {
            optionsContainer.innerHTML = q.options.map((opt, optIdx) => `
                <div class="exam-option-item ${selectedOpt === optIdx ? 'selected' : ''}" onclick="window.PrepForgeExam.selectOption(${optIdx})">
                    <div class="option-radio-circle"></div>
                    <span class="option-text">${opt}</span>
                </div>
            `).join("");
        }

        // Update Previous / Next button states
        const prevBtn = document.getElementById("btnExamPrev");
        const nextBtn = document.getElementById("btnExamNext");
        if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
        if (nextBtn) {
            nextBtn.textContent = (this.currentIndex === this.questions.length - 1) ? "Save & View Summary" : "Next Question →";
        }
    }

    selectOption(optIdx) {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        this.userAnswers[q.id] = optIdx;
        this.questionStatus[q.id] = "answered";

        this.renderQuestionView();
        this.renderQuestionPalette();
    }

    clearResponse() {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        delete this.userAnswers[q.id];
        this.questionStatus[q.id] = "not_answered";

        this.renderQuestionView();
        this.renderQuestionPalette();
    }

    markForReview() {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        this.questionStatus[q.id] = "marked_review";
        this.nextQuestion();
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            if (this.questionStatus[this.questions[this.currentIndex].id] === "not_visited") {
                this.questionStatus[this.questions[this.currentIndex].id] = "not_answered";
            }
            this.renderQuestionView();
            this.renderQuestionPalette();
        }
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            if (this.questionStatus[this.questions[this.currentIndex].id] === "not_visited") {
                this.questionStatus[this.questions[this.currentIndex].id] = "not_answered";
            }
            this.renderQuestionView();
            this.renderQuestionPalette();
        } else {
            this.promptSubmitExam();
        }
    }

    jumpToQuestion(idx) {
        if (idx >= 0 && idx < this.questions.length) {
            this.currentIndex = idx;
            if (this.questionStatus[this.questions[this.currentIndex].id] === "not_visited") {
                this.questionStatus[this.questions[this.currentIndex].id] = "not_answered";
            }
            this.renderQuestionView();
            this.renderQuestionPalette();
        }
    }

    renderQuestionPalette() {
        const grid = document.getElementById("examPaletteGrid");
        if (!grid) return;

        grid.innerHTML = this.questions.map((q, idx) => {
            const status = this.questionStatus[q.id] || "not_visited";
            const isCurrent = (idx === this.currentIndex);

            let statusClass = "not-visited";
            if (status === "answered") statusClass = "answered";
            else if (status === "not_answered") statusClass = "not-answered";
            else if (status === "marked_review") statusClass = "marked-review";

            return `
                <button class="palette-btn ${statusClass} ${isCurrent ? 'current' : ''}" onclick="window.PrepForgeExam.jumpToQuestion(${idx})">
                    ${idx + 1}
                </button>
            `;
        }).join("");
    }

    /**
     * Step 3: Exam Submission & Post-Exam Scorecard
     */
    promptSubmitExam() {
        const answeredCount = Object.keys(this.userAnswers).length;
        const total = this.questions.length;
        const unansweredCount = total - answeredCount;
        const markedCount = Object.values(this.questionStatus).filter(s => s === "marked_review").length;

        const confirmMsg = `Are you sure you want to submit your test?\n\n` +
            `• Total Questions: ${total}\n` +
            `• Answered: ${answeredCount}\n` +
            `• Unanswered: ${unansweredCount}\n` +
            `• Marked for Review: ${markedCount}`;

        if (confirm(confirmMsg)) {
            this.submitExam(false);
        }
    }

    submitExam(isAutoSubmit = false) {
        if (this.timerInterval) clearInterval(this.timerInterval);

        const timeSpentSecs = this.totalSeconds - this.remainingSeconds;
        let correctCount = 0;
        let incorrectCount = 0;
        let unansweredCount = 0;

        const detailedAnswers = this.questions.map(q => {
            const userChoice = this.userAnswers[q.id];
            const isAnswered = userChoice !== undefined;
            const isCorrect = isAnswered && (userChoice === q.correctOption);

            if (!isAnswered) unansweredCount++;
            else if (isCorrect) correctCount++;
            else incorrectCount++;

            return {
                question: q,
                userChoice,
                isAnswered,
                isCorrect
            };
        });

        const totalQuestions = this.questions.length;
        const score = correctCount; // 1 mark per question
        const maxScore = totalQuestions;
        const accuracy = Math.round((correctCount / Math.max(1, (correctCount + incorrectCount))) * 100);

        const examResult = {
            testId: this.currentTest.id,
            testTitle: this.currentTest.title,
            score,
            maxScore,
            accuracy,
            correctCount,
            incorrectCount,
            unansweredCount,
            timeSpentSecs,
            detailedAnswers
        };

        // Persist to user state
        window.PrepForgeState?.recordTestResult(examResult);

        // Hide Exam Viewport & Show Result Viewport
        const examScreen = document.getElementById("fullscreenExamScreen");
        if (examScreen) {
            examScreen.classList.remove("active");
            document.body.style.overflow = "auto";
        }

        this.renderResultsDashboard(examResult);
    }

    renderResultsDashboard(result) {
        const resultsContainer = document.getElementById("examResultsContainer");
        const mockListContainer = document.getElementById("mockTestsListContainer");

        if (mockListContainer) mockListContainer.style.display = "none";
        if (!resultsContainer) return;

        resultsContainer.style.display = "block";

        const mins = Math.floor(result.timeSpentSecs / 60);
        const secs = result.timeSpentSecs % 60;
        const isPassed = result.score >= Math.ceil(result.maxScore * 0.6);

        resultsContainer.innerHTML = `
            <div class="results-hero-card">
                <div class="results-hero-content">
                    <span class="results-badge-cleared" style="background: ${isPassed ? '#10B981' : '#F59E0B'};">
                        ${isPassed ? '✓ Test Cleared' : 'Requires Further Practice'}
                    </span>
                    <h2 class="results-hero-title">${result.testTitle}</h2>
                    <p class="results-hero-desc">
                        Your performance has been recorded and integrated into your Placement Readiness Index.
                    </p>
                </div>
                <div class="results-score-badge">
                    <div class="results-score-value">${result.score}/${result.maxScore}</div>
                    <div class="results-score-label">Total Score (${Math.round((result.score/result.maxScore)*100)}%)</div>
                </div>
            </div>

            <!-- 4 Metrics Row -->
            <div class="results-metrics-grid">
                <div class="result-metric-card">
                    <span class="metric-label">Correct Answers</span>
                    <span class="metric-val correct">${result.correctCount}</span>
                </div>
                <div class="result-metric-card">
                    <span class="metric-label">Incorrect Answers</span>
                    <span class="metric-val incorrect">${result.incorrectCount}</span>
                </div>
                <div class="result-metric-card">
                    <span class="metric-label">Unanswered</span>
                    <span class="metric-val skipped">${result.unansweredCount}</span>
                </div>
                <div class="result-metric-card">
                    <span class="metric-label">Overall Accuracy</span>
                    <span class="metric-val accuracy">${result.accuracy}%</span>
                </div>
            </div>

            <div class="card" style="padding: 24px; margin-bottom: 24px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div>
                        <div style="font-size: 0.96rem; font-weight: 700; color: var(--text-primary);">Time Taken</div>
                        <div style="font-size: 0.84rem; color: var(--text-muted); margin-top: 2px;">
                            Completed in <strong>${mins}m ${secs}s</strong>
                        </div>
                    </div>
                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn-secondary" onclick="window.location.reload()">
                            Retake / Back to Mock Tests
                        </button>
                        <button class="btn btn-primary" onclick="window.location.href='performance.html'">
                            View Full Performance Analytics →
                        </button>
                    </div>
                </div>
            </div>

            <!-- Detailed Question-by-Question Solution Review -->
            <div class="results-section-card">
                <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 18px; color: var(--text-primary);">
                    Comprehensive Question & Answer Review
                </h3>
                
                ${result.detailedAnswers.map((item, idx) => {
                    let statusLabel = "Unanswered";
                    let statusClass = "skipped";
                    if (item.isAnswered) {
                        statusLabel = item.isCorrect ? "Correct (+1)" : "Incorrect (0)";
                        statusClass = item.isCorrect ? "correct" : "incorrect";
                    }

                    return `
                        <div class="solution-item">
                            <div class="solution-header">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="font-weight: 700; color: var(--text-primary);">Q${idx + 1}.</span>
                                    <span class="question-domain-tag">${item.question.domain}</span>
                                </div>
                                <span class="solution-status ${statusClass}">${statusLabel}</span>
                            </div>

                            <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px; line-height: 1.5; white-space: pre-line;">
                                ${item.question.statement}
                            </p>

                            <div style="font-size: 0.86rem; margin-bottom: 8px;">
                                <div>Your Answer: <strong>${item.isAnswered ? item.question.options[item.userChoice] : '<span style="color: #94A3B8;">Skipped</span>'}</strong></div>
                                <div style="color: #059669; margin-top: 4px;">Correct Answer: <strong>${item.question.options[item.question.correctOption]}</strong></div>
                            </div>

                            <div class="solution-explanation">
                                <strong>Detailed Solution:</strong>
                                ${item.question.explanation}
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        `;
    }
}

// Global instance
window.PrepForgeExam = new PrepForgeExamEngine();

function initMockTestsPage() {
    const listContainer = document.getElementById("mockTestsListContainer");
    if (!listContainer) return;

    const tests = window.PREPFORGE_DATA?.mockTests || [];
    listContainer.innerHTML = tests.map(test => `
        <div class="card" style="padding: 24px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
            <div style="max-width: 70%;">
                <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 8px; flex-wrap:wrap;">
                    <span class="badge ${test.type === 'company' ? 'badge-service' : 'badge-product'}">${test.badge}</span>
                    <span class="badge badge-difficulty-${test.difficulty.toLowerCase()}">${test.difficulty}</span>
                    <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-muted);">${test.durationMins} Mins • ${test.totalQuestions || test.questionIds.length} Questions</span>
                </div>
                <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">${test.title}</h3>
                <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 12px;">${test.description}</p>
                <div style="display: flex; gap: 6px; flex-wrap: wrap;">${test.sections.map(section => `<span class="topic-tag">${section}</span>`).join("")}</div>
            </div>
            <div><button class="btn btn-primary" onclick="window.PrepForgeExam.openInstructionsModal('${test.id}')">Start Test →</button></div>
        </div>
    `).join("");

    const urlParams = new URLSearchParams(window.location.search);
    const testParam = urlParams.get("test");
    if (testParam) window.PrepForgeExam.openInstructionsModal(testParam);
}
