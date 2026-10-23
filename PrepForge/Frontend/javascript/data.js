/**
 * PrepForge - Placement Training & Assessment Platform
 * Comprehensive Local Data Store & Company Brand System (Pure Vanilla JS)
 */

// Authentic High-Fidelity Vector SVG Logos for All 17 Recruiting Companies
const COMPANY_LOGOS = {
    google: `<svg viewBox="0 0 48 48" width="40" height="40">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>`,

    microsoft: `<svg viewBox="0 0 48 48" width="40" height="40">
        <rect x="2" y="2" width="20" height="20" fill="#F25022"/>
        <rect x="26" y="2" width="20" height="20" fill="#7FBA00"/>
        <rect x="2" y="26" width="20" height="20" fill="#00A4EF"/>
        <rect x="26" y="26" width="20" height="20" fill="#FFB900"/>
    </svg>`,

    amazon: `<svg viewBox="0 0 120 70" width="46" height="30">
        <path fill="#146EB4" d="M96.7 49.3c-1.3-1.6-4.2-1.9-6.4-1.9-8.4 0-24.8 3.5-35.4 7.7-18.7 7.4-25.2 2-25.2 2s7.8 7.7 27 7.7c17.5 0 35.1-9.9 39.8-13.6 1.4-1.1 1.2-1.7.2-1.9z"/>
        <path fill="#FF9900" d="M102.3 43.1c-1.2-1.5-7.9-1.1-10.9-.7-1 .1-1.1.8-.3 1.4 5.3 4.1 8.8 9.5 9.4 10.6.6 1.1 1.5.8 1.9-.3 1.2-3.4 1.1-9.4-.1-11z"/>
        <text x="5" y="32" font-family="Arial, sans-serif" font-weight="900" font-size="34" fill="#111">amazon</text>
    </svg>`,

    tcs: `<svg viewBox="0 0 100 48" width="46" height="28">
        <rect width="100" height="48" rx="8" fill="#001D4A"/>
        <text x="50" y="32" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="26" fill="#00A8E8" text-anchor="middle" letter-spacing="1">TCS</text>
    </svg>`,

    infosys: `<svg viewBox="0 0 110 40" width="50" height="26">
        <rect width="110" height="40" rx="6" fill="#007CC3"/>
        <text x="55" y="27" font-family="'Trebuchet MS', sans-serif" font-weight="bold" font-size="20" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">Infosys</text>
    </svg>`,

    accenture: `<svg viewBox="0 0 120 40" width="50" height="26">
        <text x="2" y="28" font-family="'Segoe UI', Arial, sans-serif" font-weight="bold" font-size="22" fill="#111827">accenture</text>
        <path d="M96 8 L104 18 L96 28" fill="none" stroke="#A100FF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    wipro: `<svg viewBox="0 0 48 48" width="40" height="40">
        <circle cx="24" cy="24" r="8" fill="#3B82F6"/>
        <circle cx="24" cy="8" r="4.5" fill="#EF4444"/>
        <circle cx="36" cy="14" r="4" fill="#F59E0B"/>
        <circle cx="38" cy="28" r="4" fill="#10B981"/>
        <circle cx="30" cy="38" r="4.5" fill="#6366F1"/>
        <circle cx="16" cy="38" r="4.5" fill="#8B5CF6"/>
        <circle cx="8" cy="28" r="4" fill="#EC4899"/>
        <circle cx="10" cy="14" r="4" fill="#F97316"/>
    </svg>`,

    cognizant: `<svg viewBox="0 0 110 40" width="50" height="26">
        <circle cx="18" cy="20" r="12" fill="#0033A0"/>
        <path d="M18 12 A8 8 0 1 1 10 20" fill="none" stroke="#00B2E2" stroke-width="3"/>
        <text x="36" y="27" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#0033A0">Cognizant</text>
    </svg>`,

    capgemini: `<svg viewBox="0 0 110 40" width="50" height="26">
        <path d="M18 8 C12 8 8 13 8 19 C8 25 15 28 18 33 C21 28 28 25 28 19 C28 13 24 8 18 8 Z" fill="#0070AD"/>
        <circle cx="18" cy="17" r="3" fill="#FFFFFF"/>
        <text x="32" y="26" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="#0070AD">Capgemini</text>
    </svg>`,

    "tech-mahindra": `<svg viewBox="0 0 120 40" width="50" height="26">
        <rect x="4" y="6" width="28" height="28" rx="6" fill="#E31837"/>
        <text x="18" y="26" font-family="Arial, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF" text-anchor="middle">M</text>
        <text x="38" y="21" font-family="Arial, sans-serif" font-weight="bold" font-size="11" fill="#111827">Tech</text>
        <text x="38" y="32" font-family="Arial, sans-serif" font-weight="900" font-size="12" fill="#E31837">Mahindra</text>
    </svg>`,

    hcl: `<svg viewBox="0 0 90 40" width="46" height="26">
        <rect width="90" height="40" rx="6" fill="#005A9C"/>
        <text x="45" y="27" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">HCL</text>
    </svg>`,

    ibm: `<svg viewBox="0 0 90 44" width="46" height="26">
        <text x="45" y="33" font-family="'Courier New', monospace, sans-serif" font-weight="900" font-size="34" fill="#054ADA" text-anchor="middle" letter-spacing="3">IBM</text>
    </svg>`,

    deloitte: `<svg viewBox="0 0 100 36" width="50" height="24">
        <text x="4" y="25" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="#111827">Deloitte</text>
        <circle cx="86" cy="23" r="3.5" fill="#86BC25"/>
    </svg>`,

    flipkart: `<svg viewBox="0 0 90 40" width="48" height="26">
        <rect width="90" height="40" rx="8" fill="#2874F0"/>
        <text x="45" y="26" font-family="Arial, sans-serif" font-weight="bold" font-size="15" fill="#FFE500" text-anchor="middle" font-style="italic">Flipkart</text>
    </svg>`,

    walmart: `<svg viewBox="0 0 100 40" width="50" height="26">
        <circle cx="16" cy="20" r="4" fill="#FFC220"/>
        <rect x="14" y="4" width="4" height="8" rx="2" fill="#FFC220"/>
        <rect x="14" y="28" width="4" height="8" rx="2" fill="#FFC220"/>
        <rect x="3" y="14" width="8" height="4" rx="2" transform="rotate(30 7 16)" fill="#FFC220"/>
        <rect x="21" y="22" width="8" height="4" rx="2" transform="rotate(30 25 24)" fill="#FFC220"/>
        <rect x="3" y="22" width="8" height="4" rx="2" transform="rotate(-30 7 24)" fill="#FFC220"/>
        <rect x="21" y="14" width="8" height="4" rx="2" transform="rotate(-30 25 16)" fill="#FFC220"/>
        <text x="35" y="26" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#0071CE">Walmart</text>
    </svg>`,

    meesho: `<svg viewBox="0 0 90 40" width="48" height="26">
        <rect width="90" height="40" rx="8" fill="#F43397"/>
        <text x="45" y="26" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF" text-anchor="middle">meesho</text>
    </svg>`,

    zoho: `<svg viewBox="0 0 80 40" width="44" height="26">
        <rect x="4" y="8" width="16" height="24" rx="3" fill="#E42528"/>
        <rect x="22" y="8" width="16" height="24" rx="3" fill="#228848"/>
        <rect x="40" y="8" width="16" height="24" rx="3" fill="#235FA8"/>
        <rect x="58" y="8" width="16" height="24" rx="3" fill="#F7A81B"/>
        <text x="12" y="25" font-family="Arial, sans-serif" font-weight="900" font-size="13" fill="#FFF" text-anchor="middle">Z</text>
        <text x="30" y="25" font-family="Arial, sans-serif" font-weight="900" font-size="13" fill="#FFF" text-anchor="middle">O</text>
        <text x="48" y="25" font-family="Arial, sans-serif" font-weight="900" font-size="13" fill="#FFF" text-anchor="middle">H</text>
        <text x="66" y="25" font-family="Arial, sans-serif" font-weight="900" font-size="13" fill="#FFF" text-anchor="middle">O</text>
    </svg>`
};

const PREPFORGE_DATA = {
    companyLogos: COMPANY_LOGOS,

    // Current Student Profile
    student: {
        name: "Lokesh",
        fullName: "Lokesh Kumar",
        role: "Student",
        avatar: "LK",
        college: "College of Engineering & Technology",
        branch: "Computer Science & Engineering",
        graduationYear: 2026,
        cgpa: 8.42,
        placementReadiness: 72,
        readinessChange: "+8% from last week",
        testsTaken: 12,
        testsChange: "+2 this week",
        studyHours: 28,
        studyHoursChange: "+6h this week",
        streakDays: 7,
        streakMsg: "Keep going! 🔥",
        sectionScores: {
            aptitude: 78,
            reasoning: 64,
            verbal: 82,
            coding: 71,
            sql: 58,
            dbms: 69
        },
        weakTopics: [
            { topic: "Probability & Permutations", domain: "Aptitude", accuracy: "42%", recommendedHours: "2h 30m" },
            { topic: "SQL Joins & Group By", domain: "SQL", accuracy: "48%", recommendedHours: "2h 15m" },
            { topic: "Syllogisms & Logical Deductions", domain: "Reasoning", accuracy: "52%", recommendedHours: "1h 45m" },
            { topic: "Graph Algorithms & BFS/DFS", domain: "Coding / DSA", accuracy: "54%", recommendedHours: "3h 00m" }
        ],
        strongTopics: [
            { topic: "Reading Comprehension", domain: "Verbal", accuracy: "94%" },
            { topic: "Arrays & Strings", domain: "Coding / DSA", accuracy: "88%" },
            { topic: "Percentages & Profit-Loss", domain: "Aptitude", accuracy: "85%" },
            { topic: "Relational Algebra & Keys", domain: "DBMS", accuracy: "82%" }
        ],
        recentTests: [
            { id: "test-rec-1", name: "TCS NQT Diagnostic Test 1", date: "Yesterday, 4:30 PM", score: "82/100", accuracy: "86%", status: "Cleared", percentile: "91st" },
            { id: "test-rec-2", name: "Core Java & DSA Speed Test", date: "Sep 28, 2026", score: "74/100", accuracy: "79%", status: "Cleared", percentile: "84th" },
            { id: "test-rec-3", name: "SQL & Relational DB Assessment", date: "Sep 24, 2026", score: "58/100", accuracy: "62%", status: "Needs Practice", percentile: "68th" },
            { id: "test-rec-4", name: "General Placement Mock Series #2", date: "Sep 20, 2026", score: "80/100", accuracy: "84%", status: "Cleared", percentile: "89th" }
        ]
    },

    // 17 Real College Placement Recruiting Companies
    companies: [
        {
            id: "tcs",
            name: "TCS",
            fullName: "Tata Consultancy Services",
            type: "Service Based",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.0+ CGPA",
            branchReq: "All Engineering Branches, MCA, M.Sc",
            backlogs: "Max 1 active backlog permitted at test time",
            packageRange: "₹3.6 LPA (Ninja) - ₹7.2 LPA (Digital) - ₹9.0 LPA (Prime)",
            roles: ["Graduate Engineer Trainee", "Systems Engineer (Ninja)", "Digital Specialist", "Prime Software Developer"],
            intakePeriod: "August - November (Phase 1) & Spring Off-Campus",
            hiringProcess: [
                { step: 1, title: "TCS NQT Assessment", desc: "National Qualifier Test evaluating Cognitive (Aptitude, Reasoning, Verbal) and Technical (Coding, DSA, CS concepts)." },
                { step: 2, title: "Technical Interview", desc: "Deep dive into OOPs, DBMS, SQL, Project Architecture, Data Structures, and basic live coding." },
                { step: 3, title: "Managerial Interview", desc: "Scenario-based problem solving, situational leadership, and team collaboration assessment." },
                { step: 4, title: "HR Interview", desc: "Verification of documents, willingness to relocate, shift flexibility, and cultural alignment." }
            ],
            testPattern: [
                { section: "Numerical Ability", questions: 20, time: "25 mins" },
                { section: "Reasoning Ability", questions: 20, time: "25 mins" },
                { section: "Verbal Ability", questions: 25, time: "25 mins" },
                { section: "Advanced Coding (2 Problems)", questions: 2, time: "45 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding", "SQL", "DBMS"],
            readiness: 85,
            description: "India's largest IT multinational recruiter. Known for TCS NQT which bifurcates candidates into Ninja, Digital, and Prime bands based on assessment performance.",
            syllabusFocus: "Strong emphasis on numerical aptitude, speed reasoning, clean coding with standard I/O in C/C++/Java/Python, and relational queries."
        },
        {
            id: "infosys",
            name: "Infosys",
            fullName: "Infosys Limited",
            type: "Service Based",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.0+ CGPA (60% throughout 10th/12th/Grad)",
            branchReq: "BE/B.Tech (All Streams), MCA, M.Tech",
            backlogs: "No active backlogs allowed at registration",
            packageRange: "₹3.6 LPA (SE) - ₹6.5 LPA (DSE) - ₹9.5 LPA (Specialist Programmer)",
            roles: ["Systems Engineer (SE)", "Digital Specialist Engineer (DSE)", "Specialist Programmer (SP)"],
            intakePeriod: "September - December",
            hiringProcess: [
                { step: 1, title: "Online Assessment", desc: "Rigorous test comprising Reasoning Ability, Technical Mathematical Ability, Verbal Ability, Pseudocode, and Puzzle Solving." },
                { step: 2, title: "Technical + HR Interview", desc: "Combined or split rounds testing fundamentals in Java/Python, database queries, resume projects, and communication." }
            ],
            testPattern: [
                { section: "Reasoning Ability", questions: 15, time: "25 mins" },
                { section: "Technical Mathematical Ability", questions: 10, time: "35 mins" },
                { section: "Verbal Ability", questions: 20, time: "20 mins" },
                { section: "Pseudocode & DSA", questions: 5, time: "10 mins" },
                { section: "Puzzle Solving / Critical Thinking", questions: 4, time: "10 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding", "DBMS"],
            readiness: 79,
            description: "Global consulting and technology services leader. Its assessment is noted for high-difficulty technical aptitude and cryptarithmetic/critical reasoning questions.",
            syllabusFocus: "Deep focus on Cryptarithmetic, Data Sufficiency, Pseudocode tracing, Verbal grammar, and algorithmic problem solving."
        },
        {
            id: "accenture",
            name: "Accenture",
            fullName: "Accenture Solutions",
            type: "Service Based",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.5+ CGPA (No current backlogs)",
            branchReq: "All Engineering Branches, MCA, M.Sc CS/IT",
            backlogs: "Zero active backlogs at time of recruitment",
            packageRange: "₹4.5 LPA (ASE) - ₹6.5 LPA (FSE)",
            roles: ["Associate Software Engineer (ASE)", "Full Stack Engineer (FSE)", "Data Analyst"],
            intakePeriod: "August - October",
            hiringProcess: [
                { step: 1, title: "Cognitive & Technical Assessment", desc: "Critical thinking, abstract reasoning, technical troubleshooting, cloud/network fundamentals, and MS Office basics." },
                { step: 2, title: "Coding Assessment", desc: "Mandatory qualification round with 2 coding questions (Strings, Arrays, Maths)." },
                { step: 3, title: "Communication Assessment", desc: "Automated spoken English test evaluating pronunciation, fluency, vocabulary, and listening comprehension." },
                { step: 4, title: "Interview Round", desc: "Technical discussion based on capstone projects and situational HR questions." }
            ],
            testPattern: [
                { section: "Cognitive Ability (English, Critical, Abstract)", questions: 50, time: "50 mins" },
                { section: "Technical Assessment (Common Apps, Pseudocode, Cloud/Security)", questions: 40, time: "40 mins" },
                { section: "Coding Round", questions: 2, time: "45 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding", "DBMS"],
            readiness: 81,
            description: "Leading professional services firm offering diverse digital transformation projects. Assessment includes an AI-monitored automated communication assessment.",
            syllabusFocus: "Pseudocode analysis, abstract reasoning matrices, network fundamentals, string manipulation, and spoken English mastery."
        },
        {
            id: "amazon",
            name: "Amazon",
            fullName: "Amazon Development Centre",
            type: "Product Based",
            badgeColor: "blue",
            difficulty: "High",
            cgpaReq: "6.5+ / 7.0+ CGPA",
            branchReq: "CSE, IT, ECE, EEE, Math & Computing",
            backlogs: "Zero backlogs allowed",
            packageRange: "₹28 LPA - ₹45 LPA (CTC including Base, Stocks & Bonus)",
            roles: ["Software Development Engineer I (SDE-1)", "Support Engineer", "Data Engineer"],
            intakePeriod: "July - November (Campus & Off-Campus Drives)",
            hiringProcess: [
                { step: 1, title: "Online Assessment (OA1 & OA2)", desc: "2 algorithmic coding questions (LeetCode Medium-Hard) + Work Style Assessment / Leadership Principles." },
                { step: 2, title: "Technical Round 1", desc: "Data Structures & Algorithms: Trees, Graphs, Dynamic Programming, Heaps, and Space/Time Complexity optimization." },
                { step: 3, title: "Technical Round 2", desc: "Advanced DSA, Object-Oriented Design (LLD), Multithreading, and Database Design." },
                { step: 4, title: "Bar Raiser Round", desc: "Deep architectural questioning, edge-case analysis, and intensive behavioral questions mapped to Amazon's 16 Leadership Principles." }
            ],
            testPattern: [
                { section: "Coding Assessment (DSA Medium/Hard)", questions: 2, time: "70 mins" },
                { section: "Work Simulation & Logic", questions: 15, time: "20 mins" },
                { section: "Amazon Leadership Principles Survey", questions: 35, time: "20 mins" }
            ],
            topics: ["Coding", "SQL", "DBMS", "Reasoning"],
            readiness: 62,
            description: "World's foremost e-commerce and cloud computing giant. Campus hiring is exceptionally rigorous with intense focus on DSA optimality and Leadership Principles.",
            syllabusFocus: "Trees, Graphs, DP, HashMaps, Two Pointers, Big-O analysis, Low Level Design, SQL transactions, and STAR behavioral answers."
        },
        {
            id: "microsoft",
            name: "Microsoft",
            fullName: "Microsoft Corporation India",
            type: "Product Based",
            badgeColor: "blue",
            difficulty: "High",
            cgpaReq: "7.0+ CGPA",
            branchReq: "CSE, IT, ECE, Circuit Branches",
            backlogs: "No standing backlogs",
            packageRange: "₹42 LPA - ₹51 LPA (Base + Stocks + Sign-on)",
            roles: ["Software Engineer (SWE)", "Product Manager (Intern)", "Support Engineer"],
            intakePeriod: "July - October",
            hiringProcess: [
                { step: 1, title: "Online Coding Test", desc: "3 algorithmic coding questions on Codility or HackerRank testing string parsing, bit manipulation, and graphs." },
                { step: 2, title: "Technical Round 1", desc: "Data structures, pointer arithmetic, system fundamentals, and memory management." },
                { step: 3, title: "Technical Round 2", desc: "Scalable design, caching strategies, recursion, dynamic programming, and clean modular code." },
                { step: 4, title: "Partner/HR Round", desc: "Engineering mindset, passion for technology, ethical dilemma handling, and cultural fitment." }
            ],
            testPattern: [
                { section: "Algorithmic Coding", questions: 3, time: "90 mins" },
                { section: "CS Core Concepts (OS, Networks, DBMS)", questions: 15, time: "20 mins" }
            ],
            topics: ["Coding", "DBMS", "Reasoning"],
            readiness: 58,
            description: "Pioneer in global computing, cloud, and enterprise software. Focuses on robust, bug-free code, optimal memory utilization, and solid CS fundamentals.",
            syllabusFocus: "Linked Lists, Binary Trees, Recursion, Bitwise operators, Thread safety, SQL indexing, and clean OOP architecture."
        },
        {
            id: "google",
            name: "Google",
            fullName: "Google India",
            type: "Product Based",
            badgeColor: "blue",
            difficulty: "High",
            cgpaReq: "No strict CGPA cutoff (7.0+ recommended)",
            branchReq: "All Branches with strong computer science mastery",
            backlogs: "Clean academic record",
            packageRange: "₹35 LPA - ₹55 LPA (Total Compensation)",
            roles: ["Software Engineer (SWE Fresher)", "Application Engineer", "Site Reliability Engineer"],
            intakePeriod: "August - December",
            hiringProcess: [
                { step: 1, title: "Online Challenge / Screening", desc: "2 complex algorithmic challenges requiring optimal time & space complexity." },
                { step: 2, title: "Technical Round 1 & 2", desc: "Pure algorithmic problem solving, graph traversals, topological sort, memoization, and live Google Doc coding." },
                { step: 3, title: "Technical Round 3", desc: "Advanced data structures, edge-case proofing, invariance verification, and code clarity." },
                { step: 4, title: "Googliness & Leadership", desc: "Collaborative mindset, intellectual humility, navigating ambiguity, and ethical decision-making." }
            ],
            testPattern: [
                { section: "Data Structures & Advanced Algorithms", questions: 2, time: "60 mins" }
            ],
            topics: ["Coding", "Reasoning"],
            readiness: 54,
            description: "World-leading technology conglomerate. Known for zero tolerance for brute-force solutions and intense emphasis on algorithmic efficiency and clean communication.",
            syllabusFocus: "Dynamic Programming, Graph Theory, Trie, Segment Trees, Disjoint Set Union, Asymptotic Analysis, and clean verbal problem decomposition."
        },
        {
            id: "wipro",
            name: "Wipro",
            fullName: "Wipro Limited",
            type: "Service Based",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.0+ CGPA (60% in 10th and 12th)",
            branchReq: "All Engineering Branches, MCA",
            backlogs: "Max 1 backlog allowed at test time (cleared prior to joining)",
            packageRange: "₹3.5 LPA (Elite) - ₹6.5 LPA (Turbo)",
            roles: ["Project Engineer (Elite)", "Turbo Developer"],
            intakePeriod: "September - January",
            hiringProcess: [
                { step: 1, title: "Elite National Talent Hunt (NLTH)", desc: "Aptitude, Reasoning, Verbal, Written Communication, and 2 Coding questions." },
                { step: 2, title: "Technical Interview", desc: "Basic programming in C/Java/Python, DBMS queries, basic networking, and academic projects." },
                { step: 3, title: "HR Interview", desc: "Background check, flexibility with location and project allocation." }
            ],
            testPattern: [
                { section: "Quantitative Aptitude", questions: 16, time: "16 mins" },
                { section: "Logical Reasoning", questions: 14, time: "14 mins" },
                { section: "Verbal Ability", questions: 18, time: "18 mins" },
                { section: "Written Communication (Essay)", questions: 1, time: "20 mins" },
                { section: "Coding Round", questions: 2, time: "60 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding", "DBMS"],
            readiness: 83,
            description: "Major multinational IT consulting corporation. The NLTH assessment tests rapid calculation, essay writing quality, and practical programming skills.",
            syllabusFocus: "Time & Work, Syllogisms, Sentence Correction, Array rotations, Basic string manipulation, and Relational queries."
        },
        {
            id: "cognizant",
            name: "Cognizant",
            fullName: "Cognizant Technology Solutions",
            type: "Service Based",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.0+ CGPA / 60% with no standing arrears",
            branchReq: "BE / B.Tech / ME / M.Tech / MCA",
            backlogs: "Zero active backlogs",
            packageRange: "₹4.0 LPA (GenC) - ₹6.75 LPA (GenC Elevate) - ₹9.0 LPA (GenC Next)",
            roles: ["GenC Trainee", "GenC Elevate Specialist", "GenC Next Developer"],
            intakePeriod: "August - November",
            hiringProcess: [
                { step: 1, title: "GenC Screening Test", desc: "Quantitative, Logical, Verbal, and Automata Fix (code debugging) / Coding." },
                { step: 2, title: "Technical Evaluation", desc: "Evaluation of core CS concepts, DBMS, SQL joins, normalization, and project code walkthrough." },
                { step: 3, title: "HR Round", desc: "Standard behavioral evaluation, document verification, and onboarding guidelines." }
            ],
            testPattern: [
                { section: "Quantitative Ability", questions: 25, time: "35 mins" },
                { section: "Logical Reasoning", questions: 20, time: "25 mins" },
                { section: "Verbal English", questions: 20, time: "20 mins" },
                { section: "Code Debugging / Automata", questions: 7, time: "20 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding", "SQL"],
            readiness: 80,
            description: "Top multinational IT and business consulting firm. Features tier-based hiring (GenC, Elevate, Next) where higher test performance yields higher compensation bands.",
            syllabusFocus: "Code debugging, syntactic corrections, Data Interpretation, Blood Relations, and SQL nested queries."
        },
        {
            id: "capgemini",
            name: "Capgemini",
            fullName: "Capgemini SE India",
            type: "Service Based",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.0+ or 60% through academics",
            branchReq: "All Engineering Branches, MCA",
            backlogs: "No active backlogs",
            packageRange: "₹4.25 LPA - ₹7.5 LPA",
            roles: ["Analyst", "Senior Analyst", "Software Associate"],
            intakePeriod: "September - December",
            hiringProcess: [
                { step: 1, title: "Technical Assessment", desc: "Pseudocode analysis, English communication, and Game-based cognitive challenges." },
                { step: 2, title: "Coding Round", desc: "Competency in foundational DSA algorithms and string parsing." },
                { step: 3, title: "Spoken English Assessment", desc: "Automated voice and sentence repeat test." },
                { step: 4, title: "Technical + HR Interview", desc: "Comprehensive evaluation of technical projects and teamwork." }
            ],
            testPattern: [
                { section: "Pseudocode Tracing", questions: 30, time: "30 mins" },
                { section: "English Communication", questions: 30, time: "30 mins" },
                { section: "Game-Based Cognitive Test", questions: 4, time: "20 mins" },
                { section: "Coding Round", questions: 2, time: "45 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding"],
            readiness: 77,
            description: "French multinational information technology services provider. Its game-based aptitude evaluates inductive reasoning, spatial memory, and grid puzzles.",
            syllabusFocus: "Bitwise logic in pseudocode, recursion tracing, vocabulary antonyms/synonyms, and mental arithmetic."
        },
        {
            id: "tech-mahindra",
            name: "Tech Mahindra",
            fullName: "Tech Mahindra Limited",
            type: "Service Based",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.0+ CGPA / 60%",
            branchReq: "All Engineering Branches, MCA",
            backlogs: "Max 1 backlog allowed",
            packageRange: "₹3.65 LPA - ₹5.5 LPA",
            roles: ["Associate Software Engineer", "Network Engineer Trainee"],
            intakePeriod: "October - February",
            hiringProcess: [
                { step: 1, title: "Round 1 Online Test", desc: "English comprehension, quantitative mathematics, logical analytical skills." },
                { step: 2, title: "Round 2 Technical Test", desc: "Computer science fundamentals, software engineering, OS, and 2 coding problems." },
                { step: 3, title: "Conversational English Test", desc: "Interactive phone/mic test evaluating speech clarity and grammar." },
                { step: 4, title: "Technical & HR Interview", desc: "Academic projects, core language concepts (C/C++/Java), and communication." }
            ],
            testPattern: [
                { section: "English & Verbal", questions: 30, time: "25 mins" },
                { section: "Quantitative & Logic", questions: 45, time: "50 mins" },
                { section: "CS Core & Coding", questions: 22, time: "45 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding", "DBMS"],
            readiness: 76,
            description: "Leading digital transformation and network consulting enterprise under the Mahindra Group. Consistent campus mass recruiter across colleges.",
            syllabusFocus: "Speed arithmetic, series completion, grammar mechanics, relational joins, and basic loop constructs."
        },
        {
            id: "hcl",
            name: "HCL Technologies",
            fullName: "HCLTech",
            type: "Service Based",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.5+ CGPA",
            branchReq: "BE, B.Tech, MCA, M.Sc CS/IT",
            backlogs: "Zero standing arrears",
            packageRange: "₹3.8 LPA - ₹6.0 LPA",
            roles: ["Graduate Engineer Trainee (GET)", "Software Engineer Trainee"],
            intakePeriod: "October - March",
            hiringProcess: [
                { step: 1, title: "Aptitude Assessment", desc: "General mental ability, quantitative problem solving, and verbal reasoning." },
                { step: 2, title: "Technical Test", desc: "Programming fundamentals, basic SQL, data structures, and debugging." },
                { step: 3, title: "Technical Interview", desc: "Deep questions on final year project, database indexing, and OOP principles." },
                { step: 4, title: "HR Discussion", desc: "Relocation, career expectations, and shift flexibility." }
            ],
            testPattern: [
                { section: "Quantitative Aptitude", questions: 20, time: "20 mins" },
                { section: "Logical Ability", questions: 20, time: "20 mins" },
                { section: "Verbal Ability", questions: 20, time: "20 mins" },
                { section: "Technical Programming", questions: 15, time: "30 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding", "SQL"],
            readiness: 74,
            description: "Global technological powerhouse providing next-generation engineering and cloud solutions. Known for structured, steady interview rounds.",
            syllabusFocus: "Algebraic simplification, distance & time, seating arrangements, and SQL queries."
        },
        {
            id: "ibm",
            name: "IBM",
            fullName: "IBM India Private Limited",
            type: "Product & Services",
            badgeColor: "blue",
            difficulty: "Medium",
            cgpaReq: "6.5+ CGPA",
            branchReq: "CSE, IT, ECE, EEE, Mechanical with coding proficiency",
            backlogs: "No active backlogs allowed",
            packageRange: "₹4.5 LPA - ₹11.5 LPA (Entry to Specialist)",
            roles: ["Associate System Engineer (ASE)", "Application Developer", "Data Scientist Trainee"],
            intakePeriod: "August - December",
            hiringProcess: [
                { step: 1, title: "Cognitive Ability (Cognify)", desc: "Interactive game-based assessment measuring problem-solving, numerical reasoning, and working memory." },
                { step: 2, title: "Learning Agility Assessment", desc: "Personality and behavioral psychometric assessment." },
                { step: 3, title: "Coding / Technical Test", desc: "2 programming questions evaluating DSA, loops, and edge cases (HackerRank)." },
                { step: 4, title: "Technical & Behavioral Interview", desc: "Project defense, OS concepts, database transactions (ACID), and cloud architecture." }
            ],
            testPattern: [
                { section: "Cognify Games (5 Mini Games)", questions: 5, time: "30 mins" },
                { section: "English Language Test", questions: 15, time: "10 mins" },
                { section: "Coding Challenge", questions: 2, time: "60 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Coding", "SQL", "DBMS"],
            readiness: 70,
            description: "Iconic enterprise computing, AI, and hybrid cloud pioneer. Uses modern game-based cognitive scoring instead of traditional aptitude questions.",
            syllabusFocus: "Spatial reasoning, grid puzzles, Java/Python programming, ACID properties in DBMS, and normalization."
        },
        {
            id: "deloitte",
            name: "Deloitte",
            fullName: "Deloitte USI (Offices of the US)",
            type: "Consulting & Services",
            badgeColor: "purple",
            difficulty: "Medium",
            cgpaReq: "6.5+ CGPA (60% or above in 10th and 12th)",
            branchReq: "All Engineering Branches, MCA",
            backlogs: "Zero backlogs allowed",
            packageRange: "₹4.5 LPA - ₹8.0 LPA",
            roles: ["Analyst - Advisory", "Technology Consulting Analyst"],
            intakePeriod: "August - October",
            hiringProcess: [
                { step: 1, title: "Deloitte Online Test (AON / CoCubes)", desc: "Quantitative ability, logical reasoning, verbal comprehension, and computer fundamentals." },
                { step: 2, title: "Coding Assessment", desc: "1-2 practical coding questions." },
                { step: 3, title: "Technical Interview", desc: "Object-oriented design, SQL queries, DBMS architecture, real-world case scenarios." },
                { step: 4, title: "Leadership & HR Interview", desc: "Case discussion, behavioral questions, client communication simulation." }
            ],
            testPattern: [
                { section: "Quantitative Ability", questions: 16, time: "20 mins" },
                { section: "Logical Reasoning", questions: 16, time: "20 mins" },
                { section: "Verbal Ability", questions: 16, time: "20 mins" },
                { section: "Computer Fundamentals", questions: 25, time: "25 mins" },
                { section: "Coding Round", questions: 2, time: "30 mins" }
            ],
            topics: ["Aptitude", "Reasoning", "Verbal", "Coding", "SQL", "DBMS"],
            readiness: 75,
            description: "Global consulting and technology audit leader. Demands polished presentation skills, sharp business logic, and strong SQL/DBMS clarity.",
            syllabusFocus: "P&L, Probability, Syllogisms, Reading comprehension, SQL GROUP BY / HAVING, and OOP principles."
        },
        {
            id: "flipkart",
            name: "Flipkart",
            fullName: "Flipkart Internet Private Limited",
            type: "Product Based",
            badgeColor: "blue",
            difficulty: "High",
            cgpaReq: "7.0+ CGPA",
            branchReq: "CSE, IT, ECE, Data Science",
            backlogs: "Zero active backlogs",
            packageRange: "₹26 LPA - ₹32 LPA",
            roles: ["Software Development Engineer I (SDE-1)", "Associate Product Manager"],
            intakePeriod: "July - September (Campus Drives & GRiD Competition)",
            hiringProcess: [
                { step: 1, title: "Online Coding Test", desc: "3 algorithmic challenges on HackerEarth testing DP, graphs, and bit manipulation." },
                { step: 2, title: "Machine Coding Round", desc: "Design and implement a working object-oriented system (e.g. Splitwise, Parking Lot, Cab Booking) in 90-120 minutes with clean code and tests." },
                { step: 3, title: "Data Structures & Algorithms Round", desc: "Deep algorithm optimization, trees, graphs, and binary search on answers." },
                { step: 4, title: "Hiring Manager & Cultural Fit", desc: "System scalability, past project architecture, ownership, and engineering mindset." }
            ],
            testPattern: [
                { section: "Online Algorithmic Coding", questions: 3, time: "90 mins" },
                { section: "Machine Coding Round", questions: 1, time: "90 mins" }
            ],
            topics: ["Coding", "DBMS", "SQL", "Reasoning"],
            readiness: 60,
            description: "India's premier e-commerce unicorn. Renowned for its distinctive 'Machine Coding Round' where students must write clean, runnable, extensible OOP code.",
            syllabusFocus: "Object Oriented Design (Design Patterns, SOLID), Graphs, Dynamic Programming, Database indexing, and Concurrency basics."
        },
        {
            id: "walmart",
            name: "Walmart",
            fullName: "Walmart Global Tech India",
            type: "Product Based",
            badgeColor: "blue",
            difficulty: "High",
            cgpaReq: "7.5+ CGPA",
            branchReq: "CSE, IT, ECE, Mathematics & Computing",
            backlogs: "Zero backlogs allowed",
            packageRange: "₹24 LPA - ₹30 LPA",
            roles: ["Associate Software Engineer", "Data Engineer"],
            intakePeriod: "July - October (Campus & CodeHers Contest)",
            hiringProcess: [
                { step: 1, title: "Online Coding Assessment", desc: "MCQs on OS, DBMS, Networks + 2 LeetCode Medium DSA problems." },
                { step: 2, title: "Technical Round 1", desc: "Data structures, HashMaps, Trees, Graphs, Trie, and time/space complexity proofing." },
                { step: 3, title: "Technical Round 2", desc: "System design basics, database normalization, concurrency, and OOP modeling." },
                { step: 4, title: "Behavioral / Fitment Round", desc: "Leadership, communication, project retrospectives, and culture fit." }
            ],
            testPattern: [
                { section: "Computer Science MCQs", questions: 20, time: "20 mins" },
                { section: "Coding Problems", questions: 2, time: "60 mins" }
            ],
            topics: ["Coding", "DBMS", "SQL", "Reasoning"],
            readiness: 64,
            description: "Technology division of the world's largest retail enterprise. Evaluates distributed systems intuition, solid DSA foundations, and practical programming.",
            syllabusFocus: "Sliding Window, Heaps, Graph traversals, Transaction isolation levels, and Normalization up to BCNF."
        },
        {
            id: "meesho",
            name: "Meesho",
            fullName: "Meesho (Fashnear Technologies)",
            type: "Product Based",
            badgeColor: "blue",
            difficulty: "High",
            cgpaReq: "7.0+ CGPA",
            branchReq: "Computer Science, IT, related branches",
            backlogs: "Zero active backlogs",
            packageRange: "₹25 LPA - ₹35 LPA",
            roles: ["Software Development Engineer 1 (Backend / Frontend / Mobile)"],
            intakePeriod: "August - November",
            hiringProcess: [
                { step: 1, title: "Online Coding Round", desc: "3 algorithmic coding questions on strings, dynamic programming, and graphs." },
                { step: 2, title: "Data Structures & Algorithms Interview", desc: "Live coding with heavy focus on edge cases, space optimality, and clean code." },
                { step: 3, title: "System Design & Project Round", desc: "Low level design of scalable modules, REST APIs, caching, and database schemas." },
                { step: 4, title: "Cultural Fit & Engineering Culture", desc: "User-first mentality, problem-solving passion, and fast execution." }
            ],
            testPattern: [
                { section: "DSA Coding Challenge", questions: 3, time: "75 mins" }
            ],
            topics: ["Coding", "SQL", "DBMS", "Reasoning"],
            readiness: 59,
            description: "Fast-growing high-scale social e-commerce leader in India. Heavy emphasis on rapid problem-solving, clean code, and database schema efficiency.",
            syllabusFocus: "Two Pointers, Greedy algorithms, Dynamic Programming, SQL aggregation, and API design principles."
        },
        {
            id: "zoho",
            name: "Zoho",
            fullName: "Zoho Corporation",
            type: "Product Based",
            badgeColor: "blue",
            difficulty: "Medium",
            cgpaReq: "No minimum CGPA cutoff (Skill-first hiring)",
            branchReq: "Any Degree / Any Branch (Open to all fresher engineers)",
            backlogs: "Active backlogs allowed (evaluated purely on coding ability)",
            packageRange: "₹6.0 LPA - ₹10.0 LPA",
            roles: ["Software Developer", "Technical Support Engineer", "UI/UX Developer"],
            intakePeriod: "Year-round & On-Campus Drives (September - February)",
            hiringProcess: [
                { step: 1, title: "Basic Aptitude & C Programming", desc: "C/C++ output prediction, pointers, loops, recursion, and quantitative aptitude." },
                { step: 2, title: "Basic Programming Round", desc: "5-6 mathematical, matrix, string, and pattern printing questions solved without built-in library functions." },
                { step: 3, title: "Advanced Programming Round", desc: "Developing a full console-based application (e.g. Railway Ticket Reservation, ATM, Maze Solver, Snake Game) in 2-3 hours." },
                { step: 4, title: "Technical & HR Interview", desc: "Code review of the advanced application, memory management, and behavioral alignment." }
            ],
            testPattern: [
                { section: "General Aptitude & C Logic", questions: 25, time: "60 mins" },
                { section: "Basic Coding Round", questions: 5, time: "90 mins" },
                { section: "Advanced Console Application Round", questions: 1, time: "180 mins" }
            ],
            topics: ["Coding", "Aptitude", "Reasoning", "DBMS"],
            readiness: 82,
            description: "India's premier bootstrapped SaaS giant. Disregards branch and CGPA cutoffs completely to test raw logic, pointer depth, and autonomous application development.",
            syllabusFocus: "Pointers in C/C++, Array transformations without extra memory, Pattern logic, String parsing from scratch, and Modular design."
        }
    ],

    // 6 Core Training Tracks (Aptitude, Reasoning, Verbal, Coding / DSA, SQL, DBMS)
    trainingTracks: [
        {
            id: "aptitude",
            name: "Aptitude",
            fullName: "Quantitative Aptitude",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
            accentColor: "#3B82F6",
            bgColor: "#EFF6FF",
            progress: 68,
            totalTopics: 10,
            completedTopics: 7,
            estimatedHours: "24h Total",
            difficulty: "Medium",
            summary: "Master arithmetic, modern math, algebra, and rapid calculation shortcuts asked in 95%+ of placement screening tests.",
            topics: [
                { id: "apt-1", name: "Number Systems & Divisibility", completed: true, questions: 45, difficulty: "Easy" },
                { id: "apt-2", name: "Percentages, Profit & Loss", completed: true, questions: 50, difficulty: "Easy" },
                { id: "apt-3", name: "Time, Speed & Distance (Trains, Boats)", completed: true, questions: 40, difficulty: "Medium" },
                { id: "apt-4", name: "Time & Work, Pipes & Cisterns", completed: true, questions: 35, difficulty: "Medium" },
                { id: "apt-5", name: "Ratios, Proportions & Mixtures", completed: true, questions: 30, difficulty: "Medium" },
                { id: "apt-6", name: "Simple & Compound Interest", completed: true, questions: 25, difficulty: "Medium" },
                { id: "apt-7", name: "Permutations & Combinations", completed: false, questions: 40, difficulty: "Hard" },
                { id: "apt-8", name: "Probability & Bayes' Theorem", completed: false, questions: 35, difficulty: "Hard" },
                { id: "apt-9", name: "Data Interpretation (Pie, Bar, Tables)", completed: true, questions: 60, difficulty: "Medium" },
                { id: "apt-10", name: "Logarithms & Progressions (AP/GP)", completed: false, questions: 20, difficulty: "Medium" }
            ]
        },
        {
            id: "reasoning",
            name: "Reasoning",
            fullName: "Logical & Analytical Reasoning",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.06 6.24 5 7.42V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.58c2.94-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8z"></path></svg>`,
            accentColor: "#10B981",
            bgColor: "#ECFDF5",
            progress: 64,
            totalTopics: 8,
            completedTopics: 5,
            estimatedHours: "20h Total",
            difficulty: "Medium",
            summary: "Develop sharp analytical reasoning, seating arrangements, deductions, and pattern recognition essential for IT screening tests.",
            topics: [
                { id: "rea-1", name: "Coding-Decoding & Letter Series", completed: true, questions: 40, difficulty: "Easy" },
                { id: "rea-2", name: "Blood Relations & Family Trees", completed: true, questions: 35, difficulty: "Medium" },
                { id: "rea-3", name: "Direction Sense & Coordinate Logic", completed: true, questions: 30, difficulty: "Easy" },
                { id: "rea-4", name: "Linear & Circular Seating Arrangement", completed: true, questions: 45, difficulty: "Hard" },
                { id: "rea-5", name: "Syllogisms & Venn Diagrams", completed: false, questions: 50, difficulty: "Hard" },
                { id: "rea-6", name: "Data Sufficiency", completed: false, questions: 35, difficulty: "Hard" },
                { id: "rea-7", name: "Clocks, Calendars & Angles", completed: true, questions: 25, difficulty: "Medium" },
                { id: "rea-8", name: "Statement & Assumptions / Inferences", completed: false, questions: 30, difficulty: "Medium" }
            ]
        },
        {
            id: "verbal",
            name: "Verbal",
            fullName: "Verbal Ability & English Comprehension",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
            accentColor: "#F59E0B",
            bgColor: "#FEF3C7",
            progress: 82,
            totalTopics: 6,
            completedTopics: 5,
            estimatedHours: "18h Total",
            difficulty: "Easy",
            summary: "Enhance grammar, reading comprehension speed, sentence completion, and business vocabulary for screening tests and communication rounds.",
            topics: [
                { id: "ver-1", name: "Subject-Verb Agreement & Tenses", completed: true, questions: 50, difficulty: "Easy" },
                { id: "ver-2", name: "Sentence Correction & Spotting Errors", completed: true, questions: 60, difficulty: "Medium" },
                { id: "ver-3", name: "Reading Comprehension & Critical Passages", completed: true, questions: 40, difficulty: "Medium" },
                { id: "ver-4", name: "Para Jumbles & Sentence Ordering", completed: true, questions: 35, difficulty: "Medium" },
                { id: "ver-5", name: "Vocabulary: Synonyms, Antonyms, Analogies", completed: true, questions: 80, difficulty: "Medium" },
                { id: "ver-6", name: "Idioms, Phrases & Contextual Usage", completed: false, questions: 30, difficulty: "Medium" }
            ]
        },
        {
            id: "coding",
            name: "Coding / DSA",
            fullName: "Data Structures & Algorithms",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
            accentColor: "#8B5CF6",
            bgColor: "#F5F3FF",
            progress: 71,
            totalTopics: 9,
            completedTopics: 6,
            estimatedHours: "48h Total",
            difficulty: "Hard",
            summary: "Comprehensive algorithms and data structures curriculum targeting both service-based coding tests and product-based tech interviews.",
            topics: [
                { id: "dsa-1", name: "Time & Space Complexity (Big-O)", completed: true, questions: 25, difficulty: "Easy" },
                { id: "dsa-2", name: "Arrays: Two Pointers & Sliding Window", completed: true, questions: 45, difficulty: "Medium" },
                { id: "dsa-3", name: "Strings & Pattern Matching", completed: true, questions: 40, difficulty: "Medium" },
                { id: "dsa-4", name: "Linked Lists (Singly, Doubly, Fast & Slow)", completed: true, questions: 30, difficulty: "Medium" },
                { id: "dsa-5", name: "Stacks, Queues & Monotonic Deque", completed: true, questions: 35, difficulty: "Medium" },
                { id: "dsa-6", name: "Binary Trees & BST Traversals", completed: true, questions: 50, difficulty: "Hard" },
                { id: "dsa-7", name: "Recursion & Backtracking", completed: true, questions: 30, difficulty: "Hard" },
                { id: "dsa-8", name: "Dynamic Programming (1D & 2D)", completed: false, questions: 45, difficulty: "Hard" },
                { id: "dsa-9", name: "Graph Algorithms: BFS, DFS, Dijkstra", completed: false, questions: 40, difficulty: "Hard" }
            ]
        },
        {
            id: "sql",
            name: "SQL",
            fullName: "Structured Query Language",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
            accentColor: "#06B6D4",
            bgColor: "#ECFEFF",
            progress: 58,
            totalTopics: 6,
            completedTopics: 4,
            estimatedHours: "16h Total",
            difficulty: "Medium",
            summary: "Learn industry-standard SQL query writing from basic SELECT statements to advanced window functions, subqueries, and table joins.",
            topics: [
                { id: "sql-1", name: "SELECT, WHERE, ORDER BY & LIMIT", completed: true, questions: 30, difficulty: "Easy" },
                { id: "sql-2", name: "INNER, LEFT, RIGHT & FULL OUTER JOINS", completed: false, questions: 40, difficulty: "Medium" },
                { id: "sql-3", name: "Aggregate Functions, GROUP BY & HAVING", completed: true, questions: 35, difficulty: "Medium" },
                { id: "sql-4", name: "Correlated & Nested Subqueries", completed: false, questions: 30, difficulty: "Hard" },
                { id: "sql-5", name: "Window Functions (ROW_NUMBER, RANK, DENSE_RANK)", completed: false, questions: 25, difficulty: "Hard" },
                { id: "sql-6", name: "DDL & DML (CREATE, ALTER, INSERT, UPDATE, DELETE)", completed: true, questions: 20, difficulty: "Easy" }
            ]
        },
        {
            id: "dbms",
            name: "DBMS",
            fullName: "Database Management Systems",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
            accentColor: "#6366F1",
            bgColor: "#EEF2FF",
            progress: 69,
            totalTopics: 6,
            completedTopics: 4,
            estimatedHours: "18h Total",
            difficulty: "Medium",
            summary: "Master fundamental relational theory, ER diagrams, transaction ACID properties, indexing, and normalization for technical interviews.",
            topics: [
                { id: "dbms-1", name: "ER Models & Relational Schema Design", completed: true, questions: 25, difficulty: "Easy" },
                { id: "dbms-2", name: "Functional Dependencies & Normal Forms (1NF to BCNF)", completed: true, questions: 40, difficulty: "Medium" },
                { id: "dbms-3", name: "ACID Properties & Transaction States", completed: true, questions: 30, difficulty: "Medium" },
                { id: "dbms-4", name: "Concurrency Control: Locking & Timestamp Protocols", completed: false, questions: 25, difficulty: "Hard" },
                { id: "dbms-5", name: "Database Indexing (B-Trees, B+ Trees & Hashing)", completed: false, questions: 30, difficulty: "Hard" },
                { id: "dbms-6", name: "Deadlocks & Recovery Management", completed: true, questions: 20, difficulty: "Medium" }
            ]
        }
    ],

    // Training Topic Lessons with Theory & Worked Examples ("Teach the topic with small examples")
    topicLessons: {
        "apt-1": {
                "title": "Number Systems & Divisibility",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "In campus screening tests, Number Systems questions evaluate your numerical agility, ability to factorize rapidly, and proficiency in Modular Arithmetic. You must master unit digit cyclicity, remainder theorems (Euler's & Fermat's theorems), number of factors, and divisibility rules (especially for 7, 8, 9, 11, and 13). Questions rarely ask for direct division; instead, they test unknown digit deduction (e.g. 738A6A divisible by 11) and remainder patterns of large powers.",
                "concept": "The governing equation of numbers is Dividend = (Divisor × Quotient) + Remainder. Cyclicity refers to the periodicity of the unit digit when a base is raised to successive integer powers. The cyclicity of 2, 3, 7, 8 is 4; for 4 and 9 it is 2; for 0, 1, 5, 6 it is 1. To find the unit digit of N^P, compute P mod 4 (if remainder is 0, use power 4). Divisibility by 11 requires: |(Sum of digits at odd positions) - (Sum of digits at even positions)| = 0 or a multiple of 11.",
                "formulas": [
                        "Dividend = (Divisor × Quotient) + Remainder (0 ≤ Remainder < Divisor)",
                        "Sum of first n natural numbers = [n(n + 1)] / 2",
                        "Sum of squares of first n natural numbers = [n(n + 1)(2n + 1)] / 6",
                        "Cyclicity of unit digits: {2, 3, 7, 8} cycle length = 4; {4, 9} cycle length = 2; {0, 1, 5, 6} cycle length = 1",
                        "Divisibility by 8: Last 3 digits must form a number divisible by 8"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhat is the remainder when 3^65 is divided by 10?",
                        "solution": "Step 1: Dividing any positive integer by 10 leaves a remainder equal to its last (unit) digit.\nStep 2: Determine unit digit cyclicity of base 3:\n  3^1 = 3, 3^2 = 9, 3^3 = 7, 3^4 = 1 (repeats every 4 powers).\nStep 3: Divide the exponent 65 by the cycle period 4: 65 ÷ 4 = 16 with remainder 1.\nStep 4: The unit digit of 3^65 is therefore 3^1 = 3.\nStep 5: Since the unit digit is 3, remainder on dividing by 10 is 3.\nFinal Answer: 3"
                },
                "example2": {
                        "problem": "Placement Drive Interview PYQ:\nA 6-digit number 4A562B is divisible by 88. Find the values of digits A and B, and compute (A + B).",
                        "solution": "Step 1: Coprime factorization of 88 = 8 × 11. The number must satisfy divisibility for both 8 and 11.\nStep 2: Rule for 8 (Last 3 digits 62B must be divisible by 8):\n  620 ÷ 8 = 77 remainder 4 => 624 ÷ 8 = 78 remainder 0. Hence, B = 4.\nStep 3: Rule for 11 (Sum of digits at odd places - even places):\n  Odd places from right (1st, 3rd, 5th): B + 6 + A = 4 + 6 + A = 10 + A.\n  Even places from right (2nd, 4th, 6th): 2 + 5 + 4 = 11.\n  Difference = (10 + A) - 11 = A - 1.\nStep 4: For divisibility by 11, (A - 1) must be 0 or 11. Since A is a single digit (0-9), A - 1 = 0 => A = 1.\nStep 5: Compute A + B = 1 + 4 = 5.\nFinal Answer: A = 1, B = 4, Sum = 5"
                }
        },
        "apt-2": {
                "title": "Percentages, Profit & Loss",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "Percentages form the numerical foundation of almost all business aptitude questions in TCS NQT, Infosys, and Accenture. You must learn the fraction-to-percentage conversion chart (1/2 to 1/16) by heart to bypass decimal calculations. In Profit & Loss, understand the crucial distinction between Cost Price (CP), Selling Price (SP), and Marked Price (MP). Discounts are ALWAYS applied on Marked Price (MP), whereas Profit and Loss percentages are ALWAYS calculated on Cost Price (CP) unless stated otherwise.",
                "concept": "A percentage is simply a ratio with denominator 100. Multiplying factors (MF) speed up calculations: a 20% increase corresponds to MF = 1.20; a 15% decrease corresponds to MF = 0.85. Successive percentage changes of a% and b% result in an effective net change of [a + b + (ab / 100)]%. In false-weight problems, Profit % = (Error / [True Value - Error]) × 100.",
                "formulas": [
                        "Profit % = [(SP - CP) / CP] × 100 | Loss % = [(CP - SP) / CP] × 100",
                        "Selling Price (SP) = CP × (100 ± Profit/Loss%) / 100",
                        "Marked Price (MP) = SP / (1 - Discount%/100)",
                        "Effective change for successive a% and b% = a + b + (ab / 100)%",
                        "Fraction equivalents: 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/12 = 8.33%"
                ],
                "example1": {
                        "problem": "Foundation Example:\nAn article purchased for ₹1,200 is sold for ₹1,500. Calculate the profit percentage.",
                        "solution": "Step 1: Identify given prices: Cost Price (CP) = ₹1,200, Selling Price (SP) = ₹1,500.\nStep 2: Absolute Profit = SP - CP = ₹1,500 - ₹1,200 = ₹300.\nStep 3: Profit Percentage = (Profit / CP) × 100 = (300 / 1200) × 100.\nStep 4: 300/1200 = 1/4 = 25%.\nFinal Answer: 25% Profit"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA retailer marks goods 40% above cost price and allows a discount of 20% on cash payment. Simultaneously, he uses a faulty balance that weighs 900g instead of 1kg. Find his overall net gain percentage.",
                        "solution": "Step 1: Assume nominal Cost Price for 1000g is ₹1000 (i.e. ₹1 per gram).\nStep 2: Marked Price (MP) for 1000g = 1000 × 1.40 = ₹1,400.\nStep 3: After 20% discount, customer pays SP = 1400 × 0.80 = ₹1,120.\nStep 4: However, the merchant only delivers 900g of goods to the customer.\n  Actual cost incurred by merchant = 900g × ₹1 = ₹900.\nStep 5: Net Profit = SP received - Actual CP incurred = ₹1,120 - ₹900 = ₹220.\nStep 6: Net Gain % = (220 / 900) × 100 = 24.44%.\nFinal Answer: 24.44% Net Profit"
                }
        },
        "apt-3": {
                "title": "Time, Speed & Distance (Trains, Boats)",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "Time, Speed & Distance (TSD) is a high-weightage topic in corporate assessments. You must learn: unit conversions (km/h to m/s), Relative Speed concepts (same direction vs opposite direction), train crossing stationary objects vs moving objects, and river current dynamics (upstream and downstream). Understanding that distance is proportional to speed (when time is constant) and inversely proportional to time (when distance is constant) solves complex problems without lengthy quadratic equations.",
                "concept": "Core relation: Distance = Speed × Time. Relative speed: When two objects move towards each other, S_rel = S1 + S2. When moving in the same direction, S_rel = |S1 - S2|. For trains: when crossing a pole/person, distance = Length of train (L). When crossing a bridge or platform, distance = Length of train (L) + Length of platform (P). For boats: Downstream speed D = u + v, Upstream speed U = u - v (where u = boat speed in still water, v = stream speed).",
                "formulas": [
                        "Speed in m/s = Speed in km/h × (5 / 18) | Speed in km/h = Speed in m/s × (18 / 5)",
                        "Average Speed (for equal distance D at speeds S1, S2) = 2 × S1 × S2 / (S1 + S2)",
                        "Train crossing Platform: Time = (Length_train + Length_platform) / Speed_train",
                        "Boats: Still water speed u = (D + U) / 2 | Stream speed v = (D - U) / 2"
                ],
                "example1": {
                        "problem": "Foundation Example:\nA train travelling at 72 km/h crosses an electric pole in 15 seconds. Find the length of the train.",
                        "solution": "Step 1: Convert speed from km/h to m/s: 72 × (5 / 18) = 4 × 5 = 20 m/s.\nStep 2: When crossing a point object (pole), distance covered equals length of the train L.\nStep 3: Distance = Speed × Time = 20 m/s × 15 s = 300 meters.\nFinal Answer: 300 meters"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA motorboat covers 24 km upstream and 36 km downstream in 6 hours. In another trial, it covers 36 km upstream and 24 km downstream in 6.5 hours. What is the speed of the motorboat in still water?",
                        "solution": "Step 1: Let Upstream speed be U and Downstream speed be D.\n  Equation 1: 24/U + 36/D = 6\n  Equation 2: 36/U + 24/D = 6.5\nStep 2: Let 1/U = x, 1/D = y.\n  24x + 36y = 6  =>  4x + 6y = 1  => (Multiply by 3) => 12x + 18y = 3\n  36x + 24y = 6.5 => (Divide by 3) => 12x + 8y = 2.166...\n  Subtracting gives 10y = 1 => y = 1/10 => D = 10 km/h.\nStep 3: Substitute y = 1/10 into 24x + 36(0.1) = 6 => 24x + 3.6 = 6 => 24x = 2.4 => x = 1/10 => U = 8 km/h.\nStep 4: Speed in still water u = (D + U) / 2 = (10 + 8) / 2 = 9 km/h.\nFinal Answer: 9 km/h"
                }
        },
        "apt-4": {
                "title": "Time & Work, Pipes & Cisterns",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "Time & Work problems are best solved using the 'Unit Work / LCM Method' rather than fractions (1/x). You must master: individual rates, collaborative work, workers leaving/joining mid-way, efficiency ratios, alternate day work, and negative work in pipes (leakages/emptying pipes). In placement drives, recruiters frequently evaluate efficiency multipliers (e.g. 'A is 40% more efficient than B') and wage distribution proportional to work done.",
                "concept": "Total Work is assumed as the LCM of individual days taken. Efficiency is defined as Work done per unit time: Efficiency = Total Work / Time. If Worker A can do a job in X days and B in Y days, their daily work is (Total Work / X) and (Total Work / Y). For pipes: Inlet pipes add positive work (+ve efficiency), while leakage or outlet pipes do negative work (-ve efficiency). Wages are distributed in direct ratio of total units of work performed by each individual.",
                "formulas": [
                        "Total Work = LCM(Days of individual workers)",
                        "Efficiency = Work / Time | Time Taken = Total Work / Combined Efficiency",
                        "M1 × D1 × H1 / W1 = M2 × D2 × H2 / W2 (Chain Rule formula)",
                        "Alternate days: Pair cycle efficiency = Eff(A) + Eff(B) per 2 days",
                        "Pipes: Net Filling Rate = Inlet Rate - Outlet Leak Rate"
                ],
                "example1": {
                        "problem": "Foundation Example:\nA can complete a task in 12 days and B can complete it in 18 days. Working together, in how many days will they finish the task?",
                        "solution": "Step 1: Find LCM of 12 and 18 to define Total Work: LCM(12, 18) = 36 units.\nStep 2: Determine daily efficiency of each:\n  Efficiency of A = 36 / 12 = 3 units/day.\n  Efficiency of B = 36 / 18 = 2 units/day.\nStep 3: Combined efficiency = 3 + 2 = 5 units/day.\nStep 4: Time taken = Total Work / Combined efficiency = 36 / 5 = 7.2 days (or 7 days 4 hours 48 mins).\nFinal Answer: 7.2 days"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA, B, and C can do a work in 20, 30, and 60 days respectively. A works continuously, but is assisted by B and C together on every third day. In how many days will the entire work be completed?",
                        "solution": "Step 1: Total Work = LCM(20, 30, 60) = 60 units.\nStep 2: Individual Efficiencies:\n  Eff(A) = 60 / 20 = 3 units/day\n  Eff(B) = 60 / 30 = 2 units/day\n  Eff(C) = 60 / 60 = 1 unit/day\nStep 3: Analyze the 3-day work cycle:\n  Day 1: A works alone = 3 units\n  Day 2: A works alone = 3 units\n  Day 3: A + B + C work together = 3 + 2 + 1 = 6 units\n  Total work done in 3 days = 3 + 3 + 6 = 12 units.\nStep 4: Number of complete cycles needed = Total Work / Cycle Work = 60 / 12 = 5 cycles.\nStep 5: Total days = 5 cycles × 3 days/cycle = 15 days.\nFinal Answer: 15 days"
                }
        },
        "apt-5": {
                "title": "Ratios, Proportions & Mixtures",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "Ratios and proportions are universal comparison metrics. For campus placements, master: compound ratios, duplicate/triplicate ratios, direct and inverse variation, dividing quantities in ratios, and especially the Rule of Alligation for mixtures. Mixtures problems involving repeated replacement of liquid from a container using the formula Q_remaining = Q_initial × (1 - x/C)^n appear regularly in TCS and Cognizant screening rounds.",
                "concept": "Ratio a:b indicates relative proportion. If a:b and b:c are given, balance the common term 'b' to find a:b:c. The Rule of Alligation computes the ratio in which two ingredients of prices/strengths C (Cheaper) and D (Dearer) must be mixed to produce a mixture of mean price M: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).",
                "formulas": [
                        "Alligation Rule: (Cheaper Qty) / (Dearer Qty) = (Dearer Price - Mean) / (Mean - Cheaper Price)",
                        "Repeated Dilution: Remaining original liquid = Initial × [1 - (x / Volume)]^n",
                        "Compounded Ratio of (a:b) and (c:d) = (ac : bd)",
                        "Third Proportional to a and b = b^2 / a | Mean Proportional = sqrt(a × b)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nIn what ratio must rice at ₹40/kg be mixed with rice at ₹60/kg so that the resulting mixture is worth ₹48/kg?",
                        "solution": "Step 1: Identify Cheaper price C = 40, Dearer price D = 60, Mean price M = 48.\nStep 2: Apply Alligation formula:\n  (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C)\nStep 3: Numerator = 60 - 48 = 12.\nStep 4: Denominator = 48 - 40 = 8.\nStep 5: Ratio = 12 / 8 = 3 / 2 = 3 : 2.\nFinal Answer: 3 : 2"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA vessel contains 80 litres of pure milk. 8 litres of milk is withdrawn and replaced with water. This replacement procedure is repeated two more times. How much pure milk is left in the container?",
                        "solution": "Step 1: Total initial quantity V = 80 litres. Quantity removed per operation x = 8 litres.\nStep 2: Total number of operations n = 1 + 2 = 3.\nStep 3: Apply the repeated dilution formula:\n  Remaining Milk = V × [1 - (x / V)]^n\nStep 4: Fraction remaining = 1 - (8 / 80) = 1 - 0.1 = 0.9 = 9/10.\nStep 5: Calculate: 80 × (0.9)^3 = 80 × 0.729 = 58.32 litres.\nFinal Answer: 58.32 litres"
                }
        },
        "apt-6": {
                "title": "Simple & Compound Interest",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "Interest calculations test financial arithmetic. Students must understand: Simple Interest (growth is constant each year on principal only) vs Compound Interest (interest earns interest). For campus tests, focus on: the difference between CI and SI for 2 years and 3 years, compounding frequency (half-yearly, quarterly), and 'Rule of 72' for doubling investments.",
                "concept": "SI = (P × R × T) / 100. In Compound Interest, Amount A = P(1 + R/100)^T. CI = A - P. When interest is compounded half-yearly, rate becomes R/2 and time periods double to 2T. The difference between CI and SI for 2 years is P(R/100)^2. For 3 years, CI - SI = P(R/100)^2 × [(300 + R) / 100].",
                "formulas": [
                        "Simple Interest (SI) = (P × R × T) / 100",
                        "Compound Amount (Annual) = P × [1 + (R / 100)]^T",
                        "Difference between CI and SI for 2 years = P × (R / 100)^2",
                        "Difference between CI and SI for 3 years = P × (R / 100)^2 × [(300 + R) / 100]",
                        "Half-Yearly Compounding: R' = R / 2, n' = 2n"
                ],
                "example1": {
                        "problem": "Foundation Example:\nFind the difference between Simple Interest and Compound Interest on a sum of ₹10,000 for 2 years at 10% per annum.",
                        "solution": "Step 1: Principal P = ₹10,000, Rate R = 10%, Time T = 2 years.\nStep 2: Use the standard 2-year difference formula: Difference = P × (R / 100)^2.\nStep 3: Calculate (R / 100) = 10 / 100 = 0.1.\nStep 4: (0.1)^2 = 0.01.\nStep 5: Difference = 10,000 × 0.01 = ₹100.\nFinal Answer: ₹100"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA sum of money invested at compound interest doubles itself in 5 years. In how many years will it become 8 times of itself at the same annual interest rate?",
                        "solution": "Step 1: Under compound interest, growth is exponential: A = P(1 + r)^t.\nStep 2: Given: In 5 years, P becomes 2P => (1 + r)^5 = 2.\nStep 3: We need the amount to become 8P, which is (2)^3 × P.\nStep 4: Raise both sides of the base relation to power 3:\n  [(1 + r)^5]^3 = (2)^3 = 8 => (1 + r)^15 = 8.\nStep 5: Hence, the required time is 15 years.\nFinal Answer: 15 years"
                }
        },
        "apt-7": {
                "title": "Permutations & Combinations",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "P&C tests fundamental counting principles. Key placement concepts: Factorial operations, Fundamental Counting Principle (AND = multiply, OR = add), Linear vs Circular arrangements, Repetition of letters in words, and Selection under constraints (e.g., forming committees with 'at least one woman'). You must know when order matters (Permutation, nPr) and when order does not matter (Combination, nCr).",
                "concept": "Permutation is arrangement (order matters): nPr = n! / (n - r)!. Combination is selection (order does not matter): nCr = n! / [r!(n - r)!]. When arranging n items with duplicates (p of type 1, q of type 2), total arrangements = n! / (p! × q!). Circular permutations of n distinct objects = (n - 1)! (or (n - 1)! / 2 if clockwise/anticlockwise cannot be distinguished, like a necklace of beads).",
                "formulas": [
                        "nPr = n! / (n - r)! | nCr = n! / [r! × (n - r)!]",
                        "nCr = nC(n - r) | nC0 = nCn = 1 | nC1 = n",
                        "Circular arrangements of n distinct items = (n - 1)!",
                        "Arranging letters with duplicates: n! / (p! × q! × r!)",
                        "Total subsets of n items = 2^n"
                ],
                "example1": {
                        "problem": "Foundation Example:\nHow many different words can be formed using all the letters of the word 'SUCCESS'?",
                        "solution": "Step 1: Count total letters in 'SUCCESS': n = 7 letters.\nStep 2: Count frequencies of repeating letters:\n  S appears 3 times\n  C appears 2 times\n  U appears 1 time\n  E appears 1 time\nStep 3: Total permutations = n! / (p! × q!) = 7! / (3! × 2!).\nStep 4: 7! = 5040; 3! × 2! = 6 × 2 = 12.\nStep 5: Permutations = 5040 / 12 = 420 words.\nFinal Answer: 420"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA committee of 5 members is to be formed from 6 men and 4 women. In how many ways can this committee be formed such that it contains at least one woman?",
                        "solution": "Step 1: Total people available = 6 men + 4 women = 10 people.\nStep 2: Total possible committees of 5 without any restriction = 10C5.\n  10C5 = (10 × 9 × 8 × 7 × 6) / (5 × 4 × 3 × 2 × 1) = 252.\nStep 3: Use the Complement Principle: 'At least 1 woman' = Total - (Committees with NO women).\nStep 4: Committees with zero women means selecting all 5 from the 6 men = 6C5 = 6.\nStep 5: Committees with at least one woman = 252 - 6 = 246 ways.\nFinal Answer: 246"
                }
        },
        "apt-8": {
                "title": "Probability & Bayes' Theorem",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "Probability evaluates uncertainty. For tech recruitment drives, focus on: Classical definition (favorable / total), independent vs mutually exclusive events, conditional probability P(A|B), rolling dice, drawing cards with/without replacement, coin tosses, and Bayes' Theorem for posterior probability in diagnostic/reliability tests.",
                "concept": "P(E) = Number of favorable outcomes / Total sample space outcomes. 0 ≤ P(E) ≤ 1. Complement: P(E') = 1 - P(E). For mutually exclusive events, P(A ∪ B) = P(A) + P(B). For independent events, P(A ∩ B) = P(A) × P(B). Conditional probability P(A|B) = P(A ∩ B) / P(B). Bayes' theorem calculates the probability of an underlying cause given observed evidence.",
                "formulas": [
                        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
                        "Independent Events: P(A ∩ B) = P(A) × P(B)",
                        "Conditional: P(A | B) = P(A ∩ B) / P(B)",
                        "Bayes' Theorem: P(A_i | B) = [P(A_i) × P(B | A_i)] / Σ [P(A_k) × P(B | A_k)]",
                        "At least one = 1 - P(none)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nTwo fair dice are thrown simultaneously. What is the probability that the sum of the numbers appearing on top is 8?",
                        "solution": "Step 1: Total outcomes when rolling two dice = 6 × 6 = 36.\nStep 2: List pairs (d1, d2) that sum to 8:\n  (2, 6), (3, 5), (4, 4), (5, 3), (6, 2).\nStep 3: Total favorable outcomes = 5.\nStep 4: Probability P = Favorable / Total = 5 / 36.\nFinal Answer: 5/36 (approx 13.89%)"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA bag contains 4 red balls and 6 black balls. Another bag contains 7 red balls and 3 black balls. A ball is drawn at random from one of the bags and is found to be Red. What is the probability that it was drawn from the first bag?",
                        "solution": "Step 1: Let E1 = choosing Bag 1, E2 = choosing Bag 2. P(E1) = P(E2) = 1/2.\nStep 2: Let R = drawing a Red ball.\n  P(R | E1) = 4 / (4 + 6) = 4/10 = 0.40.\n  P(R | E2) = 7 / (7 + 3) = 7/10 = 0.70.\nStep 3: Apply Bayes' Theorem to find P(E1 | R):\n  P(E1 | R) = [P(E1) × P(R | E1)] / [P(E1) × P(R | E1) + P(E2) × P(R | E2)].\nStep 4: Numerator = (1/2) × 0.4 = 0.2.\nStep 5: Denominator = (1/2 × 0.4) + (1/2 × 0.7) = 0.2 + 0.35 = 0.55.\nStep 6: P(E1 | R) = 0.2 / 0.55 = 20 / 55 = 4 / 11.\nFinal Answer: 4/11"
                }
        },
        "apt-9": {
                "title": "Data Interpretation (Pie, Bar, Tables)",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "Data Interpretation (DI) is mandatory in TCS NQT, Wipro, and banking/consulting assessments. DI questions do not test obscure math; they test speed reading of visual data, calculating percentage shares, percentage increases/decreases, and ratios under intense time constraints. Master the 360-degree to 100% conversion for pie charts and mental approximations.",
                "concept": "In Pie Charts, 100% corresponds to 360 degrees (1% = 3.6°). To find degree angle for x%: Angle = (x / 100) × 360°. Percentage growth from Year A to Year B = [(Value_B - Value_A) / Value_A] × 100. In tables and stacked bar charts, calculate column sums mentally using rounding techniques to eliminate false options rapidly.",
                "formulas": [
                        "Pie Chart Degree Conversion: Value = (Sector Angle / 360°) × Total Value",
                        "Percentage Growth = [(Current - Previous) / Previous] × 100",
                        "Average of Group = Sum of all values / Number of elements",
                        "Ratio of categories = Absolute Value 1 : Absolute Value 2"
                ],
                "example1": {
                        "problem": "Foundation Example:\nA company's total annual expenditure is ₹72 Lakhs. In a pie chart, the sector representing 'Research & Development' has a central angle of 45°. What is the expenditure on R&D?",
                        "solution": "Step 1: Total expenditure corresponding to 360° = ₹72 Lakhs.\nStep 2: Value per degree = 72 / 360 = 0.2 Lakhs per degree.\nStep 3: Value for 45° = 45 × 0.2 = ₹9.0 Lakhs.\nFinal Answer: ₹9.0 Lakhs (or ₹9,00,000)"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA software company's revenue grew from ₹450 Crores in 2022 to ₹585 Crores in 2023, while total operational costs increased from ₹300 Crores to ₹360 Crores. By what percentage did the company's Net Profit increase?",
                        "solution": "Step 1: Net Profit = Revenue - Operational Costs.\nStep 2: Net Profit in 2022 = 450 - 300 = ₹150 Crores.\nStep 3: Net Profit in 2023 = 585 - 360 = ₹225 Crores.\nStep 4: Absolute Increase in Profit = 225 - 150 = ₹75 Crores.\nStep 5: Percentage Increase = (Increase / Base 2022 Profit) × 100 = (75 / 150) × 100 = 50%.\nFinal Answer: 50% Increase"
                }
        },
        "apt-10": {
                "title": "Logarithms & Progressions (AP/GP)",
                "domain": "Quantitative Aptitude",
                "whatToLearn": "Progressions (AP and GP) and Logarithmic laws frequently appear in higher-band rounds (such as TCS Digital/Prime and Infosys Specialist). Master: finding the nth term, sum of n terms of an AP, sum of infinite GP (|r| < 1), change of base rule in logs, and properties of log products and exponents.",
                "concept": "Arithmetic Progression (AP): Sequence where difference between consecutive terms is constant (d). nth term T_n = a + (n - 1)d; Sum S_n = (n/2)[2a + (n - 1)d]. Geometric Progression (GP): Ratio between consecutive terms is constant (r). T_n = a × r^(n-1); Sum of infinite GP = a / (1 - r) for |r| < 1. Logarithm: If b^y = x, then log_b(x) = y.",
                "formulas": [
                        "AP nth term: T_n = a + (n - 1)d | AP Sum: S_n = (n/2) × (First + Last)",
                        "GP nth term: T_n = a × r^(n - 1) | Infinite GP Sum: S_inf = a / (1 - r) [when |r| < 1]",
                        "Log Laws: log(ab) = log(a) + log(b) | log(a/b) = log(a) - log(b)",
                        "Power Rule: log(a^k) = k × log(a) | Change of Base: log_b(a) = log(a) / log(b)",
                        "AM ≥ GM: (a + b) / 2 ≥ sqrt(ab)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nFind the sum of the infinite geometric series: 18, 6, 2, 2/3, ...",
                        "solution": "Step 1: Identify the first term a = 18.\nStep 2: Common ratio r = T2 / T1 = 6 / 18 = 1/3.\nStep 3: Since |r| = 1/3 < 1, the infinite sum converges.\nStep 4: Apply formula S_inf = a / (1 - r) = 18 / (1 - 1/3) = 18 / (2/3).\nStep 5: Calculate: 18 × (3 / 2) = 27.\nFinal Answer: 27"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nIf log_2(x) + log_4(x) + log_16(x) = 21/4, find the value of positive real number x.",
                        "solution": "Step 1: Use change of base rule to express all logarithms in base 2:\n  log_4(x) = log_2(x) / log_2(4) = log_2(x) / 2\n  log_16(x) = log_2(x) / log_2(16) = log_2(x) / 4\nStep 2: Substitute back into equation:\n  log_2(x) + (1/2)log_2(x) + (1/4)log_2(x) = 21/4\nStep 3: Factor out log_2(x):\n  log_2(x) × [1 + 1/2 + 1/4] = 21/4\n  log_2(x) × [7/4] = 21/4\nStep 4: Solve for log_2(x):\n  log_2(x) = (21/4) / (7/4) = 3.\nStep 5: Convert from logarithmic to exponential form:\n  x = 2^3 = 8.\nFinal Answer: 8"
                }
        },
        "rea-1": {
                "title": "Coding-Decoding & Letter Series",
                "domain": "Logical Reasoning",
                "whatToLearn": "Coding-Decoding evaluates pattern recognition and spatial memory of the alphabet. You must memorize English letter positions (A=1 to Z=26, using mnemonic EJOTY: 5, 10, 15, 20, 25) and reverse opposite pairs (A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N). Understand shift cyphers, cross-pattern shuffling, and fictitious language coding.",
                "concept": "Letter values range from 1 to 26. Opposite pairs always sum to 27 (e.g. A(1) + Z(26) = 27; G(7) + T(20) = 27). Common transformations include: +k/-k shift, alternating shifts (+1, -2, +3, -4), reversing letter orders, vowel-consonant separate rules, and positional substitution.",
                "formulas": [
                        "EJOTY Mnemonic: E=5, J=10, O=15, T=20, Y=25",
                        "Opposite Letter Pair Rule: Position(Forward) + Position(Backward) = 27",
                        "Reverse Alphabet Pairs: A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N"
                ],
                "example1": {
                        "problem": "Foundation Example:\nIf in a code language 'ROSE' is written as 'ILHV', how will 'TULIP' be coded in that same language?",
                        "solution": "Step 1: Check forward position vs coded letter:\n  R(18) -> I(9): 18 + 9 = 27 (Opposite letter!)\n  O(15) -> L(12): 15 + 12 = 27 (Opposite letter!)\n  S(19) -> H(8): 19 + 8 = 27 (Opposite letter!)\n  E(5) -> V(22): 5 + 22 = 27 (Opposite letter!)\nStep 2: The pattern is strictly the opposite letter of each character.\nStep 3: Apply to 'TULIP':\n  T(20) opposite is G(7) [27 - 20 = 7]\n  U(21) opposite is F(6) [27 - 21 = 6]\n  L(12) opposite is O(15) [27 - 12 = 15]\n  I(9) opposite is R(18) [27 - 9 = 18]\n  P(16) opposite is K(11) [27 - 16 = 11]\nStep 4: Combined result = 'GFORK'.\nFinal Answer: GFORK"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nIn a certain code, 'pit na som' means 'bring me water', 'na jo tod' means 'water is life', and 'som jo lin' means 'give me life'. Which word in that language represents 'is'?",
                        "solution": "Step 1: Compare Sentence 1 and Sentence 2:\n  'pit na som' = 'bring me water'\n  'na jo tod' = 'water is life'\n  Common code: 'na'; Common word: 'water'. Hence, 'na' = 'water'.\nStep 2: Compare Sentence 2 and Sentence 3:\n  'na jo tod' = 'water is life'\n  'som jo lin' = 'give me life'\n  Common code: 'jo'; Common word: 'life'. Hence, 'jo' = 'life'.\nStep 3: Inspect Sentence 2: Codes are 'na', 'jo', 'tod', corresponding to 'water', 'life', 'is'.\n  Since 'na' = 'water' and 'jo' = 'life', the only remaining code 'tod' must correspond to 'is'.\nFinal Answer: tod"
                }
        },
        "rea-2": {
                "title": "Blood Relations & Family Trees",
                "domain": "Logical Reasoning",
                "whatToLearn": "Blood Relations questions test hierarchical logic. Master family tree mapping notation (+ for male, - for female, = for married couples, vertical line for parent-child). Never assume gender from a person's name unless explicitly defined by pronouns or relationship words (sister, uncle, mother). Pay close attention to maternal vs paternal relations.",
                "concept": "Standard symbols: Male (+), Female (-), Sibling pair (horizontal dashed line A -- B), Married couple (A = B), Generation gap (vertical line A | B). Pointing-to-photograph questions should be decoded backwards starting from 'my...' to eliminate ambiguity.",
                "formulas": [
                        "Paternal = Father's side (Paternal uncle = Father's brother)",
                        "Maternal = Mother's side (Maternal uncle = Mother's brother)",
                        "Nephew = Brother's or Sister's son | Niece = Brother's or Sister's daughter",
                        "In-laws: Mother-in-law = Spouse's mother | Brother-in-law = Spouse's brother or Sister's husband"
                ],
                "example1": {
                        "problem": "Foundation Example:\nPointing to a photograph of a boy, Suresh said, 'He is the only son of my mother.' How is Suresh related to that boy?",
                        "solution": "Step 1: Start decoding from Suresh's perspective: 'My mother'.\nStep 2: 'The only son of my mother': If Suresh's mother has only one son, that son must be Suresh himself.\nStep 3: Therefore, the boy in the photograph is Suresh's son.\nStep 4: How is Suresh related to the boy? Suresh is his Father.\nFinal Answer: Father"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA + B means 'A is the father of B'; A - B means 'A is the sister of B'; A * B means 'A is the brother of B'; A / B means 'A is the mother of B'. If P * Q / R - S, how is P related to S?",
                        "solution": "Step 1: Break down the expression from left to right:\n  P * Q => P is the brother of Q (P is male: P(+)).\n  Q / R => Q is the mother of R (Q is female: Q(-)).\n  R - S => R is the sister of S (R is female: R(-)).\nStep 2: Combine relationships:\n  Since Q is the mother of R, and R is the sister of S, Q is also the mother of S.\nStep 3: P is the brother of Q (the mother of S).\nStep 4: Mother's brother is the Maternal Uncle.\nFinal Answer: Maternal Uncle"
                }
        },
        "rea-3": {
                "title": "Direction Sense & Coordinate Logic",
                "domain": "Logical Reasoning",
                "whatToLearn": "Direction Sense problems model navigation in 2D Cartesian space. Master the 4 cardinal directions (North, South, East, West) and 4 ordinal directions (NE, NW, SE, SW). When a person faces North: right is East, left is West. When facing South: right is West, left is East. To calculate shortest displacement from the starting point, always sketch coordinates and apply the Pythagorean Theorem.",
                "concept": "North = +Y, South = -Y, East = +X, West = -X. Right turn = 90° clockwise; Left turn = 90° counter-clockwise. Shortest distance d between start (x1, y1) and finish (x2, y2) = sqrt((x2 - x1)^2 + (y2 - y1)^2). At sunrise, shadow falls to the West; at sunset, shadow falls to the East.",
                "formulas": [
                        "Cardinal Directions: North (0° / 360°), East (90°), South (180°), West (270°)",
                        "Pythagoras Theorem: Shortest Distance = sqrt(Horizontal_Distance^2 + Vertical_Distance^2)",
                        "Shadow Rules: Morning (Sun in East) => Shadow points West; Evening (Sun in West) => Shadow points East"
                ],
                "example1": {
                        "problem": "Foundation Example:\nA man walks 12 km North, turns right and walks 5 km East. How far and in what direction is he from his starting point?",
                        "solution": "Step 1: Represent movements on coordinate axes with origin (0, 0) as start.\nStep 2: 12 km North => point is (0, 12).\nStep 3: Turn right (East) and walk 5 km => point is (5, 12).\nStep 4: Shortest straight-line distance = sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13 km.\nStep 5: Direction from (0,0) to (5,12) is North-East.\nFinal Answer: 13 km, North-East"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nOne evening before sunset, Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",
                        "solution": "Step 1: Time of day: Evening before sunset => Sun is in the West.\nStep 2: Shadow position: Rays travel from West to East, so all shadows fall towards the East.\nStep 3: We are given that Hema's shadow was to Hema's RIGHT.\n  Since shadow is in the East, Hema's right side is pointing East.\nStep 4: If your right hand points East, you must be facing North! (Facing North: Right is East, Left is West).\nStep 5: Since Rekha is talking to Hema face-to-face, Rekha is facing opposite to Hema.\nStep 6: Opposite of North is South. Therefore, Rekha is facing South.\nFinal Answer: South"
                }
        },
        "rea-4": {
                "title": "Linear & Circular Seating Arrangement",
                "domain": "Logical Reasoning",
                "whatToLearn": "Seating arrangement puzzles form 20-30% of marks in logical reasoning screening tests (TCS NQT, Infosys, Capgemini). Learn: Linear arrangement (all facing North, all facing South, or mixed), Circular arrangement (facing center vs facing outside), and 2-row opposite arrangements. Always begin with fixed, definite positions before evaluating relative clues.",
                "concept": "In a circle facing the center: Moving clockwise is moving to the LEFT; moving counter-clockwise is moving to the RIGHT. If people face outward, the directions reverse. For an even number of people (e.g. 6 or 8) facing center, the person sitting directly opposite is (n/2) positions away.",
                "formulas": [
                        "Facing Center: Clockwise = Left | Counter-Clockwise = Right",
                        "Facing Outward: Clockwise = Right | Counter-Clockwise = Left",
                        "Opposite person in circle of N: Position index = (Current + N/2) mod N"
                ],
                "example1": {
                        "problem": "Foundation Example:\nFive friends A, B, C, D, E are sitting in a row facing North. C is sitting in the middle. A is to the immediate left of C. B is at the extreme right end. D is not at an end. What is the exact seating order from left to right?",
                        "solution": "Step 1: Total positions: 1, 2, 3, 4, 5 (facing North, so Left is 1 and Right is 5).\nStep 2: 'C is in the middle' => Position 3 is C: [_, _, C, _, _].\nStep 3: 'A is to the immediate left of C' => Position 2 is A: [_, A, C, _, _].\nStep 4: 'B is at the extreme right end' => Position 5 is B: [_, A, C, _, B].\nStep 5: 'D is not at an end' => D cannot be at Position 1. So D must be at Position 4: [_, A, C, D, B].\nStep 6: The only remaining friend E takes Position 1: [E, A, C, D, B].\nFinal Answer: E - A - C - D - B"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nSix people P, Q, R, S, T, and U sit in a circle facing the center. P sits second to the left of T. Q sits to the immediate right of P. S sits opposite to P. U is not adjacent to T. Who sits to the immediate left of R?",
                        "solution": "Step 1: Set T at 12 o'clock position (index 0). Facing center, moving left is clockwise.\nStep 2: P sits 2nd to the left of T => P is at 4 o'clock (2 steps clockwise from T).\nStep 3: Q sits to the immediate right of P (counter-clockwise) => Q is at 2 o'clock (between T and P).\nStep 4: S sits opposite to P => S is at 10 o'clock.\nStep 5: Positions left are 6 o'clock and 8 o'clock. Friends remaining are R and U.\n  Clue: 'U is not adjacent to T' (T is at 12). S is at 10 (adjacent to T), so U cannot be near T.\n  Positions available: 6 o'clock and 8 o'clock.\n  Let U be at 6 o'clock, so R takes 8 o'clock.\nStep 6: Circle arrangement clockwise: T(12) -> Q(2) -> P(4) -> U(6) -> R(8) -> S(10) -> T(12).\nStep 7: Immediate left of R (clockwise) is S.\nFinal Answer: S"
                }
        },
        "rea-5": {
                "title": "Syllogisms & Venn Diagrams",
                "domain": "Logical Reasoning",
                "whatToLearn": "Syllogisms test categorical deductive logic. You must accept given premises as absolute truth, regardless of real-world facts. Master the 4 standard statement forms (A: All A are B, E: No A is B, I: Some A are B, O: Some A are not B). A conclusion is VALID if and only if it holds across EVERY conceivable Venn diagram representation.",
                "concept": "Key deduction rules: 'All A are B' implies 'Some B are A'. 'No A is B' implies 'No B is A'. Two affirmative premises can never yield a negative conclusion. Two negative premises yield no definite conclusion. 'Either Or' rule requires: same two terms, one affirmative and one negative, both individually doubtful.",
                "formulas": [
                        "All A are B + All B are C => All A are C",
                        "Some A are B + All B are C => Some A are C",
                        "All A are B + No B is C => No A is C",
                        "Either-Or Pair: (Some + No) OR (All + Some Not)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nStatements:\n1. All cars are vehicles.\n2. All vehicles are machines.\nConclusions:\nI. All cars are machines.\nII. Some machines are cars.\nWhich conclusions follow?",
                        "solution": "Step 1: Represent Statement 1: Circle of 'Cars' is entirely inside 'Vehicles'.\nStep 2: Represent Statement 2: Circle of 'Vehicles' is entirely inside 'Machines'.\nStep 3: Transitivity: Since Cars ⊆ Vehicles ⊆ Machines, Cars ⊆ Machines is guaranteed. Conclusion I follows.\nStep 4: Since Cars are inside Machines, the portion of Machines occupied by Cars confirms that some machines are indeed cars. Conclusion II follows.\nFinal Answer: Both Conclusions I and II follow"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nStatements:\n1. Some pens are pencils.\n2. No pencil is an eraser.\nConclusions:\nI. Some pens are not erasers.\nII. Some erasers are pens.\nWhich conclusions follow?",
                        "solution": "Step 1: Venn representation: Circle of 'Pens' overlaps with 'Pencils'. Let the overlapping region be X.\nStep 2: 'No pencil is eraser': The circle of 'Erasers' cannot touch any part of 'Pencils'.\nStep 3: Analyze Region X: Region X consists of pens that ARE pencils. Since no pencil can be an eraser, these pens in Region X can NEVER be erasers.\nStep 4: Therefore, 'Some pens are not erasers' is definitively TRUE! Conclusion I follows.\nStep 5: For Conclusion II: The circle of Erasers can be completely disjoint from Pens. It is not necessarily true.\nFinal Answer: Only Conclusion I follows"
                }
        },
        "rea-6": {
                "title": "Data Sufficiency",
                "domain": "Logical Reasoning",
                "whatToLearn": "Data Sufficiency questions do not require calculating final numeric values; they test whether the given statements provide sufficient information to reach a single unique answer. Master the 5 standard options: (1) Statement 1 alone is sufficient, (2) Statement 2 alone is sufficient, (3) Both together are needed, (4) Either alone is sufficient, (5) Neither is sufficient.",
                "concept": "Methodology: Step 1: Evaluate Statement 1 ALONE. If it yields a unique answer, rule out options (2), (3), (5). Step 2: Evaluate Statement 2 ALONE (forgetting Statement 1). Step 3: If neither alone works, combine both statements. If a question asks 'Is x > 0?', an answer that definitively says 'NO, x is definitely negative' is STILL SUFFICIENT because it uniquely answers the question.",
                "formulas": [
                        "Rule 1: Always evaluate Statement 1 independently.",
                        "Rule 2: Clear your mind and evaluate Statement 2 independently.",
                        "Rule 3: Only combine statements if both independently fail.",
                        "Rule 4: A definitive 'NO' answer is just as sufficient as a definitive 'YES'."
                ],
                "example1": {
                        "problem": "Foundation Example:\nQuestion: Is positive integer n even?\nStatement 1: n is a multiple of 6.\nStatement 2: n is divisible by 4.\nWhich statements are sufficient?",
                        "solution": "Step 1: Evaluate Statement 1 alone: 'n is a multiple of 6'. Any multiple of 6 (6, 12, 18, 24...) is divisible by 2, hence n must be even. Unique answer: YES. Statement 1 alone is sufficient!\nStep 2: Evaluate Statement 2 alone: 'n is divisible by 4'. Any multiple of 4 (4, 8, 12, 16...) is divisible by 2, hence n must be even. Unique answer: YES. Statement 2 alone is also sufficient!\nStep 3: Since both statements individually provide a unique answer, either statement alone is sufficient.\nFinal Answer: Either Statement 1 alone or Statement 2 alone is sufficient"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nQuestion: What is the age of Ravi?\nStatement 1: Ravi is 5 years younger than his sister Priya.\nStatement 2: The ratio of Priya's age to Ravi's age 5 years ago was 4 : 3.",
                        "solution": "Step 1: Evaluate Statement 1 alone: P - R = 5. Two unknowns, one equation. Cannot determine R. (Insufficient alone).\nStep 2: Evaluate Statement 2 alone: (P - 5) / (R - 5) = 4/3 => 3P - 15 = 4R - 20. Two unknowns, one equation. Cannot determine R. (Insufficient alone).\nStep 3: Combine Statement 1 and Statement 2:\n  From 1: P = R + 5.\n  Substitute into 2: 3(R + 5) - 15 = 4R - 20 => 3R + 15 - 15 = 4R - 20 => 3R = 4R - 20 => R = 20.\nStep 4: Combining both statements yields a unique age for Ravi (20 years).\nFinal Answer: Both statements 1 and 2 together are necessary and sufficient"
                }
        },
        "rea-7": {
                "title": "Clocks, Calendars & Angles",
                "domain": "Logical Reasoning",
                "whatToLearn": "Clock and Calendar problems appear in TCS NQT, Wipro, and Accenture tests. Master: Speed of hour hand (0.5° per minute) vs minute hand (6° per minute), angle between hands at hour H and minute M, hands coinciding (0°), opposite (180°), right angle (90°), leap years (divisible by 4, century years divisible by 400), and finding odd days to deduce the day of any historical date.",
                "concept": "The angle between hour and minute hands is θ = |(30H - (11/2)M)|. If θ > 180°, reflex angle is 360° - θ. In calendars, a normal year has 365 days = 52 weeks + 1 odd day. A leap year has 366 days = 52 weeks + 2 odd days. A century year is a leap year ONLY if divisible by 400 (e.g. 2000 is leap, 1900 is not). 100 years have 5 odd days, 200 years have 3 odd days, 300 years have 1 odd day, 400 years have 0 odd days.",
                "formulas": [
                        "Angle between hands: θ = |30 × H - (11 / 2) × M|",
                        "Speed of minute hand = 6°/min | Speed of hour hand = 0.5°/min | Relative speed = 5.5°/min",
                        "Odd days: Normal Year = 1 odd day | Leap Year = 2 odd days",
                        "Odd days in centuries: 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhat is the angle between the hands of a clock at 4:20?",
                        "solution": "Step 1: Identify Hour H = 4, Minute M = 20.\nStep 2: Apply formula θ = |30H - (11/2)M|.\nStep 3: 30 × 4 = 120.\nStep 4: (11 / 2) × 20 = 11 × 10 = 110.\nStep 5: Angle θ = |120 - 110| = 10°.\nFinal Answer: 10°"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nWhat day of the week was on 15th August 1947 (India's Independence Day)?",
                        "solution": "Step 1: Break period into completed centuries and years: 1600 years + 300 years + 46 completed years + Jan 1 to Aug 15 1947.\nStep 2: Odd days in 1600 years = 0.\nStep 3: Odd days in 300 years = 1.\nStep 4: In 46 years: Leap years = 46 ÷ 4 = 11; Ordinary years = 46 - 11 = 35.\n  Total odd days = (11 × 2) + (35 × 1) = 22 + 35 = 57 days = 57 mod 7 = 1 odd day.\nStep 5: Days in 1947 up to Aug 15:\n  Jan(31) + Feb(28) + Mar(31) + Apr(30) + May(31) + Jun(30) + Jul(31) + Aug(15)\n  Odd days = 3 + 0 + 3 + 2 + 3 + 2 + 3 + 1 = 17 mod 7 = 3 odd days.\nStep 6: Total odd days = 0 + 1 + 1 + 3 = 5 odd days.\nStep 7: Day 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat. 5 corresponds to Friday.\nFinal Answer: Friday"
                }
        },
        "rea-8": {
                "title": "Statement & Assumptions / Inferences",
                "domain": "Logical Reasoning",
                "whatToLearn": "Critical verbal reasoning tests cognitive evaluation in MNC recruitment. Learn: What is an assumption (something taken for granted or unsaid premise), vs an inference (a logical deduction derived from stated facts). Assumptions must be directly implied by the speaker without bringing far-fetched external general knowledge.",
                "concept": "An assumption is implicit in the statement. Key rules: (1) Assumptions should be positive and feasible. (2) Words like 'only', 'all', 'never', 'definitely' make assumptions weak/invalid. (3) If negating the assumption collapses the core rationale of the statement, the assumption is definitely VALID.",
                "formulas": [
                        "Negation Test: If ¬Assumption destroys the Statement's purpose, the assumption is implicit.",
                        "Avoid extreme generalizations (only, completely, best, all) unless statement specifies.",
                        "Advertisements, notices, and appeals always assume people will read and respond favorably."
                ],
                "example1": {
                        "problem": "Foundation Example:\nStatement: 'Please do not lean out of the train window while the train is in motion.' - Notice in a passenger coach.\nAssumptions:\nI. Passengers have a tendency to lean out of windows.\nII. Leaning out of moving train windows is dangerous.\nWhich assumptions are implicit?",
                        "solution": "Step 1: Why does a railway authority put up this notice? Because people often lean out (Assumption I is valid; without this possibility, the notice is useless).\nStep 2: The notice is an instruction to avoid harm. The authority assumes that doing so carries danger (Assumption II is valid).\nStep 3: Both assumptions justify why the notice was issued.\nFinal Answer: Both Assumptions I and II are implicit"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nStatement: 'Join PrepForge to clear campus placement interviews on your first attempt.' - An advertisement.\nAssumptions:\nI. Students desire to clear campus placement interviews on their first attempt.\nII. No other platform can help students clear placements.\nWhich assumption is implicit?",
                        "solution": "Step 1: Test Assumption I: An advertisement targets a recognized desire among students (to clear in attempt 1). If students did not care, the ad would fail. Assumption I is implicit.\nStep 2: Test Assumption II: The word 'No other platform' is an extreme claim. An organization promoting its own platform does not assume no other competitor exists in the world. Assumption II is NOT implicit.\nFinal Answer: Only Assumption I is implicit"
                }
        },
        "ver-1": {
                "title": "Subject-Verb Agreement & Tenses",
                "domain": "Verbal Ability",
                "whatToLearn": "Subject-Verb Agreement (SVA) and Tenses form the backbone of English grammar screening tests across Infosys, TCS, and Accenture. Master: singular subjects taking singular verbs, collective nouns, inverted sentences, proximity rules for 'either... or' and 'neither... nor', intervening prepositional phrases ('as well as', 'along with'), and the 12 English tenses (especially Present Perfect vs Simple Past).",
                "concept": "The subject must agree with the verb in number and person. Intervening phrases like 'along with', 'as well as', 'together with', 'in addition to' DO NOT change the number of the subject. For 'Either A or B' and 'Neither A nor B', the verb agrees with the CLOSER subject (Rule of Proximity). Words like 'everybody', 'each', 'neither' are singular. When two actions occurred in the past, the earlier action takes the Past Perfect (had + V3).",
                "formulas": [
                        "Rule of Proximity: Neither A nor B + Verb (verb agrees with B)",
                        "Parenthetical additions: Subject + (as well as / together with / along with) + Verb (verb agrees with Subject)",
                        "Indefinite pronouns: 'Each', 'Every', 'Everyone', 'Neither', 'Either' take Singular verbs",
                        "Past Perfect: Earlier Past = had + V3 | Later Past = V2 (Simple Past)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nChoose the grammatically correct sentence:\n(A) The quality of these mangoes were not satisfactory.\n(B) The quality of these mangoes was not satisfactory.",
                        "solution": "Step 1: Identify the true subject of the sentence.\nStep 2: The sentence contains prepositional phrase 'of these mangoes'. Mangoes is the object of preposition, not the subject.\nStep 3: The actual subject is 'The quality' (singular, uncountable noun).\nStep 4: Singular subject requires singular verb 'was', not plural 'were'.\nFinal Answer: (B) The quality of these mangoes was not satisfactory"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nFill in the blanks with the correct verb forms:\n'By the time the ambulance ________ (arrive), the patient ________ (pass away).'",
                        "solution": "Step 1: Recognize two related past actions: the arrival of the ambulance and the death of the patient.\nStep 2: The patient passed away BEFORE the ambulance arrived.\nStep 3: The earlier past action takes the Past Perfect tense (had + past participle) => 'had passed away'.\nStep 4: The later past action takes the Simple Past tense (V2) => 'arrived'.\nSentence: 'By the time the ambulance arrived, the patient had passed away.'\nFinal Answer: arrived, had passed away"
                }
        },
        "ver-2": {
                "title": "Sentence Correction & Spotting Errors",
                "domain": "Verbal Ability",
                "whatToLearn": "Sentence correction questions evaluate your ability to identify grammatical flaws in written English. You must check: (1) Subject-Verb Agreement, (2) Pronoun Antecedent agreement, (3) Misplaced and Dangling Modifiers, (4) Faulty Parallelism in lists, (5) Redundancy, and (6) Correct prepositional idioms ('comply with', 'abstain from', 'different from').",
                "concept": "Dangling Modifier: A descriptive phrase must be placed immediately adjacent to the noun it modifies (e.g. 'Walking in the park, a snake bit him' implies the snake was walking in the park). Parallelism: In a series connected by coordinating conjunctions (and, or), elements must share identical grammatical form (e.g. 'He likes swimming, running, and to cycle' should be 'swimming, running, and cycling').",
                "formulas": [
                        "Parallelism Rule: Gerund with Gerund (running, swimming, reading)",
                        "Dangling Modifier Check: Ensure the subject doing the participle action is stated right after the comma",
                        "Preposition Pairs: 'prefer X to Y' (NOT 'prefer X than Y') | 'different from' (NOT 'different than')"
                ],
                "example1": {
                        "problem": "Foundation Example:\nIdentify the error in: 'She is more smarter than her elder sister.'",
                        "solution": "Step 1: Examine the comparative adjective 'smarter'.\nStep 2: 'Smart' becomes comparative by adding suffix '-er' => 'smarter'.\nStep 3: Using 'more' alongside an '-er' comparative adjective is a double comparative error.\nStep 4: Correction: 'She is smarter than her elder sister.'\nFinal Answer: Remove 'more'"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nSpot the error in the sentence:\n'Being a stormy night (A) / the sailor decided (B) / not to venture out into the sea (C) / No Error (D)'",
                        "solution": "Step 1: Examine part (A): 'Being a stormy night'. This is a participial modifier.\nStep 2: Look at the main subject in part (B): 'the sailor'.\nStep 3: As written, the sentence implies that 'the sailor was a stormy night' (Dangling modifier).\nStep 4: Since weather/nature requires an impersonal dummy pronoun 'it', part (A) must be corrected to: 'It being a stormy night'.\nFinal Answer: Error in Part (A)"
                }
        },
        "ver-3": {
                "title": "Reading Comprehension & Critical Passages",
                "domain": "Verbal Ability",
                "whatToLearn": "Reading Comprehension (RC) tests reading speed, vocabulary in context, and analytical comprehension under strict time constraints. Master: identifying the Main Idea / Central Theme, distinguishing explicit facts from implicit inferences, author's tone (objective, skeptical, didactic, critical), and answering negative factual questions ('All of the following EXCEPT...').",
                "concept": "Effective RC Strategy: Read questions first to identify target keywords before diving into the passage. Skim the first and last sentences of each paragraph to construct a mental road-map. Avoid choosing options that are factually true in real life but NOT stated or supported in the text.",
                "formulas": [
                        "Main Idea = Topic + Author's Stance/Contention",
                        "Inference = Must be 100% supported by passage facts without assumptions",
                        "Tone Types: Laudatory (praising), Critical (fault-finding), Objective (factual/neutral), Cynical (distrustful)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nA passage discusses how artificial intelligence automates repetitive administrative duties while cautioning that ethical safeguards and algorithmic biases require strict human oversight. What is the author's primary purpose?\n(A) To demand an immediate ban on AI\n(B) To present a balanced view of AI's productivity gains alongside required ethical governance\n(C) To argue that AI has zero practical utility",
                        "solution": "Step 1: The author acknowledges positive utility ('automates repetitive administrative duties').\nStep 2: The author also presents caveats ('ethical safeguards, algorithmic biases').\nStep 3: Option (A) and (C) are extreme and contradict the text.\nStep 4: Option (B) accurately reflects the balanced duality presented in the passage.\nFinal Answer: (B)"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nIn an RC passage on economic inflation, the author notes: 'While corporate revenues soared to historic zeniths on paper, real purchasing power of the median household shrank precipitously.' What does the author imply by the word 'zeniths'?",
                        "solution": "Step 1: Identify context: 'soared to historic zeniths on paper'.\nStep 2: 'Soared' indicates upward trajectory to the highest peak.\nStep 3: Zenith literally means the highest point or peak reached by a celestial or metric body.\nStep 4: The author implies corporate paper revenues reached their all-time highest record peaks.\nFinal Answer: Highest peaks / apex"
                }
        },
        "ver-4": {
                "title": "Para Jumbles & Sentence Ordering",
                "domain": "Verbal Ability",
                "whatToLearn": "Para Jumbles (Sentence Rearrangement) test organizational logic. You are given 4-5 jumbled sentences and must reconstruct the coherent paragraph. Master: identifying the opening sentence (independent noun introduction, no standalone pronouns), spotting mandatory pairs (Noun -> Pronoun, Cause -> Effect, Acronym -> Full form), and recognizing transition connectors (However, Consequently, Furthermore).",
                "concept": "Opening Sentence Rule: An opening sentence introduces the central subject and does not begin with transition adverbs (However, Therefore) or relative pronouns (These, It, They). Mandatory Pairs: If Sentence A mentions 'World Health Organization (WHO)', and Sentence B refers to 'The organization' or 'it', pair A-B is mandatory.",
                "formulas": [
                        "Mandatory Pair Clues: Full name -> Acronym | Cause -> Effect | Chronology (Past -> Present -> Future)",
                        "Opening Sentence: Standalone introduction without unresolved reference pronouns",
                        "Closing Sentence: Concluding observation, consequence, or future outlook"
                ],
                "example1": {
                        "problem": "Foundation Example:\nArrange the sentences in logical sequence:\n(A) However, renewable energy adoption has accelerated rapidly in recent years.\n(B) Fossil fuels have long been the primary driver of global industrial progress.\n(C) This transition is crucial for curbing global greenhouse emissions.\n(D) But their environmental cost in carbon emissions has become unsustainable.",
                        "solution": "Step 1: Find the opening sentence: Sentence (B) introduces the broad topic (Fossil fuels driving progress). (A), (C), and (D) begin with transition words.\nStep 2: Sentence (D) presents the drawback of fossil fuels ('But their environmental cost...'). So B-D is a pair.\nStep 3: Sentence (A) introduces the counter-alternative ('However, renewable energy adoption...'). D-A transition.\nStep 4: Sentence (C) refers to renewable adoption ('This transition is crucial...'). A-C is a pair.\nStep 5: Sequence: B -> D -> A -> C.\nFinal Answer: B - D - A - C"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nArrange the jumbled sentences:\n(P) He then joined the space agency as a research scientist.\n(Q) Dr. APJ Abdul Kalam was born in Rameswaram, Tamil Nadu.\n(R) There, he spearheaded the indigenous development of India's satellite launch vehicle.\n(S) After completing his aerospace engineering degree at MIT Madras, he sought a career in aviation.",
                        "solution": "Step 1: Identify opening sentence: Sentence (Q) introduces the subject with full name and birthplace.\nStep 2: Follow biographical timeline: After birth/childhood comes university graduation => (S) discusses graduating from MIT Madras.\nStep 3: After graduating, he joined the space agency => (P) ('He then joined the space agency...').\nStep 4: (R) refers to the space agency ('There, he spearheaded...').\nStep 5: Coherent biographical chronology: Q -> S -> P -> R.\nFinal Answer: Q - S - P - R"
                }
        },
        "ver-5": {
                "title": "Vocabulary: Synonyms, Antonyms, Analogies",
                "domain": "Verbal Ability",
                "whatToLearn": "Vocabulary screening questions test lexical precision. Learn words via Latin and Greek root words (e.g. 'bene' = good, 'mal' = bad, 'chron' = time, 'loqu' = talk), prefixes, and suffixes. In Word Analogies, determine the exact relationship between the primary pair (Worker : Tool, Cause : Effect, Part : Whole, Degree of Intensity) and select the option with identical relational structure.",
                "concept": "Root words decode unfamiliar vocabulary: 'Benefactor' (good-doer), 'Malevolent' (wishing evil), 'Loquacious' (talkative), 'Anachronistic' (out of proper chronological time). In analogies: If A : B is 'Noun : Tool' (Surgeon : Scalpel), eliminate options that reverse the order (e.g. Chisel : Sculptor).",
                "formulas": [
                        "Root 'BENE' = Good | 'MAL' = Bad | 'LUC/LUM' = Light | 'CHRON' = Time",
                        "Root 'PATHY' = Feeling (Sympathy, Apathy, Antipathy) | 'SOMN' = Sleep",
                        "Analogy Strategy: Form a clear bridging sentence connecting Word 1 and Word 2"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhat is the closest synonym for the word 'EPHEMERAL'?\n(A) Permanent\n(B) Transient / Fleeting\n(C) Huge\n(D) Boring",
                        "solution": "Step 1: Analyze root: 'Ephemeral' originates from Greek 'ephemeros' meaning lasting only a day.\nStep 2: Definition: Lasting for a very short time, momentary, transient.\nStep 3: Option (A) Permanent is the exact antonym.\nStep 4: Option (B) Transient / Fleeting captures the precise meaning.\nFinal Answer: (B) Transient / Fleeting"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nComplete the analogy:\nTHERMOMETER : TEMPERATURE :: BAROMETER : ?\n(A) Humidity\n(B) Atmospheric Pressure\n(C) Wind Speed\n(D) Earthquake Intensity",
                        "solution": "Step 1: Form a bridge sentence: 'A Thermometer is a scientific instrument designed to measure Temperature.'\nStep 2: Apply the identical relationship to Barometer: 'A Barometer is an instrument designed to measure ______.'\nStep 3: A barometer measures Atmospheric Pressure.\n(Humidity is measured by a Hygrometer; Wind Speed by an Anemometer; Earthquake by a Seismograph).\nFinal Answer: (B) Atmospheric Pressure"
                }
        },
        "ver-6": {
                "title": "Idioms, Phrases & Contextual Usage",
                "domain": "Verbal Ability",
                "whatToLearn": "Idiomatic expressions test natural language fluency in placement screening and communication evaluations. You must learn the most common corporate and academic idioms (e.g., 'burn the midnight oil', 'bite the bullet', 'spill the beans', 'devil's advocate', 'cost an arm and a leg') and know how they function in context without taking their literal meaning.",
                "concept": "An idiom's figurative meaning cannot be deduced from the literal definitions of its individual words. For example, 'kick the bucket' means to die, having nothing to do with physical buckets. Phrasal verbs combine verbs with prepositions to generate new meanings: 'call off' (cancel), 'give up' (quit), 'look into' (investigate).",
                "formulas": [
                        "Bite the bullet = To endure a painful or unavoidable situation with courage",
                        "Devil's advocate = To argue against an idea simply to test its validity",
                        "Burn bridges = To permanently sever relationships with no possibility of return",
                        "Take with a grain of salt = To view information with skepticism"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhat does the idiom 'Bite the bullet' mean in common English usage?\n(A) To face a difficult situation with fortitude\n(B) To eat quickly\n(C) To shoot accurately\n(D) To start a war",
                        "solution": "Step 1: The phrase originates from soldiers biting on lead bullets to cope with surgical pain on the battlefield.\nStep 2: In modern figurative English, it means to bravely face an unpleasant, painful, or difficult circumstance that cannot be avoided.\nFinal Answer: (A) To face a difficult situation with fortitude"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nSelect the phrase that best fits the sentence:\n'The executive committee decided to ________ the meeting until next Monday due to the lack of quorum.'\n(A) call off\n(B) put off\n(C) carry out\n(D) break out",
                        "solution": "Step 1: Understand the context: The meeting is being delayed to next Monday, not permanently cancelled.\nStep 2: 'Call off' means to cancel completely.\nStep 3: 'Put off' means to postpone or defer to a later date.\nStep 4: 'Carry out' means to execute; 'Break out' means to start suddenly.\nStep 5: The correct phrasal verb for postponement is 'put off'.\nFinal Answer: (B) put off"
                }
        },
        "dsa-1": {
                "title": "Time & Space Complexity (Big-O)",
                "domain": "Coding / DSA",
                "whatToLearn": "Mastering Asymptotic Notation (Big-O, Big-Omega, Big-Theta) is the very first technical question interviewers ask across Google, Amazon, TCS Digital, and Microsoft. You must be able to analyze nested loops, recursive divide-and-conquer recurrences using Master Theorem, amortized complexity (e.g. dynamic array resizing), and memory stack space during deep recursion.",
                "concept": "Big-O characterizes the upper bound on runtime growth relative to input size N. Growth hierarchy: O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!). In loops: if the index multiplies/divides (i *= 2), complexity is O(log N). If two independent loops run, add them O(N + M). If nested, multiply them O(N × M). Master Theorem for T(N) = aT(N/b) + O(N^d): compares log_b(a) with d.",
                "formulas": [
                        "Complexity Hierarchy: O(1) < O(log N) < O(sqrt(N)) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!)",
                        "Master Theorem: If a > b^d => O(N^(log_b a)) | If a = b^d => O(N^d log N) | If a < b^d => O(N^d)",
                        "Binary Search: O(log N) time, O(1) space",
                        "Merge Sort: O(N log N) time, O(N) auxiliary space",
                        "Quick Sort: Average O(N log N), Worst-case O(N^2)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhat is the time complexity of the following code snippet?\n```c\nfor (int i = 1; i <= N; i *= 2) {\n    printf(\"%d\", i);\n}\n```",
                        "solution": "Step 1: Trace values taken by loop counter i:\n  Iteration 1: i = 1\n  Iteration 2: i = 2\n  Iteration 3: i = 4 = 2^2\n  Iteration k: i = 2^(k-1)\nStep 2: Loop terminates when 2^(k-1) > N.\nStep 3: Take log base 2 of both sides: k - 1 ≈ log2(N) => k ≈ log2(N) + 1.\nStep 4: The number of executed steps is proportional to log2(N).\nFinal Answer: O(log N)"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nFind the tight Big-O time complexity of the recurrence relation:\nT(N) = 2T(N / 2) + O(N) with base case T(1) = 1 (Standard Merge Sort recurrence).",
                        "solution": "Step 1: Match against Master Theorem form T(N) = aT(N/b) + O(N^d).\n  Here a = 2 (subproblems), b = 2 (division factor), and work per step is O(N) => d = 1.\nStep 2: Calculate log_b(a) = log2(2) = 1.\nStep 3: Compare log_b(a) with d: Here log_b(a) = 1 and d = 1. They are equal!\nStep 4: Master Theorem Case 2 applies when a = b^d:\n  T(N) = O(N^d × log N) = O(N^1 × log N) = O(N log N).\nFinal Answer: O(N log N)"
                }
        },
        "dsa-2": {
                "title": "Arrays: Two Pointers & Sliding Window",
                "domain": "Coding / DSA",
                "whatToLearn": "Two Pointers and Sliding Window are the highest frequency array patterns asked in tech coding assessments. Two Pointers reduces quadratic O(N^2) brute force checks to linear O(N) by coordinating two index variables (start & end, or slow & fast). Sliding window manages a dynamic or fixed contiguous window of elements to track maximum sums, unique frequencies, or target substrings.",
                "concept": "Two Pointers (Sorted Array): If sum < target, increment left pointer to increase sum; if sum > target, decrement right pointer. Sliding Window: Maintain 'left' and 'right' bounds. Expand 'right' to add elements until constraint is met or violated. Contract 'left' to shrink window and find minimal/maximal valid lengths.",
                "formulas": [
                        "Two Sum Sorted: left=0, right=n-1. Move left++ if sum < target, right-- if sum > target",
                        "Sliding Window Sum: new_sum = prev_sum + arr[right] - arr[left - 1]",
                        "Kadane's Algorithm for max subarray sum: current_max = max(arr[i], current_max + arr[i])"
                ],
                "example1": {
                        "problem": "Foundation Example:\nGiven sorted array [2, 7, 11, 15] and target = 9, find the 1-based indices of the two numbers that sum up to 9.",
                        "solution": "Step 1: Initialize left = 0 (val 2), right = 3 (val 15).\nStep 2: sum = arr[left] + arr[right] = 2 + 15 = 17.\nStep 3: Since 17 > target (9), decrement right to 2 (val 11).\nStep 4: sum = arr[left] + arr[right] = 2 + 11 = 13. Still > 9, decrement right to 1 (val 7).\nStep 5: sum = 2 + 7 = 9. Match found!\nStep 6: Indices are 0 and 1 (1-based: indices 1 and 2).\nComplexity: O(N) time and O(1) space.\nFinal Answer: [1, 2]"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nFind the maximum sum of any contiguous subarray of size K = 3 in array [2, 1, 5, 1, 3, 2].",
                        "solution": "Step 1: Compute sum of first window of size K=3:\n  Window 0..2: 2 + 1 + 5 = 8. Initialize max_sum = 8.\nStep 2: Slide window by adding incoming element and subtracting outgoing element:\n  Window 1..3: Add arr[3]=1, subtract arr[0]=2 => 8 + 1 - 2 = 7. max_sum = max(8, 7) = 8.\n  Window 2..4: Add arr[4]=3, subtract arr[1]=1 => 7 + 3 - 1 = 9. max_sum = max(8, 9) = 9.\n  Window 3..5: Add arr[5]=2, subtract arr[2]=5 => 9 + 2 - 5 = 6. max_sum = max(9, 6) = 9.\nStep 3: All windows processed in O(N) time.\nFinal Answer: 9"
                }
        },
        "dsa-3": {
                "title": "Strings & Pattern Matching",
                "domain": "Coding / DSA",
                "whatToLearn": "String manipulation questions test ASCII conversions, palindrome checks, anagram detection, string reversal, and pattern matching. In technical interviews (Amazon, TCS, Infosys), you must know how to use frequency arrays (int count[26]), avoid inefficient string concatenations (which run in O(N^2) in Java/Python), and understand the KMP (Knuth-Morris-Pratt) algorithm for pattern searching.",
                "concept": "Strings are contiguous char arrays. Anagrams have identical character frequency counts. Palindrome check compares s[left] and s[right] towards the center. The Longest Prefix Suffix (LPS) array in KMP allows bypassing redundant character comparisons when pattern matching fails.",
                "formulas": [
                        "Character Index Mapping: index = char - 'a' (for lowercase 0 to 25)",
                        "Valid Anagram: Frequency hash tables must match exactly in O(N) time",
                        "KMP Pattern Matching: O(N + M) time compared to brute force O(N × M)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nDetermine if string s1 = 'listen' and s2 = 'silent' are anagrams of each other.",
                        "solution": "Step 1: Check length equality: length(s1) = 6, length(s2) = 6. Equal.\nStep 2: Initialize integer frequency array of size 26 with zeros.\nStep 3: Iterate through both strings: increment for char in s1, decrement for char in s2.\n  'l', 'i', 's', 't', 'e', 'n' each get +1 and then -1.\nStep 4: Check if all entries in frequency array are 0.\nStep 5: All 26 counts are 0, confirming identical character distributions.\nComplexity: O(N) time and O(1) space.\nFinal Answer: True (They are anagrams)"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nFind the length of the Longest Palindromic Substring in string 'babad'.",
                        "solution": "Step 1: Use 'Expand Around Center' approach. There are 2N - 1 possible centers (single characters for odd lengths, spaces between for even lengths).\nStep 2: Test center at 'b' (index 0) => 'b' (len 1).\nStep 3: Test center at 'a' (index 1) => expands to 'b-a-b' (len 3).\nStep 4: Test center at 'b' (index 2) => expands to 'a-b-a' (len 3).\nStep 5: Check even centers => no even palindromes longer than 1.\nStep 6: Maximum palindrome length found is 3 ('bab' or 'aba').\nComplexity: O(N^2) time and O(1) auxiliary space.\nFinal Answer: 3 ('bab' or 'aba')"
                }
        },
        "dsa-4": {
                "title": "Linked Lists (Singly, Doubly, Fast & Slow)",
                "domain": "Coding / DSA",
                "whatToLearn": "Linked Lists test pointer/reference manipulation. You must master: reversing a singly linked list in-place, detecting and finding the start of a cycle (Floyd's Tortoise and Hare algorithm), finding the middle node in one pass, merging two sorted lists, and removing the nth node from the end using two pointers with a dummy head node.",
                "concept": "Each Node contains a value and a 'next' pointer (and 'prev' in Doubly Linked Lists). Unlike arrays, linked lists have non-contiguous memory, enabling O(1) insertions/deletions at known pointers, but O(N) linear access time. Fast & Slow Pointer (Floyd's Algorithm): Slow pointer moves 1 step; Fast pointer moves 2 steps. If they meet, a cycle exists.",
                "formulas": [
                        "In-place Reversal: prev = null, curr = head; while (curr) { next = curr.next; curr.next = prev; prev = curr; curr = next; }",
                        "Middle of list: slow = head, fast = head; while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }",
                        "Cycle start point: Reset slow to head; move slow and fast 1 step each until they collide."
                ],
                "example1": {
                        "problem": "Foundation Example:\nGiven linked list: 1 -> 2 -> 3 -> 4 -> 5 -> NULL, write the algorithm to reverse it in-place in O(N) time and O(1) space.",
                        "solution": "Step 1: Initialize three pointers: prev = NULL, curr = head, next = NULL.\nStep 2: Loop while curr is not NULL:\n  next = curr.next; (store next node)\n  curr.next = prev; (reverse the pointer)\n  prev = curr;      (advance prev)\n  curr = next;      (advance curr)\nStep 3: When curr reaches NULL, prev points to the new head (node 5).\nStep 4: Return prev.\nFinal List: 5 -> 4 -> 3 -> 2 -> 1 -> NULL.\nFinal Answer: 5 -> 4 -> 3 -> 2 -> 1 -> NULL"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nA linked list has a cycle. Why does Floyd's Tortoise and Hare algorithm guarantee detection in O(N) time, and how do you find the exact node where the cycle begins?",
                        "solution": "Step 1: Set slow = head, fast = head. Advance slow by 1 step and fast by 2 steps.\nStep 2: Inside a cycle of length C, the distance between fast and slow decreases by 1 node in each iteration. Hence, they MUST collide within C steps (O(N) time).\nStep 3: Let distance from head to cycle entrance be L1, and entrance to collision point be L2.\n  Distance traveled by slow = L1 + L2.\n  Distance traveled by fast = L1 + L2 + nC = 2(L1 + L2) => L1 = nC - L2.\nStep 4: To find entrance: Keep fast at collision point, reset slow to head. Advance BOTH one step at a time.\nStep 5: They will meet exactly at the cycle entrance node after L1 steps!\nFinal Answer: Collide at 2x speed; reset one pointer to head and move at 1x to meet at cycle entrance."
                }
        },
        "dsa-5": {
                "title": "Stacks, Queues & Monotonic Deque",
                "domain": "Coding / DSA",
                "whatToLearn": "Stacks (LIFO) and Queues (FIFO) are foundational abstract data types. In placements, master: Balanced Parentheses validation, evaluating Postfix/Infix expressions, implementing Queues using Stacks, Next Greater Element (Monotonic Stack), and Sliding Window Maximum using Monotonic Deque.",
                "concept": "Stack: Last-In-First-Out (Push, Pop in O(1)). Queue: First-In-First-Out (Enqueue, Dequeue in O(1)). Monotonic Stack maintains elements in strictly increasing or decreasing order. Whenever a new incoming element violates monotonicity, elements are popped, allowing O(N) resolution of Next Greater/Smaller element problems.",
                "formulas": [
                        "Stack Operations: push(x), pop(), top(), isEmpty() — all O(1)",
                        "Queue Operations: push(x), pop(), front() — all O(1)",
                        "Next Greater Element: Traverse right to left; pop while stack.top() <= arr[i]; top is next greater; push arr[i]."
                ],
                "example1": {
                        "problem": "Foundation Example:\nGiven string s = '{[()]}', determine if the bracket sequence is valid and balanced using a Stack.",
                        "solution": "Step 1: Initialize an empty stack.\nStep 2: Traverse characters from left to right:\n  - '{' is opening bracket -> push to stack: ['{']\n  - '[' is opening bracket -> push to stack: ['{', '[']\n  - '(' is opening bracket -> push to stack: ['{', '[', '(']\n  - ')' is closing bracket -> check stack.top() = '('. Matches! Pop '('. Stack: ['{', '[']\n  - ']' is closing bracket -> check stack.top() = '['. Matches! Pop '['. Stack: ['{']\n  - '}' is closing bracket -> check stack.top() = '{'. Matches! Pop '{'. Stack: []\nStep 3: End of string reached and stack is empty. Sequence is valid.\nFinal Answer: Valid (True)"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nGiven array [4, 5, 2, 25], find the Next Greater Element (NGE) for every element in O(N) time.",
                        "solution": "Step 1: Traverse from right to left (index 3 down to 0) using a monotonic stack:\nStep 2: For 25 (index 3):\n  Stack is empty => NGE is -1. Push 25. Stack: [25]\nStep 3: For 2 (index 2):\n  Stack top is 25 (> 2) => NGE is 25. Push 2. Stack: [25, 2]\nStep 4: For 5 (index 1):\n  Stack top is 2 (<= 5) => pop 2.\n  Next top is 25 (> 5) => NGE is 25. Push 5. Stack: [25, 5]\nStep 5: For 4 (index 0):\n  Stack top is 5 (> 4) => NGE is 5. Push 4. Stack: [25, 5, 4]\nStep 6: Result array: [5, 25, 25, -1].\nComplexity: O(N) time because each element is pushed and popped at most once.\nFinal Answer: [5, 25, 25, -1]"
                }
        },
        "dsa-6": {
                "title": "Binary Trees & BST Traversals",
                "domain": "Coding / DSA",
                "whatToLearn": "Binary Trees and Binary Search Trees (BST) are the core of technical coding rounds at product firms (Amazon, Microsoft) and high-package service tracks. Master: DFS Traversals (Inorder: Left-Root-Right, Preorder: Root-Left-Right, Postorder: Left-Right-Root), BFS / Level Order Traversal using a Queue, Maximum Depth / Height, Checking if balanced, Lowest Common Ancestor (LCA), and BST search/insert operations.",
                "concept": "Binary Tree: Each node has at most 2 children. Binary Search Tree (BST): For every node, all left subtree values < Root value < all right subtree values. Crucial placement fact: Inorder Traversal of a BST ALWAYS yields keys in strictly ascending sorted order! Height of balanced tree is O(log N); skewed tree height is O(N).",
                "formulas": [
                        "Inorder Traversal: Left -> Root -> Right (Sorted order for BST)",
                        "Preorder: Root -> Left -> Right | Postorder: Left -> Right -> Root",
                        "Max Depth of Tree = 1 + max(depth(left), depth(right))",
                        "LCA in BST: If both keys < root, go left; if both keys > root, go right; else root is LCA."
                ],
                "example1": {
                        "problem": "Foundation Example:\nGiven BST with keys: Root = 10, Left child = 5, Right child = 15. What is the Inorder Traversal sequence?",
                        "solution": "Step 1: Inorder follows: Visit Left Subtree -> Visit Root -> Visit Right Subtree.\nStep 2: Visit left subtree of 10: Node 5.\nStep 3: Visit root node: Node 10.\nStep 4: Visit right subtree of 10: Node 15.\nStep 5: Sequence is: 5, 10, 15 (Ascending sorted order!).\nFinal Answer: [5, 10, 15]"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nFind the Lowest Common Ancestor (LCA) of nodes 2 and 8 in a BST with root 6, whose left child is 2 (with children 0, 4) and right child is 8 (with children 7, 9).",
                        "solution": "Step 1: Start at root = 6.\nStep 2: Compare target values (2 and 8) with current node value (6):\n  Target 1 (val 2) < 6 (resides in left subtree).\n  Target 2 (val 8) > 6 (resides in right subtree).\nStep 3: Since one node lies in the left subtree and the other lies in the right subtree, they diverge at node 6.\nStep 4: Therefore, node 6 is the Lowest Common Ancestor.\nComplexity: O(H) where H is tree height (O(log N) for balanced BST).\nFinal Answer: Node 6"
                }
        },
        "dsa-7": {
                "title": "Recursion & Backtracking",
                "domain": "Coding / DSA",
                "whatToLearn": "Recursion and Backtracking form the algorithmic backbone for exhaustive combinatorial search. Master: identifying Base Cases to prevent stack overflow, visualizing recursion trees, Subsets / Power Set generation, Permutations of an array, N-Queens problem, and Sudoku solver. Backtracking follows the pattern: Choose -> Explore (Recurse) -> Unchoose (Backtrack).",
                "concept": "Recursion solves a problem by breaking it into identical smaller subproblems. Backtracking optimizes brute-force recursion by abandoning a candidate path ('pruning') as soon as it violates problem constraints. State space is reverted back to the previous state upon function return.",
                "formulas": [
                        "Backtracking Template: if (base_case) { add_solution; return; }\nfor (choice : choices) { make_choice; recurse(); undo_choice; }",
                        "Number of Subsets of N items = 2^N",
                        "Number of Permutations of N items = N!"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWrite the recursive function to compute the Nth Fibonacci number, where F(0) = 0 and F(1) = 1.",
                        "solution": "Step 1: Identify base cases: if (N == 0) return 0; if (N == 1) return 1;\nStep 2: Recursive relation: F(N) = F(N - 1) + F(N - 2);\nStep 3: Tracing F(4):\n  F(4) = F(3) + F(2)\n  F(3) = F(2) + F(1) = (1 + 0) + 1 = 2\n  F(4) = 2 + 1 = 3.\nTime Complexity: O(2^N) without memoization.\nFinal Answer: F(4) = 3"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nGenerate all subsets (Power Set) of [1, 2]. Show the recursion tree and backtracking step.",
                        "solution": "Step 1: Decision at each index: Either INCLUDE the element or EXCLUDE it.\nStep 2: Start at index 0 with current = []:\n  - Exclude 1: current = []\n    - Exclude 2: current = [] => Found subset: []\n    - Include 2: current = [2] => Found subset: [2]\n  - Include 1: current = [1]\n    - Exclude 2: current = [1] => Found subset: [1]\n    - Include 2: current = [1, 2] => Found subset: [1, 2]\nStep 3: Backtracking occurs by popping the last element added when returning from recursive call.\nTotal subsets = 2^2 = 4: [[], [2], [1], [1, 2]].\nFinal Answer: [[], [2], [1], [1, 2]]"
                }
        },
        "dsa-8": {
                "title": "Dynamic Programming (1D & 2D)",
                "domain": "Coding / DSA",
                "whatToLearn": "Dynamic Programming (DP) is the premier topic that separates 10+ LPA product placement candidates. Master: identifying Overlapping Subproblems and Optimal Substructure, Top-Down Memoization vs Bottom-Up Tabulation, 1D DP (Climbing Stairs, House Robber, Coin Change, LIS), and 2D DP (0/1 Knapsack, Longest Common Subsequence - LCS, Edit Distance).",
                "concept": "DP avoids recomputing identical states by caching their results in a table. Steps to solve DP: 1. Define state (e.g. dp[i] = max profit up to day i). 2. Formulate recurrence relation. 3. Identify base cases. 4. Determine evaluation order. 5. Optimize space complexity if only previous states are needed.",
                "formulas": [
                        "0/1 Knapsack: dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w - wt[i-1]])",
                        "LCS: if (s1[i]==s2[j]) dp[i][j] = 1 + dp[i-1][j-1] else max(dp[i-1][j], dp[i][j-1])",
                        "Climbing Stairs: dp[i] = dp[i - 1] + dp[i - 2]",
                        "Space Optimization: 2D table can often be compressed to 1D array of size W"
                ],
                "example1": {
                        "problem": "Foundation Example:\nYou can climb 1 or 2 steps at a time. How many distinct ways can you reach the top of a staircase of N = 4 steps?",
                        "solution": "Step 1: Define dp[i] = number of distinct ways to reach step i.\nStep 2: Base cases: dp[1] = 1 (way: 1), dp[2] = 2 (ways: 1+1, 2).\nStep 3: Recurrence: To reach step i, you could have come from step (i-1) via 1 step, or step (i-2) via 2 steps => dp[i] = dp[i-1] + dp[i-2].\nStep 4: Compute:\n  dp[3] = dp[2] + dp[1] = 2 + 1 = 3\n  dp[4] = dp[3] + dp[2] = 3 + 2 = 5.\nFinal Answer: 5 ways"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nFind the length of the Longest Common Subsequence (LCS) between strings s1 = 'ABCDE' and s2 = 'ACE'.",
                        "solution": "Step 1: Construct 2D DP table of size (5+1) × (3+1).\nStep 2: Recurrence:\n  If s1[i-1] == s2[j-1]: dp[i][j] = 1 + dp[i-1][j-1]\n  Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\nStep 3: Trace matching characters:\n  - 'A' matches 'A' -> len = 1\n  - 'C' matches 'C' -> len = 1 + 1 = 2\n  - 'E' matches 'E' -> len = 2 + 1 = 3\nStep 4: The common characters in order are 'A', 'C', 'E'.\nComplexity: O(M × N) time and O(M × N) space.\nFinal Answer: 3 ('ACE')"
                }
        },
        "dsa-9": {
                "title": "Graph Algorithms: BFS, DFS, Dijkstra",
                "domain": "Coding / DSA",
                "whatToLearn": "Graphs model complex networks (social media, road maps, web crawlers). Master: Graph representations (Adjacency Matrix vs Adjacency List), Breadth-First Search (BFS) for shortest path in unweighted graphs, Depth-First Search (DFS) for cycle detection, Topological Sorting (Kahn's algorithm) for dependency resolution, and Dijkstra's Algorithm for shortest path in weighted non-negative graphs.",
                "concept": "Graph G = (V, E). Adjacency List uses O(V + E) space; Adjacency Matrix uses O(V^2). BFS uses a Queue to traverse level-by-level (finds shortest path in unweighted graph). DFS uses a Stack (or recursion) to explore as deep as possible. Dijkstra uses a Priority Queue (Min-Heap) and relaxes edges with d[v] = min(d[v], d[u] + weight(u,v)).",
                "formulas": [
                        "BFS Time: O(V + E) | Space: O(V) using Queue",
                        "DFS Time: O(V + E) | Space: O(V) recursion stack",
                        "Dijkstra Time: O((V + E) log V) using Min-Heap priority queue",
                        "Topological Sort valid only on Directed Acyclic Graphs (DAG)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhat data structure is used to implement Breadth-First Search (BFS) and what is its primary use case in unweighted graphs?",
                        "solution": "Step 1: BFS explores neighboring vertices before moving to the next distance level.\nStep 2: It requires a First-In-First-Out (FIFO) Queue to track discovery order.\nStep 3: Visited array is maintained to prevent infinite cycles.\nStep 4: Primary Use Case: In unweighted graphs, BFS is guaranteed to find the shortest path (minimum number of edges) between start and destination.\nFinal Answer: Queue; Shortest Path in unweighted graphs"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nGiven a directed graph with 4 courses 0, 1, 2, 3 and prerequisites [1, 0] (0 must be taken before 1) and [2, 0], [3, 1], [3, 2]. Find a valid order to complete all courses (Topological Sort).",
                        "solution": "Step 1: Build Adjacency List and Indegree array:\n  0 -> [1, 2] | 1 -> [3] | 2 -> [3] | 3 -> []\n  Indegrees: node 0: 0, node 1: 1, node 2: 1, node 3: 2.\nStep 2: Kahn's Algorithm: Enqueue vertices with indegree = 0:\n  Queue: [0]\nStep 3: Dequeue 0 -> Add to order: [0]. Decrement indegrees of neighbors 1 and 2:\n  Indegree of 1 becomes 0 -> Enqueue 1\n  Indegree of 2 becomes 0 -> Enqueue 2. Queue: [1, 2]\nStep 4: Dequeue 1 -> Add to order: [0, 1]. Decrement indegree of 3 (becomes 1).\nStep 5: Dequeue 2 -> Add to order: [0, 1, 2]. Decrement indegree of 3 (becomes 0 -> Enqueue 3).\nStep 6: Dequeue 3 -> Add to order: [0, 1, 2, 3].\nFinal Answer: [0, 1, 2, 3] (or [0, 2, 1, 3])"
                }
        },
        "sql-1": {
                "title": "SELECT, WHERE, ORDER BY & LIMIT",
                "domain": "SQL",
                "whatToLearn": "Basic query construction is tested in every technical interview. Learn: Exact SQL query execution order (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT), filtering conditions (LIKE with '%' and '_', IN, BETWEEN, IS NULL), sorting (ASC/DESC), and pagination using LIMIT and OFFSET.",
                "concept": "Crucial Interview Knowledge: SQL does NOT execute top-to-bottom. The SELECT clause is executed almost LAST. Therefore, column aliases defined in SELECT CANNOT be referenced in the WHERE clause! Pattern matching: '%' matches zero or more characters; '_' matches exactly one character.",
                "formulas": [
                        "Query Logical Execution Order: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT",
                        "LIKE Operators: 'A%' starts with A | '%A' ends with A | '%A%' contains A | '_A%' second letter is A",
                        "Null check: WHERE column IS NULL (NOT column = NULL)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWrite a SQL query to retrieve employee names and salaries for employees earning between ₹50,000 and ₹80,000, ordered by salary descending.",
                        "solution": "Syntax:\nSELECT emp_name, salary\nFROM Employees\nWHERE salary BETWEEN 50000 AND 80000\nORDER BY salary DESC;\nExplanation: BETWEEN is inclusive of both boundary values (50000 and 80000). ORDER BY DESC sorts highest to lowest.\nFinal Answer: Verified SQL Query"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nWrite a query to find the 2nd highest salary from the Employee table using LIMIT and OFFSET.",
                        "solution": "Syntax:\nSELECT DISTINCT salary\nFROM Employee\nORDER BY salary DESC\nLIMIT 1 OFFSET 1;\nExplanation: DISTINCT prevents duplicate salaries from taking multiple positions. ORDER BY salary DESC puts the highest salary at index 0. LIMIT 1 OFFSET 1 skips 1 record (the highest) and returns the next single record (the 2nd highest).\nFinal Answer: Verified SQL Query"
                }
        },
        "sql-2": {
                "title": "INNER, LEFT, RIGHT & FULL OUTER JOINS",
                "domain": "SQL",
                "whatToLearn": "JOINs are tested in 100% of database interviews. Master: Venn diagram representations of INNER JOIN (matching keys in both tables), LEFT JOIN (all left rows + matching right rows or NULL), RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN (Cartesian product). Understand multi-table joins and how WHERE vs ON affects outer joins.",
                "concept": "INNER JOIN filters only records where the join predicate matches. LEFT JOIN retains all rows from the primary left table; if no match exists in the right table, right columns return NULL. When filtering outer joins: conditions in the ON clause filter before joining; conditions in the WHERE clause filter after joining (which can turn a LEFT JOIN into an INNER JOIN if checking 'col IS NOT NULL').",
                "formulas": [
                        "INNER JOIN: Intersection of A and B on key match",
                        "LEFT JOIN: All rows from Table A, plus matching rows from Table B (NULL if no match)",
                        "Anti-Join (Records in A but NOT in B): SELECT A.* FROM A LEFT JOIN B ON A.id = B.id WHERE B.id IS NULL",
                        "Cartesian Product: SELECT * FROM A CROSS JOIN B (Yields Rows_A × Rows_B)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nTable A has 4 rows with IDs (1, 2, 2, 3). Table B has 3 rows with IDs (2, 2, 4). How many rows are returned by an INNER JOIN on A.id = B.id?",
                        "solution": "Step 1: Find matching keys between Table A and Table B.\n  Key 1: In A, not in B -> 0 rows\n  Key 3: In A, not in B -> 0 rows\n  Key 4: In B, not in A -> 0 rows\nStep 2: For Key 2:\n  Table A has two '2's.\n  Table B has two '2's.\nStep 3: Each row with key 2 in Table A matches with each row with key 2 in Table B.\n  Resulting rows = 2 × 2 = 4 rows.\nFinal Answer: 4 rows"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nGiven Customers(customer_id, name) and Orders(order_id, customer_id, amount). Write a query to find all customers who have NEVER placed any order.",
                        "solution": "Syntax:\nSELECT c.customer_id, c.name\nFROM Customers c\nLEFT JOIN Orders o\nON c.customer_id = o.customer_id\nWHERE o.order_id IS NULL;\nExplanation: A LEFT JOIN pairs every customer with their orders. Customers with no orders will have NULL in all Orders columns. The WHERE o.order_id IS NULL filters exactly those customers.\nFinal Answer: Verified SQL Query"
                }
        },
        "sql-3": {
                "title": "Aggregate Functions, GROUP BY & HAVING",
                "domain": "SQL",
                "whatToLearn": "Aggregate functions compute summary metrics over groups of rows. Master: COUNT(*), COUNT(col) (which ignores NULLs), SUM(), AVG(), MIN(), MAX(), and the critical distinction between WHERE and HAVING. Interviewers love asking why 'WHERE SUM(salary) > 50000' throws a syntax error.",
                "concept": "GROUP BY collapses multiple rows into single summary rows per grouping key. WHERE filters individual rows BEFORE aggregation occurs. HAVING filters aggregated group metrics AFTER aggregation. Every column in the SELECT clause that is NOT an aggregate function MUST be present in the GROUP BY clause.",
                "formulas": [
                        "COUNT(*) counts all rows including NULLs | COUNT(column) counts non-NULL values only",
                        "HAVING vs WHERE: WHERE filters rows before grouping; HAVING filters aggregated groups",
                        "Rule: SELECT dept_id, AVG(salary) FROM Emp GROUP BY dept_id HAVING AVG(salary) > 60000"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWrite a query to find the total number of employees and average salary for each department.",
                        "solution": "Syntax:\nSELECT dept_id, COUNT(*) AS total_employees, AVG(salary) AS avg_salary\nFROM Employees\nGROUP BY dept_id;\nExplanation: GROUP BY groups records by unique dept_id values, then computes COUNT and AVG per department.\nFinal Answer: Verified SQL Query"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nWrite a query to find departments that have more than 5 employees earning an average salary of more than ₹60,000.",
                        "solution": "Syntax:\nSELECT dept_id, COUNT(*) AS emp_count, AVG(salary) AS avg_sal\nFROM Employees\nGROUP BY dept_id\nHAVING COUNT(*) > 5 AND AVG(salary) > 60000;\nExplanation: Aggregations COUNT(*) and AVG(salary) cannot be placed in a WHERE clause because they require grouped data. HAVING evaluates conditions on aggregated department groups.\nFinal Answer: Verified SQL Query"
                }
        },
        "sql-4": {
                "title": "Correlated & Nested Subqueries",
                "domain": "SQL",
                "whatToLearn": "Subqueries are queries nested inside another query (in SELECT, FROM, or WHERE clauses). Master: Independent (non-correlated) subqueries (runs once), Correlated subqueries (references the outer query row-by-row), EXISTS vs IN, and writing queries for Nth highest salary without LIMIT.",
                "concept": "Non-correlated subquery: Inner query executes once independently and passes its result set to the outer query. Correlated subquery: Inner query depends on columns from the outer row; it executes repeatedly once for every single candidate row of the outer query. EXISTS stops evaluating as soon as the first match is found (Boolean check), making it faster than IN for large tables.",
                "formulas": [
                        "EXISTS Operator: Returns TRUE if subquery returns at least 1 row",
                        "Nth Highest Salary: SELECT DISTINCT salary FROM Emp e1 WHERE (N - 1) = (SELECT COUNT(DISTINCT salary) FROM Emp e2 WHERE e2.salary > e1.salary)",
                        "Subquery in FROM must have an alias: SELECT * FROM (SELECT id FROM Emp) AS sub"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWrite a query to find all employees who earn more than the company's average salary.",
                        "solution": "Syntax:\nSELECT emp_name, salary\nFROM Employees\nWHERE salary > (SELECT AVG(salary) FROM Employees);\nExplanation: The inner subquery computes the company-wide average salary once. The outer query returns employees earning more than that scalar value.\nFinal Answer: Verified SQL Query"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nFind employees who earn the highest salary in their respective departments using a correlated subquery.",
                        "solution": "Syntax:\nSELECT e1.emp_name, e1.dept_id, e1.salary\nFROM Employees e1\nWHERE e1.salary = (\n    SELECT MAX(e2.salary)\n    FROM Employees e2\n    WHERE e2.dept_id = e1.dept_id\n);\nExplanation: For every employee e1, the correlated subquery finds the maximum salary specifically for that employee's department (e2.dept_id = e1.dept_id). If e1's salary matches that maximum, the record is selected.\nFinal Answer: Verified SQL Query"
                }
        },
        "sql-5": {
                "title": "Window Functions (ROW_NUMBER, RANK, DENSE_RANK)",
                "domain": "SQL",
                "whatToLearn": "Window functions are tested heavily by Amazon, Walmart, and modern tech firms. Understand: OVER(PARTITION BY ... ORDER BY ...), and the exact difference between ROW_NUMBER() (unique consecutive numbers), RANK() (leaves gaps after ties), and DENSE_RANK() (no gaps after ties). Also master LEAD() and LAG() for looking at adjacent rows without self-joins.",
                "concept": "Unlike GROUP BY (which collapses rows), window functions compute metrics over a partitioned window of rows while RETAINING individual row identities. If salaries are [100, 100, 80]: ROW_NUMBER gives 1, 2, 3; RANK gives 1, 1, 3 (gap at 2); DENSE_RANK gives 1, 1, 2 (no gaps).",
                "formulas": [
                        "ROW_NUMBER(): Assigns sequential integer (1, 2, 3, 4...)",
                        "RANK(): Assigns rank with gaps for ties (1, 1, 3, 4...)",
                        "DENSE_RANK(): Assigns rank without gaps for ties (1, 1, 2, 3...)",
                        "LAG(col, 1) OVER (ORDER BY date): Accesses previous row value",
                        "LEAD(col, 1) OVER (ORDER BY date): Accesses next row value"
                ],
                "example1": {
                        "problem": "Foundation Example:\nExplain the difference in output between RANK() and DENSE_RANK() for scores: [95, 90, 90, 85].",
                        "solution": "Step 1: Order scores descending: 95 (1st), 90 (tie), 90 (tie), 85.\nStep 2: Apply RANK():\n  95 -> Rank 1\n  90 -> Rank 2\n  90 -> Rank 2\n  85 -> Rank 4 (Rank skips 3 because two rows tied at rank 2).\nStep 3: Apply DENSE_RANK():\n  95 -> Rank 1\n  90 -> Rank 2\n  90 -> Rank 2\n  85 -> Rank 3 (No rank numbers are skipped).\nFinal Answer: RANK yields [1, 2, 2, 4]; DENSE_RANK yields [1, 2, 2, 3]"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nWrite a query to find the top 3 highest-earning employees in EACH department using window functions.",
                        "solution": "Syntax:\nWITH RankedEmployees AS (\n    SELECT emp_name, dept_id, salary,\n           DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rank_num\n    FROM Employees\n)\nSELECT emp_name, dept_id, salary, rank_num\nFROM RankedEmployees\nWHERE rank_num <= 3;\nExplanation: PARTITION BY dept_id restarts ranking for each department. DENSE_RANK ensures no gaps if salaries tie. The CTE allows filtering WHERE rank_num <= 3.\nFinal Answer: Verified SQL Query"
                }
        },
        "sql-6": {
                "title": "DDL & DML (CREATE, ALTER, INSERT, UPDATE, DELETE)",
                "domain": "SQL",
                "whatToLearn": "Master the taxonomy of SQL sublanguages: DDL (Data Definition: CREATE, ALTER, DROP, TRUNCATE), DML (Data Manipulation: INSERT, UPDATE, DELETE), DQL (Data Query: SELECT), and DCL/TCL (GRANT, REVOKE, COMMIT, ROLLBACK). Know the differences between DROP (removes table & schema), TRUNCATE (empties table fast, resets identity, cannot rollback easily), and DELETE (row-by-row, logged, can rollback).",
                "concept": "DDL statements auto-commit changes to the database catalog. DML statements operate within transactions and can be rolled back before COMMIT. Constraints: PRIMARY KEY (Unique + NOT NULL), FOREIGN KEY (referential integrity), UNIQUE (allows one NULL in standard SQL), CHECK (validates condition), and DEFAULT.",
                "formulas": [
                        "DDL: Auto-commits immediately (CREATE, ALTER, DROP, TRUNCATE)",
                        "DML: Transactional, requires COMMIT (INSERT, UPDATE, DELETE)",
                        "DELETE vs TRUNCATE: DELETE is DML, logged per row, WHERE clause allowed; TRUNCATE is DDL, deallocates pages, faster, no WHERE"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWrite a DDL statement to create a table Students with student_id as primary key and email as unique.",
                        "solution": "Syntax:\nCREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    cgpa DECIMAL(3, 2) CHECK (cgpa >= 0.0 AND cgpa <= 10.0)\n);\nExplanation: Enforces primary key constraint on student_id and unique constraint on email.\nFinal Answer: Verified SQL Query"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nExplain the core technical differences between DELETE, TRUNCATE, and DROP commands in relational databases.",
                        "solution": "Step 1: Command Type:\n  DELETE is a DML command.\n  TRUNCATE and DROP are DDL commands.\nStep 2: Row Filtering:\n  DELETE supports WHERE clause (can remove specific rows).\n  TRUNCATE and DROP remove all data unconditionally.\nStep 3: Rollback & Transaction Logging:\n  DELETE logs every deleted row in transaction log -> Can be rolled back.\n  TRUNCATE deallocates data pages -> Minimal logging -> Faster execution.\nStep 4: Table Structure:\n  DELETE and TRUNCATE retain the table structure and columns.\n  DROP completely destroys the table data AND the table schema from the catalog.\nFinal Answer: DELETE (DML, filters, rollbackable), TRUNCATE (DDL, fast reset), DROP (DDL, destroys schema)"
                }
        },
        "dbms-1": {
                "title": "ER Models & Relational Schema Design",
                "domain": "DBMS",
                "whatToLearn": "ER Modeling is fundamental to database architecture. Master: Entities (strong vs weak), Attributes (simple, composite, multivalued, derived), Relationships (1:1, 1:N, M:N), Cardinality ratios, and the algorithm to convert ER diagrams into minimal relational tables.",
                "concept": "Strong Entity has a Primary Key. Weak Entity lacks a primary key and depends on a strong identifying owner entity via a discriminator (dashed underline). Mapping rules: M:N relationships ALWAYS require creating a separate junction table containing primary keys of both participating entities. Multivalued attributes (like phone_numbers) must be converted into a separate table.",
                "formulas": [
                        "M:N Relationship mapping: Requires a separate table with composite primary key",
                        "1:N Relationship mapping: Place primary key of '1' side as foreign key in 'N' side",
                        "Multivalued attribute: Separate table (Entity_PK, Attribute_Value)",
                        "Derived attribute: Represented by dashed oval, computed dynamically (e.g. age from DOB)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhy does a Many-to-Many (M:N) relationship between Students and Courses require a separate junction table in relational design?",
                        "solution": "Step 1: If we placed course_ids in Students table, it violates 1NF (multivalued attribute repeating groups).\nStep 2: If we placed student_ids in Courses table, it also violates 1NF.\nStep 3: Solution: Create an intermediary table 'Enrollment' with composite key (student_id, course_id).\nStep 4: This permits a student to take many courses and a course to have many students cleanly.\nFinal Answer: To prevent 1NF violation and eliminate data redundancy"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nWhat is a Weak Entity in an ER model? How is it represented and how is its primary key formed in the relational schema?",
                        "solution": "Step 1: A Weak Entity is an entity that cannot be uniquely identified by its own attributes alone and depends on an identifying Strong Entity for its existence (e.g. 'Dependents' of an 'Employee').\nStep 2: ER Representation: Double rectangle for weak entity; Double diamond for identifying relationship; Dashed underline for partial key / discriminator.\nStep 3: Relational Schema Mapping: The primary key of the weak entity table is formed by combining the Primary Key of the identifying Strong Entity + the Partial Key of the weak entity.\nFinal Answer: Entity without independent key; PK = (Owner_PK + Partial_Key)"
                }
        },
        "dbms-2": {
                "title": "Functional Dependencies & Normal Forms (1NF to BCNF)",
                "domain": "DBMS",
                "whatToLearn": "Normalization is tested in almost every placement technical interview. Understand: Functional Dependencies (X -> Y), Candidate Keys vs Super Keys, Update/Insertion/Deletion anomalies, and the formal definitions of 1NF, 2NF, 3NF, and BCNF.",
                "concept": "1NF: All attributes must be atomic (no arrays/repeating groups). 2NF: Must be in 1NF AND no Partial Dependency (no non-prime attribute depends on a proper subset of a composite candidate key). 3NF: Must be in 2NF AND no Transitive Dependency (non-prime -> non-prime). BCNF: For every functional dependency X -> Y, X MUST be a Super Key.",
                "formulas": [
                        "1NF: Atomic values only (no multivalued attributes)",
                        "2NF: 1NF + No Partial Dependency (Non-prime depends on part of candidate key)",
                        "3NF: 2NF + No Transitive Dependency (X is Super Key OR Y is Prime Attribute in X -> Y)",
                        "BCNF: In every dependency X -> Y, X must be a Super Key"
                ],
                "example1": {
                        "problem": "Foundation Example:\nA table has schema R(Student_ID, Course_ID, Student_Name, Course_Fee) with Candidate Key (Student_ID, Course_ID). Functional dependencies are:\nStudent_ID -> Student_Name\nCourse_ID -> Course_Fee\nWhich normal form is violated?",
                        "solution": "Step 1: Candidate Key is composite: (Student_ID, Course_ID).\nStep 2: Non-prime attributes are Student_Name and Course_Fee.\nStep 3: Student_Name depends on Student_ID (part of the candidate key).\nStep 4: Course_Fee depends on Course_ID (part of the candidate key).\nStep 5: Non-prime attributes depending on a SUBSET of candidate key is a Partial Dependency, which violates 2nd Normal Form (2NF).\nFinal Answer: Violates 2NF (Partial Dependency)"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nRelation R(A, B, C) has functional dependencies A -> B and B -> C. Candidate key is A. Why does this violate 3NF, and how do you decompose it into 3NF lossless join tables?",
                        "solution": "Step 1: Candidate key is A. Prime attribute: {A}. Non-prime attributes: {B, C}.\nStep 2: Dependency A -> B: A is super key (Valid in 3NF).\nStep 3: Dependency B -> C: B is NOT a super key, and C is NOT a prime attribute.\n  Since A -> B and B -> C, C transitively depends on key A via non-key B. This violates 3NF!\nStep 4: Decompose into 3NF: R1(A, B) with key A, and R2(B, C) with key B.\nStep 5: Both decomposed tables satisfy 3NF and preserve dependencies losslessly.\nFinal Answer: Decompose into R1(A, B) and R2(B, C)"
                }
        },
        "dbms-3": {
                "title": "ACID Properties & Transaction States",
                "domain": "DBMS",
                "whatToLearn": "Transactions guarantee database reliability during concurrent access and hardware crashes. Master the 4 ACID properties: Atomicity (All or Nothing), Consistency (preserves integrity constraints), Isolation (concurrent executions do not interfere), and Durability (committed data survives system crashes). Learn the Transaction State Diagram: Active -> Partially Committed -> Committed (or Failed -> Aborted).",
                "concept": "Atomicity is managed by the Recovery Manager using write-ahead logging (Undo/Redo). Consistency is preserved by user application logic and database constraints. Isolation is enforced by the Concurrency Control manager using Locking and Timestamping. Durability is maintained by non-volatile disk logs and checkpoints.",
                "formulas": [
                        "Atomicity: 'All or Nothing' execution guaranteed via Rollback / Undo logs",
                        "Consistency: Total sum of assets remains invariant before and after transaction",
                        "Isolation: Transaction behaves as if it is running in complete isolation (Serializability)",
                        "Durability: Committed updates persist even after power loss / crash via WAL (Write-Ahead Logging)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nDuring an online bank transfer of ₹5,000 from Account A to Account B, Account A is debited but the server crashes before crediting Account B. Which ACID property ensures Account A gets its ₹5,000 refunded?",
                        "solution": "Step 1: The transaction consisted of two operations: Debit(A) and Credit(B).\nStep 2: Only the first operation succeeded before the unexpected crash.\nStep 3: The Atomicity property guarantees that a transaction cannot partially execute.\nStep 4: Upon reboot, the recovery log executes an UNDO on the uncommitted debit, restoring Account A's balance.\nFinal Answer: Atomicity"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nDraw and explain the 5 states of a transaction lifecycle. What is the difference between 'Partially Committed' and 'Committed'?",
                        "solution": "Step 1: Five States: Active -> Partially Committed -> Committed, and Failed -> Aborted.\n  - Active: Initial state; executing read/write operations.\n  - Partially Committed: Final operation has executed in memory buffers, but log buffer is not yet flushed to physical disk.\n  - Committed: Transaction log successfully flushed to non-volatile disk. Transaction cannot be undone.\n  - Failed: Normal execution terminated due to error or hardware fault.\n  - Aborted: Transaction rolled back; database restored to prior state.\nStep 2: Difference: In Partially Committed, data is only in volatile RAM buffers (a crash causes abort). In Committed, changes are permanently etched on disk.\nFinal Answer: Partially Committed is in RAM; Committed is written to persistent disk."
                }
        },
        "dbms-4": {
                "title": "Concurrency Control: Locking & Timestamp Protocols",
                "domain": "DBMS",
                "whatToLearn": "Concurrency control enables thousands of users to read and write data simultaneously without data corruption. Master: Concurrency anomalies (Dirty Read - W-R conflict, Unrepeatable Read - R-W conflict, Lost Update - W-W conflict, Phantom Read), Serializability (Conflict Serializability testing via Precedence Graphs), 2-Phase Locking (2PL, Strict 2PL), and SQL Transaction Isolation Levels.",
                "concept": "A schedule is Conflict Serializable if its Precedence Graph has NO cycles! In 2-Phase Locking (2PL): Growing Phase (locks acquired, none released) followed by Shrinking Phase (locks released, none acquired). Strict 2PL holds all Exclusive locks until COMMIT to prevent cascading rollbacks. Isolation Levels: Read Uncommitted < Read Committed < Repeatable Read < Serializable.",
                "formulas": [
                        "Conflict Operations: Two operations on SAME data item by DIFFERENT transactions where AT LEAST ONE is a WRITE",
                        "Precedence Graph: Edge T1 -> T2 if T1 performs conflicting operation before T2. Cycle = NOT conflict serializable",
                        "SQL Isolation Levels: Read Uncommitted (allows dirty reads) -> Read Committed -> Repeatable Read -> Serializable"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhat is a 'Dirty Read' anomaly in concurrent database systems?",
                        "solution": "Step 1: Transaction T1 updates a row in memory (e.g. balance = ₹1,000 -> ₹5,000).\nStep 2: Before T1 commits, Transaction T2 reads this uncommitted value (₹5,000) and makes decisions.\nStep 3: T1 subsequently encounters an error and executes a ROLLBACK (balance reverts to ₹1,000).\nStep 4: T2 has now acted on data that never officially existed in the database.\nStep 5: This reading of uncommitted, rolled-back data is called a Dirty Read (Write-Read Conflict).\nFinal Answer: Reading uncommitted data that is later rolled back (W-R conflict)"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nSchedule S has operations: r1(X), w1(X), r2(X), w2(X), c1, c2. Construct the Precedence Graph. Is this schedule Conflict Serializable?",
                        "solution": "Step 1: Identify conflicting operations on data item X:\n  - w1(X) is followed by r2(X) => Edge T1 -> T2\n  - w1(X) is followed by w2(X) => Edge T1 -> T2\nStep 2: Construct Precedence Graph:\n  Vertices: {T1, T2}\n  Directed edges: T1 -> T2\nStep 3: Check for cycles in the graph:\n  There is only a directed edge from T1 to T2, and no return edge from T2 to T1.\nStep 4: Since the Precedence Graph is acyclic (contains no cycles), the schedule is Conflict Serializable!\nStep 5: Equivalent serial schedule: T1 followed by T2.\nFinal Answer: Yes, Conflict Serializable (Precedence Graph is acyclic)"
                }
        },
        "dbms-5": {
                "title": "Database Indexing (B-Trees, B+ Trees & Hashing)",
                "domain": "DBMS",
                "whatToLearn": "Indexing drastically reduces disk I/O operations from linear O(N) full table scans to logarithmic O(log N) tree traversals. Master: Primary Index vs Secondary Index, Clustered vs Non-Clustered Index, Sparse vs Dense Index, and why B+ Trees are preferred over Binary Search Trees and standard B-Trees in relational storage engines (like MySQL InnoDB).",
                "concept": "Index is an auxiliary data structure on disk that points to physical record locations. B+ Tree properties: 1. All data pointers reside exclusively in LEAF nodes. 2. Internal nodes contain only router search keys, enabling very high fan-out (order 100-500) and shallow tree height (3-4 levels). 3. Leaf nodes are linked via a doubly linked list, making range queries (BETWEEN x AND y) lightning fast.",
                "formulas": [
                        "B+ Tree Height: h ≈ log_B(N) where B is fan-out/block size (usually 3 to 4 levels for millions of rows)",
                        "Clustered Index: Determines physical order of data on disk (Only 1 clustered index per table)",
                        "Non-Clustered Index: Contains search key + pointer to clustered index / RID (Multiple allowed)",
                        "Hash Index: O(1) point lookup, but cannot perform range queries (<, >, BETWEEN)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nWhy are B+ Trees preferred over Binary Search Trees (BST) for storing database indices on hard disk storage?",
                        "solution": "Step 1: BST has fan-out of 2; a million rows requires height = log2(10^6) ≈ 20 levels (requiring 20 separate disk I/O reads).\nStep 2: Disk I/O is physically slow (rotational latency, seek time).\nStep 3: B+ Trees have large block-sized fan-out (e.g. B = 500). Height for a million rows is log_500(10^6) ≈ 3 levels (requiring only 3 disk I/O reads).\nStep 4: Fewer disk block reads translates directly to orders of magnitude faster query response times.\nFinal Answer: High fan-out minimizes disk I/O reads; shallow tree depth"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nWhat is the difference between a Clustered Index and a Non-Clustered (Secondary) Index?",
                        "solution": "Step 1: Physical Data Order:\n  - Clustered Index: Sorts and physically stores the actual data rows of the table on disk in index key order. Because data can only be physically sorted one way, there can only be ONE clustered index per table (typically Primary Key).\n  - Non-Clustered Index: Stored in a separate structure containing index keys and pointers (row locators) back to the actual data row. A table can have multiple non-clustered indices.\nStep 2: Performance:\n  - Clustered is faster for range scans since adjacent keys reside in adjacent physical disk pages.\n  - Non-Clustered requires an extra pointer lookup step.\nFinal Answer: Clustered physically sorts table data (Max 1); Non-clustered is a separate index with pointers (Multiple allowed)."
                }
        },
        "dbms-6": {
                "title": "Deadlocks & Recovery Management",
                "domain": "DBMS",
                "whatToLearn": "Deadlocks and system recovery are advanced database engineering concepts tested in core technical rounds. Master: The 4 Coffman conditions for deadlock (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait), Deadlock Detection (Wait-For Graph), Deadlock Prevention schemes (Wait-Die vs Wound-Wait), and ARIES recovery protocol (Analysis, Redo, Undo phases with Checkpointing).",
                "concept": "Deadlock occurs when two or more transactions are waiting indefinitely for locks held by each other. Wait-For Graph: Directed edge Ti -> Tj means Ti is waiting for Tj to release a lock. Cycle in Wait-For Graph indicates DEADLOCK. Prevention schemes use timestamps: Wait-Die (non-preemptive: older waits, younger dies); Wound-Wait (preemptive: older wounds/preempts younger, younger waits). Checkpointing reduces recovery time by writing dirty pages to disk periodically.",
                "formulas": [
                        "Coffman Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait",
                        "Wait-For Graph Cycle = Deadlock present",
                        "Wait-Die (Non-preemptive): If TS(Ti) < TS(Tj) [Ti older], Ti waits; else Ti dies",
                        "Wound-Wait (Preemptive): If TS(Ti) < TS(Tj) [Ti older], Ti preempts Tj; else Ti waits",
                        "Recovery Phases: 1. Analysis -> 2. Redo (repeat history) -> 3. Undo (rollback uncommitted)"
                ],
                "example1": {
                        "problem": "Foundation Example:\nExplain the Wait-For Graph (WFG) method for detecting deadlocks in concurrent database transactions.",
                        "solution": "Step 1: The WFG is a directed graph where vertices represent active transactions {T1, T2, ... Tn}.\nStep 2: A directed edge Ti -> Tj is constructed if Transaction Ti is waiting to acquire a lock on a data item currently locked by Transaction Tj.\nStep 3: The database periodically runs a cycle detection algorithm (like Tarjan's or DFS).\nStep 4: If a directed cycle exists (e.g. T1 -> T2 -> T1), a Deadlock is confirmed.\nStep 5: The database system breaks the deadlock by choosing a 'victim' transaction and aborting/rolling it back.\nFinal Answer: Directed graph where cycles indicate mutual blocking; broken by aborting a victim transaction"
                },
                "example2": {
                        "problem": "Placement Interview PYQ:\nIn timestamp-based deadlock prevention, contrast the 'Wait-Die' scheme with the 'Wound-Wait' scheme when an older transaction T1 requests a data item held by younger transaction T2.",
                        "solution": "Step 1: Establish timestamps: Older transaction has smaller timestamp (TS(T1) < TS(T2)).\nStep 2: Under Wait-Die Scheme (Non-preemptive):\n  - Older T1 requesting resource held by younger T2 is ALLOWED TO WAIT.\n  - (If younger T2 requests resource held by older T1, younger T2 DIES/aborts).\nStep 3: Under Wound-Wait Scheme (Preemptive):\n  - Older T1 requesting resource held by younger T2 WOUNDS (immediately preempts and aborts) younger T2.\n  - Younger T2 is rolled back, releasing the lock to older T1.\nStep 4: Comparison: Wound-Wait minimizes waiting time for older priority transactions by preempting younger ones immediately.\nFinal Answer: In Wait-Die, older T1 waits; in Wound-Wait, older T1 preempts and rolls back younger T2."
                }
        }
},

    // 52+ Authentic Placement Practice Questions across 6 Domains
    practiceQuestions: [
        // --- 1. QUANTITATIVE APTITUDE (10 Questions) ---
        {
            id: "pq-apt-1",
            domain: "Aptitude",
            topic: "Time, Speed & Distance",
            company: "tcs",
            companyName: "TCS",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "TCS NQT 2024",
            statement: "A train traveling at 72 km/h crosses a 200-meter-long platform in 22 seconds. How much time (in seconds) will it take to cross a standing man on another platform?",
            options: ["10 seconds", "12 seconds", "14 seconds", "16 seconds"],
            correctOption: 1,
            explanation: "Speed in m/s = 72 * (5/18) = 20 m/s.\nDistance = Speed * Time => Train_Length + 200 = 20 * 22 = 440m.\nTrain_Length = 440 - 200 = 240m.\nTime to cross a standing man = 240 / 20 = 12 seconds."
        },
        {
            id: "pq-apt-2",
            domain: "Aptitude",
            topic: "Percentages & Profit-Loss",
            company: "infosys",
            companyName: "Infosys",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Infosys Pattern",
            statement: "A shopkeeper marks an article 40% above its cost price and offers a discount of 20% on the marked price. If he makes a profit of ₹180, what is the cost price of the article?",
            options: ["₹1,200", "₹1,500", "₹1,600", "₹1,800"],
            correctOption: 1,
            explanation: "Let CP = 100x => MP = 140x.\nSP = 140x * 0.80 = 112x.\nProfit = 112x - 100x = 12x.\n12x = 180 => x = 15 => CP = 100 * 15 = ₹1,500."
        },
        {
            id: "pq-apt-3",
            domain: "Aptitude",
            topic: "Permutations & Combinations",
            company: "accenture",
            companyName: "Accenture",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Accenture Cognitive",
            statement: "In how many different ways can the letters of the word 'CORPORATION' be arranged so that the vowels always come together?",
            options: ["50,400", "72,000", "120,960", "144,000"],
            correctOption: 0,
            explanation: "Total 11 letters. Vowels: O, O, A, I, O (5 vowels: 3 O's, 1 A, 1 I).\nConsonants: C, R, P, R, T, N (6 consonants: 2 R's).\nTreat vowels as 1 block => Total 7 units (6 consonants + 1 block).\nArrangement of 7 units = 7! / 2!.\nInside block = 5! / 3!.\nTotal = (5040 / 2) * (120 / 6) = 2520 * 20 = 50,400."
        },
        {
            id: "pq-apt-4",
            domain: "Aptitude",
            topic: "Time & Work",
            company: "wipro",
            companyName: "Wipro",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "Wipro NLTH",
            statement: "A can complete a piece of work in 12 days, while B can complete it in 18 days. If they work together for 4 days, what fraction of the work remains unfinished?",
            options: ["4/9", "5/9", "1/3", "2/5"],
            correctOption: 0,
            explanation: "Work per day = 1/12 + 1/18 = 5/36.\nWork done in 4 days = 4 * (5/36) = 20/36 = 5/9.\nRemaining work = 1 - 5/9 = 4/9."
        },
        {
            id: "pq-apt-5",
            domain: "Aptitude",
            topic: "Probability",
            company: "deloitte",
            companyName: "Deloitte",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Deloitte Assessment",
            statement: "A bag contains 5 red balls, 4 blue balls, and 3 green balls. If two balls are drawn at random without replacement, what is the probability that both balls are of the same color?",
            options: ["19/66", "23/66", "29/66", "31/66"],
            correctOption: 0,
            explanation: "Total balls = 12. Total ways = 12C2 = 66.\nRed pair = 5C2 = 10; Blue pair = 4C2 = 6; Green pair = 3C2 = 3.\nFavorable = 10 + 6 + 3 = 19.\nProbability = 19/66."
        },
        {
            id: "pq-apt-6",
            domain: "Aptitude",
            topic: "Ratios & Mixtures",
            company: "cognizant",
            companyName: "Cognizant",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Cognizant GenC",
            statement: "A mixture contains milk and water in the ratio 5:3. If 16 liters of water is added to the mixture, the ratio of milk to water becomes 1:1. What was the initial quantity of milk in liters?",
            options: ["30 liters", "40 liters", "45 liters", "50 liters"],
            correctOption: 1,
            explanation: "Milk = 5x, Water = 3x.\nAfter adding 16L water: 5x / (3x + 16) = 1/1.\n5x = 3x + 16 => 2x = 16 => x = 8.\nInitial Milk = 5 * 8 = 40 liters."
        },
        {
            id: "pq-apt-7",
            domain: "Aptitude",
            topic: "Simple & Compound Interest",
            company: "tcs",
            companyName: "TCS",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "TCS Ninja",
            statement: "The difference between compound interest and simple interest on a certain principal sum at 10% per annum for 2 years is ₹65. What is the principal sum?",
            options: ["₹5,500", "₹6,000", "₹6,500", "₹7,000"],
            correctOption: 2,
            explanation: "Formula for 2 years: Difference = P * (R/100)^2.\n65 = P * (10/100)^2 = P * (1/100).\nP = 65 * 100 = ₹6,500."
        },
        {
            id: "pq-apt-8",
            domain: "Aptitude",
            topic: "Averages & Ages",
            company: "capgemini",
            companyName: "Capgemini",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "Capgemini Standard",
            statement: "The average age of a group of 10 students is 20 years. When a teacher's age is included, the average increases by 2 years. What is the teacher's age?",
            options: ["38 years", "40 years", "42 years", "44 years"],
            correctOption: 2,
            explanation: "Total age of 10 students = 10 * 20 = 200.\nNew average for 11 people = 22.\nTotal age of 11 people = 11 * 22 = 242.\nTeacher's age = 242 - 200 = 42 years."
        },
        {
            id: "pq-apt-9",
            domain: "Aptitude",
            topic: "Logarithms",
            company: "tech-mahindra",
            companyName: "Tech Mahindra",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "Campus Core",
            statement: "If log10(2) = 0.3010, what is the value of log10(50)?",
            options: ["1.6990", "1.7010", "1.4990", "1.3010"],
            correctOption: 0,
            explanation: "log10(50) = log10(100 / 2) = log10(100) - log10(2).\nlog10(100) = 2.\n2 - 0.3010 = 1.6990."
        },
        {
            id: "pq-apt-10",
            domain: "Aptitude",
            topic: "Boats & Streams",
            company: "hcl",
            companyName: "HCL Technologies",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "HCL Assessment",
            statement: "A boat travels 24 km downstream in 2 hours and 16 km upstream in 2 hours. What is the speed of the current in km/h?",
            options: ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
            correctOption: 1,
            explanation: "Downstream speed (u + v) = 24/2 = 12 km/h.\nUpstream speed (u - v) = 16/2 = 8 km/h.\nSpeed of current v = (Downstream - Upstream)/2 = (12 - 8)/2 = 2 km/h."
        },

        // --- 2. LOGICAL & ANALYTICAL REASONING (10 Questions) ---
        {
            id: "pq-rea-1",
            domain: "Reasoning",
            topic: "Syllogisms",
            company: "tcs",
            companyName: "TCS",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "TCS Repeated Pattern",
            statement: "Statements:\n1. All clouds are rains.\n2. No rain is thunder.\n3. Some thunders are storms.\n\nConclusions:\nI. No cloud is thunder.\nII. Some storms are not rains.",
            options: ["Only Conclusion I follows", "Only Conclusion II follows", "Both Conclusions I and II follow", "Neither Conclusion I nor II follows"],
            correctOption: 2,
            explanation: "All clouds are inside rains, and no rain can touch thunder => No cloud is thunder (I is true).\nThunders which are storms cannot touch rains => Some storms are not rains (II is true).\nBoth follow."
        },
        {
            id: "pq-rea-2",
            domain: "Reasoning",
            topic: "Blood Relations",
            company: "cognizant",
            companyName: "Cognizant",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Cognizant GenC",
            statement: "Pointing to a photograph, Ramesh said, 'Her mother's only son is my father.' How is the woman in the photograph related to Ramesh?",
            options: ["Mother", "Aunt (Paternal)", "Sister", "Grandmother"],
            correctOption: 1,
            explanation: "Her mother's only son = Her brother.\nRamesh says: 'Her brother is my father.'\nThe sister of Ramesh's father is his Paternal Aunt."
        },
        {
            id: "pq-rea-3",
            domain: "Reasoning",
            topic: "Seating Arrangements",
            company: "infosys",
            companyName: "Infosys",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Infosys Critical Reasoning",
            statement: "Six persons P, Q, R, S, T, and U sit in a circle facing the center. S is between R and T. P is second to the left of T. Q is not an immediate neighbor of T. Who is sitting opposite to P?",
            options: ["R", "S", "Q", "T"],
            correctOption: 1,
            explanation: "In a circle of 6: T at 1, S at 2, R at 3. P is second to left of T => Seat 5.\nOpposite of seat 5 is seat 2 (occupied by S).\nTherefore S is opposite to P."
        },
        {
            id: "pq-rea-4",
            domain: "Reasoning",
            topic: "Coding-Decoding",
            company: "capgemini",
            companyName: "Capgemini",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "Capgemini Cognitive",
            statement: "If in a certain code language, 'SECURE' is coded as 'UGEXUG', how will 'CODING' be coded in that same language?",
            options: ["EQFKPI", "EPFKPH", "EQFKPH", "DPEJMH"],
            correctOption: 0,
            explanation: "Pattern: Each letter shifts +2.\nC(+2)=E, O(+2)=Q, D(+2)=F, I(+2)=K, N(+2)=P, G(+2)=I => EQFKPI."
        },
        {
            id: "pq-rea-5",
            domain: "Reasoning",
            topic: "Direction Sense",
            company: "wipro",
            companyName: "Wipro",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Wipro NLTH",
            statement: "A person walks 10m North, turns right and walks 6m, turns right again and walks 18m. How far and in which direction is he now from his starting point?",
            options: ["10m South-East", "10m North-East", "12m South-West", "14m East"],
            correctOption: 0,
            explanation: "Vertical displacement: +10 (North) - 18 (South) = -8m (South).\nHorizontal displacement: +6m (East).\nNet distance = sqrt((-8)^2 + 6^2) = sqrt(64 + 36) = sqrt(100) = 10m.\nDirection is South-East."
        },
        {
            id: "pq-rea-6",
            domain: "Reasoning",
            topic: "Number Series",
            company: "accenture",
            companyName: "Accenture",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Accenture Abstract",
            statement: "Find the next number in the sequence: 4, 11, 30, 67, 128, ?",
            options: ["219", "221", "225", "230"],
            correctOption: 0,
            explanation: "Pattern: n^3 + 3.\n1^3 + 3 = 4\n2^3 + 3 = 11\n3^3 + 3 = 30\n4^3 + 3 = 67\n5^3 + 3 = 128\n6^3 + 3 = 216 + 3 = 219."
        },
        {
            id: "pq-rea-7",
            domain: "Reasoning",
            topic: "Clocks & Angles",
            company: "tcs",
            companyName: "TCS",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "TCS NQT",
            statement: "What is the angle between the hour hand and the minute hand of a clock at 3:40 PM?",
            options: ["120°", "125°", "130°", "135°"],
            correctOption: 2,
            explanation: "Formula: |30*H - (11/2)*M|.\n|30*3 - (11/2)*40| = |90 - 220| = |-130| = 130°."
        },
        {
            id: "pq-rea-8",
            domain: "Reasoning",
            topic: "Calendars",
            company: "infosys",
            companyName: "Infosys",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "General Placement",
            statement: "If 1st January 2024 was a Monday, what day of the week was 1st January 2025?",
            options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            correctOption: 1,
            explanation: "2024 is a leap year (366 days).\n366 mod 7 = 2 odd days.\nMonday + 2 days = Wednesday."
        },
        {
            id: "pq-rea-9",
            domain: "Reasoning",
            topic: "Data Sufficiency",
            company: "deloitte",
            companyName: "Deloitte",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Deloitte USI",
            statement: "Is integer X divisible by 6?\nStatement 1: X is divisible by 2.\nStatement 2: X is divisible by 3.",
            options: ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient", "Both statements TOGETHER are sufficient", "Neither statement is sufficient"],
            correctOption: 2,
            explanation: "A number is divisible by 6 if and only if it is divisible by both 2 and 3.\nStatement 1 alone is insufficient (e.g. 4 is divisible by 2 but not 6).\nStatement 2 alone is insufficient (e.g. 9 is divisible by 3 but not 6).\nCombining both ensures X is divisible by LCM(2, 3) = 6."
        },
        {
            id: "pq-rea-10",
            domain: "Reasoning",
            topic: "Statement & Assumptions",
            company: "ibm",
            companyName: "IBM",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "IBM Cognitive",
            statement: "Statement: 'Enroll in our placement crash course to secure top scores in campus recruitment.'\nAssumptions:\nI. Students desire to secure top scores in recruitment.\nII. The crash course provides effective training.",
            options: ["Only assumption I is implicit", "Only assumption II is implicit", "Both assumptions I and II are implicit", "Neither assumption is implicit"],
            correctOption: 2,
            explanation: "An advertisement assumes target candidates have interest in the outcome (top scores) and assumes the product works (effective course).\nBoth assumptions are implicit."
        },

        // --- 3. VERBAL ABILITY & ENGLISH (8 Questions) ---
        {
            id: "pq-ver-1",
            domain: "Verbal",
            topic: "Spotting Errors",
            company: "tcs",
            companyName: "TCS",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "TCS Verbal Ability",
            statement: "Identify the part of the sentence which contains a grammatical error:\n\n'Neither the manager (A) / nor the employees (B) / was aware of the change (C) / in company policy (D).'",
            options: ["Part (A)", "Part (B)", "Part (C)", "Part (D)"],
            correctOption: 2,
            explanation: "By the rule of proximity in 'Neither... Nor', the verb agrees with the closer subject: 'the employees' (plural).\nTherefore, 'was aware' should be 'were aware'. Error is in Part (C)."
        },
        {
            id: "pq-ver-2",
            domain: "Verbal",
            topic: "Sentence Completion",
            company: "accenture",
            companyName: "Accenture",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Accenture English",
            statement: "Choose the word that best fits the blank:\n'The executive committee felt that the proposed merger would be highly _______, as both companies operated in overlapping markets and lacked unique differentiators.'",
            options: ["propitious", "redundant", "lucrative", "altruistic"],
            correctOption: 1,
            explanation: "'Redundant' means superfluous or needlessly duplicative, fitting overlapping markets without distinction."
        },
        {
            id: "pq-ver-3",
            domain: "Verbal",
            topic: "Reading Comprehension",
            company: "deloitte",
            companyName: "Deloitte",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "Placement Standard",
            statement: "In modern cloud computing, 'elasticity' refers to the ability to dynamically provision and de-provision computing resources on-demand. What is the primary operational advantage implied?",
            options: [
                "It eliminates the need for any network firewalls.",
                "It prevents resource over-provisioning and minimizes idle infrastructure costs.",
                "It restricts database replication to a single geographical zone.",
                "It replaces programmatic software logic with hardware circuits."
            ],
            correctOption: 1,
            explanation: "Elasticity matches system capacity directly to current workload fluctuations in real time, preventing waste on idle server instances."
        },
        {
            id: "pq-ver-4",
            domain: "Verbal",
            topic: "Para Jumbles",
            company: "infosys",
            companyName: "Infosys",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Infosys Verbal",
            statement: "Arrange the sentences into a coherent paragraph:\nP: This transition requires robust distributed telemetry.\nQ: Modern enterprises are moving away from monoliths to microservices.\nR: Consequently, debugging distributed transactions has become significantly more complex.\nS: While this architecture enhances modularity, it multiplies independent components.",
            options: ["Q - S - R - P", "Q - P - S - R", "S - Q - R - P", "R - P - Q - S"],
            correctOption: 0,
            explanation: "Q introduces the transition to microservices. S notes the resulting architectural multiplication. R shows the consequence on debugging. P concludes with the necessary solution (telemetry). Sequence: Q-S-R-P."
        },
        {
            id: "pq-ver-5",
            domain: "Verbal",
            topic: "Synonyms & Antonyms",
            company: "wipro",
            companyName: "Wipro",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "Wipro NLTH",
            statement: "Choose the word most opposite in meaning (Antonym) to: 'EPHEMERAL'",
            options: ["Transient", "Perpetual", "Fleeting", "Elusive"],
            correctOption: 1,
            explanation: "'Ephemeral' means lasting a very short time. 'Perpetual' means continuing indefinitely or everlasting."
        },
        {
            id: "pq-ver-6",
            domain: "Verbal",
            topic: "Idioms & Phrases",
            company: "cognizant",
            companyName: "Cognizant",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Cognizant Communication",
            statement: "What is the meaning of the idiom: 'To cut corners'?",
            options: [
                "To take a sharp turn while driving",
                "To do something badly or cheaply in order to save time or money",
                "To trim edges off a presentation board",
                "To resolve conflicts diplomatically"
            ],
            correctOption: 1,
            explanation: "'Cutting corners' refers to skipping steps or compromising standards to save effort, time, or cost."
        },
        {
            id: "pq-ver-7",
            domain: "Verbal",
            topic: "Active & Passive Voice",
            company: "capgemini",
            companyName: "Capgemini",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "Placement Standard",
            statement: "Convert into passive voice: 'The engineering team deployed the software patch overnight.'",
            options: [
                "The software patch had deployed by the engineering team overnight.",
                "The software patch was deployed by the engineering team overnight.",
                "The software patch is being deployed by the engineering team.",
                "Overnight, the engineering team has been deploying the software patch."
            ],
            correctOption: 1,
            explanation: "Simple past active 'deployed' transforms into 'was deployed' in passive voice."
        },
        {
            id: "pq-ver-8",
            domain: "Verbal",
            topic: "Subject-Verb Agreement",
            company: "tech-mahindra",
            companyName: "Tech Mahindra",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Tech Mahindra English",
            statement: "Choose the grammatically correct sentence:",
            options: [
                "The committee have submitted its annual placement report.",
                "The committee has submitted its annual placement report.",
                "The committee were submitting its annual placement report.",
                "The committee have been submitted its annual placement report."
            ],
            correctOption: 1,
            explanation: "When a collective noun ('committee') acts as a single unified entity, it takes a singular verb ('has') and singular pronoun ('its')."
        },

        // --- 4. CODING / DATA STRUCTURES & ALGORITHMS (12 Questions) ---
        {
            id: "pq-code-1",
            domain: "Coding / DSA",
            topic: "Arrays & Two Pointers",
            company: "amazon",
            companyName: "Amazon",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Amazon SDE OA",
            statement: "Given an array of integers nums and an integer target, return indices of two numbers that sum up to target.\nWhat is the most optimal time and space complexity achievable?",
            options: [
                "Time: O(N^2), Space: O(1)",
                "Time: O(N log N), Space: O(N)",
                "Time: O(N), Space: O(N) using a Hash Map",
                "Time: O(1), Space: O(N)"
            ],
            correctOption: 2,
            explanation: "By storing each element's complement (target - num) in a hash map, existence check takes O(1) average time. Total time O(N), space O(N)."
        },
        {
            id: "pq-code-2",
            domain: "Coding / DSA",
            topic: "Binary Search Trees",
            company: "microsoft",
            companyName: "Microsoft",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Microsoft Campus",
            statement: "Which of the following traversals on a valid Binary Search Tree (BST) produces keys in strictly ascending sorted order?",
            options: [
                "Preorder Traversal (Root, Left, Right)",
                "Inorder Traversal (Left, Root, Right)",
                "Postorder Traversal (Left, Right, Root)",
                "Level Order Traversal (BFS)"
            ],
            correctOption: 1,
            explanation: "Inorder traversal (Left -> Root -> Right) on a BST processes all smaller keys first, then root, then larger keys, yielding sorted order."
        },
        {
            id: "pq-code-3",
            domain: "Coding / DSA",
            topic: "Dynamic Programming",
            company: "google",
            companyName: "Google",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Google OA Pattern",
            statement: "In the 0/1 Knapsack problem with N items and maximum weight capacity W, what is the time complexity of the standard dynamic programming solution?",
            options: ["O(N log N)", "O(2^N)", "O(N * W)", "O(W^2)"],
            correctOption: 2,
            explanation: "The bottom-up DP table has dimensions (N + 1) * (W + 1), and filling each cell takes constant O(1) operations. Time complexity is O(N * W) (pseudo-polynomial)."
        },
        {
            id: "pq-code-4",
            domain: "Coding / DSA",
            topic: "Pointers & C Language",
            company: "zoho",
            companyName: "Zoho",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Zoho Round 1",
            statement: "What will be the output of the following C code snippet?\n\nint arr[] = {10, 20, 30, 40, 50};\nint *ptr = arr;\n*(ptr + 2) += 5;\nprintf(\"%d, %d\", arr[2], *(arr + 3));",
            options: ["30, 40", "35, 40", "35, 45", "30, 45"],
            correctOption: 1,
            explanation: "*(ptr + 2) accesses arr[2] (initially 30), adding 5 makes it 35. arr[3] remains 40. Output: '35, 40'."
        },
        {
            id: "pq-code-5",
            domain: "Coding / DSA",
            topic: "Linked Lists",
            company: "flipkart",
            companyName: "Flipkart",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Flipkart SDE",
            statement: "Floyd's Cycle-Finding Algorithm (Tortoise and Hare) detects a cycle in a singly linked list using two pointers moving at speeds 1x and 2x. What is its space complexity?",
            options: ["O(1) Auxiliary Space", "O(N) Space", "O(log N) Space", "O(N^2) Space"],
            correctOption: 0,
            explanation: "Floyd's algorithm uses only two pointer references (slow and fast), requiring zero extra data structures, achieving O(1) auxiliary space."
        },
        {
            id: "pq-code-6",
            domain: "Coding / DSA",
            topic: "Stacks & Queues",
            company: "walmart",
            companyName: "Walmart",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Walmart Global Tech",
            statement: "Which data structure is most optimal for evaluating an arithmetic expression written in Postfix (Reverse Polish) Notation?",
            options: ["Queue", "Stack", "Binary Heap", "Hash Table"],
            correctOption: 1,
            explanation: "A Stack allows pushing operands and popping the top two operands whenever an operator is encountered in LIFO order."
        },
        {
            id: "pq-code-7",
            domain: "Coding / DSA",
            topic: "Sorting Algorithms",
            company: "tcs",
            companyName: "TCS",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "TCS Digital",
            statement: "What is the worst-case time complexity of QuickSort, and when does it occur?",
            options: [
                "O(N log N), when the pivot divides the array into equal halves.",
                "O(N^2), when the pivot is consistently the smallest or largest element in an already sorted array.",
                "O(N), when all array elements are distinct.",
                "O(N^3), in reverse sorted arrays."
            ],
            correctOption: 1,
            explanation: "When the selected pivot is always the extremum (e.g. sorted array with first element as pivot), partition yields subproblems of size 0 and N-1, degrading to O(N^2)."
        },
        {
            id: "pq-code-8",
            domain: "Coding / DSA",
            topic: "Graph Algorithms",
            company: "meesho",
            companyName: "Meesho",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Meesho SDE-1",
            statement: "Dijkstra's shortest path algorithm implemented with a min-priority queue (Binary Heap) has what time complexity for a graph with V vertices and E edges?",
            options: ["O(V + E)", "O((V + E) log V)", "O(V * E)", "O(V^3)"],
            correctOption: 1,
            explanation: "Each vertex is extracted from the heap once (V log V), and each edge relaxation updates heap priority (E log V). Total time: O((V + E) log V)."
        },
        {
            id: "pq-code-9",
            domain: "Coding / DSA",
            topic: "Bit Manipulation",
            company: "microsoft",
            companyName: "Microsoft",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Microsoft Coding",
            statement: "What does the expression (n & (n - 1)) achieve when applied to a positive integer n?",
            options: [
                "It multiplies n by 2.",
                "It turns off (clears) the lowest set bit (rightmost 1-bit) of n.",
                "It checks if n is odd.",
                "It reverses the binary bits of n."
            ],
            correctOption: 1,
            explanation: "Subtracting 1 flips all bits after the rightmost 1-bit including that bit. Bitwise AND with n zeroes out that rightmost set bit (Brian Kernighan's Algorithm)."
        },
        {
            id: "pq-code-10",
            domain: "Coding / DSA",
            topic: "Recursion & Backtracking",
            company: "amazon",
            companyName: "Amazon",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Amazon Technical",
            statement: "How many total leaf states are generated in the state space tree for generating all permutations of an array with N distinct integers?",
            options: ["2^N", "N!", "N^2", "N * (N - 1)"],
            correctOption: 1,
            explanation: "Any sequence of N distinct items has exactly N! permutations, creating N! leaf nodes in the decision tree."
        },
        {
            id: "pq-code-11",
            domain: "Coding / DSA",
            topic: "Heaps",
            company: "google",
            companyName: "Google",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Google Interview",
            statement: "What is the time complexity to find the Kth largest element in an unsorted array of size N using a Min-Heap of size K?",
            options: ["O(N log K)", "O(N log N)", "O(K log N)", "O(N * K)"],
            correctOption: 0,
            explanation: "Maintaining a Min-Heap of size K requires O(log K) per insertion. For N elements, total time is O(N log K) with O(K) extra space."
        },
        {
            id: "pq-code-12",
            domain: "Coding / DSA",
            topic: "String Matching",
            company: "zoho",
            companyName: "Zoho",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Zoho Round 2",
            statement: "Write an algorithm to reverse words in a string: 'the sky is blue' -> 'blue is sky the' in-place. What is the standard technique?",
            options: [
                "Reverse each individual word, then reverse the entire string.",
                "Convert string to uppercase, then tokenize.",
                "Use a Trie data structure.",
                "Sort letters alphabetically."
            ],
            correctOption: 0,
            explanation: "Reversing each word gives 'eht yks si eulb'. Reversing the entire string flips the order to 'blue is sky the' in O(N) time and O(1) extra space."
        },

        // --- 5. SQL (STRUCTURED QUERY LANGUAGE) (8 Questions) ---
        {
            id: "pq-sql-1",
            domain: "SQL",
            topic: "SQL Joins",
            company: "tcs",
            companyName: "TCS",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "TCS Digital",
            statement: "Consider two tables: Customers (5 records with IDs: 1, 2, 3, 4, 5) and Orders (4 records with customer_ids: 2, 3, 3, 6).\nHow many rows will be returned by a FULL OUTER JOIN on customer_id?",
            options: ["4 rows", "5 rows", "6 rows", "7 rows"],
            correctOption: 3,
            explanation: "Matched: ID 2 (1 row) + ID 3 (2 rows) = 3 rows.\nUnmatched customers: 1, 4, 5 (3 rows).\nUnmatched orders: 6 (1 row).\nTotal = 3 + 3 + 1 = 7 rows."
        },
        {
            id: "pq-sql-2",
            domain: "SQL",
            topic: "Aggregate Functions & HAVING",
            company: "infosys",
            companyName: "Infosys",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Infosys DSE",
            statement: "Which SQL query correctly retrieves departments that have more than 5 employees whose average salary exceeds ₹60,000?",
            options: [
                "SELECT dept_id FROM employees WHERE COUNT(*) > 5 AND AVG(salary) > 60000 GROUP BY dept_id;",
                "SELECT dept_id FROM employees GROUP BY dept_id HAVING COUNT(*) > 5 AND AVG(salary) > 60000;",
                "SELECT dept_id FROM employees HAVING COUNT(*) > 5 WHERE AVG(salary) > 60000 GROUP BY dept_id;",
                "SELECT dept_id FROM employees GROUP BY dept_id WHERE COUNT(salary) > 5;"
            ],
            correctOption: 1,
            explanation: "Aggregate filter conditions (COUNT, AVG) must appear in the HAVING clause following GROUP BY, because WHERE executes prior to grouping."
        },
        {
            id: "pq-sql-3",
            domain: "SQL",
            topic: "Window Functions",
            company: "amazon",
            companyName: "Amazon",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Amazon Technical",
            statement: "What is the difference between RANK() and DENSE_RANK() in SQL when dealing with tied values?",
            options: [
                "RANK() skips subsequent rank numbers after ties, while DENSE_RANK() does not skip rank numbers.",
                "DENSE_RANK() skips numbers while RANK() leaves no gaps.",
                "RANK() can only be used with numbers, while DENSE_RANK() is for strings.",
                "There is no difference; they are exact synonyms in ANSI SQL."
            ],
            correctOption: 0,
            explanation: "RANK leaves a gap (e.g. 1, 1, 3). DENSE_RANK leaves no gap (e.g. 1, 1, 2)."
        },
        {
            id: "pq-sql-4",
            domain: "SQL",
            topic: "Subqueries",
            company: "deloitte",
            companyName: "Deloitte",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "Placement Standard",
            statement: "Which SQL query will find the second highest salary from an Employee table?",
            options: [
                "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
                "SELECT salary FROM Employee ORDER BY salary DESC LIMIT 2;",
                "SELECT salary FROM Employee WHERE salary = MAX(salary) - 1;",
                "SELECT SECOND_MAX(salary) FROM Employee;"
            ],
            correctOption: 0,
            explanation: "The inner query finds the absolute maximum salary. The outer query finds the MAX salary strictly lower than that value, which works even with duplicate top salaries."
        },
        {
            id: "pq-sql-5",
            domain: "SQL",
            topic: "Constraints & Keys",
            company: "cognizant",
            companyName: "Cognizant",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "Cognizant Technical",
            statement: "Can a relational table have multiple UNIQUE constraints and multiple PRIMARY KEY constraints?",
            options: [
                "Yes, multiple UNIQUE constraints and multiple PRIMARY KEY constraints are allowed.",
                "No, a table can have multiple UNIQUE constraints, but only ONE PRIMARY KEY constraint.",
                "No, only one UNIQUE and one PRIMARY KEY are permitted.",
                "A table cannot have both UNIQUE and PRIMARY KEY simultaneously."
            ],
            correctOption: 1,
            explanation: "A table can define multiple columns as UNIQUE, but ANSI SQL enforces exactly one PRIMARY KEY per table."
        },
        {
            id: "pq-sql-6",
            domain: "SQL",
            topic: "DELETE vs TRUNCATE",
            company: "wipro",
            companyName: "Wipro",
            difficulty: "Easy",
            isPYQ: true,
            pyqLabel: "Wipro Technical",
            statement: "What is a key difference between DELETE and TRUNCATE in SQL?",
            options: [
                "DELETE is a DDL command, while TRUNCATE is DML.",
                "TRUNCATE cannot be filtered with a WHERE clause and resets table identity counters, while DELETE can filter rows.",
                "DELETE drops the entire table schema from the database.",
                "TRUNCATE deletes rows one by one with rollback logs."
            ],
            correctOption: 1,
            explanation: "TRUNCATE is a DDL operation that deallocates data pages (fast, no WHERE filter, resets AUTO_INCREMENT). DELETE is a DML command logging each row deletion."
        },
        {
            id: "pq-sql-7",
            domain: "SQL",
            topic: "Pattern Matching (LIKE)",
            company: "tech-mahindra",
            companyName: "Tech Mahindra",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "Campus Core",
            statement: "Which SQL pattern retrieves names whose second letter is 'a' and is at least 3 characters long?",
            options: ["LIKE '_a%'", "LIKE '%a_'", "LIKE '_a__'", "LIKE 'a%'"],
            correctOption: 0,
            explanation: "'_' matches exactly one single character. 'a' matches the letter 'a' at position 2. '%' matches zero or more subsequent characters. Hence '_a%' matches."
        },
        {
            id: "pq-sql-8",
            domain: "SQL",
            topic: "EXISTS vs IN",
            company: "accenture",
            companyName: "Accenture",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Accenture Tech",
            statement: "Why is the EXISTS clause generally faster than IN when evaluating subqueries against large tables?",
            options: [
                "EXISTS terminates execution as soon as a single matching row is located (short-circuit boolean evaluation).",
                "IN does not support primary keys.",
                "EXISTS converts data to binary format.",
                "There is no difference in modern relational database engines."
            ],
            correctOption: 0,
            explanation: "EXISTS returns TRUE as soon as the first match is found without scanning the remainder of the table."
        },

        // --- 6. DATABASE MANAGEMENT SYSTEMS (DBMS) (8 Questions) ---
        {
            id: "pq-dbms-1",
            domain: "DBMS",
            topic: "Normalization",
            company: "accenture",
            companyName: "Accenture",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Accenture Tech",
            statement: "A relational table is in Boyce-Codd Normal Form (BCNF) if and only if for every non-trivial functional dependency X -> Y:",
            options: ["Y is a prime attribute", "X is a Super Key", "X is a candidate key and Y is atomic", "Y is functionally dependent on the Primary Key"],
            correctOption: 1,
            explanation: "By strict definition, schema R is in BCNF if for every non-trivial functional dependency X -> Y, X is a Super Key of R."
        },
        {
            id: "pq-dbms-2",
            domain: "DBMS",
            topic: "Transactions & ACID",
            company: "tcs",
            companyName: "TCS",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "TCS Technical",
            statement: "Which ACID property guarantees that all operations of a transaction are completed successfully or none of them are reflected in the database in case of failure?",
            options: ["Atomicity", "Consistency", "Isolation", "Durability"],
            correctOption: 0,
            explanation: "Atomicity ('All or Nothing') ensures that an incomplete transaction is rolled back completely to prevent corrupt states."
        },
        {
            id: "pq-dbms-3",
            domain: "DBMS",
            topic: "Indexing & B+ Trees",
            company: "microsoft",
            companyName: "Microsoft",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Microsoft Tech",
            statement: "Why are B+ Trees predominantly preferred over B Trees for implementing database indices on disk storage?",
            options: [
                "B+ Trees have smaller height and all data pointers reside in leaf nodes, enabling fast sequential range scans via leaf node pointers.",
                "B Trees do not support binary search.",
                "B+ Trees require zero disk I/O operations.",
                "B+ Trees store duplicate keys in all internal levels to prevent disk fragmentation."
            ],
            correctOption: 0,
            explanation: "In B+ Trees, internal nodes store only routing keys, resulting in high fanout and low tree height. Leaf nodes form a linked list enabling rapid range queries."
        },
        {
            id: "pq-dbms-4",
            domain: "DBMS",
            topic: "Keys & Integrity",
            company: "wipro",
            companyName: "Wipro",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "Campus Core",
            statement: "What is the primary constraint enforced by the Referential Integrity rule in relational databases?",
            options: [
                "A primary key cannot contain duplicate values.",
                "A foreign key value must either match an existing primary key value in the referenced table or be NULL.",
                "All column values must be atomic.",
                "No column may have NULL values."
            ],
            correctOption: 1,
            explanation: "Referential Integrity ensures that foreign keys always point to valid, existing primary key rows in the referenced parent table or remain NULL."
        },
        {
            id: "pq-dbms-5",
            domain: "DBMS",
            topic: "Deadlocks & Concurrency",
            company: "amazon",
            companyName: "Amazon",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Amazon Core CS",
            statement: "In Strict Two-Phase Locking (Strict 2PL), when are exclusive (write) locks held by a transaction released?",
            options: [
                "Immediately after the specific write statement executes.",
                "At the start of the shrinking phase.",
                "Only after the transaction has fully committed or aborted.",
                "When another transaction requests a shared lock."
            ],
            correctOption: 2,
            explanation: "Strict 2PL holds all exclusive locks until transaction completion (COMMIT or ROLLBACK) to prevent cascading aborts."
        },
        {
            id: "pq-dbms-6",
            domain: "DBMS",
            topic: "Isolation Levels",
            company: "google",
            companyName: "Google",
            difficulty: "Hard",
            isPYQ: true,
            pyqLabel: "Google Interview",
            statement: "Which transaction concurrency anomaly occurs when Transaction A reads a row, Transaction B updates that row and commits, and Transaction A re-reads the row obtaining a different value?",
            options: ["Dirty Read", "Non-Repeatable Read", "Phantom Read", "Lost Update"],
            correctOption: 1,
            explanation: "Non-Repeatable Read occurs when re-reading the exact same row yields modified data committed by another concurrent transaction."
        },
        {
            id: "pq-dbms-7",
            domain: "DBMS",
            topic: "Clustered vs Non-Clustered Index",
            company: "flipkart",
            companyName: "Flipkart",
            difficulty: "Medium",
            isPYQ: true,
            pyqLabel: "Flipkart Tech",
            statement: "How many Clustered Indexes can exist on a single relational database table?",
            options: [
                "Exactly one, because a clustered index physically dictates the on-disk ordering of data rows.",
                "Unlimited, as many as the DBA creates.",
                "Up to 16 clustered indexes per table.",
                "Zero, clustered indexes are strictly virtual."
            ],
            correctOption: 0,
            explanation: "Because physical disk records can only be sorted in one order, a table can possess only ONE clustered index (usually on the Primary Key)."
        },
        {
            id: "pq-dbms-8",
            domain: "DBMS",
            topic: "Database Views",
            company: "infosys",
            companyName: "Infosys",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "Campus Core",
            statement: "What is a database View?",
            options: [
                "A physical hard copy printout of table data.",
                "A virtual table based on the result-set of an SQL statement, consuming no physical data storage of its own.",
                "A temporary log file holding discarded transaction records.",
                "An encrypted database backup stored in memory."
            ],
            correctOption: 1,
            explanation: "A View is a stored SQL query acting as a virtual table; it does not store rows physically (unless materialized)."
        }
    ,
{
        "id": "pq-code-13",
        "domain": "Coding / DSA",
        "topicId": "dsa-4",
        "statement": "Given the head of a Singly Linked List, which algorithm determines if the linked list has a cycle while using strictly O(1) auxiliary memory space?\n\n```text\nExample:\n3 -> 2 -> 0 -> -4\n     ^          |\n     +----------+\n```",
        "options": [
                "Store visited node addresses in a Hash Set",
                "Floyd's Cycle Detection Algorithm (Slow and Fast pointers)",
                "Sort the nodes by memory address",
                "Recursively reverse the list until null is encountered"
        ],
        "correctOption": 1,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "Amazon SDE & TCS Digital PYQ",
        "company": "amazon",
        "companyName": "Amazon",
        "explanation": "Step 1: Using a Hash Set requires O(N) extra memory space to store visited pointers, violating the O(1) constraint.\nStep 2: Floyd's Cycle Detection Algorithm (Tortoise and Hare) uses two pointers:\n  - slow moves 1 step at a time: slow = slow.next\n  - fast moves 2 steps at a time: fast = fast.next.next\nStep 3: If a cycle exists, the fast pointer will lap and collide with the slow pointer inside the cycle.\nStep 4: If fast reaches null (or fast.next is null), no cycle exists.\nComplexity: O(N) time and O(1) auxiliary space."
},
{
        "id": "pq-code-14",
        "domain": "Coding / DSA",
        "topicId": "dsa-5",
        "statement": "Given an array `arr = [4, 5, 2, 25]`, what is the Next Greater Element (NGE) for each element in the array?\n\n```text\nInput:  [4, 5, 2, 25]\nOutput: [?, ?, ?, ?]\n```",
        "options": [
                "[5, 25, 25, -1]",
                "[5, 25, -1, -1]",
                "[25, 25, 25, -1]",
                "[5, -1, 25, -1]"
        ],
        "correctOption": 0,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "Microsoft & Infosys DSE PYQ",
        "company": "microsoft",
        "companyName": "Microsoft",
        "explanation": "Step 1: Traverse array from right to left using a Monotonic Decreasing Stack:\nStep 2: At 25: Stack is empty -> NGE is -1. Push 25.\nStep 3: At 2: Stack top is 25 (> 2) -> NGE is 25. Push 2.\nStep 4: At 5: Stack top is 2 (<= 5), pop 2. Next top is 25 (> 5) -> NGE is 25. Push 5.\nStep 5: At 4: Stack top is 5 (> 4) -> NGE is 5. Push 4.\nStep 6: NGE array = [5, 25, 25, -1].\nComplexity: O(N) time using Monotonic Stack."
},
{
        "id": "pq-code-15",
        "domain": "Coding / DSA",
        "topicId": "dsa-6",
        "statement": "Given a Binary Search Tree (BST) and two nodes with keys p = 2 and q = 8, what is the Lowest Common Ancestor (LCA) in the following BST?\n\n```text\n        6\n       / \\\n      2   8\n     / \\ / \\\n    0  4 7  9\n```",
        "options": [
                "Node 2",
                "Node 6",
                "Node 8",
                "Node 4"
        ],
        "correctOption": 1,
        "difficulty": "Easy",
        "isPYQ": true,
        "pyqLabel": "Amazon & Google Technical OA",
        "company": "amazon",
        "companyName": "Amazon",
        "explanation": "Step 1: In a BST, for any node N, all values in its left subtree are < N.val, and all values in its right subtree are > N.val.\nStep 2: Start at root = 6.\nStep 3: Compare target nodes: p = 2 < 6 (resides in left subtree), while q = 8 > 6 (resides in right subtree).\nStep 4: Since p and q lie on opposite sides of node 6, node 6 is the Lowest Common Ancestor (the split point).\nComplexity: O(H) where H is tree height."
},
{
        "id": "pq-code-16",
        "domain": "Coding / DSA",
        "topicId": "dsa-2",
        "statement": "Given an integer array `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`, what is the maximum sum of any contiguous subarray using Kadane's Algorithm?",
        "options": [
                "5",
                "6",
                "7",
                "4"
        ],
        "correctOption": 1,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "TCS Digital & Flipkart SDE PYQ",
        "company": "tcs",
        "companyName": "TCS",
        "explanation": "Step 1: Kadane's Algorithm maintains current_sum and max_so_far.\nStep 2: Recurrence: current_sum = max(nums[i], current_sum + nums[i]); max_so_far = max(max_so_far, current_sum).\nStep 3: Trace subarray `[4, -1, 2, 1]`:\n  - At 4: current_sum = 4, max_so_far = 4\n  - At -1: current_sum = 4 + (-1) = 3, max_so_far = 4\n  - At 2: current_sum = 3 + 2 = 5, max_so_far = 5\n  - At 1: current_sum = 5 + 1 = 6, max_so_far = 6\n  - At -5: current_sum = 6 - 5 = 1, max_so_far = 6\n  - At 4: current_sum = 1 + 4 = 5, max_so_far = 6.\nStep 4: Maximum contiguous subarray sum is 6.\nComplexity: O(N) time and O(1) space."
},
{
        "id": "pq-code-17",
        "domain": "Coding / DSA",
        "topicId": "dsa-8",
        "statement": "You are given coins of denominations `[1, 2, 5]` and total amount `11`. What is the minimum number of coins needed to make up that amount?\n\n```text\nInput: coins = [1, 2, 5], amount = 11\nOutput: ?\n```",
        "options": [
                "2 coins (5 + 6)",
                "3 coins (5 + 5 + 1)",
                "4 coins (5 + 2 + 2 + 2)",
                "5 coins (2 + 2 + 2 + 5)"
        ],
        "correctOption": 1,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "Google & Microsoft Interview PYQ",
        "company": "google",
        "companyName": "Google",
        "explanation": "Step 1: Using 1D DP array of size 12 initialized to infinity: dp[0] = 0.\nStep 2: Recurrence: dp[i] = min(dp[i], dp[i - coin] + 1) for each coin.\nStep 3: Optimal combination: 5 + 5 + 1 = 11.\nStep 4: Total coins = 2 coins of denomination 5 + 1 coin of denomination 1 = 3 coins.\nComplexity: O(Amount × Number_of_Coins) time and O(Amount) space."
},
{
        "id": "pq-code-18",
        "domain": "Coding / DSA",
        "topicId": "dsa-9",
        "statement": "In an unweighted graph with V vertices and E edges, which traversal algorithm is GUARANTEED to find the shortest path (minimum number of edges) between a starting vertex and a target vertex?",
        "options": [
                "Depth-First Search (DFS)",
                "Breadth-First Search (BFS)",
                "Preorder Tree Traversal",
                "Kruskal's Algorithm"
        ],
        "correctOption": 1,
        "difficulty": "Easy",
        "isPYQ": true,
        "pyqLabel": "Accenture & Cognizant Tech Assessment",
        "company": "accenture",
        "companyName": "Accenture",
        "explanation": "Step 1: Breadth-First Search (BFS) explores all vertices at distance d before exploring any vertex at distance d + 1.\nStep 2: When the target vertex is first discovered in BFS, the path taken from the source is guaranteed to have the minimum number of edges.\nStep 3: DFS explores deeply along single branches and may discover a path of 10 edges before finding a 1-edge shortcut.\nFinal Answer: Breadth-First Search (BFS)"
},
{
        "id": "pq-code-19",
        "domain": "Coding / DSA",
        "topicId": "dsa-1",
        "statement": "Given an array `nums` of size N containing numbers where every element appears exactly twice except for ONE element that appears only once, how can you find that unique element in O(N) time and O(1) memory space?",
        "options": [
                "Sort the array and check adjacent pairs in O(N log N)",
                "Use a Hash Table to count frequencies in O(N) space",
                "Compute the cumulative Bitwise XOR of all array elements",
                "Use nested loops to compare every element with every other element"
        ],
        "correctOption": 2,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "Amazon & Walmart Tech Interview",
        "company": "amazon",
        "companyName": "Amazon",
        "explanation": "Step 1: Bitwise XOR has two key mathematical properties:\n  - a ^ a = 0 (XOR of any number with itself is 0)\n  - a ^ 0 = a (XOR of any number with 0 is the number itself)\n  - XOR is associative and commutative: (a ^ b ^ a) = (a ^ a) ^ b = 0 ^ b = b.\nStep 2: If we XOR all numbers in the array, every number appearing twice cancels out to 0.\nStep 3: The only surviving value is the single non-repeating element!\nComplexity: O(N) time and O(1) space."
},
{
        "id": "pq-code-20",
        "domain": "Coding / DSA",
        "topicId": "dsa-2",
        "statement": "Given an array of intervals `[[1, 3], [2, 6], [8, 10], [15, 18]]`, what is the result after merging all overlapping intervals?\n\n```text\nInput:  [[1, 3], [2, 6], [8, 10], [15, 18]]\nOutput: ?\n```",
        "options": [
                "[[1, 6], [8, 10], [15, 18]]",
                "[[1, 3], [2, 10], [15, 18]]",
                "[[1, 10], [15, 18]]",
                "[[1, 18]]"
        ],
        "correctOption": 0,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "Google & Microsoft SDE PYQ",
        "company": "google",
        "companyName": "Google",
        "explanation": "Step 1: Sort intervals by start time: `[[1, 3], [2, 6], [8, 10], [15, 18]]` (already sorted).\nStep 2: Start with first interval `[1, 3]`.\nStep 3: Compare with next interval `[2, 6]`: Since start 2 <= 3 (end of previous), they overlap!\n  Merged interval = `[1, max(3, 6)]` = `[1, 6]`.\nStep 4: Compare with `[8, 10]`: Start 8 > 6 (no overlap). Add `[8, 10]`.\nStep 5: Compare with `[15, 18]`: Start 15 > 10 (no overlap). Add `[15, 18]`.\nFinal Merged Set: `[[1, 6], [8, 10], [15, 18]]`.\nComplexity: O(N log N) due to sorting."
},
{
        "id": "pq-code-21",
        "domain": "Coding / DSA",
        "topicId": "dsa-6",
        "statement": "What is the maximum number of nodes in a Binary Tree of height `h` (where a tree with only a root node has height `h = 1`)?",
        "options": [
                "2^h - 1",
                "2^(h - 1)",
                "2^(h + 1) - 1",
                "h^2"
        ],
        "correctOption": 0,
        "difficulty": "Easy",
        "isPYQ": true,
        "pyqLabel": "TCS NQT & Wipro Elite PYQ",
        "company": "tcs",
        "companyName": "TCS",
        "explanation": "Step 1: Level 1 has 2^0 = 1 node.\nStep 2: Level 2 has 2^1 = 2 nodes.\nStep 3: Level h has 2^(h - 1) nodes.\nStep 4: Total maximum nodes in full binary tree = Sum of GP: 2^0 + 2^1 + 2^2 + ... + 2^(h - 1).\nStep 5: Sum = a(r^h - 1) / (r - 1) = 1(2^h - 1) / (2 - 1) = 2^h - 1.\nFor example, if h = 3: 2^3 - 1 = 7 nodes."
},
{
        "id": "pq-code-22",
        "domain": "Coding / DSA",
        "topicId": "dsa-8",
        "statement": "Given an unsorted array `nums = [10, 9, 2, 5, 3, 7, 101, 18]`, what is the length of the Longest Increasing Subsequence (LIS)?",
        "options": [
                "3",
                "4",
                "5",
                "6"
        ],
        "correctOption": 1,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "Amazon & Flipkart SDE-1 OA",
        "company": "amazon",
        "companyName": "Amazon",
        "explanation": "Step 1: One valid strictly increasing subsequence is: `[2, 3, 7, 101]` (length 4).\nStep 2: Another valid strictly increasing subsequence is: `[2, 3, 7, 18]` (length 4).\nStep 3: No increasing subsequence of length 5 exists.\nStep 4: LIS length = 4.\nComplexity: Can be solved in O(N^2) using DP or O(N log N) using Binary Search (Patience Sorting)."
},
{
        "id": "pq-code-23",
        "domain": "Coding / DSA",
        "topicId": "dsa-5",
        "statement": "Which data structure is optimal for finding the Maximum Element in every Sliding Window of size K across an array of size N in O(N) total runtime?",
        "options": [
                "Max-Heap (Priority Queue)",
                "Monotonic Decreasing Deque (Double-Ended Queue)",
                "Binary Search Tree",
                "Simple Array"
        ],
        "correctOption": 1,
        "difficulty": "Hard",
        "isPYQ": true,
        "pyqLabel": "Google & Microsoft OA PYQ",
        "company": "google",
        "companyName": "Google",
        "explanation": "Step 1: A Max-Heap takes O(N log K) time because removing elements that fall outside the window takes O(log K).\nStep 2: A Monotonic Deque stores indices of elements in strictly decreasing value order.\nStep 3: For each incoming element: remove elements from the back that are <= incoming element; remove elements from the front if their index < left window boundary.\nStep 4: The front of the deque always contains the maximum element of the current window.\nStep 5: Since each element is pushed and popped at most once, overall runtime is strictly O(N)."
},
{
        "id": "pq-code-24",
        "domain": "Coding / DSA",
        "topicId": "dsa-7",
        "statement": "What is the time complexity of generating all permutations of an array of N distinct integers using recursion/backtracking?",
        "options": [
                "O(N^2)",
                "O(2^N)",
                "O(N × N!)",
                "O(N^N)"
        ],
        "correctOption": 2,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "Infosys Specialist & TCS Prime PYQ",
        "company": "infosys",
        "companyName": "Infosys",
        "explanation": "Step 1: There are N! total permutations of N distinct elements.\nStep 2: Generating each permutation requires a recursion tree of depth N, copying an array of length N into the result list.\nStep 3: Total operations = N! leaves × O(N) work per leaf = O(N × N!)."
},
{
        "id": "pq-code-25",
        "domain": "Coding / DSA",
        "topicId": "dsa-3",
        "statement": "Given string `s = 'abcabcbb'`, what is the length of the Longest Substring Without Repeating Characters?",
        "options": [
                "2",
                "3",
                "4",
                "5"
        ],
        "correctOption": 1,
        "difficulty": "Medium",
        "isPYQ": true,
        "pyqLabel": "Amazon & Adobe SDE PYQ",
        "company": "amazon",
        "companyName": "Amazon",
        "explanation": "Step 1: Use Sliding Window with a Hash Map storing the most recent index of each character.\nStep 2: At 'a': window='a' (len 1)\nStep 3: At 'b': window='ab' (len 2)\nStep 4: At 'c': window='abc' (len 3, max=3)\nStep 5: At second 'a': duplicate found! Move left boundary past first 'a' -> window='bca' (len 3)\nStep 6: At second 'b': move left past first 'b' -> window='cab' (len 3)\nStep 7: The longest substring without repeating characters is 'abc' (length 3).\nComplexity: O(N) time and O(min(N, M)) space."
},
{
        "id": "pq-code-26",
        "domain": "Coding / DSA",
        "topicId": "dsa-4",
        "statement": "You are given the heads of two sorted linked lists `list1 = 1 -> 2 -> 4` and `list2 = 1 -> 3 -> 4`. How can they be merged into one sorted list in O(N + M) time without allocating new nodes?",
        "options": [
                "Convert both to arrays, sort the array, and create a brand new list",
                "Use a dummy head pointer and splice existing nodes using their .next pointers",
                "Reverse both lists first",
                "Insert all nodes into a Max-Heap"
        ],
        "correctOption": 1,
        "difficulty": "Easy",
        "isPYQ": true,
        "pyqLabel": "Cognizant & Capgemini Tech PYQ",
        "company": "cognizant",
        "companyName": "Cognizant",
        "explanation": "Step 1: Maintain a dummy head node and a tail pointer pointing to it.\nStep 2: In a while loop (while list1 && list2):\n  - Compare list1.val and list2.val.\n  - Point tail.next to the smaller node and advance that list's pointer.\n  - Advance tail pointer.\nStep 3: Attach the remaining non-null list to tail.next.\nStep 4: Returns dummy.next in O(N + M) time using O(1) extra space because no new nodes are allocated."
},
{
        "id": "pq-code-27",
        "domain": "Coding / DSA",
        "topicId": "dsa-9",
        "statement": "In Dijkstra's algorithm for finding the shortest path from a source node to all other nodes in a weighted graph, why does the algorithm FAIL when negative edge weights are present?",
        "options": [
                "It gets stuck in an infinite recursion loop",
                "It greedily assumes that once a node is visited/finalized, no shorter path to it can ever be found later",
                "It cannot use a Priority Queue with negative numbers",
                "It changes directed graphs into undirected graphs"
        ],
        "correctOption": 1,
        "difficulty": "Hard",
        "isPYQ": true,
        "pyqLabel": "Google & Microsoft Core Systems PYQ",
        "company": "google",
        "companyName": "Google",
        "explanation": "Step 1: Dijkstra's algorithm relies on the Greedy principle: the node with the minimum tentative distance is marked as visited/settled.\nStep 2: With non-negative weights, any alternate path through other unvisited nodes can only ADD weight, meaning the settled distance cannot be improved.\nStep 3: However, if a negative edge weight exists, a detour through a negative edge could yield a total distance smaller than the already settled distance.\nStep 4: Dijkstra cannot update already finalized nodes and therefore produces incorrect shortest path distances.\nStep 5: For graphs with negative edge weights, the Bellman-Ford algorithm (O(V × E)) must be used instead."
}
,
        {
            id: "pf-gen-apt-1",
            domain: "Aptitude",
            topic: "Percentages",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "A shirt priced at ₹800 is sold at a 15% discount. What is the selling price?",
            options: ["₹620", "₹660", "₹680", "₹700"],
            correctOption: 2,
            explanation: "15% of 800 = 120. Selling price = 800 − 120 = ₹680."
        },
        {
            id: "pf-gen-apt-2",
            domain: "Aptitude",
            topic: "Time & Work",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "A can finish a job in 12 days and B in 18 days. How long will they take working together?",
            options: ["6 days", "7.2 days", "8 days", "9 days"],
            correctOption: 1,
            explanation: "Combined daily work = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days."
        },
        {
            id: "pf-gen-apt-3",
            domain: "Aptitude",
            topic: "Ratio & Proportion",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "The ratio of boys to girls in a class is 3:5. If there are 40 students, how many are girls?",
            options: ["15", "20", "25", "30"],
            correctOption: 2,
            explanation: "There are 3 + 5 = 8 parts. Each part is 40/8 = 5; girls = 5 × 5 = 25."
        },
        {
            id: "pf-gen-apt-4",
            domain: "Aptitude",
            topic: "Profit & Loss",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "An item costs ₹1,200 and is sold for ₹1,500. What is the profit percentage?",
            options: ["20%", "25%", "30%", "35%"],
            correctOption: 1,
            explanation: "Profit = 1500 − 1200 = 300. Profit percentage = 300/1200 × 100 = 25%."
        },
        {
            id: "pf-gen-apt-5",
            domain: "Aptitude",
            topic: "Probability",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "A fair six-sided die is rolled once. What is the probability of getting a prime number?",
            options: ["1/6", "1/3", "1/2", "2/3"],
            correctOption: 2,
            explanation: "Prime faces are 2, 3, and 5. Probability = 3/6 = 1/2."
        },
        {
            id: "pf-gen-rea-1",
            domain: "Reasoning",
            topic: "Number Series",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Find the next number: 3, 6, 12, 24, __.",
            options: ["30", "36", "42", "48"],
            correctOption: 3,
            explanation: "Each term is multiplied by 2. The next term is 24 × 2 = 48."
        },
        {
            id: "pf-gen-rea-2",
            domain: "Reasoning",
            topic: "Coding-Decoding",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "If CAT is coded as DBU by shifting each letter one step forward, how is DOG coded?",
            options: ["EPH", "EOG", "DPH", "FPH"],
            correctOption: 0,
            explanation: "D→E, O→P, and G→H, so DOG becomes EPH."
        },
        {
            id: "pf-gen-rea-3",
            domain: "Reasoning",
            topic: "Direction Sense",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Ravi walks 4 km north, then 3 km east. How far is he from his starting point?",
            options: ["5 km", "6 km", "7 km", "1 km"],
            correctOption: 0,
            explanation: "The path forms a right triangle. Distance = √(4² + 3²) = 5 km."
        },
        {
            id: "pf-gen-rea-4",
            domain: "Reasoning",
            topic: "Syllogisms",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Statements: All roses are flowers. Some flowers fade quickly. Which conclusion definitely follows?",
            options: ["All roses fade quickly", "Some roses fade quickly", "All roses are flowers", "No flowers are roses"],
            correctOption: 2,
            explanation: "Only the statement that all roses are flowers is guaranteed by the premises."
        },
        {
            id: "pf-gen-rea-5",
            domain: "Reasoning",
            topic: "Odd One Out",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Choose the odd one out: 9, 16, 25, 36,  forty-nine, 54.",
            options: ["16", "25", "49", "54"],
            correctOption: 3,
            explanation: "9, 16, 25, 36, and 49 are perfect squares; 54 is not."
        },
        {
            id: "pf-gen-ver-1",
            domain: "Verbal",
            topic: "Subject-Verb Agreement",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Choose the correct sentence.",
            options: ["Each of the students have a notebook.", "Each of the students has a notebook.", "Each students has a notebook.", "Each of student have a notebook."],
            correctOption: 1,
            explanation: "“Each” is singular, so it takes the singular verb “has”."
        },
        {
            id: "pf-gen-ver-2",
            domain: "Verbal",
            topic: "Vocabulary",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Choose the closest meaning of “concise”.",
            options: ["Confusing", "Brief and clear", "Very loud", "Uncertain"],
            correctOption: 1,
            explanation: "Concise means expressing something clearly in few words."
        },
        {
            id: "pf-gen-ver-3",
            domain: "Verbal",
            topic: "Prepositions",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Choose the correct phrase.",
            options: ["She is good in mathematics.", "She is good at mathematics.", "She is good on mathematics.", "She is good with mathematics at."],
            correctOption: 1,
            explanation: "The standard expression is “good at” a subject or activity."
        },
        {
            id: "pf-gen-ver-4",
            domain: "Verbal",
            topic: "Sentence Correction",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Choose the grammatically correct sentence.",
            options: ["Neither of the answers are correct.", "Neither of the answers is correct.", "Neither answers is correct.", "Neither answer are correct."],
            correctOption: 1,
            explanation: "“Neither” is treated as singular in this construction and takes “is”."
        },
        {
            id: "pf-gen-ver-5",
            domain: "Verbal",
            topic: "Reading Comprehension",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "A passage says that regular practice improves speed but feedback improves accuracy. Which statement is supported?",
            options: ["Speed matters and accuracy does not.", "Feedback can help improve accuracy.", "Practice always guarantees a perfect score.", "Feedback reduces speed in every case."],
            correctOption: 1,
            explanation: "The passage explicitly states that feedback improves accuracy."
        },
        {
            id: "pf-gen-sql-1",
            domain: "SQL",
            topic: "SELECT & WHERE",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Which query returns employees with salary greater than 50000?",
            options: ["SELECT Employees WHERE salary > 50000;", "SELECT * FROM Employees WHERE salary > 50000;", "GET * FROM Employees IF salary > 50000;", "SELECT salary > 50000 FROM Employees;"],
            correctOption: 1,
            explanation: "SELECT * FROM Employees WHERE salary > 50000; selects rows meeting the condition."
        },
        {
            id: "pf-gen-sql-2",
            domain: "SQL",
            topic: "Aggregate Functions",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Which SQL function counts the number of rows?",
            options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
            correctOption: 2,
            explanation: "COUNT(*) returns the number of rows in the result set."
        },
        {
            id: "pf-gen-sql-3",
            domain: "SQL",
            topic: "GROUP BY",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Which clause filters grouped results after GROUP BY?",
            options: ["WHERE", "ORDER BY", "HAVING", "LIMIT"],
            correctOption: 2,
            explanation: "HAVING filters groups after aggregation; WHERE filters rows before grouping."
        },
        {
            id: "pf-gen-sql-4",
            domain: "SQL",
            topic: "Joins",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Which join returns only rows with matching keys in both tables?",
            options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "FULL OUTER JOIN"],
            correctOption: 0,
            explanation: "INNER JOIN returns rows where the join condition matches in both tables."
        },
        {
            id: "pf-gen-sql-5",
            domain: "SQL",
            topic: "Sorting",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "How do you sort employees by salary from highest to lowest?",
            options: ["ORDER BY salary ASC", "SORT salary DESC", "ORDER BY salary DESC", "GROUP BY salary DESC"],
            correctOption: 2,
            explanation: "ORDER BY salary DESC sorts from the largest salary to the smallest."
        },
        {
            id: "pf-gen-dbms-1",
            domain: "DBMS",
            topic: "SQL vs DBMS",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "If SQL is used to write database queries, why is a DBMS still needed?",
            options: ["SQL stores and secures data by itself without software.", "A DBMS stores, organizes, secures, and manages data while SQL is a language used to query it.", "DBMS is only another name for SELECT.", "SQL can only be used without a database system."],
            correctOption: 1,
            explanation: "SQL is a language; a DBMS is the software system that stores and manages the database and processes SQL statements."
        },
        {
            id: "pf-gen-dbms-2",
            domain: "DBMS",
            topic: "Normalization",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "What is a key purpose of normalization?",
            options: ["To duplicate every row", "To reduce data redundancy and update anomalies", "To remove all primary keys", "To prevent all SQL queries"],
            correctOption: 1,
            explanation: "Normalization organizes related data to reduce unnecessary duplication and update anomalies."
        },
        {
            id: "pf-gen-dbms-3",
            domain: "DBMS",
            topic: "Primary Keys",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Which statement about a primary key is correct?",
            options: ["It may contain duplicate values.", "It must uniquely identify each row and cannot be NULL.", "It can only store text.", "Every table must have exactly two primary keys."],
            correctOption: 1,
            explanation: "A primary key uniquely identifies each row and cannot contain NULL values."
        },
        {
            id: "pf-gen-dbms-4",
            domain: "DBMS",
            topic: "ACID Properties",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Which ACID property means a transaction happens completely or not at all?",
            options: ["Consistency", "Isolation", "Atomicity", "Durability"],
            correctOption: 2,
            explanation: "Atomicity ensures a transaction is all-or-nothing."
        },
        {
            id: "pf-gen-dbms-5",
            domain: "DBMS",
            topic: "Indexes",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "What is a common purpose of a database index?",
            options: ["To speed up suitable data lookups", "To replace all table data", "To guarantee every query is faster", "To prevent transactions"],
            correctOption: 0,
            explanation: "Indexes can improve lookup and sorting performance, though they add storage and write overhead."
        },
        {
            id: "pf-gen-code-1",
            domain: "Coding / DSA",
            topic: "Arrays",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "What is the time complexity of accessing an array element by index in a typical array?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correctOption: 0,
            explanation: "Direct indexed access is constant time, O(1)."
        },
        {
            id: "pf-gen-code-2",
            domain: "Coding / DSA",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "Which data structure follows FIFO (First In, First Out)?",
            options: ["Stack", "Queue", "Tree", "Heap"],
            correctOption: 1,
            explanation: "A queue removes items in the order they were inserted."
        },
        {
            id: "pf-gen-code-3",
            domain: "Coding / DSA",
            topic: "Binary Search",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "What is the time complexity of binary search on a sorted array?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correctOption: 1,
            explanation: "Binary search halves the search interval each step, giving O(log n) time."
        },
        {
            id: "pf-gen-code-4",
            domain: "Coding / DSA",
            topic: "Hashing",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "What is the average-case lookup time in a well-designed hash table?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correctOption: 0,
            explanation: "Hash tables typically provide average-case constant-time lookup, though worst-case can be O(n)."
        },
        {
            id: "pf-gen-code-5",
            domain: "Coding / DSA",
            topic: "Recursion",
            difficulty: "Medium",
            isPYQ: false,
            pyqLabel: "PrepForge Practice",
            statement: "What is the purpose of a base case in recursion?",
            options: ["To make the function call itself forever", "To stop recursive calls when a condition is met", "To sort all inputs", "To allocate a database"],
            correctOption: 1,
            explanation: "A base case terminates recursion and prevents unbounded recursive calls."
        }
,
        {
            "id": "pf-company-capgemini-1",
            "domain": "Verbal",
            "topic": "Subject-Verb Agreement",
            "company": "capgemini",
            "companyName": "Capgemini",
            "difficulty": "Easy",
            "isPYQ": false,
            "pyqLabel": "Capgemini Practice Pattern",
            "statement": "Neither the analyst nor the developers ___ available for the review.",
            "options": [
                "was",
                "were",
                "is",
                "has been"
            ],
            "correctOption": 1,
            "explanation": "With “neither…nor”, the verb agrees with the nearer subject. “Developers” is plural, so “were” is correct."
        },
        {
            "id": "pf-company-capgemini-2",
            "domain": "SQL",
            "topic": "GROUP BY",
            "company": "capgemini",
            "companyName": "Capgemini",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Capgemini Practice Pattern",
            "statement": "You need one row per department with its average salary. Which clause groups employee rows by department?",
            "options": [
                "ORDER BY department",
                "GROUP BY department",
                "HAVING department",
                "DISTINCT department"
            ],
            "correctOption": 1,
            "explanation": "GROUP BY department forms one group for each department so aggregate functions such as AVG(salary) can be applied."
        },
        {
            "id": "pf-company-tech-mahindra-1",
            "domain": "Aptitude",
            "topic": "Averages",
            "company": "tech-mahindra",
            "companyName": "Tech Mahindra",
            "difficulty": "Easy",
            "isPYQ": false,
            "pyqLabel": "Tech Mahindra Practice Pattern",
            "statement": "The average of five numbers is 18. Four numbers are 12, 16, 20, and 22. What is the fifth number?",
            "options": [
                "18",
                "20",
                "22",
                "24"
            ],
            "correctOption": 1,
            "explanation": "The total must be 5 × 18 = 90. The four known numbers total 70, so the fifth is 20. Wait: 90 − 70 = 20."
        },
        {
            "id": "pf-company-tech-mahindra-2",
            "domain": "Coding / DSA",
            "topic": "Array Complexity",
            "company": "tech-mahindra",
            "companyName": "Tech Mahindra",
            "difficulty": "Easy",
            "isPYQ": false,
            "pyqLabel": "Tech Mahindra Practice Pattern",
            "statement": "In a typical array, what is the time complexity of scanning every element once to find the maximum?",
            "options": [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n²)"
            ],
            "correctOption": 2,
            "explanation": "Each of the n elements is inspected once, so the time complexity is O(n)."
        },
        {
            "id": "pf-company-hcl-1",
            "domain": "Reasoning",
            "topic": "Number Series",
            "company": "hcl",
            "companyName": "HCL Technologies",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "HCL Technologies Practice Pattern",
            "statement": "Find the next term: 2, 6, 12, 20, 30, __.",
            "options": [
                "36",
                "40",
                "42",
                "44"
            ],
            "correctOption": 2,
            "explanation": "The differences are 4, 6, 8, and 10. The next difference is 12, so 30 + 12 = 42."
        },
        {
            "id": "pf-company-hcl-2",
            "domain": "SQL",
            "topic": "HAVING",
            "company": "hcl",
            "companyName": "HCL Technologies",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "HCL Technologies Practice Pattern",
            "statement": "Which query clause filters departments after calculating COUNT(*) for each department?",
            "options": [
                "WHERE",
                "HAVING",
                "FROM",
                "VALUES"
            ],
            "correctOption": 1,
            "explanation": "HAVING filters groups after aggregation; WHERE filters individual rows before grouping."
        },
        {
            "id": "pf-company-hcl-3",
            "domain": "Coding / DSA",
            "topic": "Linked Lists",
            "company": "hcl",
            "companyName": "HCL Technologies",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "HCL Technologies Practice Pattern",
            "statement": "Which standard technique detects a cycle in a linked list using O(1) extra space?",
            "options": [
                "Binary search",
                "Floyd’s slow-and-fast pointers",
                "Merge sort",
                "Prefix sums"
            ],
            "correctOption": 1,
            "explanation": "Floyd’s cycle detection uses slow and fast pointers and requires O(1) extra space."
        },
        {
            "id": "pf-company-hcl-4",
            "domain": "Aptitude",
            "topic": "Percentage Change",
            "company": "hcl",
            "companyName": "HCL Technologies",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "HCL Technologies Practice Pattern",
            "statement": "A value increases by 25% and then decreases by 20%. Compared with the original, the final value is:",
            "options": [
                "5% higher",
                "5% lower",
                "Unchanged",
                "10% higher"
            ],
            "correctOption": 2,
            "explanation": "For an original value of 100: 100 × 1.25 × 0.80 = 100, so it is unchanged."
        },
        {
            "id": "pf-company-ibm-1",
            "domain": "DBMS",
            "topic": "ACID Properties",
            "company": "ibm",
            "companyName": "IBM",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "IBM Practice Pattern",
            "statement": "Which ACID property ensures that committed data remains saved even after a system failure?",
            "options": [
                "Atomicity",
                "Consistency",
                "Isolation",
                "Durability"
            ],
            "correctOption": 3,
            "explanation": "Durability means committed transaction changes persist despite failures."
        },
        {
            "id": "pf-company-ibm-2",
            "domain": "SQL",
            "topic": "Joins",
            "company": "ibm",
            "companyName": "IBM",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "IBM Practice Pattern",
            "statement": "Which join keeps every row from the left table and matching rows from the right table?",
            "options": [
                "INNER JOIN",
                "LEFT JOIN",
                "CROSS JOIN",
                "SELF JOIN only"
            ],
            "correctOption": 1,
            "explanation": "LEFT JOIN returns all left-table rows; unmatched right-side columns are NULL."
        },
        {
            "id": "pf-company-ibm-3",
            "domain": "Coding / DSA",
            "topic": "Hash Tables",
            "company": "ibm",
            "companyName": "IBM",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "IBM Practice Pattern",
            "statement": "What is the average lookup time in a well-distributed hash table?",
            "options": [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n log n)"
            ],
            "correctOption": 0,
            "explanation": "A hash table usually offers average-case O(1) lookup, although worst-case performance can be O(n)."
        },
        {
            "id": "pf-company-ibm-4",
            "domain": "Reasoning",
            "topic": "Logical Deduction",
            "company": "ibm",
            "companyName": "IBM",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "IBM Practice Pattern",
            "statement": "Statements: All servers are computers. Some computers are portable. Which conclusion must be true?",
            "options": [
                "All servers are portable",
                "Some servers are portable",
                "All servers are computers",
                "No computers are servers"
            ],
            "correctOption": 2,
            "explanation": "The first statement directly guarantees that all servers are computers; no relationship between servers and portable computers is guaranteed."
        },
        {
            "id": "pf-company-deloitte-1",
            "domain": "SQL",
            "topic": "Subqueries",
            "company": "deloitte",
            "companyName": "Deloitte",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Deloitte Practice Pattern",
            "statement": "Which query correctly finds employees earning more than the average salary?",
            "options": [
                "SELECT * FROM Employees WHERE salary > AVG(salary);",
                "SELECT * FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
                "SELECT AVG(salary) FROM Employees WHERE salary > salary;",
                "SELECT salary FROM Employees HAVING salary > average;"
            ],
            "correctOption": 1,
            "explanation": "The scalar subquery calculates the overall average, then the outer WHERE compares each employee salary to it."
        },
        {
            "id": "pf-company-microsoft-1",
            "domain": "Coding / DSA",
            "topic": "Dynamic Programming",
            "company": "microsoft",
            "companyName": "Microsoft",
            "difficulty": "Hard",
            "isPYQ": false,
            "pyqLabel": "Microsoft Practice Pattern",
            "statement": "Dynamic programming is especially useful when a problem has which pair of properties?",
            "options": [
                "Sorted input and constant space",
                "Overlapping subproblems and optimal substructure",
                "Only negative numbers",
                "No repeated states"
            ],
            "correctOption": 1,
            "explanation": "Dynamic programming reuses results of overlapping subproblems and commonly relies on optimal substructure."
        },
        {
            "id": "pf-company-zoho-1",
            "domain": "Coding / DSA",
            "topic": "Array Rotation",
            "company": "zoho",
            "companyName": "Zoho",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Zoho Practice Pattern",
            "statement": "What is the time complexity of rotating an array by k positions using the reversal algorithm?",
            "options": [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n²)"
            ],
            "correctOption": 2,
            "explanation": "The reversal algorithm reverses sections of the array a constant number of times, giving O(n) time."
        },
        {
            "id": "pf-company-zoho-2",
            "domain": "Aptitude",
            "topic": "Ratios",
            "company": "zoho",
            "companyName": "Zoho",
            "difficulty": "Easy",
            "isPYQ": false,
            "pyqLabel": "Zoho Practice Pattern",
            "statement": "The ratio of two numbers is 4:7 and their sum is 55. What is the larger number?",
            "options": [
                "20",
                "28",
                "35",
                "42"
            ],
            "correctOption": 2,
            "explanation": "There are 11 total parts; each part is 55/11 = 5. The larger number is 7 × 5 = 35."
        },
        {
            "id": "pf-company-zoho-3",
            "domain": "SQL",
            "topic": "Subqueries",
            "company": "zoho",
            "companyName": "Zoho",
            "difficulty": "Hard",
            "isPYQ": false,
            "pyqLabel": "Zoho Practice Pattern",
            "statement": "Which approach can return the second-highest distinct salary from Employees?",
            "options": [
                "SELECT MIN(salary) FROM Employees",
                "SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees)",
                "SELECT COUNT(*) FROM Employees",
                "SELECT salary FROM Employees GROUP BY name"
            ],
            "correctOption": 1,
            "explanation": "The subquery gets the maximum salary; the outer MAX finds the greatest salary below that value."
        },
        {
            "id": "pf-company-flipkart-1",
            "domain": "Coding / DSA",
            "topic": "Sliding Window",
            "company": "flipkart",
            "companyName": "Flipkart",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Flipkart Practice Pattern",
            "statement": "For finding the maximum sum of any contiguous subarray of fixed length k, a sliding window can process the array in:",
            "options": [
                "O(n) time",
                "O(n²) time always",
                "O(log n) time",
                "O(1) time regardless of n"
            ],
            "correctOption": 0,
            "explanation": "After computing the first window, each step removes one value and adds one value, so the scan is O(n)."
        },
        {
            "id": "pf-company-flipkart-2",
            "domain": "Reasoning",
            "topic": "Logical Sequence",
            "company": "flipkart",
            "companyName": "Flipkart",
            "difficulty": "Easy",
            "isPYQ": false,
            "pyqLabel": "Flipkart Practice Pattern",
            "statement": "A delivery route visits A before B, B before C, and C before D. Which location must be visited after B?",
            "options": [
                "A",
                "C",
                "A and D immediately",
                "None can be inferred"
            ],
            "correctOption": 1,
            "explanation": "The stated ordering directly places C after B and before D."
        },
        {
            "id": "pf-company-flipkart-3",
            "domain": "SQL",
            "topic": "Window Functions",
            "company": "flipkart",
            "companyName": "Flipkart",
            "difficulty": "Hard",
            "isPYQ": false,
            "pyqLabel": "Flipkart Practice Pattern",
            "statement": "Which window function assigns consecutive row numbers without ties, even when salary values are equal?",
            "options": [
                "RANK()",
                "DENSE_RANK()",
                "ROW_NUMBER()",
                "COUNT()"
            ],
            "correctOption": 2,
            "explanation": "ROW_NUMBER() assigns a unique sequential number to each row in the window ordering."
        },
        {
            "id": "pf-company-walmart-1",
            "domain": "Aptitude",
            "topic": "Weighted Average",
            "company": "walmart",
            "companyName": "Walmart",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Walmart Practice Pattern",
            "statement": "A student scores 70 in a test weighted 40% and 80 in a test weighted 60%. What is the weighted score?",
            "options": [
                "74",
                "75",
                "76",
                "78"
            ],
            "correctOption": 2,
            "explanation": "Weighted score = 70 × 0.4 + 80 × 0.6 = 28 + 48 = 76."
        },
        {
            "id": "pf-company-walmart-2",
            "domain": "Coding / DSA",
            "topic": "Heaps",
            "company": "walmart",
            "companyName": "Walmart",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Walmart Practice Pattern",
            "statement": "Which data structure is commonly used to maintain the largest k elements efficiently in a stream?",
            "options": [
                "A min-heap of size k",
                "A stack only",
                "A queue only",
                "A linked list without ordering"
            ],
            "correctOption": 0,
            "explanation": "A min-heap of size k keeps the smallest of the retained top-k elements at the root for efficient replacement."
        },
        {
            "id": "pf-company-walmart-3",
            "domain": "DBMS",
            "topic": "Normalization",
            "company": "walmart",
            "companyName": "Walmart",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Walmart Practice Pattern",
            "statement": "A table has a composite key (student_id, course_id); student_name depends only on student_id. Which issue does this illustrate?",
            "options": [
                "Transitive dependency only",
                "Partial dependency",
                "No functional dependency",
                "Referential integrity"
            ],
            "correctOption": 1,
            "explanation": "A non-key attribute depending on only part of a composite key is a partial dependency, addressed by 2NF."
        },
        {
            "id": "pf-company-walmart-4",
            "domain": "SQL",
            "topic": "Aggregation",
            "company": "walmart",
            "companyName": "Walmart",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Walmart Practice Pattern",
            "statement": "Which query returns only departments whose average salary is greater than 60000?",
            "options": [
                "SELECT department FROM Employees WHERE AVG(salary)>60000 GROUP BY department;",
                "SELECT department FROM Employees GROUP BY department HAVING AVG(salary)>60000;",
                "SELECT department FROM Employees ORDER BY AVG(salary)>60000;",
                "SELECT department FROM Employees HAVING salary>60000;"
            ],
            "correctOption": 1,
            "explanation": "GROUP BY forms department groups and HAVING filters those groups by their average salary."
        },
        {
            "id": "pf-company-meesho-1",
            "domain": "Coding / DSA",
            "topic": "Intervals",
            "company": "meesho",
            "companyName": "Meesho",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Meesho Practice Pattern",
            "statement": "After sorting intervals by start time, what is the usual time complexity of merging overlapping intervals?",
            "options": [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n log n)"
            ],
            "correctOption": 3,
            "explanation": "Sorting takes O(n log n); the merge scan is O(n), so the overall time is O(n log n)."
        },
        {
            "id": "pf-company-meesho-2",
            "domain": "SQL",
            "topic": "Indexes",
            "company": "meesho",
            "companyName": "Meesho",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Meesho Practice Pattern",
            "statement": "What is a common trade-off when adding an index to a database table?",
            "options": [
                "Reads may improve, but writes and storage can cost more",
                "Every query becomes faster at no cost",
                "Indexes remove the need for primary keys",
                "Indexes automatically normalize the table"
            ],
            "correctOption": 0,
            "explanation": "Indexes can speed up suitable reads but require storage and maintenance during inserts, updates, and deletes."
        },
        {
            "id": "pf-company-meesho-3",
            "domain": "Reasoning",
            "topic": "Number Series",
            "company": "meesho",
            "companyName": "Meesho",
            "difficulty": "Easy",
            "isPYQ": false,
            "pyqLabel": "Meesho Practice Pattern",
            "statement": "Find the missing number: 5, 10, 20, 40, __.",
            "options": [
                "45",
                "60",
                "70",
                "80"
            ],
            "correctOption": 3,
            "explanation": "Each term doubles, so 40 × 2 = 80."
        },
        {
            "id": "pf-company-meesho-4",
            "domain": "Verbal",
            "topic": "Reading Comprehension",
            "company": "meesho",
            "companyName": "Meesho",
            "difficulty": "Medium",
            "isPYQ": false,
            "pyqLabel": "Meesho Practice Pattern",
            "statement": "A notice says, “Orders placed before noon are usually dispatched the same day.” Which statement is supported?",
            "options": [
                "Every order is delivered the same day.",
                "Orders placed before noon are usually dispatched that day.",
                "Orders after noon are always cancelled.",
                "Dispatch and delivery mean the same thing."
            ],
            "correctOption": 1,
            "explanation": "The notice says usually dispatched the same day; it does not guarantee delivery or make claims about cancellation."
        }
    ],

    // Mock Tests Series
    mockTests: [
        {
            id: "mock-tcs-nqt",
            title: "TCS NQT Full Placement Simulation",
            type: "company",
            companyId: "tcs",
            companyName: "TCS",
            badge: "Service Based",
            difficulty: "Medium",
            durationMins: 45,
            totalQuestions: 10,
            markingScheme: "+1 for correct, -0.25 for incorrect",
            sections: ["Numerical Ability", "Reasoning Ability", "Verbal Ability", "Technical & Coding"],
            description: "High-accuracy simulation conforming to the official TCS NQT recruitment blueprint. Tests cognitive agility and foundational programming logic.",
            questionIds: ["pq-apt-1", "pq-rea-1", "pq-ver-1", "pq-code-1", "pq-sql-1", "pq-dbms-2", "pq-apt-4", "pq-rea-4", "pq-sql-2", "pq-dbms-4"]
        },
        {
            id: "mock-infosys-dse",
            title: "Infosys Specialist & Systems Engineer Test",
            type: "company",
            companyId: "infosys",
            companyName: "Infosys",
            badge: "Service Based",
            difficulty: "Medium",
            durationMins: 40,
            totalQuestions: 8,
            markingScheme: "+1 for correct, no negative marking",
            sections: ["Technical Mathematical Ability", "Reasoning & Puzzles", "Verbal English", "Pseudocode"],
            description: "Targeted Infosys assessment focusing on cryptarithmetic logic, data sufficiency, and rapid analytical deduction.",
            questionIds: ["pq-apt-2", "pq-rea-3", "pq-ver-2", "pq-sql-2", "pq-dbms-1", "pq-code-4", "pq-apt-1", "pq-rea-1"]
        },
        {
            id: "mock-amazon-sde",
            title: "Amazon SDE-1 Technical & Coding Qualifier",
            type: "company",
            companyId: "amazon",
            companyName: "Amazon",
            badge: "Product Based",
            difficulty: "High",
            durationMins: 50,
            totalQuestions: 8,
            markingScheme: "+2 for correct, -0.5 for incorrect",
            sections: ["Data Structures & Algorithms", "SQL & Relational DB", "CS Fundamentals"],
            description: "Rigorous product-firm test designed around LeetCode Medium/Hard algorithmic challenges, tree optimizations, and database scaling.",
            questionIds: ["pq-code-1", "pq-code-2", "pq-code-3", "pq-sql-3", "pq-dbms-3", "pq-sql-1", "pq-code-4", "pq-dbms-1"]
        },
        {
            id: "mock-accenture-cog",
            title: "Accenture Cognitive & Coding Assessment",
            type: "company",
            companyId: "accenture",
            companyName: "Accenture",
            badge: "Service Based",
            difficulty: "Medium",
            durationMins: 35,
            totalQuestions: 8,
            markingScheme: "+1 for correct, no negative marking",
            sections: ["Critical Thinking", "Abstract Reasoning", "Common Applications & MS Office", "Coding"],
            description: "Evaluates multi-tasking problem solving, pattern sequencing, English fluency, and syntax debugging.",
            questionIds: ["pq-apt-3", "pq-ver-2", "pq-rea-2", "pq-dbms-1", "pq-code-1", "pq-apt-2", "pq-rea-4", "pq-ver-1"]
        },
        {
            id: "mock-general-full",
            title: "All-India General Campus Placement Mock #1",
            type: "general",
            companyId: null,
            companyName: "General Placement",
            badge: "Comprehensive",
            difficulty: "Medium",
            durationMins: 50,
            totalQuestions: 10,
            markingScheme: "+1 for correct, -0.25 for incorrect",
            sections: ["Aptitude", "Reasoning", "Verbal", "Coding / DSA", "SQL", "DBMS"],
            description: "Balanced comprehensive mock test combining all 6 placement pillars. Ideal for students preparing across both IT service and product recruiters.",
            questionIds: ["pq-apt-1", "pq-apt-2", "pq-rea-1", "pq-rea-2", "pq-ver-1", "pq-code-1", "pq-code-2", "pq-sql-1", "pq-dbms-2", "pq-sql-4"]
        },
        {
            id: "mock-general-speed",
            title: "General Aptitude & Logical Speed Sprint",
            type: "general",
            companyId: null,
            companyName: "General Placement",
            badge: "Speed Test",
            difficulty: "Easy",
            durationMins: 20,
            totalQuestions: 6,
            markingScheme: "+1 for correct, no negative marking",
            sections: ["Quantitative Aptitude", "Logical Reasoning", "Verbal English"],
            description: "Rapid 20-minute speed drill to sharpen calculation velocity, mental arithmetic, and quick grammatical error spotting.",
            questionIds: ["pq-apt-4", "pq-apt-5", "pq-rea-4", "pq-ver-1", "pq-rea-1", "pq-apt-1"]
        }
    ],

    // Placement Resources & Cheat Sheets
    resources: [
        {
            id: "res-1",
            url: "https://www.indiabix.com/aptitude/questions-and-answers/",
            category: "Aptitude",
            title: "Complete Quantitative Aptitude Formula Playbook",
            author: "PrepForge Academic Team",
            pages: "42 Pages",
            format: "PDF Guide",
            readTime: "45 mins",
            description: "Exhaustive formulas, shortcut methods, and Vedic math techniques for percentages, time-speed-distance, profit-loss, and combinations.",
            content: "Covers:\n1. Vedic Math Multiplication Tricks & Fast Division\n2. Fractional Percentage Table (1/1 to 1/20)\n3. Alligation & Mixtures Proportionality Rule\n4. Relative Speed Formulas for Trains & Moving Observers\n5. Circular Permutation & Repetition Laws."
        },
        {
            id: "res-2",
            url: "https://www.geeksforgeeks.org/dsa/",
            category: "Coding / DSA",
            title: "Top 75 Placement DSA Patterns & Complexity Sheet",
            author: "PrepForge Tech Leads",
            pages: "58 Pages",
            format: "Interactive Code Notes",
            readTime: "60 mins",
            description: "Curated problem patterns: Two Pointers, Sliding Window, Monotonic Stack, Top K Elements (Heap), and Tree Traversals with C++, Java, and Python templates.",
            content: "Covers:\n1. Master Big-O space and time complexity cheat sheet\n2. In-place array rotation & Dutch National Flag algorithm\n3. Linked list cycle detection (Floyd's Tortoise & Hare)\n4. Dynamic programming: Memoization vs Tabulation tradeoffs\n5. Standard graph adjacency lists and BFS/DFS templates."
        },
        {
            id: "res-3",
            url: "https://sqlbolt.com/",
            category: "SQL",
            title: "SQL Query Master Handbook: Joins to Window Functions",
            author: "Senior Database Architect",
            pages: "28 Pages",
            format: "Cheat Sheet",
            readTime: "30 mins",
            description: "Practical query handbook solving the 30 most frequent placement interview queries (Nth highest salary, duplicate removal, cohort analysis).",
            content: "Includes:\n1. Visual Venn diagrams of all SQL joins (Inner, Left, Right, Full, Cross)\n2. Difference between HAVING and WHERE with evaluation order\n3. Correlated subquery examples and performance implications\n4. RANK() vs DENSE_RANK() vs ROW_NUMBER() side-by-side\n5. Database transaction isolation levels (Read Uncommitted to Serializable)."
        },
        {
            id: "res-4",
            url: "https://www.geeksforgeeks.org/dbms/",
            category: "DBMS",
            title: "DBMS Architecture, Normalization & ACID Quick Notes",
            author: "CS Faculty Review",
            pages: "34 Pages",
            format: "Revision Guide",
            readTime: "35 mins",
            description: "Clear, crisp breakdown of 1NF, 2NF, 3NF, BCNF with step-by-step table decomposition examples, indexing internal structures, and deadlock resolution.",
            content: "Features:\n1. B+ Tree diagrammatic explanations and disk block sizing\n2. Two-Phase Locking (2PL) and Strict 2PL concurrency rules\n3. Serializability testing via Precedence Graphs\n4. Write-Ahead Logging (WAL) and ARIES recovery protocol."
        },
        {
            id: "res-5",
            url: "https://www.themuse.com/advice/star-interview-method",
            category: "Interview Preparation",
            title: "Campus HR & Technical Interview Master Guide (STAR Method)",
            author: "Former Campus Hiring Panel",
            pages: "38 Pages",
            format: "Guidebook",
            readTime: "40 mins",
            description: "How to introduce yourself in 90 seconds, articulate project architecture, answer tricky behavioural questions using STAR, and negotiate bands.",
            content: "Includes structured answers to:\n1. 'Tell me about yourself' (The Present-Past-Future model)\n2. 'Why should we hire you over other candidates?'\n3. 'Describe a situation where a technical project ran into an unexpected roadblock'\n4. 'Handling disagreements within an engineering team'."
        },
        {
            id: "res-6",
            url: "https://www.geeksforgeeks.org/company-preparation/",
            category: "Company Preparation",
            title: "TCS, Infosys, Accenture & Amazon Campus Strategy Roadmap",
            author: "PrepForge Placement Cell",
            pages: "52 Pages",
            format: "Roadmap PDF",
            readTime: "50 mins",
            description: "Detailed syllabus breakdown, cut-off score thresholds, previous year question trends, and technical round expectations for top recruiters.",
            content: "Features:\n1. Round-by-round time budgeting for online assessment platforms\n2. Test interface shortcuts and scratch-pad strategies\n3. Code submission and edge-case testing checklist\n4. Document verification and pre-onboarding formalities."
        }
        ,{
            id: "res-7",
            url: "https://www.indiabix.com/logical-reasoning/questions-and-answers/",
            category: "Logical Reasoning",
            title: "Logical Reasoning Practice Workbook",
            author: "PrepForge Academic Team",
            pages: "Online practice",
            format: "Question Bank",
            readTime: "30 mins",
            description: "Practice series, coding-decoding, directions, blood relations, syllogisms, seating arrangements, and statement-based reasoning.",
            content: "Study plan:\n1. Number and letter series\n2. Coding-decoding and analogy\n3. Direction sense and blood relations\n4. Syllogisms and Venn diagrams\n5. Seating arrangements and data sufficiency."
        },
        {
            id: "res-8",
            url: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
            category: "Verbal English",
            title: "Verbal English & Grammar Practice",
            author: "PrepForge Language Team",
            pages: "Online practice",
            format: "Question Bank",
            readTime: "25 mins",
            description: "Improve grammar, sentence correction, vocabulary, fill-in-the-blanks, para jumbles, and reading comprehension.",
            content: "Study plan:\n1. Subject-verb agreement and tenses\n2. Articles and prepositions\n3. Synonyms, antonyms, and contextual vocabulary\n4. Sentence correction and para jumbles\n5. Reading comprehension and inference."
        },
        {
            id: "res-9",
            url: "https://www.geeksforgeeks.org/difference-between-sql-and-dbms/",
            category: "DBMS",
            title: "SQL vs DBMS: Understand the Difference",
            author: "PrepForge CS Notes",
            pages: "Quick guide",
            format: "Concept Notes",
            readTime: "15 mins",
            description: "Understand why SQL and a DBMS are different and why both concepts matter in placement interviews.",
            content: "Key idea:\nSQL is a language for defining, querying, and manipulating relational data. A DBMS is the software that stores and manages databases, enforces permissions and constraints, handles concurrent access, and processes SQL statements. SQL does not replace the database management system."
        }

    ]
};

// Expose on global window object for clean modular use
if (typeof window !== "undefined") {
    window.PREPFORGE_DATA = PREPFORGE_DATA;
}
