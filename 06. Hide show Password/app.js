const input = document.querySelector("input");
const eye = document.querySelector(".fa-eye");

eye.addEventListener("click", () => {
  if (input.type === "text") {
    input.type = "password";
  } else {
    input.type = "text";
  }
});
