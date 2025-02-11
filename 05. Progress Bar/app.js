let progress = document.querySelector("#progress");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let circles = document.querySelectorAll(".circle");

let activeIndex = 1;
updateUI(); // Initialize the UI on page load

nextBtn.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > circles.length) {
    activeIndex = circles.length;
  }
  updateUI();
});

prevBtn.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }
  updateUI();
});

function updateUI() {
  circles.forEach((circle, index) => {
    if (index < activeIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  prevBtn.disabled = activeIndex === 1;
  nextBtn.disabled = activeIndex === circles.length;
}
