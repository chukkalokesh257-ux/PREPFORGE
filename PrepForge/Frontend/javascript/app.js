/**
 * PrepForge - Placement Training & Assessment Platform
 * Main Application Logic & Global Interactivity (Pure Vanilla JS)
 */

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    setupGlobalHeader();
    setupSidebarNavigation();
    setupCompanyModal();

    // Determine current page and initialize specific modules
    const path = window.location.pathname.toLowerCase();
    
    if (path.includes("dashboard") || path.endsWith("/html/") || path.endsWith("index.html") || path === "/" || (!path.includes("companies") && !path.includes("training") && !path.includes("practice") && !path.includes("mock-tests") && !path.includes("performance") && !path.includes("resources"))) {
        initDashboardPage();
    } else if (path.includes("companies")) {
        initCompaniesPage();
    } else if (path.includes("training")) {
        initTrainingPage();
    } else if (path.includes("practice")) {
        initPracticePage();
    } else if (path.includes("mock-tests")) {
        initMockTestsPage();
    } else if (path.includes("performance")) {
        initPerformancePage();
    } else if (path.includes("resources")) {
        initResourcesPage();
    }
}

/* ==========================================================================
   Global Header & Sidebar Setup
   ========================================================================== */

function setupSidebarNavigation() {
    // Highlight current page in sidebar
    const currentPath = window.location.pathname.toLowerCase();
    const navItems = document.querySelectorAll(".sidebar-nav .nav-item");

    navItems.forEach(item => {
        const href = item.getAttribute("href");
        if (href && currentPath.includes(href.toLowerCase().replace("./", ""))) {
            item.classList.add("active");
        }
    });

    // Logout confirmation
    const logoutBtn = document.querySelector(".footer-nav-item.logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (confirm("Are you sure you want to log out of PrepForge?")) {
                alert("You have successfully logged out. (Session reset demo)");
                window.location.href = "dashboard.html";
            }
        });
    }

    // Settings demo
    const settingsBtn = document.querySelector(".footer-nav-item.settings");
    if (settingsBtn) {
        settingsBtn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Settings panel: Profile details for Lokesh Kumar (Student ID: PF-2026-CSE-842) are verified and up to date.");
        });
    }
}

function setupGlobalHeader() {
    const searchInput = document.querySelector(".search-input");
    const searchDropdown = document.querySelector(".search-dropdown");
    const notifBtn = document.querySelector(".notification-btn");
    const notifDropdown = document.querySelector(".notifications-dropdown");

    // Live search filter
    if (searchInput && searchDropdown) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 2) {
                searchDropdown.classList.remove("show");
                searchDropdown.innerHTML = "";
                return;
            }

            renderSearchResults(query, searchDropdown);
        });

        // Close search on outside click
        document.addEventListener("click", (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.classList.remove("show");
            }
        });
    }

    // Notification dropdown toggle
    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {
            if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
                notifDropdown.classList.remove("show");
            }
        });
    }
}

