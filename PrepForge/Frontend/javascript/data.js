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
            title: "Number Systems & Divisibility",
            domain: "Quantitative Aptitude",
            concept: "Master the rules of divisibility, prime factorisation, cyclicity of unit digits, and remainder theorem (Euler's / Fermat's). Divisibility tests (e.g., a number is divisible by 8 if its last 3 digits are divisible by 8; divisible by 11 if the difference between sum of odd-placed digits and even-placed digits is 0 or a multiple of 11) allow solving large calculations in seconds.",
            formulas: [
                "Dividend = (Divisor × Quotient) + Remainder",
                "Cyclicity of unit digits: 2, 3, 7, 8 have cyclicity 4; 4, 9 have cyclicity 2; 0, 1, 5, 6 have cyclicity 1",
                "Sum of first n natural numbers = [n(n + 1)] / 2"
            ],
            example1: {
                problem: "What is the remainder when 3^65 is divided by 10?",
                solution: "Step 1: The unit digit of powers of 3 follows a 4-step cycle: 3^1=3, 3^2=9, 3^3=7, 3^4=1, and then repeats.\nStep 2: Divide the exponent 65 by the cycle length 4: 65 ÷ 4 = 16 with remainder 1.\nStep 3: Hence, the unit digit of 3^65 is the same as 3^1 = 3.\nStep 4: Any number divided by 10 leaves a remainder equal to its unit digit.\nAnswer: Remainder is 3."
            },
            example2: {
                problem: "If 738A6A is divisible by 11, find the value of single-digit integer A.",
                solution: "Step 1: Sum of digits at odd places from right: A + 8 + 7 = 15 + A.\nStep 2: Sum of digits at even places from right: 6 + A + 3 = 9 + A.\nStep 3: Difference = (15 + A) - (9 + A) = 6.\nWait, since the difference is a constant 6, let's re-verify the positions:\nPlaces 1, 3, 5: A, 8, 7 => Sum = 15 + A.\nPlaces 2, 4, 6: 6, A, 3 => Sum = 9 + A.\nTo be divisible by 11, difference must be 0 or 11k => here difference is 6, so 738A6A requires matching parity.\nLet's test A = 9: 738969 / 11 = 67179 (Exact!)."
            }
        },

        "apt-2": {
            title: "Percentages, Profit & Loss",
            domain: "Quantitative Aptitude",
            concept: "Percentage represents parts per 100. Profit and loss are always computed on the Cost Price (CP) unless specifically instructed. Marked Price (MP) is the list price on which discounts are applied.",
            formulas: [
                "Profit % = (Profit / CP) × 100",
                "Selling Price (SP) = CP × (100 + Profit%) / 100",
                "SP after Discount = MP × (100 - Discount%) / 100",
                "Effective successive change of a% and b% = a + b + (ab / 100)%"
            ],
            example1: {
                problem: "An item purchased for ₹800 is sold for ₹1,000. Find the profit percentage.",
                solution: "Step 1: Profit = SP - CP = ₹1,000 - ₹800 = ₹200.\nStep 2: Profit % = (Profit / CP) × 100 = (200 / 800) × 100 = 25%.\nAnswer: 25% Profit."
            },
            example2: {
                problem: "A trader marks an article 30% above CP and allows a 10% discount on MP. What is his net gain percentage?",
                solution: "Step 1: Let CP = 100.\nStep 2: Marked Price MP = 100 + 30% = 130.\nStep 3: Discount = 10% of 130 = 13.\nStep 4: Selling Price SP = 130 - 13 = 117.\nStep 5: Net Profit % = SP - CP = 117 - 100 = 17%.\nAnswer: 17% Net Profit."
            }
        },

        "apt-3": {
            title: "Time, Speed & Distance",
            domain: "Quantitative Aptitude",
            concept: "Distance = Speed × Time. When moving in the same direction, relative speed is |S1 - S2|. When moving in opposite directions, relative speed is S1 + S2. To convert km/h to m/s, multiply by 5/18. To cross a platform of length P, a train of length L must travel distance (L + P).",
            formulas: [
                "Speed = Distance / Time",
                "Speed in m/s = Speed in km/h × (5 / 18)",
                "Average Speed for equal distance = 2 × S1 × S2 / (S1 + S2)"
            ],
            example1: {
                problem: "Convert 90 km/h into meters per second.",
                solution: "Step 1: Use conversion factor 5/18.\nStep 2: 90 × (5 / 18) = 5 × 5 = 25 m/s.\nAnswer: 25 m/s."
            },
            example2: {
                problem: "A 180m train travelling at 54 km/h crosses a tunnel in 20 seconds. What is the length of the tunnel?",
                solution: "Step 1: Convert speed to m/s: 54 × (5/18) = 15 m/s.\nStep 2: Distance covered in 20 seconds = 15 m/s × 20s = 300 meters.\nStep 3: Total Distance = Length of Train (180m) + Tunnel Length (T).\nStep 4: 180 + T = 300 => T = 300 - 180 = 120 meters.\nAnswer: Tunnel is 120 meters long."
            }
        },

        "rea-5": {
            title: "Syllogisms & Venn Diagrams",
            domain: "Logical Reasoning",
            concept: "Syllogisms require evaluating logical statements unconditionally as absolute truth. Standard propositions: All A are B (universal affirmative), No A is B (universal negative), Some A are B (particular affirmative), Some A are not B (particular negative). A conclusion is valid ONLY if it holds true across ALL possible Venn representations.",
            formulas: [
                "All + All => All",
                "All + No => No",
                "Some + All => Some",
                "No + Any => Negative conclusion"
            ],
            example1: {
                problem: "Statements:\n1. All roses are flowers.\n2. All flowers are red.\nConclusion: Are all roses red?",
                solution: "Step 1: Set of Roses is entirely inside the set of Flowers.\nStep 2: Set of Flowers is entirely inside the set of Red objects.\nStep 3: Since Roses ⊆ Flowers ⊆ Red, Roses ⊆ Red is guaranteed.\nAnswer: Yes, Conclusion follows unconditionally."
            },
            example2: {
                problem: "Statements:\n1. Some pens are books.\n2. All books are papers.\nConclusions:\nI. Some pens are papers.\nII. No pen is paper.",
                solution: "Step 1: Draw Venn circle for Pens overlapping with Books.\nStep 2: Enclose all Books inside Papers.\nStep 3: The overlapping portion between Pens and Books is now inevitably inside Papers.\nStep 4: Therefore, Some pens are papers is definitely true (Conclusion I follows, II is false).\nAnswer: Only Conclusion I follows."
            }
        },

        "dsa-2": {
            title: "Arrays: Two Pointers & Sliding Window",
            domain: "Coding / DSA",
            concept: "The Two Pointer pattern uses two array indices (e.g. left and right, or slow and fast) to traverse the array simultaneously. It reduces quadratic O(N^2) brute force checks to linear O(N) by eliminating redundant inspections. Sliding Window maintains a contiguous subarray of dynamic or fixed length to inspect sums, frequencies, or substrings.",
            formulas: [
                "Two Sum (Sorted array): if sum < target, left++; if sum > target, right--; else found",
                "Sliding window max/sum: window_sum = window_sum + arr[right] - arr[left - 1]"
            ],
            example1: {
                problem: "Find if any two numbers in sorted array [2, 7, 11, 15] sum up to 18.",
                solution: "Step 1: Initialize left = 0 (val 2), right = 3 (val 15).\nStep 2: sum = 2 + 15 = 17. Since 17 < 18, increment left = 1 (val 7).\nStep 3: sum = 7 + 15 = 22. Since 22 > 18, decrement right = 2 (val 11).\nStep 4: sum = 7 + 11 = 18. Target matched!\nComplexity: O(N) time and O(1) space."
            },
            example2: {
                problem: "Given binary array [1, 1, 0, 1, 1, 1], find max consecutive 1s.",
                solution: "Step 1: Maintain max_count = 0, current_count = 0.\nStep 2: Iterate through array:\n- On '1': current_count++\n- On '0': max_count = max(max_count, current_count), current_count = 0\nStep 3: Final pass yields current_count = 3.\nAnswer: 3."
            }
        },

        "sql-2": {
            title: "INNER, LEFT, RIGHT & FULL OUTER JOINS",
            domain: "SQL",
            concept: "JOINs combine rows from two or more tables based on a related column between them. INNER JOIN returns only records where keys match in both tables. LEFT JOIN returns all rows from the left table, with NULLs for unmatched right rows. RIGHT JOIN returns all rows from right table. FULL OUTER JOIN returns all rows from both tables, filling with NULL wherever matches fail.",
            formulas: [
                "INNER JOIN: Rows where A.id = B.id",
                "LEFT JOIN: All A + (B where match else NULL)",
                "FULL JOIN: (All A) UNION (All B)"
            ],
            example1: {
                problem: "Table Customers has IDs (1, 2) and Orders has customer_ids (2, 3). Which IDs are returned in an INNER JOIN?",
                solution: "Step 1: Match keys between {1, 2} and {2, 3}.\nStep 2: Key 1 exists only in Customers. Key 3 exists only in Orders.\nStep 3: The only key common to both tables is 2.\nAnswer: Only customer_id 2 is returned."
            },
            example2: {
                problem: "Write a query to retrieve all employees and their department name, including employees who are not assigned to any department.",
                solution: "Syntax:\nSELECT e.emp_name, d.dept_name\nFROM Employees e\nLEFT JOIN Departments d\nON e.dept_id = d.dept_id;\nExplanation: LEFT JOIN ensures every employee appears even if dept_id is NULL."
            }
        },

        "dbms-2": {
            title: "Functional Dependencies & Normalization (1NF to BCNF)",
            domain: "DBMS",
            concept: "Normalization organizes table structures to eliminate insertion, deletion, and update anomalies while reducing data redundancy. 1NF removes repeating groups (atomic values). 2NF removes partial dependency (non-prime attributes must depend on the whole candidate key). 3NF removes transitive dependencies. BCNF strictly requires that for any functional dependency X -> Y, X must be a Super Key.",
            formulas: [
                "1NF: Atomic attribute values only",
                "2NF: 1NF + No Partial Dependencies (non-prime on part of key)",
                "3NF: 2NF + No Transitive Dependencies (non-prime on non-prime)",
                "BCNF: In every X -> Y, X is a Super Key"
            ],
            example1: {
                problem: "A table has Student_ID, Course_ID, and Student_Email. What dependency causes 2NF violation if (Student_ID, Course_ID) is the composite primary key?",
                solution: "Step 1: Key is composite: (Student_ID, Course_ID).\nStep 2: Notice Student_Email depends ONLY on Student_ID, not Course_ID.\nStep 3: Since Student_Email depends on a subset of the candidate key, this is a Partial Dependency.\nResolution: Split into Students(Student_ID, Student_Email) and CourseEnrollment(Student_ID, Course_ID)."
            },
            example2: {
                problem: "If table R(A, B, C) has dependency A -> B and B -> C with candidate key A. Which normal form does it violate?",
                solution: "Step 1: A is candidate key. C is a non-prime attribute.\nStep 2: Dependency chain: A -> B and B -> C means C transitively depends on key A via non-key B.\nStep 3: Transitive dependencies violate 3rd Normal Form (3NF).\nResolution: Decompose into R1(A, B) and R2(B, C)."
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
            category: "Company Preparation",
            title: "TCS, Infosys, Accenture & Amazon Campus Strategy Roadmap",
            author: "PrepForge Placement Cell",
            pages: "52 Pages",
            format: "Roadmap PDF",
            readTime: "50 mins",
            description: "Detailed syllabus breakdown, cut-off score thresholds, previous year question trends, and technical round expectations for top recruiters.",
            content: "Features:\n1. Round-by-round time budgeting for online assessment platforms\n2. Test interface shortcuts and scratch-pad strategies\n3. Code submission and edge-case testing checklist\n4. Document verification and pre-onboarding formalities."
        }
    ]
};

// Expose on global window object for clean modular use
if (typeof window !== "undefined") {
    window.PREPFORGE_DATA = PREPFORGE_DATA;
}
