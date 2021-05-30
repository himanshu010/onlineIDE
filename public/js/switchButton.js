function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  console.log(localStorage.getItem("theme"));
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

window.onload = function () {
  console.log(localStorage.getItem("theme"));
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = true;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = false;
  }
};
