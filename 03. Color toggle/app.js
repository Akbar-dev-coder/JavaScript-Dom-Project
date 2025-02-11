let toggle = document.querySelector("#switch");

toggle.addEventListener("click", () => {
  toggle.checked === true
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");
});
