# PrepForge — Placement Training & Assessment Platform

A realistic, professional, commercial-grade web dashboard UI designed for college students preparing for campus placements.

---

## 🚀 Key Architectural & Design Highlights

1. **Dark Navy SaaS Sidebar**:
   - Styled after modern enterprise SaaS dashboards with glowing active gradient pills and compact navigation.
   - Clean navigation structure: **Dashboard**, **Companies**, **Training**, **Practice**, **Mock Tests**, **Performance**, **Resources**.
   - Strict removal of "Assignments" and "Puzzles".
   - Settings and Logout actions at the bottom.

2. **Top Header**:
   - Clean, lightweight navbar with a pill-shaped search bar (`Search companies, topics, tests...`).
   - Real-time search dropdown filtering recruiting companies, training modules, and mock tests.
   - Notification bell with counter badge and interactive drop-down panel.
   - Student profile chip (`Lokesh`, `Student`).

3. **Full-Width Dashboard Layout (Zero Right Rail)**:
   - Complete removal of the reference image's right-side column (*Upcoming Tests*, *Recommended For You*, *Prepare for Your Dream Company*).
   - Content takes up 100% of the available dashboard width with no awkward blank spaces.
   - Hero welcome banner: `"Good Morning, Lokesh! 👋"` with motivational mountain visual and quote.
   - 4 full-width Placement Preparation Stats cards:
     - **Placement Readiness**: Circular SVG progress gauge (72%, `↑ 8% from last week`).
     - **Tests Taken**: 12 completed tests (`↑ 2 this week`).
     - **Study Hours**: 28 hours dedicated (`↑ 6h this week`).
     - **Streak**: 7 days (`Keep going! 🔥`).

4. **Explore 17 Recruiting Companies**:
   - Comprehensive database covering: **TCS, Infosys, Accenture, Wipro, Cognizant, Capgemini, Tech Mahindra, HCL Technologies, IBM, Deloitte, Amazon, Microsoft, Google, Flipkart, Walmart, Meesho, Zoho**.
   - Each card displays: Company Type (`Product Based` / `Service Based`), Eligibility criteria (CGPA, Branch, Backlog criteria), Roles offered, Package/CTC, Selection process, and Test pattern tags.
   - **Interactive Company Details Profile**: Clicking `"View Details →"` opens an in-depth modal displaying the selection timeline (Rounds 1–5), syllabus focus, and a direct `"Start Company Preparation →"` CTA.

5. **Dual-Mode Training Module**:
   - **General Placement Training**: Foundational curriculum across all 6 core domains.
   - **Company-Specific Training**: Tailored topics targeting specific recruiters (e.g., TCS NQT patterns, Infosys cryptarithmetic, Amazon trees/DP).
   - Core 6 Domains: **Aptitude, Reasoning, Verbal, Coding / DSA, SQL, DBMS**.

6. **Interactive Practice Question Engine**:
   - Practice questions tagged by domain, difficulty, and company PYQ status (e.g., *TCS NQT 2024*, *Infosys Pattern*, *Amazon SDE OA*).
   - Instant answer validation upon selection with detailed step-by-step mathematical and algorithmic explanations.
   - LocalStorage tracking for accuracy and completed question history.

7. **Full Exam Simulation Engine**:
   - **No exam instructions on the dashboard**: Instructions appear strictly in a dedicated pre-exam modal after the student clicks `"Start Test"`.
   - Pre-Exam Modal displays: Test Name, Duration, Number of questions, Sections, Marking scheme, and an agreement checkbox.
   - **Fullscreen Exam Interface**:
     - Live countdown clock with red pulsating visual warning under 5 minutes.
     - Interactive **Question Palette** (Grid 1–N) color-coded by status:
       - 🟢 *Answered*
       - 🟠 *Not Answered*
       - 🟣 *Marked for Review*
       - ⚪ *Not Visited*
     - Clear Response, Mark for Review & Next, and Previous/Next navigation.
   - **Post-Exam Scorecard Dashboard**:
     - Total score, percentage, and pass/cleared status.
     - 4 core metrics: Correct answers, Incorrect answers, Unanswered, Overall accuracy %.
     - Comprehensive question-by-question solution review accordion with full step-by-step explanations.

