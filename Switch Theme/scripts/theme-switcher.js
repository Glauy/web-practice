function switchTheme(theme) {
  const stylesheet = document.getElementById("theme-stylesheet");

  if (theme === "dark") {
    stylesheet.href = "styles/dark-theme.css";
  } else {
    stylesheet.href = "styles/light-theme.css";
  }
}