function renderSearchResults(query, container) {
    const companies = window.PREPFORGE_DATA?.companies || [];
    const tracks = window.PREPFORGE_DATA?.trainingTracks || [];
    const tests = window.PREPFORGE_DATA?.mockTests || [];

    const matchedCompanies = companies.filter(c => c.name.toLowerCase().includes(query) || c.fullName.toLowerCase().includes(query) || c.type.toLowerCase().includes(query));
    const matchedTracks = tracks.filter(t => t.name.toLowerCase().includes(query) || t.fullName.toLowerCase().includes(query));
    const matchedTests = tests.filter(t => t.title.toLowerCase().includes(query) || (t.companyName && t.companyName.toLowerCase().includes(query)));

    if (matchedCompanies.length === 0 && matchedTracks.length === 0 && matchedTests.length === 0) {
        container.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No results found for "${query}"</div>`;
        container.classList.add("show");
        return;
    }

    let html = "";

    if (matchedCompanies.length > 0) {
        html += `<div class="search-dropdown-header">Recruiting Companies</div>`;
        matchedCompanies.slice(0, 4).forEach(c => {
            const logoSvg = window.PREPFORGE_DATA?.companyLogos?.[c.id] || `<span style="font-weight: 700; color: #4338CA;">${c.name.slice(0, 2)}</span>`;
            html += `
                <div class="search-result-item" style="display: flex; align-items: center; justify-content: space-between; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1; min-width: 0;" onclick="window.location.href='companies/${c.id}.html'">
                        <div style="width: 32px; height: 32px; border-radius: 8px; background: #FFFFFF; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; padding: 2px; flex-shrink: 0;">
                            ${logoSvg}
                        </div>
                        <div style="min-width: 0;">
                            <div class="search-result-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.name} - ${c.fullName}</div>
                            <div class="search-result-subtitle">${c.type} • Min CGPA: ${c.cgpaReq}</div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                        <button class="btn btn-secondary" style="padding: 3px 8px; font-size: 0.72rem;" onclick="event.stopPropagation(); openCompanyModal('${c.id}')">Preview</button>
                        <a href="companies/${c.id}.html" class="btn btn-outline" style="padding: 3px 8px; font-size: 0.72rem; text-decoration: none;">Page ↗</a>
                    </div>
                </div>
            `;
        });
    }

    if (matchedTracks.length > 0) {
        html += `<div class="search-dropdown-header">Training Modules</div>`;
        matchedTracks.forEach(t => {
            html += `
                <div class="search-result-item" onclick="window.location.href='training.html?track=${t.id}'">
                    <div>
                        <div class="search-result-title">${t.fullName}</div>
                        <div class="search-result-subtitle">${t.totalTopics} Topics • ${t.estimatedHours}</div>
                    </div>
                    <span style="font-size: 0.76rem; font-weight: 700; color: var(--primary);">${t.progress}% Prepared</span>
                </div>
            `;
        });
    }

    if (matchedTests.length > 0) {
        html += `<div class="search-dropdown-header">Mock Tests</div>`;
        matchedTests.slice(0, 3).forEach(test => {
            html += `
                <div class="search-result-item" onclick="window.location.href='mock-tests.html?test=${test.id}'">
                    <div>
                        <div class="search-result-title">${test.title}</div>
                        <div class="search-result-subtitle">${test.durationMins} Mins • ${test.totalQuestions} Questions</div>
                    </div>
                    <span class="badge badge-difficulty-${test.difficulty.toLowerCase()}">${test.difficulty}</span>
                </div>
            `;
        });
    }

    container.innerHTML = html;
    container.classList.add("show");
}

/* ==========================================================================
   Company Details Modal Logic
   ========================================================================== */

function setupCompanyModal() {
    const modalBackdrop = document.getElementById("companyModal");
    if (!modalBackdrop) return;

    const closeBtn = modalBackdrop.querySelector(".modal-close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modalBackdrop.classList.remove("show");
        });
    }

    modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) {
            modalBackdrop.classList.remove("show");
        }
    });
}

function openCompanyModal(companyId) {
    const company = window.PREPFORGE_DATA?.companies.find(c => c.id === companyId);
    if (!company) return;

    const modalBackdrop = document.getElementById("companyModal");
    if (!modalBackdrop) {
        window.location.href = `companies.html?company=${companyId}`;
        return;
    }

    // Populate modal contents
    const modalLogo = document.getElementById("modalCompanyLogo");
    if (modalLogo) {
        modalLogo.innerHTML = window.PREPFORGE_DATA?.companyLogos?.[company.id] || `<span style="font-weight: 700; color: #4338CA;">${company.name.slice(0, 2)}</span>`;
    }

    const dedicatedLink = document.getElementById("modalDedicatedPageLink");
    if (dedicatedLink) {
        // Detect if currently inside companies subfolder
        const inCompaniesDir = window.location.pathname.includes("/companies/");
        dedicatedLink.href = inCompaniesDir ? `${company.id}.html` : `companies/${company.id}.html`;
    }

    document.getElementById("modalCompanyName").textContent = company.name;
    document.getElementById("modalCompanyFullName").textContent = company.fullName;
    document.getElementById("modalCompanyType").textContent = company.type;
    document.getElementById("modalCompanyType").className = `badge ${company.type.includes('Product') ? 'badge-product' : 'badge-service'}`;
    
    document.getElementById("modalCgpa").textContent = company.cgpaReq;
    document.getElementById("modalBranch").textContent = company.branchReq;
    document.getElementById("modalBacklogs").textContent = company.backlogs;
    document.getElementById("modalPackage").textContent = company.packageRange;
    document.getElementById("modalIntake").textContent = company.intakePeriod;
    document.getElementById("modalRoles").textContent = company.roles.join(" • ");
    document.getElementById("modalDescription").textContent = company.description;
    document.getElementById("modalSyllabusFocus").textContent = company.syllabusFocus;

    // Hiring Process Timeline
    const timelineContainer = document.getElementById("modalTimeline");
    if (timelineContainer) {
        timelineContainer.innerHTML = company.hiringProcess.map(step => `
            <div class="timeline-step">
                <div class="timeline-dot">${step.step}</div>
                <div class="timeline-content">
                    <div class="timeline-title">Round ${step.step}: ${step.title}</div>
                    <div class="timeline-desc">${step.desc}</div>
                </div>
            </div>
        `).join("");
    }

    // Test Pattern Table
    const patternContainer = document.getElementById("modalTestPattern");
    if (patternContainer) {
        patternContainer.innerHTML = company.testPattern.map(p => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #F8FAFC; border: 1px solid var(--border-color); border-radius: var(--radius-sm); margin-bottom: 6px;">
                <span style="font-weight: 600; font-size: 0.84rem; color: var(--text-primary);">${p.section}</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${p.questions} Qs • ${p.time}</span>
            </div>
        `).join("");
    }

    // Setup "Start Company Preparation" Action Button
    const startPrepBtn = document.getElementById("modalStartPrepBtn");
    if (startPrepBtn) {
        startPrepBtn.onclick = () => {
            window.PrepForgeState?.setTargetCompany(company.id);
            window.location.href = `training.html?company=${company.id}`;
        };
    }

    modalBackdrop.classList.add("show");
}

window.openCompanyModal = openCompanyModal;

/* ==========================================================================
   Dashboard Page Rendering
   ========================================================================== */

function initDashboardPage() {
    renderDashboardStats();
    renderDashboardCompanies();
    renderDashboardTracks();
}

function renderDashboardStats() {
    const student = window.PrepForgeState?.getStudent() || window.PREPFORGE_DATA?.student;
    if (!student) return;

    // Update readiness progress circle
    const circleBar = document.querySelector(".progress-circle-bar");
    const circleText = document.querySelector(".progress-circle-text");
    if (circleBar && circleText) {
        circleText.textContent = `${student.placementReadiness}%`;
        const radius = 36;
        const circumference = 2 * Math.PI * radius; // ~226.19
        const offset = circumference - (circumference * (student.placementReadiness / 100));
        circleBar.style.strokeDashoffset = offset;
    }

    // Update stat values
    const testsVal = document.getElementById("statTestsTaken");
    if (testsVal) testsVal.textContent = student.testsTaken;

    const hoursVal = document.getElementById("statStudyHours");
    if (hoursVal) hoursVal.textContent = `${student.studyHours}h`;

    const streakVal = document.getElementById("statStreak");
    if (streakVal) streakVal.textContent = `${student.streakDays} days`;
}

