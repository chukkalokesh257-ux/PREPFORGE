/* PrepForge demo authentication. Client-side only; not suitable for production security. */
(() => {
  const USERS_KEY = "PREPFORGE_LOCAL_USERS_V1";
  const SESSION_KEY = "PREPFORGE_LOCAL_SESSION_V1";
  const page = location.pathname.toLowerCase();
  const isAuthPage = page.endsWith("/login.html") || page.endsWith("/register.html");
  const read = (key, fallback) => {
    try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
    catch (_) { return fallback; }
  };
  const getSession = () => read(SESSION_KEY, null);
  const redirectToLogin = () => {
    const inCompanyFolder = /\/companies\//.test(page);
    location.replace(inCompanyFolder ? "../login.html" : "login.html");
  };

  if (!isAuthPage && !getSession()) {
    redirectToLogin();
    return;
  }
  if (isAuthPage && getSession()) {
    location.replace("dashboard.html");
    return;
  }

  document.querySelectorAll("[data-toggle-password]").forEach(button => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.togglePassword);
      if (!input) return;
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      button.textContent = show ? "Hide" : "Show";
      button.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  });

  const alertBox = document.getElementById("formAlert");
  const showAlert = (message, success = false) => {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = "form-alert show" + (success ? " success" : "");
  };
  const normalEmail = value => value.trim().toLowerCase();

  const registerForm = document.getElementById("registerForm");
  if (registerForm) registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("fullName").value.trim();
    const email = normalEmail(document.getElementById("email").value);
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    if (!name || !email || !password || !confirm) return showAlert("Please fill in every field.");
    if (password.length < 6) return showAlert("Use a password with at least 6 characters.");
    if (password !== confirm) return showAlert("Your passwords do not match.");
    const users = read(USERS_KEY, []);
    if (users.some(user => user.email === email)) return showAlert("An account with this email already exists. Please sign in.");
    users.push({ name, email, password, createdAt: new Date().toISOString() });
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      localStorage.setItem(SESSION_KEY, JSON.stringify({ name, email, signedInAt: new Date().toISOString() }));
      showAlert("Account created! Opening your dashboard…", true);
      setTimeout(() => location.replace("dashboard.html"), 450);
    } catch (_) {
      showAlert("Browser storage is unavailable or full. Clear some site storage and try again.");
    }
  });

  const loginForm = document.getElementById("loginForm");
  if (loginForm) loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const email = normalEmail(document.getElementById("email").value);
    const password = document.getElementById("password").value;
    if (!email || !password) return showAlert("Enter your email and password.");
    const users = read(USERS_KEY, []);
    const user = users.find(item => item.email === email && item.password === password);
    if (!user) return showAlert("Email or password is incorrect. If you are new, create an account first.");
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email, signedInAt: new Date().toISOString() }));
      showAlert("Signed in successfully. Opening your dashboard…", true);
      setTimeout(() => location.replace("dashboard.html"), 350);
    } catch (_) { showAlert("Could not save your session. Check your browser storage."); }
  });

  // Display the registered account name consistently throughout the website.
  document.addEventListener("DOMContentLoaded", () => {
    const session = getSession();
    if (!session) return;
    const name = (session.name || "Student").trim() || "Student";
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part.charAt(0).toUpperCase()).join("");
    document.querySelectorAll(".profile-name, .student-name, .user-name, [data-user-name]").forEach(el => {
      el.textContent = name;
    });
    document.querySelectorAll(".user-avatar, [data-user-initials]").forEach(el => {
      el.textContent = initials;
      el.setAttribute("aria-label", name);
    });
    document.querySelectorAll("[data-user-greeting]").forEach(el => {
      el.textContent = name;
    });
    document.querySelectorAll("[data-user-email]").forEach(el => el.textContent = session.email || "");
  });

  window.PrepForgeAuth = {
    logout() {
      localStorage.removeItem(SESSION_KEY);
      location.href = /\/companies\//.test(page) ? "../login.html" : "login.html";
    },
    getSession
  };
})();