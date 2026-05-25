const accordionItems = document.querySelectorAll(".accordion-item");
console.log("Accordion Items:", accordionItems);

accordionItems.forEach((item, index) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    collapsezRemaining(index);
  });
});

function collapsezRemaining(index) {
  accordionItems.forEach((item, i) => {
    if (i !== index) {
      const content = item.querySelector(".accordion-content");
      content.style.display = "none";
    }
  });
}
