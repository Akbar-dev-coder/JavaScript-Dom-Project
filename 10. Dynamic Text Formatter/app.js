let input = document.getElementById("input");
let button = document.querySelectorAll("button");
let display = document.getElementById("display");

console.log(button);
input.addEventListener("keyup", () => (display.innerHTML = input.value));

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("t-cap")) {
      display.textContent = display.textContent.toUpperCase();
    } else if (btn.classList.contains("small")) {
      display.textContent = display.textContent.toLowerCase();
    } else if (btn.classList.contains("cap")) {
      display.textContent =
        display.textContent.charAt(0).toUpperCase() +
        display.textContent.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
      display.style.fontWeight =
        display.style.fontWeight === "bold" ? "normal" : "bold";
    } else if (btn.classList.contains("italic")) {
      display.style.fontStyle =
        display.style.fontStyle === "italic" ? "normal" : "italic";
    } else if (btn.classList.contains("under-cap")) {
      display.style.textDecoration =
        display.style.textDecoration === "underline" ? "none" : "underline";
    }
  });
});
