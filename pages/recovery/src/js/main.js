const emailRe = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const telRe = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
const passwordRe = /(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

const recoveryisterForm = document.getElementById("recovery-form");
const recoveryEmailOrTel = document.querySelector(".recovery__emailOrTel");
const recoveryPassword = document.querySelector(".recovery__password");

function validEmailOrTel(e) {
  const recoveryBtn = document.getElementById("recovery-btn");
  const emailOrTelLabel = document.querySelector(".emailOrTelLabel");

  if (emailRe.test(e.target.value) || telRe.test(e.target.value)) {
    recoveryBtn.classList.add("recovery__btn_active");
    recoveryisterForm.addEventListener("submit", btnrecoveryister);
    emailOrTelLabel.classList.add("verified");
  } else {
    emailOrTelLabel.classList.remove("verified");
    recoveryBtn.classList.remove("recovery__btn_active");
  }
}
function btnrecoveryister(e) {
  e.preventDefault(e);
  const emailOrTel = e.target.children[0].children[0].value;
  const recoveryPage = document.querySelector(".recovery__page-1");
  recoveryPage.classList.add("recovery__page-1_active");
  if (emailRe.test(emailOrTel)) {
    const recoveryPageEmail = document.querySelector(".recovery__page-email");
    recoveryPageEmail.classList.add("recovery__page-email_active");
    const minuteSpan = document.getElementById("span-minute-1");
    const secondSpan = document.getElementById("span-second-1");
    const spanData = document.getElementById("span-email");
    const btnRepeat = document.getElementById("send-emal");
    second(secondSpan, minuteSpan, btnRepeat, spanData, emailOrTel);
  } else if (telRe.test(emailOrTel)) {
    const recoveryPageTel = document.querySelector(".recovery__page-tel");
    recoveryPageTel.classList.add("recovery__page-tel_active");
    const minuteSpan = document.getElementById("span-minute-2");
    const secondSpan = document.getElementById("span-second-2");
    const spanData = document.getElementById("span-tel");
    const btnRepeat = document.getElementById("send-tel");
    const newEmailOrTel = emailOrTel.slice(0, 5) + "***" + emailOrTel.slice(emailOrTel.length - 4, emailOrTel.length);
    second(secondSpan, minuteSpan, btnRepeat, spanData, newEmailOrTel);
  } else {
  }
}

recoveryEmailOrTel.addEventListener("input", validEmailOrTel);

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
      btnRepeat.classList.add("recovery__send-code_active");
    }
  }, 1000);
}

const arrowBackrecovery = document.querySelectorAll(".back-recovery");

arrowBackrecovery.forEach((el) => {
  el.addEventListener("click", () => {
    const recoveryPage = document.querySelector(".recovery__page-1");
    recoveryPage.classList.remove("recovery__page-1_active");
    const recoveryPageEmail = document.querySelector(".recovery__page-email");
    recoveryPageEmail.classList.remove("recovery__page-email_active");
    const recoveryPageTel = document.querySelector(".recovery__page-tel");
    recoveryPageTel.classList.remove("recovery__page-tel_active");
  });
});
