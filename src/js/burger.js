const burger = document.querySelector(".header__burger");
const menuActive = document.querySelector(".header__popup");
// const headerRow = document.querySelector(".header-row");

function toggleBurger() {
  menuActive.classList.toggle('active');
  burger.classList.toggle('header__burger_active');
}

burger.addEventListener('click', toggleBurger);
