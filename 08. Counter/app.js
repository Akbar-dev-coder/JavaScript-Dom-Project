let countEl = document.getElementById("count");
let incrementBtn = document.getElementById("inc-btn");
let saveBtn = document.getElementById("save-btn");
let saveDisplay = document.getElementById("save");

let count = 0;
incrementBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
  if (count === 0) return;
  saveDisplay.textContent += (saveDisplay.textContent ? ", " : "") + count;
  countEl.textContent = 0;
  count = 0;
});
