function toggleTheme() {
  const html = document.documentElement;
  const avatar = document.body.querySelector(".avatar");

  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar-light.png");
  } else {
    avatar.setAttribute("src", "./assets/avatar.png");
  }
}
