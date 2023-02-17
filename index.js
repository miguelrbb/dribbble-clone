
const navBurger = document.querySelector("#nav-burger");
const navBurgerMenu = document.querySelector("#nav-burger-menu");
const navBurgerClose = document.querySelector("#nav-burger-close");

const modalMenu = document.querySelector("#modal-menu");

navBurger.addEventListener("click", showModalMenu);

function showModalMenu() {
  modalMenu.classList.toggle("hidden");
  navBurgerMenu.classList.toggle("hidden");
  navBurgerClose.classList.toggle("hidden");

}