8. **Performance Module**:
   - Overall preparation gauge (72%).
   - Section-wise score bars: Aptitude (78%), Reasoning (64%), Verbal (82%), Coding (71%), SQL (58%), DBMS (69%).
   - Company readiness matrix (TCS 85%, Infosys 79%, Accenture 81%, Amazon 62%, Microsoft 58%).
   - Weak topics & targeted study recommendations integrated directly inside the performance page (instead of an external rail).
   - Recent test attempt history table.

9. **Placement Resources Module**:
   - Categorized across 8 domains: Aptitude, Reasoning, Verbal, Coding / DSA, SQL, DBMS, Interview Preparation, and Company Preparation.

---

## 🛠️ Technology Stack (Strictly Frontend Only)

This project has been built strictly adhering to the technical constraints:
- **HTML5**: Semantic document structure across 7 dedicated page templates.
- **CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid, SVG progress circles, modal animations, and responsive breakpoints.
- **Vanilla JavaScript (ES6+)**:
  - `data.js`: Complete local database of 17 companies, 6 syllabus tracks, 40+ practice questions, mock tests, and resources.
  - `state.js`: LocalStorage state management engine for persistent readiness scoring, question tracking, and test results.
  - `app.js`: Global header search filtering, notification toggles, company modal controller, and module routing.
  - `exam.js`: Timed exam simulation engine, question palette tracking, and results calculation.
- **Zero Frameworks**: No React, Angular, Vue, Bootstrap, or Tailwind.
- **Zero Backend / Zero APIs**: 100% offline-ready, requiring no database or network calls.

---

## 📁 Project Directory Structure

```
PrepForge/
│
├── index.html                    (Entry point redirecting to Frontend/html/dashboard.html)
├── README.md                     (Project documentation & execution guide)
│
└── Frontend/
    ├── html/
    │   ├── dashboard.html        (Main placement dashboard with full-width layout)
    │   ├── companies.html        (Explore 17+ recruiting companies & profiles)
    │   ├── training.html         (Company-specific & General training tracks)
    │   ├── practice.html         (Interactive practice question engine with explanations)
    │   ├── mock-tests.html       (Mock tests series, pre-exam modal & full exam simulation)
    │   ├── performance.html      (Detailed performance analytics & diagnostics)
    │   └── resources.html        (Placement guides, formula cheat sheets, interview prep)
    │
    ├── css/
    │   ├── styles.css            (Design tokens, dark navy sidebar, header & base styles)
    │   ├── components.css        (Cards, badges, circular progress, buttons, modals)
    │   └── exam.css              (Exam simulator, question palette, timer, scorecard)
    │
    ├── javascript/
    │   ├── data.js               (Rich local dataset: companies, syllabus, questions, tests)
    │   ├── state.js              (LocalStorage management for user progress & scores)
    │   ├── app.js                (Navigation, live search, company modal & page logic)
    │   └── exam.js               (Exam engine, live timer, palette & results renderer)
    │
    └── assets/                   (High-fidelity vector icons & styling assets)
```

---

## 💻 How to Run the Project

### Option A: Using VS Code Live Server (Recommended)
1. Open the folder `PrepForge` in Visual Studio Code.
2. Right click on `index.html` (or `Frontend/html/dashboard.html`).
3. Select **"Open with Live Server"**.
4. The dashboard will automatically launch in your default web browser at `http://127.0.0.1:5500/`.

### Option B: Directly in Any Web Browser
1. Open File Explorer and navigate to `c:\Users\SWATHI\Pictures\PREP\PrepForge\Frontend\html\`.
2. Double-click on `dashboard.html` to open it in Chrome, Edge, Firefox, or Safari.
3. All features (navigation, search, company modals, practice engine, timed exams, and performance tracking) will function with zero external internet connection required.
