const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signInFormBtn = document.getElementById("signIn");
const signUpFormBtn = document.getElementById("signUpFormBtn");

if (registerBtn && container) {
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });
}

if (loginBtn && container) {
  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
}

if (signUpFormBtn) {
  signUpFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signUpFormBtn.classList.add("success");
    signUpFormBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    signUpFormBtn.disabled = true;
  });
}

if (signInFormBtn) {
  signInFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Login clicked – going to landing.html");
    window.location.href = "landing.html";
  });
}
