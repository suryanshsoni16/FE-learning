const images = [
  "https://picsum.photos/id/237/500/300",
  "https://picsum.photos/id/1015/500/300",
  "https://picsum.photos/id/1025/500/300",
];

const carouselContainer = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function renderCarousel() {
  carouselContainer.innerHTML = "";

  images.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;

    if (index === currentIndex) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }

    carouselContainer.appendChild(img);
  });
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  renderCarousel();
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderCarousel();
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

renderCarousel();

setInterval(next, 3000);
