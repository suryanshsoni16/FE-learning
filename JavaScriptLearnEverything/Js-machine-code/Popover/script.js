const popButton = document.getElementById("popover-btn");
const popContent = document.getElementById("popover-content");

popButton.addEventListener("click", () => {
  popContent.style.display =
    popContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
  if (!popButton.contains(event.target) && !popContent.contains(event.target)) {
    popContent.style.display = "none";
  }
});
