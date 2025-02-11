// Get DOM elements
const signupBtn = document.getElementById("signup");
const modal = document.getElementById("modals");
const closeBtn = document.getElementById("close");

// Show modal when Sign Up button is clicked
signupBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Hide modal when close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide modal when clicking outside the modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
