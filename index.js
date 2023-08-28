function toggleTheme() {
  const html = document.documentElement;
  const avatar = document.body.querySelector(".avatar");

  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar-light.png");
    avatar.setAttribute("alt", "Uma foto da lenda do CSS Mayk Brito com óculos de Sol")
  } else {
    avatar.setAttribute("src", "./assets/avatar.png");
    avatar.setAttribute("alt", "Uma foto da lenda do CSS Mayk Brito")
  }
}
