document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".Accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-item-header");
    const body = item.querySelector(".accordion-item-body");
    const icon = item.querySelector(".icon i");

    header.addEventListener("click", () => {
      const isOpen = body.style.display === "block";

      // Close all accordion items
      accordionItems.forEach((accItem) => {
        accItem.querySelector(".accordion-item-body").style.display = "none";
        accItem.querySelector(".icon i").classList.remove("fa-minus");
        accItem.querySelector(".icon i").classList.add("fa-plus");
      });

      // Open the clicked accordion item if it was closed
      if (!isOpen) {
        body.style.display = "block";
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      }
    });
  });
});
