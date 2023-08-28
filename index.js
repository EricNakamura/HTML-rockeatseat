function toggleTheme() {
  const html = document.documentElement;
  const avatar = document.body.querySelector(".avatar");

  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    avatar.setAttribute("alt", "Uma foto minha, Eric Bafa, onde estou num local ensolarado e sorrindo")
  } else {
    avatar.setAttribute("alt", "Uma foto da lenda do CSS Mayk Brito")
  }
}
