let captcha = document.querySelector("#captcha-code");
let reload = document.querySelector("#reload");
let inputField = document.querySelector("#input-text");
let btn = document.querySelector("#btn");
let statusTxt = document.querySelector("#text");

let allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerHTML += randomChar;
  }
}

reload.addEventListener("click", () => {
  captcha.innerHTML = "";
  getCaptcha();
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  statusTxt.style.display = "block";
  let inputVal = inputField.value.split("").join("");
  if (inputVal == captcha.innerText) {
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice, Captcha Matched";
    setTimeout(() => {
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();
    }, 4000);
  } else {
    statusTxt.style.color = "red";
    statusTxt.innerText = "Captcha not matched. Please Try Again Later";
    setTimeout(() => {
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();
    }, 4000);
  }
});

getCaptcha();
