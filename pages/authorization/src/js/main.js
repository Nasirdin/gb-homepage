const emailRe = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const telRe = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
const passwordRe = /(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

const authisterForm = document.getElementById("auth-form");
const authEmailOrTel = document.querySelector(".auth__emailOrTel");
const authPassword = document.querySelector(".auth__password");
const passwordEyes = document.querySelector(".eyes");

function validEmailOrTel(e) {
  const authPassword = document.querySelector(".auth__password");
  const forget = document.querySelector(".auth__forget");
  const emailOrTelLabel = document.querySelector(".emailOrTelLabel");

  if (emailRe.test(e.target.value) || telRe.test(e.target.value)) {
    authPassword.classList.add("auth__password_active");
    forget.classList.add("auth__forget_active");
    emailOrTelLabel.classList.add("verified");
    passwordEyes.classList.add("eyes-active");
  } else {
    authPassword.classList.remove("auth__password_active");
    emailOrTelLabel.classList.remove("verified");
    forget.classList.remove("auth__forget_active");
    passwordEyes.classList.remove("eyes-active");
  }
}

authEmailOrTel.addEventListener("input", validEmailOrTel);

passwordEyes.addEventListener("click", () => {
  const regPassword = document.querySelector(".auth__password");
  if (regPassword.getAttribute("type") == "password") {
    // passwordEyes.classList.add("view");
    regPassword.setAttribute("type", "text");
  } else {
    // passwordEyes.classList.remove("view");
    regPassword.setAttribute("type", "password");
  }
});

const langBtn = document.getElementById("lang-btn");
const langOptions = document.getElementById("options");
const dropdownArrow = document.getElementById("dropdown-arrow");
const langItems = document.querySelectorAll(".dropdown__item");
const langClose = document.querySelector(".dropdown__close");
const bg = document.querySelector(".bg");
const newArrow = document.createElement("span");

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