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

4. **Explore 17 Recruiting Companies (Dedicated Standalone Pages & Authentic Logos)**:
   - Comprehensive database covering: **TCS, Infosys, Accenture, Wipro, Cognizant, Capgemini, Tech Mahindra, HCL Technologies, IBM, Deloitte, Amazon, Microsoft, Google, Flipkart, Walmart, Meesho, Zoho**.
   - **Authentic Company Vector Logos**: Clean, high-fidelity SVGs embedded directly into the platform matching the authentic branding for each company.
   - **17 Separate Standalone HTML Files**: Each company has its own complete, dedicated profile page under `Frontend/html/companies/` (e.g. `tcs.html`, `infosys.html`, `accenture.html`, `amazon.html`, `microsoft.html`, `google.html`, etc.).
   - Each page features an interactive selection process timeline, test pattern breakdown, eligibility criteria, CTC ranges, and direct preparation CTAs.

5. **Training Module with Concepts, Formulas & Small Worked Examples**:
   - In **Training**, students are taught concepts before solving problems.
   - Clicking `"Learn & Examples 📖"` on any topic opens the comprehensive **Topic Lesson Modal**:
     - **1. Conceptual Foundations & Rules**: Core definitions, properties, and shortcut elimination principles.
     - **2. Key Formulas & Standard Techniques**: Highlighted mathematical and computational formulas.
     - **3. Worked Example 1 (Foundation Example)**: Step-by-step problem with complete working.
     - **4. Worked Example 2 (Placement Interview / PYQ Level)**: Realistic campus drive problem with full solution.
     - Direct CTA: `"Solve Practice Problems on this Topic →"`.

6. **Active Practice Question Engine (56+ Problems To Do)**:
   - In **Practice**, students get real problems to actively solve.
   - Live session stats bar (Available problems, Solved count, Live accuracy %).
   - Instant validation: Selecting an option immediately shows whether it is correct (🟢) or incorrect (🔴), displaying the correct option and full step-by-step placement derivation.
   - Direct button to review the theory back in Training if needed.

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
- **HTML5**: Semantic document structure across 24 dedicated page templates (7 core modules + 17 dedicated company pages).
- **CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid, SVG progress circles, modal animations, and responsive breakpoints.
- **Vanilla JavaScript (ES6+)**:
  - `data.js`: Complete local database of 17 companies, authentic vector logos, 6 syllabus tracks, 56+ practice questions, mock tests, and resources.
  - `state.js`: LocalStorage state management engine for persistent readiness scoring, question tracking, and test results.
  - `app.js`: Global header search filtering, notification toggles, company modal controller, topic lesson viewer, practice engine, and module routing.
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
    │   ├── companies.html        (Catalog of 17+ recruiting companies)
    │   ├── training.html         (Theory, key formulas & worked examples for all topics)
    │   ├── practice.html         (56+ interactive problems to solve with live verification)
    │   ├── mock-tests.html       (Mock tests series, pre-exam modal & full exam simulation)
    │   ├── performance.html      (Detailed performance analytics & diagnostics)
    │   ├── resources.html        (Placement guides, formula cheat sheets, interview prep)
    │   │
    │   └── companies/            (Dedicated Standalone Pages for ALL 17 Companies)
    │       ├── tcs.html          (TCS dedicated profile, NQT test pattern & rounds)
    │       ├── infosys.html      (Infosys dedicated profile, test pattern & rounds)
    │       ├── accenture.html    (Accenture dedicated profile, test pattern & rounds)
    │       ├── amazon.html       (Amazon dedicated profile, SDE test pattern & rounds)
    │       ├── microsoft.html    (Microsoft dedicated profile, test pattern & rounds)
    │       ├── google.html       (Google dedicated profile, test pattern & rounds)
    │       ├── wipro.html        (Wipro dedicated profile, test pattern & rounds)
    │       ├── cognizant.html    (Cognizant dedicated profile, test pattern & rounds)
    │       ├── capgemini.html    (Capgemini dedicated profile, test pattern & rounds)
    │       ├── tech-mahindra.html(Tech Mahindra dedicated profile & test pattern)
    │       ├── hcl.html          (HCL Technologies dedicated profile & test pattern)
    │       ├── ibm.html          (IBM dedicated profile, test pattern & rounds)
    │       ├── deloitte.html     (Deloitte dedicated profile, test pattern & rounds)
    │       ├── flipkart.html     (Flipkart dedicated profile, test pattern & rounds)
    │       ├── walmart.html      (Walmart Global Tech profile, test pattern & rounds)
    │       ├── meesho.html       (Meesho dedicated profile, test pattern & rounds)
    │       └── zoho.html         (Zoho dedicated profile, test pattern & rounds)
    │
    ├── css/
    │   ├── styles.css            (Design tokens, dark navy sidebar, header & base styles)
    │   ├── components.css        (Cards, badges, circular progress, buttons, modals)
    │   └── exam.css              (Exam simulator, question palette, timer, scorecard)
    │
    ├── javascript/
    │   ├── data.js               (Rich local dataset: 17 authentic SVGs, 56+ Qs, lessons)
    │   ├── state.js              (LocalStorage management for user progress & scores)
    │   ├── app.js                (Navigation, live search, company modal & lesson logic)
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
