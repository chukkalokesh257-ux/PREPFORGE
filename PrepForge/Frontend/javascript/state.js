/**
 * PrepForge - Placement Training & Assessment Platform
 * State Management & LocalStorage Persistence (Pure Vanilla JS)
 */

const STATE_STORAGE_KEY = "PREPFORGE_STUDENT_STATE_V1";

class PrepForgeStateManager {
    constructor() {
        this.state = this.loadInitialState();
    }

    loadInitialState() {
        try {
            const raw = localStorage.getItem(STATE_STORAGE_KEY);
            if (raw) {
                return JSON.parse(raw);
            }
        } catch (e) {
            console.warn("Could not load from localStorage, initializing default state", e);
        }

        // Initialize default state cloned from PREPFORGE_DATA
        const initial = {
            student: JSON.parse(JSON.stringify(window.PREPFORGE_DATA?.student || {
                name: "Lokesh",
                fullName: "Lokesh Kumar",
                role: "Student",
                placementReadiness: 72,
                testsTaken: 12,
                studyHours: 28,
                streakDays: 7
            })),
            targetCompanyId: null, // Currently focused company (e.g., 'tcs', 'amazon')
            completedQuestions: {}, // questionId -> { selectedOption, isCorrect, timestamp }
            mockTestHistory: window.PREPFORGE_DATA?.student?.recentTests || [],
            activeExamSession: null,
            bookmarkedCompanies: ["tcs", "amazon", "infosys"]
        };

        this.save(initial);
        return initial;
    }

    save(stateToSave = this.state) {
        try {
            localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(stateToSave));
            this.state = stateToSave;
        } catch (e) {
            console.error("Failed to persist state", e);
        }
    }

    getState() {
        return this.state;
    }

    getStudent() {
        return this.state.student;
    }

    setTargetCompany(companyId) {
        this.state.targetCompanyId = companyId;
        this.save();
    }

    getTargetCompany() {
        if (!this.state.targetCompanyId) return null;
        return window.PREPFORGE_DATA?.companies.find(c => c.id === this.state.targetCompanyId) || null;
    }

    clearTargetCompany() {
        this.state.targetCompanyId = null;
        this.save();
    }

    recordPracticeAnswer(questionId, selectedOption, isCorrect) {
        this.state.completedQuestions[questionId] = {
            selectedOption,
            isCorrect,
            timestamp: new Date().toISOString()
        };

        // Recalculate stats slightly to reflect activity
        let total = Object.keys(this.state.completedQuestions).length;
        let correct = Object.values(this.state.completedQuestions).filter(q => q.isCorrect).length;
        
        // Slightly update readiness if positive
        if (isCorrect && this.state.student.placementReadiness < 96) {
            this.state.student.placementReadiness = Math.min(98, this.state.student.placementReadiness + 1);
        }
        
        this.save();
        return { total, correct, accuracy: Math.round((correct / total) * 100) };
    }

    isQuestionCompleted(questionId) {
        return !!this.state.completedQuestions[questionId];
    }

    getQuestionRecord(questionId) {
        return this.state.completedQuestions[questionId] || null;
    }

    recordTestResult(result) {
        // Result format:
        // { testId, testTitle, score, maxScore, accuracy, correctCount, incorrectCount, skippedCount, timeSpentSecs, date, passed }
        const newRecord = {
            id: "result-" + Date.now(),
            name: result.testTitle,
            date: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            score: `${result.score}/${result.maxScore}`,
            accuracy: `${result.accuracy}%`,
            status: result.score >= (result.maxScore * 0.6) ? "Cleared" : "Needs Practice",
            percentile: `${Math.min(99, Math.max(65, Math.round(result.accuracy * 0.95)))}th`,
            details: result
        };

        this.state.mockTestHistory.unshift(newRecord);
        this.state.student.testsTaken += 1;
        this.state.student.studyHours += Math.max(1, Math.round(result.timeSpentSecs / 3600));

        // Adjust overall readiness
        const scoreRatio = result.score / result.maxScore;
        if (scoreRatio >= 0.7) {
            this.state.student.placementReadiness = Math.min(98, this.state.student.placementReadiness + 2);
        } else if (scoreRatio < 0.4) {
            this.state.student.placementReadiness = Math.max(40, this.state.student.placementReadiness - 1);
        }

        this.save();
        return newRecord;
    }

    getMockHistory() {
        return this.state.mockTestHistory;
    }

    toggleCompanyBookmark(companyId) {
        const idx = this.state.bookmarkedCompanies.indexOf(companyId);
        if (idx > -1) {
            this.state.bookmarkedCompanies.splice(idx, 1);
        } else {
            this.state.bookmarkedCompanies.push(companyId);
        }
        this.save();
        return this.state.bookmarkedCompanies.includes(companyId);
    }

    isCompanyBookmarked(companyId) {
        return this.state.bookmarkedCompanies.includes(companyId);
    }

    recordCodingProblemSolved(problemId, details = {}) {
        if (!this.state.solvedCodingProblems) {
            this.state.solvedCodingProblems = {};
        }
        if (!this.state.codingSubmissions) {
            this.state.codingSubmissions = [];
        }

        this.state.solvedCodingProblems[problemId] = {
            solvedAt: new Date().toISOString(),
            language: details.language || 'javascript',
            runtimeMs: details.runtimeMs || 0
        };

        this.state.codingSubmissions.unshift({
            id: "sub-" + Date.now(),
            problemId: problemId,
            status: "Accepted",
            language: details.language || 'javascript',
            runtimeMs: details.runtimeMs || 0,
            passedCount: details.passedCount,
            totalCount: details.totalCount,
            timestamp: new Date().toISOString()
        });

        // Boost student readiness for solved coding problems
        if (this.state.student.placementReadiness < 99) {
            this.state.student.placementReadiness = Math.min(99, this.state.student.placementReadiness + 1);
        }

        this.save();
        return this.state.solvedCodingProblems[problemId];
    }

    isCodingProblemSolved(problemId) {
        return !!(this.state.solvedCodingProblems && this.state.solvedCodingProblems[problemId]);
    }

    getCodingSubmissions(problemId = null) {
        const subs = this.state.codingSubmissions || [];
        if (!problemId) return subs;
        return subs.filter(s => s.problemId === problemId);
    }
}

// Global state instance
window.PrepForgeState = new PrepForgeStateManager();
