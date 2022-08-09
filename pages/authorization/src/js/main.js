const emailRe = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const telRe = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
const passwordRe = /(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

const authisterForm = document.getElementById("auth-form");
const authEmailOrTel = document.querySelector(".auth__emailOrTel");
const authPassword = document.querySelector(".auth__password");

function validEmailOrTel(e) {
  const authPassword = document.querySelector(".auth__password");
  const forget = document.querySelector(".auth__forget");
  if (emailRe.test(e.target.value) || telRe.test(e.target.value)) {
    authPassword.classList.add("auth__password_active");
    forget.classList.add("auth__forget_active");
  } else {
    authPassword.classList.remove("auth__password_active");
    forget.classList.remove("auth__forget_active");
  }
}

authEmailOrTel.addEventListener("input", validEmailOrTel);

const arrowBackauth = document.getElementById("back-auth");

arrowBackauth.addEventListener("click", () => {
  const authPage = document.querySelector(".auth__page-1");
  authPage.classList.remove("auth__page-1_active");
  const authPageEmail = document.querySelector(".auth__page-email");
  authPageEmail.classList.remove("auth__page-email_active");
  const authPageTel = document.querySelector(".auth__page-tel");
  authPageTel.classList.remove("auth__page-tel_active");
});
