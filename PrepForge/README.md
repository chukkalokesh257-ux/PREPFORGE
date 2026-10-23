# PrepForge — Placement Training & Assessment Platform

PrepForge is a frontend-only placement preparation website built with **HTML5, CSS3, and vanilla JavaScript**. It uses local JavaScript data instead of a server database, so topics, company syllabuses, question banks, and resources can be edited in the project files.

## Updated features

- **Dashboard:** existing dashboard and registered-name display are preserved.
- **17 company profiles:** company details, hiring stages, test patterns, and company-specific syllabus links.
- **Syllabus-only pages:** the `Syllabus` action on the Companies page and each company profile opens `Frontend/html/syllabus.html?company=<company-id>`. This page displays only that company's topic outline and difficulty level—no practice questions or training modules.
- **Training:** topic lessons, formulas, and worked examples remain available.
- **Practice:** separate General Practice and Company-Specific Practice filters. General Practice now includes 5 MCQs each for Quantitative Aptitude, Logical Reasoning, Verbal English, Coding / DSA, SQL, and DBMS. Company mode filters to the selected company's tagged question bank.
- **Difficulty:** each company has an overall level in `data.js`; each question also has its own Easy, Medium, or Hard label. Company syllabus focus and existing test/hiring process data are stored separately per company.
- **Resources:** 9 categorized learning resources, including aptitude, reasoning, verbal English, DSA, SQL, DBMS, interview preparation, and company preparation. `Open Guide` opens the corresponding external learning page.
- **Mock Tests and Performance:** existing modules are retained.
- **No Guided Practice navigation item:** the existing Practice and Code Arena routes remain separate.

## SQL vs DBMS

SQL is a language used to define, query, and modify relational data. A DBMS is the software that stores and manages databases, enforces permissions and constraints, coordinates concurrent users, and processes SQL commands. SQL does not replace the DBMS; it is one way to interact with a relational database managed by a DBMS.

## Technology

- HTML5 for page structure.
- CSS3 for layout, cards, responsiveness, and visual styling.
- Vanilla JavaScript for rendering data, filters, question feedback, navigation, and browser storage.
- `localStorage` for demo account/session and progress data; it is not secure production authentication and is not shared across devices.
- Company and question data live in `Frontend/javascript/data.js`; no server database is required.

## Run in VS Code

1. Extract the ZIP.
2. Open the `PrepForge` folder in VS Code.
3. Open `index.html` or `Frontend/html/dashboard.html` with Live Server.
4. Register/sign in using the demo account flow, then use **Companies**, **Training**, **Practice**, **Mock Tests**, **Performance**, and **Resources** from the navigation.

External resource links require internet access. The company syllabus itself is generated locally from the company's entry in `Frontend/javascript/data.js`.

## Project layout

```text
PrepForge/
├── index.html
├── README.md
└── Frontend/
    ├── css/
    ├── html/
    │   ├── dashboard.html
    │   ├── companies.html
    │   ├── syllabus.html
    │   ├── training.html
    │   ├── practice.html
    │   ├── coding.html
    │   ├── mock-tests.html
    │   ├── performance.html
    │   ├── resources.html
    │   └── companies/          # 17 company detail pages
    └── javascript/
        ├── data.js
        ├── app.js
        ├── auth.js
        ├── company-syllabus.js
        ├── state.js
        ├── code-runner.js
        ├── coding-app.js
        ├── coding-data.js
        └── exam.js
```


## Topic-based learning flow
Training and Practice now share a topic workspace with six navigable theory lessons, one MCQ at a time with Back/Next navigation, and a coding workspace that is visible immediately for coding topics. The workspace includes Quantitative Aptitude, Logical Reasoning, Verbal English, SQL, DBMS, DSA topics, C, Java, Python, and JavaScript. Progress/editor drafts are stored locally in the browser.
