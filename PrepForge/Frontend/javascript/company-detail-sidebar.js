/* Sidebar behavior for standalone company detail pages (these pages intentionally do not load app.js). */
document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector(".app-container");
    const toggle = document.querySelector(".sidebar-toggle");
    const backdrop = document.querySelector(".sidebar-backdrop");
    if (!app || !toggle) return;

    // Keep the sidebar closed from the first render, regardless of the viewport.
    app.classList.add("sidebar-collapsed");
    app.classList.remove("sidebar-open");
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 900px)").matches) {
            app.classList.toggle("sidebar-open");
            toggle.setAttribute("aria-expanded", String(app.classList.contains("sidebar-open")));
        } else {
            app.classList.toggle("sidebar-collapsed");
            toggle.setAttribute("aria-expanded", String(!app.classList.contains("sidebar-collapsed")));
        }
    });

    const closeSidebar = () => {
        app.classList.remove("sidebar-open");
        app.classList.add("sidebar-collapsed");
        toggle.setAttribute("aria-expanded", "false");
    };
    backdrop?.addEventListener("click", closeSidebar);
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeSidebar(); });
    app.querySelectorAll(".sidebar-nav a, .sidebar-footer a").forEach(link => link.addEventListener("click", closeSidebar));
});
