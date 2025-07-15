document.getElementById("togglePassword").addEventListener("change", function () {
  const password = document.getElementById("password");
  password.type = this.checked ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  if (!email) {
    document.getElementById("emailError").textContent = "Please enter your email or username.";
    isValid = false;
  }

  if (!password) {
    document.getElementById("passwordError").textContent = "Please enter your password.";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("loggedInUser", email); // ✅ Save username
    window.location.href = "../index.html"; // ✅ Redirect
  }
});
