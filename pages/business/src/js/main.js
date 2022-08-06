const langBtn = document.getElementById("lang-btn");
const langOptions = document.getElementById("options");
const dropdownArrow = document.getElementById("dropdown-arrow");
const langItems = document.querySelectorAll(".dropdown__item");
const langClose = document.querySelector(".dropdown__close");
const bg = document.querySelector(".bg");
const newArrow = document.createElement("span");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

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
  bg.classList.toggle("bg__active");
});

// Window request
const requestBtn = document.querySelector(".request__btn");
const requestFilling = document.querySelector(".request__filling");
const requestClose = document.querySelectorAll(".request__close");
const requestDone = document.querySelector(".request__done");

requestBtn.addEventListener("click", () => {
  requestBtn.classList.add("request__btn_active");
  requestFilling.classList.add("request__filling_active");
});
requestClose.forEach((el) => {
  el.addEventListener("click", () => {
    requestBtn.classList.remove("request__btn_active");
    requestFilling.classList.remove("request__filling_active");
    requestDone.classList.remove("request__done_active");
  });
});
const requestForm = document.getElementById("request-form");

requestForm.addEventListener("change", (e) => {
  const formInputs = document.getElementsByClassName("form__input");
  const formBtn = document.getElementById("send-btn");
  let aa = true;
  for (let i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].value) {
      aa = false;
    }
  }
  if (aa === true) {
    formBtn.classList.add("form__btn_active");
    requestForm.addEventListener("submit", (e) => {
      e.preventDefault();
      requestFilling.classList.remove("request__filling_active");
      requestDone.classList.add("request__done_active");
    });
  }
});