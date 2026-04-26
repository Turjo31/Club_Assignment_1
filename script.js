// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
  body.classList.add("light-theme");
  updateThemeIcon("light");
}

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const isLight = body.classList.contains("light-theme");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  updateThemeIcon(isLight ? "dark" : "light");
});

function updateThemeIcon(theme) {
  const icon = themeToggle?.querySelector("span");
  if (icon) {
    icon.textContent = theme === "light" ? "☀️" : "🌙";
  }
}
const currentYear = new Date().getFullYear();
yearElements.forEach((el) => {
  el.textContent = currentYear;
});
