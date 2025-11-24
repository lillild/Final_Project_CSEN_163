const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signInFormBtn = document.getElementById("signIn");
const signUpFormBtn = document.getElementById("signUpFormBtn");

// Toggle panels
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

// Sign up completed
if (signUpFormBtn) {
  signUpFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signUpFormBtn.classList.add("success");
    signUpFormBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    signUpFormBtn.disabled = true;
  });
}

// 🔥 Sign in -> go to landing.html
if (signInFormBtn) {
  signInFormBtn.addEventListener("click", (e) => {
    e.preventDefault(); // stop form from reloading login.html
    console.log("Login clicked – going to landing.html");
    window.location.href = "landing.html";
  });
}