function renderDashboardCompanies() {
    const grid = document.getElementById("dashboardCompaniesGrid");
    if (!grid) return;

    const companies = window.PREPFORGE_DATA?.companies || [];
    // Display first 8 companies on dashboard
    const displayList = companies.slice(0, 8);

    grid.innerHTML = displayList.map(c => {
        const logoSvg = window.PREPFORGE_DATA?.companyLogos?.[c.id] || `<span style="font-weight: 700; color: #4338CA;">${c.name.slice(0, 2)}</span>`;
        return `
        <div class="company-card">
            <div>
                <div class="company-card-header">
                    <div class="company-brand-left">
                        <div class="company-logo">${logoSvg}</div>
                        <div class="company-name-wrap">
                            <span class="company-card-title">${c.name}</span>
                            <span class="company-card-subtitle">${c.fullName}</span>
                        </div>
                    </div>
                    <span class="badge ${c.type.includes('Product') ? 'badge-product' : 'badge-service'}">${c.type}</span>
                </div>

                <div class="company-specs">
                    <div class="company-spec-row">
                        <span class="spec-label">Eligibility</span>
                        <span class="spec-val">${c.cgpaReq}</span>
                    </div>
                    <div class="company-spec-row">
                        <span class="spec-label">Branches</span>
                        <span class="spec-val">${c.branchReq.length > 25 ? c.branchReq.slice(0, 25) + '...' : c.branchReq}</span>
                    </div>
                    <div class="company-spec-row">
                        <span class="spec-label">Top Role</span>
                        <span class="spec-val">${c.roles[0]}</span>
                    </div>
                </div>

                <div class="topics-tags">
                    ${c.topics.slice(0, 4).map(t => `<span class="topic-tag">${t}</span>`).join("")}
                </div>
            </div>

            <div class="company-card-footer">
                <div class="difficulty-indicator">
                    <span class="difficulty-dot ${c.difficulty.toLowerCase()}"></span>
                    <span>${c.difficulty}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button class="btn btn-secondary" style="padding: 6px 10px; font-size: 0.78rem;" onclick="openCompanyModal('${c.id}')" title="Quick Overview">
                        Preview
                    </button>
                    <a href="companies/${c.id}.html" class="btn-view-details" style="text-decoration: none; display: inline-flex; align-items: center;">
                        Details →
                    </a>
                </div>
            </div>
        </div>
    `;
    }).join("");
}

function renderDashboardTracks() {
    const grid = document.getElementById("dashboardTracksGrid");
    if (!grid) return;

    const tracks = window.PREPFORGE_DATA?.trainingTracks || [];

    grid.innerHTML = tracks.map(t => `
        <div class="track-card">
            <div>
                <div class="track-card-header">
                    <div class="track-icon" style="background-color: ${t.bgColor}; color: ${t.accentColor};">
                        ${t.icon}
                    </div>
                    <div class="track-name">${t.name}</div>
                </div>

                <div class="track-progress-info">
                    <span>${t.completedTopics}/${t.totalTopics} topics</span>
                    <span>${t.progress}%</span>
                </div>

                <div class="track-progress-bar-bg">
                    <div class="track-progress-bar-fill" style="width: ${t.progress}%; background-color: ${t.accentColor};"></div>
                </div>
            </div>

            <button class="track-continue-btn" style="background-color: ${t.accentColor};" onclick="window.location.href='training.html?track=${t.id}'">
                Continue →
            </button>
        </div>
    `).join("");
}

/* ==========================================================================
   Companies Page Rendering & Filtering
   ========================================================================== */

