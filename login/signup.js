// website/login/signup.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const password = document.getElementById("password")?.value.trim() || "";
    const confirmPassword = document.getElementById("confirmPassword")?.value.trim() || "";

    let isValid = true;

    // Validate name
    if (!name) {
      document.getElementById("nameError").textContent = "Please enter your name.";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      document.getElementById("emailError").textContent = "Please enter your email.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      isValid = false;
    }

    // Validate password
    if (!password) {
      document.getElementById("passwordError").textContent = "Please create a password.";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
      isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
      document.getElementById("confirmError").textContent = "Please confirm your password.";
      isValid = false;
    } else if (confirmPassword !== password) {
      document.getElementById("confirmError").textContent = "Passwords do not match.";
      isValid = false;
    }

    // If all good
    if (isValid) {
      alert("Sign-up successful! (simulated)");
      console.log("Signup data:", { name, email, password });
      // Optional redirect to login:
      // window.location.href = "login.html";
    }
  });
});
