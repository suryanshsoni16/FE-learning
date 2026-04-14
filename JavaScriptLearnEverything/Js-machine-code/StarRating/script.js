let stars = document.getElementsByClassName("star");
let selected = -1;

let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
  selected = -1;
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.color = "#ccc";
  }
});

for (let i = 0; i < stars.length; i++) {
  // HOVER
  stars[i].addEventListener("mouseover", function () {
    for (let j = 0; j < stars.length; j++) {
      if (j <= i) {
        stars[j].style.color = "gold";
      } else {
        stars[j].style.color = "#ccc";
      }
    }
  });

  // MOUSE OUT → restore clicked state
  stars[i].addEventListener("mouseout", function () {
    for (let j = 0; j < stars.length; j++) {
      if (j <= selected) {
        stars[j].style.color = "gold";
      } else {
        stars[j].style.color = "#ccc";
      }
    }
  });

  // CLICK → save rating
  stars[i].addEventListener("click", function () {
    selected = i;
  });
}