function initCompaniesPage() {
    const grid = document.getElementById("allCompaniesGrid");
    const filterPills = document.querySelectorAll(".filter-pill");
    const searchInput = document.getElementById("companySearchInput");

    let currentFilter = "all";
    let searchQuery = "";

    function filterAndRender() {
        const companies = window.PREPFORGE_DATA?.companies || [];
        const filtered = companies.filter(c => {
            const matchesFilter = 
                currentFilter === "all" ||
                (currentFilter === "product" && c.type.includes("Product")) ||
                (currentFilter === "service" && c.type.includes("Service"));

            const matchesSearch = 
                searchQuery === "" ||
                c.name.toLowerCase().includes(searchQuery) ||
                c.fullName.toLowerCase().includes(searchQuery) ||
                c.roles.some(r => r.toLowerCase().includes(searchQuery)) ||
                c.topics.some(t => t.toLowerCase().includes(searchQuery));

            return matchesFilter && matchesSearch;
        });

        if (!grid) return;

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 48px; background: #FFFFFF; border-radius: var(--radius-lg); border: 1px solid var(--border-color); color: var(--text-muted);">
                <h3>No companies found matching your criteria</h3>
                <p style="margin-top: 8px;">Try modifying your search keywords or filter selection.</p>
            </div>`;
            return;
        }

        grid.innerHTML = filtered.map(c => {
            const logoSvg = window.PREPFORGE_DATA?.companyLogos?.[c.id] || `<span style="font-weight: 700; color: #4338CA;">${c.name.slice(0, 2)}</span>`;
            return `
            <div class="company-card">
                <div>
                    <div class="company-card-header">
                        <div class="company-brand-left">
                            <div class="company-logo">${logoSvg}</div>
                            <div class="company-name-wrap">
                                <span class="company-card-title">${c.name}</span>
                                <span class="company-card-subtitle">${c.fullName}</span>
                            </div>
                        </div>
                        <span class="badge ${c.type.includes('Product') ? 'badge-product' : 'badge-service'}">${c.type}</span>
                    </div>

                    <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        ${c.description}
                    </p>

                    <div class="company-specs">
                        <div class="company-spec-row">
                            <span class="spec-label">Eligibility</span>
                            <span class="spec-val">${c.cgpaReq}</span>
                        </div>
                        <div class="company-spec-row">
                            <span class="spec-label">Branches</span>
                            <span class="spec-val">${c.branchReq.length > 28 ? c.branchReq.slice(0, 28) + '...' : c.branchReq}</span>
                        </div>
                        <div class="company-spec-row">
                            <span class="spec-label">CTC / Package</span>
                            <span class="spec-val" style="color: #059669;">${c.packageRange.split('(')[0]}</span>
                        </div>
                        <div class="company-spec-row">
                            <span class="spec-label">Intake Window</span>
                            <span class="spec-val">${c.intakePeriod.split('(')[0]}</span>
                        </div>
                    </div>

                    <div class="topics-tags">
                        ${c.topics.map(t => `<span class="topic-tag">${t}</span>`).join("")}
                    </div>
                </div>

                <div class="company-card-footer">
                    <div class="difficulty-indicator">
                        <span class="difficulty-dot ${c.difficulty.toLowerCase()}"></span>
                        <span>${c.difficulty} Difficulty</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <button class="btn btn-secondary" style="padding: 6px 10px; font-size: 0.78rem;" onclick="openCompanyModal('${c.id}')" title="Quick Overview">
                            Preview
                        </button>
                        <a href="companies/${c.id}.html" class="btn-view-details" style="text-decoration: none; display: inline-flex; align-items: center;">
                            Details →
                        </a>
                    </div>
                </div>
            </div>
        `;
        }).join("");
    }

    filterPills.forEach(pill => {
        pill.addEventListener("click", () => {
            filterPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentFilter = pill.getAttribute("data-filter") || "all";
            filterAndRender();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            filterAndRender();
        });
    }

    filterAndRender();

    const urlParams = new URLSearchParams(window.location.search);
    const companyParam = urlParams.get("company");
    if (companyParam) {
        setTimeout(() => {
            openCompanyModal(companyParam);
        }, 100);
    }
}

/* ==========================================================================
   Training Page Logic (General vs Company-Specific)
   ========================================================================== */

function initTrainingPage() {
    const companySelect = document.getElementById("trainingCompanySelect");
    const modeTabs = document.querySelectorAll(".training-mode-tab");
    const tracksContainer = document.getElementById("trainingTracksList");

    const urlParams = new URLSearchParams(window.location.search);
    const initialCompany = urlParams.get("company");
    const initialTrack = urlParams.get("track");

    let activeMode = initialCompany ? "company" : "general";

    // Populate company selector dropdown
    if (companySelect) {
        const companies = window.PREPFORGE_DATA?.companies || [];
        companySelect.innerHTML = `<option value="">-- Select Recruiting Company --</option>` +
            companies.map(c => `<option value="${c.id}" ${c.id === initialCompany ? "selected" : ""}>${c.name} (${c.type})</option>`).join("");

        companySelect.addEventListener("change", () => {
            renderTrainingContent();
        });
    }

    modeTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            modeTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeMode = tab.getAttribute("data-mode");
            
            const companyDropdownWrap = document.getElementById("companySelectorWrapper");
            if (companyDropdownWrap) {
                companyDropdownWrap.style.display = activeMode === "company" ? "flex" : "none";
            }

            renderTrainingContent();
        });
    });

    function renderTrainingContent() {
        if (!tracksContainer) return;
        const tracks = window.PREPFORGE_DATA?.trainingTracks || [];
        const selectedCompanyId = companySelect ? companySelect.value : "";
        const selectedCompany = window.PREPFORGE_DATA?.companies.find(c => c.id === selectedCompanyId);

        let bannerHtml = "";
        if (activeMode === "company") {
            if (selectedCompany) {
                bannerHtml = `
                    <div style="background: #EEF2FF; border: 1px solid #C7D2FE; border-radius: var(--radius-lg); padding: 18px 24px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between;">
                        <div>
                            <div style="font-size: 1.15rem; font-weight: 800; color: #1E1B4B;">Targeting ${selectedCompany.fullName} (${selectedCompany.type})</div>
                            <div style="font-size: 0.85rem; color: #4338CA; margin-top: 4px;">Curriculum tailored for: ${selectedCompany.syllabusFocus}</div>
                        </div>
                        <button class="btn btn-outline" onclick="window.location.href='practice.html?company=${selectedCompany.id}'">
                            Start ${selectedCompany.name} Practice →
                        </button>
                    </div>
                `;
            } else {
                bannerHtml = `
                    <div style="background: #FFFBEB; border: 1px solid #FDE68A; border-radius: var(--radius-lg); padding: 16px 20px; margin-bottom: 24px; color: #92400E; font-size: 0.88rem;">
                        <strong>Tip:</strong> Select a company from the dropdown above to filter syllabus topics specifically tested by that company!
                    </div>
                `;
            }
        }

        tracksContainer.innerHTML = bannerHtml + tracks.map(track => `
            <div class="card" style="margin-bottom: 20px; padding: 24px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
                    <div style="display: flex; align-items: center; gap: 14px;">
                        <div class="track-icon" style="background-color: ${track.bgColor}; color: ${track.accentColor}; width: 44px; height: 44px;">
                            ${track.icon}
                        </div>
                        <div>
                            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${track.fullName}</h3>
                            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 2px;">${track.summary}</p>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <span class="badge badge-difficulty-${track.difficulty.toLowerCase()}">${track.difficulty}</span>
                        <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-top: 6px;">${track.progress}% Completed</div>
                    </div>
                </div>

                <div class="track-progress-bar-bg" style="height: 8px;">
                    <div class="track-progress-bar-fill" style="width: ${track.progress}%; background-color: ${track.accentColor};"></div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 12px; margin-top: 20px;">
                    ${track.topics.map(topic => `
                        <div style="background: #F8FAFC; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: ${topic.completed ? '#10B981' : '#CBD5E1'}; flex-shrink: 0;"></span>
                                <span style="font-size: 0.84rem; font-weight: 600; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${topic.name}">${topic.name}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                <button class="btn btn-outline" style="padding: 4px 8px; font-size: 0.72rem; white-space: nowrap;" onclick="openTopicLesson('${topic.id}', '${topic.name.replace(/'/g, "\\'")}', '${track.fullName.replace(/'/g, "\\'")}')" title="Learn theory, formulas & worked examples">
                                    Learn & Examples 📖
                                </button>
                                <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 0.72rem; white-space: nowrap;" onclick="window.location.href='practice.html?domain=${encodeURIComponent(track.name)}'" title="Do practice problems">
                                    Practice ✍️
                                </button>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `).join("");
    }

    // Modal backdrop click close
    const topicModal = document.getElementById("topicLessonModal");
    if (topicModal) {
        topicModal.addEventListener("click", (e) => {
            if (e.target === topicModal) {
                topicModal.classList.remove("show");
            }
        });
    }

    renderTrainingContent();
}

function openTopicLesson(topicId, topicName, domainName) {
    const modal = document.getElementById("topicLessonModal");
    if (!modal) {
        window.location.href = `practice.html?domain=${encodeURIComponent(domainName || 'all')}`;
        return;
    }

    const lessons = window.PREPFORGE_DATA?.topicLessons || {};
    let lesson = lessons[topicId];

    if (!lesson) {
        // Find by title match
        const matchedKey = Object.keys(lessons).find(k => lessons[k].title.toLowerCase() === (topicName || "").toLowerCase());
        if (matchedKey) lesson = lessons[matchedKey];
    }

    if (!lesson) {
        // Generate tailored placement curriculum lesson
        lesson = {
            title: topicName || "Placement Core Concept",
            domain: domainName || "Core Placement Topic",
            concept: `Master the foundational theory, standard shortcut principles, and edge cases for "${topicName}". In technical campus drives and aptitude rounds, recruiters evaluate how efficiently you identify the core pattern and eliminate distractor options under timed pressure.`,
            formulas: [
                `Primary rule: Standardize problem variables and express equations in standard canonical form.`,
                `Time-saver shortcut: Check boundary conditions and unit constraints before full evaluation.`,
                `Complexity benchmark: Aim to identify the solution path in under 30 seconds.`
            ],
            example1: {
                problem: `Foundation Example on ${topicName}:\nGiven a typical placement assessment prompt on "${topicName}", determine the standard method to solve with zero calculation error.`,
                solution: `Step 1: Write down the known parameters and what needs to be determined.\nStep 2: Apply the governing rule of ${topicName} directly without extraneous substitutions.\nStep 3: Simplify systematically using cross-multiplication or algebraic factoring.\nStep 4: Verify with choice options.\nConclusion: The derived value matches the primary answer option.`
            },
            example2: {
                problem: `Placement Interview PYQ on ${topicName}:\nHow do top recruiters (e.g. TCS, Infosys, Amazon) twist questions on "${topicName}" to test high-performing candidates?`,
                solution: `Step 1: Interviewers typically introduce conflicting edge cases or non-trivial constraints.\nStep 2: Discard naive brute-force assumptions immediately.\nStep 3: Solve using optimal logarithmic/linear steps or ratio elimination.\nStep 4: State any boundary condition assumptions clearly to the interviewer.\nConclusion: Correctly structured answer guarantees maximum marks.`
            }
        };
    }

    const titleEl = document.getElementById("lessonTopicTitle");
    if (titleEl) titleEl.textContent = lesson.title || topicName;

    const badgeEl = document.getElementById("lessonDomainBadge");
    if (badgeEl) badgeEl.textContent = lesson.domain || domainName;

    const whatToLearnSec = document.getElementById("lessonWhatToLearnSection");
    const whatToLearnEl = document.getElementById("lessonWhatToLearn");
    if (whatToLearnEl) {
        if (lesson.whatToLearn) {
            whatToLearnEl.textContent = lesson.whatToLearn;
            if (whatToLearnSec) whatToLearnSec.style.display = "block";
        } else {
            if (whatToLearnSec) whatToLearnSec.style.display = "none";
        }
    }

    const conceptEl = document.getElementById("lessonConceptText");
    if (conceptEl) conceptEl.textContent = lesson.concept;

    const formulasSection = document.getElementById("lessonFormulasSection");
    const formulasList = document.getElementById("lessonFormulasList");
    if (formulasList) {
        if (lesson.formulas && lesson.formulas.length > 0) {
            if (formulasSection) formulasSection.style.display = "block";
            formulasList.innerHTML = lesson.formulas.map(f => `
                <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.85rem; color: #166534; font-weight: 500;">
                    • ${f}
                </div>
            `).join("");
        } else {
            if (formulasSection) formulasSection.style.display = "none";
        }
    }

    const ex1Prob = document.getElementById("lessonEx1Problem");
    if (ex1Prob) ex1Prob.textContent = lesson.example1?.problem || "Example problem details";

    const ex1Sol = document.getElementById("lessonEx1Solution");
    if (ex1Sol) ex1Sol.textContent = lesson.example1?.solution || "Step-by-step solution";

    const ex2Prob = document.getElementById("lessonEx2Problem");
    if (ex2Prob) ex2Prob.textContent = lesson.example2?.problem || "Interview problem details";

    const ex2Sol = document.getElementById("lessonEx2Solution");
    if (ex2Sol) ex2Sol.textContent = lesson.example2?.solution || "Step-by-step solution";

    const practiceBtn = document.getElementById("btnLessonGoPractice");
    if (practiceBtn) {
        practiceBtn.onclick = () => {
            modal.classList.remove("show");
            const domainKey = (lesson.domain || domainName || "").toLowerCase();
            let targetDomain = "all";
            if (domainKey.includes("aptitude")) targetDomain = "Aptitude";
            else if (domainKey.includes("reasoning")) targetDomain = "Reasoning";
            else if (domainKey.includes("verbal")) targetDomain = "Verbal";
            else if (domainKey.includes("coding") || domainKey.includes("dsa")) targetDomain = "Coding";
            else if (domainKey.includes("sql")) targetDomain = "SQL";
            else if (domainKey.includes("dbms")) targetDomain = "DBMS";

            window.location.href = `practice.html?domain=${targetDomain}`;
        };
    }

    modal.classList.add("show");
}

window.openTopicLesson = openTopicLesson;

/* ==========================================================================
   Practice Page Logic (Question Bank & Instant Verification)
   ========================================================================== */

function initPracticePage() {
    const companySelect = document.getElementById("practiceCompanySelect");
    const domainSelect = document.getElementById("practiceDomainSelect");
    const modeTabs = document.querySelectorAll(".practice-mode-tab");
    const questionsContainer = document.getElementById("practiceQuestionsList");

    const urlParams = new URLSearchParams(window.location.search);
    const initialCompany = urlParams.get("company");
    const initialDomain = urlParams.get("domain");

    let currentMode = initialCompany ? "company" : "general";
    let selectedDomain = initialDomain || "all";

    // Populate company selector
    if (companySelect) {
        const companies = window.PREPFORGE_DATA?.companies || [];
        companySelect.innerHTML = `<option value="">All Companies</option>` +
            companies.map(c => `<option value="${c.id}" ${c.id === initialCompany ? "selected" : ""}>${c.name}</option>`).join("");

        companySelect.addEventListener("change", renderPracticeQuestions);
    }

    if (domainSelect) {
        if (initialDomain) domainSelect.value = initialDomain;
        domainSelect.addEventListener("change", (e) => {
            selectedDomain = e.target.value;
            renderPracticeQuestions();
        });
    }

    modeTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            modeTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentMode = tab.getAttribute("data-mode");

            const companyFilterWrap = document.getElementById("practiceCompanyFilterWrapper");
            if (companyFilterWrap) {
                companyFilterWrap.style.display = currentMode === "company" ? "flex" : "none";
            }

            renderPracticeQuestions();
        });
    });

    function renderPracticeQuestions() {
        if (!questionsContainer) return;
        const allQuestions = window.PREPFORGE_DATA?.practiceQuestions || [];
        const selectedCompany = companySelect ? companySelect.value : "";

        const filtered = allQuestions.filter(q => {
            const matchesMode = currentMode === "general" ? true : (selectedCompany ? q.company === selectedCompany : true);
            const matchesDomain = selectedDomain === "all" ? true : q.domain.toLowerCase().includes(selectedDomain.toLowerCase());
            return matchesMode && matchesDomain;
        });

        if (filtered.length === 0) {
            questionsContainer.innerHTML = `
                <div style="background: #FFFFFF; border-radius: var(--radius-lg); border: 1px solid var(--border-color); padding: 48px; text-align: center; color: var(--text-muted);">
                    <h3>No practice questions found for this filter</h3>
                    <p style="margin-top: 8px;">Try switching domains or choosing another company.</p>
                </div>
            `;
            return;
        }

        // Compute live practice statistics for this filtered set
        const totalCount = filtered.length;
        const solvedQuestions = filtered.filter(q => window.PrepForgeState?.isQuestionCompleted(q.id));
        const solvedCount = solvedQuestions.length;
        const correctCount = filtered.filter(q => window.PrepForgeState?.getQuestionRecord(q.id)?.isCorrect).length;
        const accuracyRate = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;

        const statsBarHtml = `
            <div class="card" style="padding: 18px 24px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);">
                <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
                    <div>
                        <div style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Available Problems</div>
                        <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;" id="practiceStatsTotal">${totalCount} Questions</div>
                    </div>
                    <div style="border-left: 1px solid var(--border-color); padding-left: 24px;">
                        <div style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Problems Solved</div>
                        <div style="font-size: 1.25rem; font-weight: 800; color: #4F46E5; margin-top: 2px;" id="practiceStatsSolved">${solvedCount} / ${totalCount}</div>
                    </div>
                    <div style="border-left: 1px solid var(--border-color); padding-left: 24px;">
                        <div style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Practice Accuracy</div>
                        <div style="font-size: 1.25rem; font-weight: 800; color: #059669; margin-top: 2px;" id="practiceStatsAccuracy">${accuracyRate}%</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <button class="btn btn-outline" style="padding: 6px 14px; font-size: 0.8rem;" onclick="resetPracticeProgress()">
                        Reset Solved State ↺
                    </button>
                    <button class="btn btn-primary" style="padding: 6px 16px; font-size: 0.8rem;" onclick="window.location.href='mock-tests.html'">
                        Timed Mock Test ⏱️
                    </button>
                </div>
            </div>
        `;

        const showLeetCodeBanner = selectedDomain === "all" || selectedDomain.toLowerCase().includes("coding");
        const leetCodeBannerHtml = showLeetCodeBanner ? `
            <div class="card" style="padding: 20px 24px; margin-bottom: 24px; background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border: 1px solid #334155; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; color: #FFFFFF;">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <div style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; color: #38BDF8; flex-shrink: 0;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </div>
                    <div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 1.05rem; font-weight: 800; color: #F8FAFC;">PrepForge LeetCode Code Arena</span>
                            <span class="badge" style="background: #10B981; color: #FFFFFF; font-weight: 700; font-size: 0.72rem;">LIVE COMPILER</span>
                        </div>
                        <div style="font-size: 0.84rem; color: #94A3B8; margin-top: 4px;">
                            Write, run, and submit actual code with custom test cases, live execution feedback, and automated edge-case grading.
                        </div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <a href="coding.html" class="btn" style="background: #059669; color: #FFFFFF; border: 1px solid #10B981; font-weight: 700; padding: 8px 18px; font-size: 0.86rem; text-decoration: none; display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);">
                        <span>Launch Code Arena →</span>
                    </a>
                </div>
            </div>
        ` : '';

        const questionsListHtml = filtered.map((q, idx) => {
            const completedRecord = window.PrepForgeState?.getQuestionRecord(q.id);
            const isCompleted = !!completedRecord;
            const isCorrect = completedRecord ? completedRecord.isCorrect : false;
            const chosenOption = completedRecord ? completedRecord.selectedOption : null;
            const isCodingDomain = q.domain.toLowerCase().includes("coding");

            return `
                <div class="card" style="margin-bottom: 24px; padding: 26px;" id="question-card-${q.id}">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <span class="question-domain-tag">${q.domain}</span>
                            <span class="badge ${q.isPYQ ? 'badge-service' : 'badge-product'}">${q.pyqLabel || 'Standard Pattern'}</span>
                            ${q.companyName ? `<span class="badge badge-product">${q.companyName} Pattern</span>` : ''}
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span class="badge badge-difficulty-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
                            ${isCodingDomain ? `
                                <button class="btn btn-primary" style="padding: 3px 10px; font-size: 0.72rem; background: #0F172A; border-color: #334155; color: #38BDF8;" onclick="window.location.href='coding.html'" title="Open LeetCode Code Arena">
                                    💻 Code in Arena
                                </button>
                            ` : ''}
                            <button class="btn btn-secondary" style="padding: 3px 8px; font-size: 0.72rem;" onclick="window.location.href='training.html'" title="Review topic theory in Training">
                                📖 Learn Topic
                            </button>
                        </div>
                    </div>

                    <div style="font-size: 1.02rem; font-weight: 600; color: var(--text-primary); margin-bottom: 18px; line-height: 1.5; white-space: pre-line;">
                        ${idx + 1}. ${q.statement}
                    </div>

                    <div class="exam-options-container" id="options-${q.id}">
                        ${q.options.map((opt, optIdx) => {
                            let itemClass = "";
                            let itemStyle = "";
                            if (isCompleted) {
                                if (optIdx === q.correctOption) {
                                    itemClass = "correct";
                                    itemStyle = "border-color: #10B981; background-color: #ECFDF5;";
                                } else if (optIdx === chosenOption && !isCorrect) {
                                    itemClass = "incorrect";
                                    itemStyle = "border-color: #EF4444; background-color: #FEF2F2;";
                                }
                            }
                            return `
                                <div class="exam-option-item ${itemClass}" 
                                     style="${itemStyle}"
                                     onclick="handlePracticeOptionClick('${q.id}', ${optIdx}, ${q.correctOption})">
                                    <div class="option-radio-circle" style="font-size: 0.74rem; font-weight: 700; display: flex; align-items: center; justify-content: center;">
                                        ${String.fromCharCode(65 + optIdx)}
                                    </div>
                                    <span class="option-text">${opt}</span>
                                </div>
                            `;
                        }).join("")}
                    </div>

                    <!-- Instant Verification Feedback -->
                    <div id="feedback-${q.id}" style="margin-top: 14px; display: ${isCompleted ? 'block' : 'none'};">
                        ${isCompleted ? (
                            isCorrect 
                            ? `<div style="display: flex; align-items: center; gap: 8px; background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: var(--radius-sm); padding: 10px 14px; color: #065F46; font-size: 0.88rem; font-weight: 600;">
                                  <span>✅ Correct!</span> <span>Option ${String.fromCharCode(65 + chosenOption)} is the right answer. Great work!</span>
                               </div>`
                            : `<div style="display: flex; align-items: center; gap: 8px; background: #FEF2F2; border: 1px solid #FECACA; border-radius: var(--radius-sm); padding: 10px 14px; color: #991B1B; font-size: 0.88rem; font-weight: 600;">
                                  <span>❌ Incorrect.</span> <span>You selected Option ${String.fromCharCode(65 + chosenOption)}. The correct answer is <strong>Option ${String.fromCharCode(65 + q.correctOption)}</strong>.</span>
                               </div>`
                        ) : ''}
                    </div>

                    <!-- Step-by-Step Explanation -->
                    <div id="explanation-${q.id}" class="solution-explanation" style="display: ${isCompleted ? 'block' : 'none'};">
                        <strong style="color: var(--text-primary); display: block; margin-bottom: 6px; font-size: 0.9rem;">Step-by-Step Placement Solution:</strong>
                        ${q.explanation}
                    </div>
                </div>
            `;
        }).join("");

        questionsContainer.innerHTML = statsBarHtml + leetCodeBannerHtml + questionsListHtml;
    }

    window.refreshPracticeView = renderPracticeQuestions;
    renderPracticeQuestions();
}

