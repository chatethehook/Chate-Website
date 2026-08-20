/**
 * @file achievements.js
 * @description Renders the achievements section, showcasing individuals who have been guided by peers and admitted worldwide.
 * @module components/achievements
 */

const achievementsData = [
  { filename: "mya-thet-hmue.webp", alt: "Mya Thet Hmue" },
  { filename: "kaung-pyae-htet.webp", alt: "Kaung Pyae Htet" },
  { filename: "thae-nandar-su.webp", alt: "Thae Nandar Su" },
  { filename: "aung-khant-paing.webp", alt: "Aung Khant Paing" },
  { filename: "shoon-lai-paing.webp", alt: "Shoon Lai Paing" },
  { filename: "swan-htet-nay-khaing.webp", alt: "Swan Htet Nay Khaing" },
  { filename: "swan-tayza-aung.webp", alt: "Swan Tayza Aung" },
  { filename: "soe-thway-ko.webp", alt: "Soe Thway Ko" },
  { filename: "soe-lin-htet.webp", alt: "Soe Lin Htet" },
  { filename: "lin-htet-aung.webp", alt: "Lin Htet Aung" },
  { filename: "aung-htoo-han.webp", alt: "Aung Htoo Han" },
  { filename: "linn-lett-may.webp", alt: "Linn Lett May" },
  { filename: "thaw-ye-zay.webp", alt: "Thaw Ye Zay" },
  { filename: "kyaw-myo-naing.webp", alt: "Kyaw Myo Naing" },
];

export function mountAchievements() {
  const achievementsContainer = document.getElementById("achievements");

  if (!achievementsContainer) return;

  achievementsContainer.innerHTML = `
    <div class="achievements__container">
      <h2 class="achievements__heading">
        Guided by Peers,
        <span class="achievements__highlight">Admitted Worldwide</span>
      </h2>
      <div id="achievements-carousel-container"></div>
    </div>
  `;

  initCarousel();
}

function initCarousel() {
  const achievementsCarouselContainer = document.getElementById(
    "achievements-carousel-container",
  );

  if (!achievementsCarouselContainer) return;

  const createItem = (item) => `
    <div class="achievements__col">
      <img
        src="assets/achievements/${item.filename}"
        alt="${item.alt}"
        class="achievements__image"
        loading="lazy"
        decoding="async"
      >
    </div>`;

  const createCarousel = (itemsPerSlide) => {
    let slidesHTML = "";

    for (let i = 0; i < achievementsData.length; i += itemsPerSlide) {
      const items = achievementsData
        .slice(i, i + itemsPerSlide)
        .map(createItem)
        .join("");

      slidesHTML += `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="achievements__row">${items}</div>
        </div>`;
    }

    return `
      <div
        id="achievements-carousel"
        class="carousel slide achievements__carousel"
        aria-label="Student achievements"
      >
        <div class="carousel-inner">${slidesHTML}</div>
        <a
          class="carousel-control-prev"
          href="#achievements-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#achievements-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>`;
  };

  function getItemsPerSlide() {
    const width = window.innerWidth;
    if (width <= 575.98) return 1;
    if (width <= 991.98) return 2;
    return 3;
  }

  let currentItemsPerSlide = getItemsPerSlide();
  let carouselInstance = null;

  function updateCarousel() {
    if (carouselInstance) {
      carouselInstance.dispose(); // to clean up previous carousel
      carouselInstance = null;
    }

    achievementsCarouselContainer.innerHTML =
      createCarousel(currentItemsPerSlide);

    const carouselEl = document.getElementById("achievements-carousel");
    carouselInstance = new bootstrap.Carousel(carouselEl, {
      interval: 5000,
      ride: "carousel",
      touch: true,
    });
  }

  function handleResize() {
    const nowItemsPerSlide = getItemsPerSlide();
    if (nowItemsPerSlide !== currentItemsPerSlide) {
      currentItemsPerSlide = nowItemsPerSlide;
      updateCarousel();
    }
  }

  updateCarousel();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 200);
  });
}
