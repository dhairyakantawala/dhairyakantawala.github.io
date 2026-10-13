(() => {
  const key = "dhairya-theme";
  const root = document.documentElement;
  const toggle = document.querySelector("#checkbox");
  const saved = localStorage.getItem(key);
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme, persist = false) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (toggle) {
      toggle.checked = theme === "dark";
      toggle.setAttribute("aria-checked", String(theme === "dark"));
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
    if (persist) localStorage.setItem(key, theme);
  }

  applyTheme(saved || (systemDark.matches ? "dark" : "light"));

  if (toggle) {
    toggle.addEventListener("change", () => applyTheme(toggle.checked ? "dark" : "light", true));
  }

  systemDark.addEventListener("change", (event) => {
    if (!localStorage.getItem(key)) applyTheme(event.matches ? "dark" : "light");
  });
})();