function handlePracticeOptionClick(questionId, selectedOptIdx, correctOptIdx) {
    const card = document.getElementById(`question-card-${questionId}`);
    if (!card) return;

    const optionsContainer = document.getElementById(`options-${questionId}`);
    const explanationBox = document.getElementById(`explanation-${questionId}`);
    const feedbackBox = document.getElementById(`feedback-${questionId}`);
    if (!optionsContainer) return;

    const optionItems = optionsContainer.querySelectorAll(".exam-option-item");
    const isCorrect = selectedOptIdx === correctOptIdx;

    optionItems.forEach((item, idx) => {
        item.classList.remove("selected", "correct", "incorrect");
        item.removeAttribute("style");
        if (idx === correctOptIdx) {
            item.classList.add("correct");
            item.style.borderColor = "#10B981";
            item.style.backgroundColor = "#ECFDF5";
        } else if (idx === selectedOptIdx && !isCorrect) {
            item.classList.add("incorrect");
            item.style.borderColor = "#EF4444";
            item.style.backgroundColor = "#FEF2F2";
        }
    });

    if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.innerHTML = isCorrect 
            ? `<div style="display: flex; align-items: center; gap: 8px; background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: var(--radius-sm); padding: 10px 14px; color: #065F46; font-size: 0.88rem; font-weight: 600;">
                  <span>✅ Correct!</span> <span>Option ${String.fromCharCode(65 + selectedOptIdx)} is the right answer. Great work!</span>
               </div>`
            : `<div style="display: flex; align-items: center; gap: 8px; background: #FEF2F2; border: 1px solid #FECACA; border-radius: var(--radius-sm); padding: 10px 14px; color: #991B1B; font-size: 0.88rem; font-weight: 600;">
                  <span>❌ Incorrect.</span> <span>You selected Option ${String.fromCharCode(65 + selectedOptIdx)}. The correct answer is <strong>Option ${String.fromCharCode(65 + correctOptIdx)}</strong>.</span>
               </div>`;
    }

    if (explanationBox) {
        explanationBox.style.display = "block";
    }

    // Save progress to state
    window.PrepForgeState?.recordPracticeAnswer(questionId, selectedOptIdx, isCorrect);

    // Update live top summary counters if present
    const allQuestions = window.PREPFORGE_DATA?.practiceQuestions || [];
    const solvedCount = allQuestions.filter(q => window.PrepForgeState?.isQuestionCompleted(q.id)).length;
    const correctCount = allQuestions.filter(q => window.PrepForgeState?.getQuestionRecord(q.id)?.isCorrect).length;
    const solvedEl = document.getElementById("practiceStatsSolved");
    const accEl = document.getElementById("practiceStatsAccuracy");
    if (solvedEl) solvedEl.textContent = `${solvedCount} / ${allQuestions.length}`;
    if (accEl && solvedCount > 0) accEl.textContent = `${Math.round((correctCount / solvedCount) * 100)}%`;
}

