const langBtn = document.getElementById("lang-btn");
const langOptions = document.getElementById("options");
const dropdownArrow = document.getElementById("dropdown-arrow");
const langItems = document.querySelectorAll(".dropdown__item");
const langClose = document.querySelector(".dropdown__close");
const bg = document.querySelector(".bg");
const newArrow = document.createElement("span");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const body = document.querySelector('body')

langBtn.addEventListener("click", () => {
  langOptions.classList.toggle("dropdown__items_active");
  dropdownArrow.classList.toggle("dropdown__arrow_active");
  newArrow.classList.toggle("dropdown__arrow_active");
  bg.classList.toggle("active");
});

langClose.addEventListener("click", () => {
  langOptions.classList.remove("header__items_active");
  bg.classList.remove("active");
});

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger_active");
  nav.classList.toggle("header__nav_active");
  bg.classList.toggle("bg__active")
  body.classList.toggle("lock")
});