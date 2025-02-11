const divs = document.querySelectorAll(".mydiv");
const body = document.body;

divs.forEach((div) => {
  div.addEventListener("click", () => {
    color = div.textContent;
    console.log(color);
    changeBackground(color);
  });
});

function changeBackground(color) {
  body.className = "";
  // switch (color) {
  //   case "Red":
  //     body.classList.add("Red");
  //     break;
  //   case "Blue":
  //     body.classList.add("Blue");
  //     break;
  //   case "Yellow":
  //     body.classList.add("Yellow");
  //     break;
  //   case "Teal":
  //     body.classList.add("Teal");
  //     break;
  //   case "Purple":
  //     body.classList.add("Purple");
  //     break;
  //   case "Green":
  //     body.classList.add("Green");
  //     break;
  // }
  if (color == "Red") {
    body.classList.add("Red");
  } else if (color == "Blue") {
    body.classList.add("Blue");
  } else if (color == "Yellow") {
    body.classList.add("Yellow");
  } else if (color == "Teal") {
    body.classList.add("Teal");
  } else if (color == "Green") {
    body.classList.add("Green");
  } else if (color == "Purple") {
    body.classList.add("Purple");
  } else {
    body.classList.add("Black");
  }
}