function resetPracticeProgress() {
    if (confirm("Reset all solved practice answers? This will let you practice all questions again from scratch.")) {
        const state = window.PrepForgeState?.getState();
        if (state) {
            state.completedQuestions = {};
            window.PrepForgeState?.save(state);
        }
        if (window.refreshPracticeView) {
            window.refreshPracticeView();
        }
    }
}

window.handlePracticeOptionClick = handlePracticeOptionClick;
window.resetPracticeProgress = resetPracticeProgress;

/* ==========================================================================
   Performance Page Analytics
   ========================================================================== */

function initPerformancePage() {
    const student = window.PrepForgeState?.getStudent() || window.PREPFORGE_DATA?.student;
    if (!student) return;

    // Readiness Gauge
    const readinessScoreEl = document.getElementById("perfReadinessScore");
    if (readinessScoreEl) readinessScoreEl.textContent = `${student.placementReadiness}%`;

    // History Table
    const historyTableBody = document.getElementById("perfHistoryTableBody");
    const history = window.PrepForgeState?.getMockHistory() || [];

    if (historyTableBody) {
        historyTableBody.innerHTML = history.map(item => `
            <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 14px 16px; font-weight: 600; color: var(--text-primary);">${item.name}</td>
                <td style="padding: 14px 16px; color: var(--text-muted); font-size: 0.85rem;">${item.date}</td>
                <td style="padding: 14px 16px; font-weight: 700; color: var(--primary);">${item.score}</td>
                <td style="padding: 14px 16px; font-weight: 600;">${item.accuracy}</td>
                <td style="padding: 14px 16px;">
                    <span class="badge ${item.status === 'Cleared' ? 'badge-difficulty-easy' : 'badge-difficulty-medium'}">${item.status}</span>
                </td>
            </tr>
        `).join("");
    }
}

