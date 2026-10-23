/* Company-specific syllabus renderer. This page intentionally contains no practice questions. */
(function () {
  const root = document.getElementById("syllabusContent");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const companyId = params.get("company");
  const companies = window.PREPFORGE_DATA && window.PREPFORGE_DATA.companies || [];
  const company = companies.find(item => item.id === companyId);

  if (!company) {
    root.innerHTML = '<section class="syllabus-hero"><p>COMPANY PREPARATION</p><h1>Choose a company</h1><p>Select a company from the Companies page to view its syllabus.</p><a class="btn btn-primary" href="companies.html" style="display:inline-block;margin-top:14px;text-decoration:none">Browse companies</a></section>';
    document.title = 'Choose Company Syllabus - PrepForge';
    return;
  }

  document.title = company.name + ' Syllabus - PrepForge';
  const focusItems = String(company.syllabusFocus || '').split(/,|;|\. /).map(s => s.trim()).filter(Boolean);
  const topics = Array.isArray(company.topics) ? company.topics : [];
  const difficulty = company.difficulty || 'Medium';
  const difficultyColor = difficulty.toLowerCase() === 'hard' ? '#b91c1c' : difficulty.toLowerCase() === 'easy' ? '#047857' : '#92400e';
  const logo = (window.PREPFORGE_DATA.companyLogos && window.PREPFORGE_DATA.companyLogos[company.id]) || company.name.slice(0, 2);
  const safe = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  root.innerHTML = `
    <section class="syllabus-hero">
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <div style="width:58px;height:58px;border-radius:15px;background:#fff;border:1px solid #c7d2fe;display:grid;place-items:center;font-weight:800;font-size:1.15rem;color:#4338ca">${typeof logo === 'string' && logo.startsWith('<') ? logo : safe(logo)}</div>
        <div style="flex:1;min-width:200px">
          <p style="font-size:.75rem;font-weight:800;letter-spacing:.1em">COMPANY SYLLABUS</p>
          <h1>${safe(company.name)} — Syllabus</h1>
          <p>${safe(company.fullName || company.name)}</p>
        </div>
        <span style="background:#fff;border:1px solid #ddd6fe;border-radius:999px;padding:8px 12px;color:${difficultyColor};font-size:.84rem;font-weight:800">${safe(difficulty)} overall level</span>
      </div>
    </section>
    <section class="syllabus-section">
      <h2>Core subject areas</h2>
      <div class="syllabus-chips">${topics.map(topic => `<span class="syllabus-chip">${safe(topic)}</span>`).join('') || '<span class="syllabus-chip">Core placement topics</span>'}</div>
    </section>
    <section class="syllabus-section">
      <h2>Topic-wise syllabus and preparation focus</h2>
      <div class="syllabus-focus-list">${focusItems.map((item, index) => `<div class="syllabus-focus-item"><strong style="display:block;color:#4338ca;margin-bottom:4px">Topic ${index + 1}</strong>${safe(item)}</div>`).join('') || '<div class="syllabus-focus-item">Review the core subject areas listed above.</div>'}</div>
      <p class="syllabus-note">This is a PrepForge preparation outline based on common recruitment patterns, not a guarantee of the current official test. Topics and difficulty can vary by role, location, and hiring cycle.</p>
    </section>
  `;
})();
