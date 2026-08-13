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
  const section = document.getElementById("achievements");
  if (!section) return;

  section.innerHTML = `
    <div class="container-fluid background-gray pt-3">
      <div class="d-flex justify-content-center text-center">
        <h1 class="m-3 p-2">
          Guided by Peers,
          <span class="textaccent">Admitted Worldwide</span>
        </h1>
      </div>
      <div id="achievements-carousel-container"></div>
    </div>
  `;

  initCarousel();
}

function initCarousel() {
  const container = document.getElementById("achievements-carousel-container");
  if (!container) return;

  const isMobile = () => window.matchMedia("(max-width: 576px)").matches;

  const createItem = (item) => `
    <div class="col p-3">
      <img src="assets/achievements/${item.filename}" 
           alt="${item.alt}" 
           class="rounded img-fluid" 
           style="width: 100%" 
           loading="lazy" 
           decoding="async">
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
          <div class="row row-cols-1 row-cols-sm-3">${items}</div>
        </div>`;
    }

    return `
      <div id="achievements-carousel" class="carousel slide">
        <div class="carousel-inner">${slidesHTML}</div>
        <a class="carousel-control-prev" href="#achievements-carousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#achievements-carousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>`;
  };

  let currentIsMobile = isMobile();
  let carouselInstance = null;

  function updateCarousel() {
    if (carouselInstance) {
      carouselInstance.dispose();
      carouselInstance = null;
    }

    container.innerHTML = createCarousel(currentIsMobile ? 1 : 3);

    const carouselEl = document.getElementById("achievements-carousel");
    carouselInstance = new bootstrap.Carousel(carouselEl, {
      interval: 5000,
      ride: "carousel",
      touch: true,
    });
  }

  function handleResize() {
    const nowMobile = isMobile();
    if (nowMobile !== currentIsMobile) {
      currentIsMobile = nowMobile;
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
