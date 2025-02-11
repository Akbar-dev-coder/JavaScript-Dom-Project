// app.js

document.addEventListener("DOMContentLoaded", function () {
  const selectField = document.querySelector(".selectField");
  const selectText = document.getElementById("selectText");
  const arrowIcon = document.getElementById("arrowIcon");
  const list = document.getElementById("list");
  const options = document.querySelectorAll(".options");

  // Toggle the dropdown list when the select field is clicked
  selectField.addEventListener("click", function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  });

  // Handle option selection
  options.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedText = option.querySelector("p").textContent;
      selectText.textContent = selectedText;
      list.classList.add("hide");
      arrowIcon.classList.remove("rotate");
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", function (event) {
    if (!selectField.contains(event.target) && !list.contains(event.target)) {
      list.classList.add("hide");
      arrowIcon.classList.remove("rotate");
    }
  });
});
