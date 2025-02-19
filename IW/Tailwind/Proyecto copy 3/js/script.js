const themeToggleBtn = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

const test = () => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      windows.matchMedia("(prefers-color-scheme:dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
};

document.addEventListener("DOMContentLoaded", test);
