document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const username = document.querySelector(".username");
  const useremail = document.querySelector(".useremail");
  const userpassword = document.querySelector(".userpassword");
  const usersnfpwd = document.querySelector(".usersnfpwd");
  const submitButton = document.querySelector(".submit");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Username validation
    if (username.value.trim() === "") {
      document.querySelector(".usernameMessage").textContent =
        "Username is required";
      isValid = false;
    } else {
      document.querySelector(".usernameMessage").textContent = "";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(useremail.value.trim())) {
      document.querySelector(".emailMessage").textContent =
        "Enter a valid email";
      isValid = false;
    } else {
      document.querySelector(".emailMessage").textContent = "";
    }

    // Password validation
    if (userpassword.value.trim().length < 6) {
      document.querySelector(".password1Msg").textContent =
        "Password must be at least 6 characters long";
      isValid = false;
    } else {
      document.querySelector(".password1Msg").textContent = "";
    }

    // Confirm password validation
    if (usersnfpwd.value.trim() !== userpassword.value.trim()) {
      document.querySelector(".password2Msg").textContent =
        "Passwords do not match";
      isValid = false;
    } else {
      document.querySelector(".password2Msg").textContent = "";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
