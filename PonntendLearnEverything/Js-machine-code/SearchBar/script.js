async function searchApi(query) {
  const fetchData = fetch(
    `https://api.github.com/search/repositories?q=${query}`,
  );
  const result = (await fetchData).json();
  return result;
}

const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");
const crossIcon = document.getElementById("crossIcon");

function searchDebounced(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return fn(...args).then((res) => {
        if (res && res.items.length > 0) {
          resultsContainer.innerHTML = "";
          res.items.forEach((item) => {
            const repoElement = document.createElement("div");
            repoElement.style.border = "1px solid #ccc";
            repoElement.style.margin = "10px";
            repoElement.style.padding = "10px";
            repoElement.style.backgroundColor = "#f9f9";

            repoElement.innerHTML = JSON.stringify(item, null, 6);
            resultsContainer.appendChild(repoElement);
          });
        } else {
          resultsContainer.innerHTML = "No results found.";
        }
      });
    }, delay);
  };
}

const debouncedSearch = searchDebounced(searchApi, 500);

searchInput.addEventListener("input", function (event) {
  const query = event.target.value;
  if (query.trim().length > 0) {
    crossIcon.style.display = "block";
  } else {
    crossIcon.style.display = "none";
  }
  debouncedSearch(query);
});

crossIcon.addEventListener("click", function () {
  searchInput.value = "";
  resultsContainer.innerHTML = "Nothing to show";
  crossIcon.style.display = "none";
});