/* ==========================================================================
   Resources Page Logic
   ========================================================================== */

function initResourcesPage() {
    const grid = document.getElementById("resourcesGrid");
    const filterPills = document.querySelectorAll(".resource-filter-pill");

    let currentCategory = "all";

    function renderResources() {
        if (!grid) return;
        const resources = window.PREPFORGE_DATA?.resources || [];

        const filtered = resources.filter(r => currentCategory === "all" || r.category.toLowerCase().includes(currentCategory.toLowerCase()));

        grid.innerHTML = filtered.map(r => `
            <div class="card" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                        <span class="badge badge-product">${r.category}</span>
                        <span style="font-size: 0.74rem; font-weight: 600; color: var(--text-muted);">${r.readTime}</span>
                    </div>

                    <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">${r.title}</h3>
                    <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">${r.description}</p>
                    
                    <div style="background: #F8FAFC; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 12px; font-size: 0.78rem; color: var(--text-muted); white-space: pre-line; margin-bottom: 18px;">
                        ${r.content}
                    </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
                    <span style="font-size: 0.76rem; color: var(--text-muted);">${r.pages} • By ${r.author}</span>
                    <button class="btn btn-outline" style="padding: 6px 14px; font-size: 0.8rem;" onclick="alert('Viewing study material: ${r.title}')">
                        Open Guide →
                    </button>
                </div>
            </div>
        `).join("");
    }

    filterPills.forEach(pill => {
        pill.addEventListener("click", () => {
            filterPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentCategory = pill.getAttribute("data-category") || "all";
            renderResources();
        });
    });

    renderResources();
}
