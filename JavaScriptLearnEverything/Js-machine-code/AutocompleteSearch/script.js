let availableKeywords = [
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "C#",
  "Ruby",
  "Go",
  "Swift",
  "Kotlin",
  "PHP",
];

const resultBox = document.querySelector(".result");
const searchInput = document.getElementById("input-box");

searchInput.addEventListener("input", function () {
  let result = [];
  let userInput = searchInput.value;

  if (userInput.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(userInput.toLowerCase());
    });
    result = result.map((keyword) => {
      return `<li onClick="selectKeyword(this)">${keyword}</li>`;
    });
    resultBox.innerHTML = `<ul>${result.join("")}</ul>`;
  } else {
    resultBox.innerHTML = "";
  }
});

function selectKeyword(element) {
  searchInput.value = element.innerText;
  resultBox.innerHTML = "";
}
