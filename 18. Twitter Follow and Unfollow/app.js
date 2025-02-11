let body = document.body;
let btns = document.querySelectorAll(".btn");
let theme = document.querySelector(".theme");

theme.addEventListener("click", changeTheme);

function changeTheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    theme.innerText = "Light";
  } else {
    body.className = "light-theme";
    theme.innerText = "Dark";
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.toggle("followed")) {
      btn.innerText = "follow";
    } else {
      btn.innerText = "unfollow";
    }
  });
});
