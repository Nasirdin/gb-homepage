const emailRe = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const telRe = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
const passwordRe = /(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

const registerForm = document.getElementById("reg-form");
const regEmailOrTel = document.querySelector(".reg__emailOrTel");
const regPassword = document.querySelector(".reg__password");
const passwordEyes = document.querySelector(".eyes");

function validEmailOrTel(e) {
  const regPassword = document.querySelector(".reg__password");
  const regCheckbox = document.querySelector(".reg__checkbox");
  const emailOrTelLabel = document.querySelector(".emailOrTelLabel");
  if (emailRe.test(e.target.value)) {
    regPassword.classList.add("reg__password_active");
    regCheckbox.classList.add("reg__checkbox_active");
    emailOrTelLabel.classList.add("verified");
    passwordEyes.classList.add("eyes-active");
    regEmailOrTel.classList.remove("error");
  } else if (telRe.test(e.target.value)) {
    regCheckbox.classList.add("reg__checkbox_active");
    regEmailOrTel.classList.remove("error");
    emailOrTelLabel.classList.add("verified");
    passwordEyes.classList.remove("eyes-active");
  } else {
    regPassword.classList.remove("reg__password_active");
    regCheckbox.classList.remove("reg__checkbox_active");
    emailOrTelLabel.classList.remove("verified");
    regEmailOrTel.classList.add("error");
    passwordEyes.classList.remove("eyes-active");
  }
}

function validPassword(e) {
  const regPassword = document.querySelector(".reg__password");

  if (!passwordRe.test(e.target.value)) {
    regPassword.classList.add("error");
  } else {
    regPassword.classList.remove("error");
  }
}

function checkInput() {
  const regInputs = document.querySelectorAll(".input");
  const regCheckbox = document.getElementById("checkbox");
  const regBtn = document.getElementById("reg-btn");
  let inputValue = true;
  for (let i = 0; i < regInputs.length; i++) {
    if (!regInputs[i].value) {
      inputValue = false;
    }
  }
  if (telRe.test(regEmailOrTel.value) && regCheckbox.checked) {
    regBtn.classList.add("reg__btn_active");
  } else if (inputValue === true && regInputs[1].value.length >= 8 && regCheckbox.checked) {
    regBtn.classList.add("reg__btn_active");
  }
}

function btnRegister(e) {
  e.preventDefault(e);
  const emailOrTel = e.target.children[0].children[0].value;
  const regPage = document.querySelector(".reg__page-1");
  regPage.classList.add("reg__page-1_active");
  if (emailRe.test(emailOrTel)) {
    const regPageEmail = document.querySelector(".reg__page-email");
    regPageEmail.classList.add("reg__page-email_active");
    const minuteSpan = document.getElementById("span-minute-1");
    const secondSpan = document.getElementById("span-second-1");
    const spanData = document.getElementById("span-email");
    const btnRepeat = document.getElementById("send-emal");
    second(secondSpan, minuteSpan, btnRepeat, spanData, emailOrTel);
  } else if (telRe.test(emailOrTel)) {
    const regPageTel = document.querySelector(".reg__page-tel");
    regPageTel.classList.add("reg__page-tel_active");
    const minuteSpan = document.getElementById("span-minute-2");
    const secondSpan = document.getElementById("span-second-2");
    const spanData = document.getElementById("span-tel");
    const btnRepeat = document.getElementById("send-tel");
    const newEmailOrTel = emailOrTel.slice(0, 5) + "***" + emailOrTel.slice(emailOrTel.length - 4, emailOrTel.length);
    second(secondSpan, minuteSpan, btnRepeat, spanData, newEmailOrTel);
  } else {
  }
}

regEmailOrTel.addEventListener("input", validEmailOrTel);
regPassword.addEventListener("input", validPassword);
registerForm.addEventListener("input", checkInput);
registerForm.addEventListener("submit", btnRegister);

function second(secondSpan, minuteSpan, btnRepeat, spanData, emailOrTel) {
  spanData.innerText = `${emailOrTel}`;
  let minute = 0;
  let second60 = 60;
  let timer = setInterval(() => {
    if (second60 !== 0) {
      second60 -= 1;
      minuteSpan.innerText = `${minute}`;
      secondSpan.innerText = `${second60}`;
    } else {
      clearInterval(timer);
      btnRepeat.classList.add("reg__send-code_active");
    }
  }, 1000);
}

const arrowBackReg = document.getElementById("back-reg");

arrowBackReg.addEventListener("click", () => {
  const regPage = document.querySelector(".reg__page-1");
  regPage.classList.remove("reg__page-1_active");
  const regPageEmail = document.querySelector(".reg__page-email");
  regPageEmail.classList.remove("reg__page-email_active");
  const regPageTel = document.querySelector(".reg__page-tel");
  regPageTel.classList.remove("reg__page-tel_active");
});

passwordEyes.addEventListener("click", () => {
  const regPassword = document.querySelector(".reg__password");
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
