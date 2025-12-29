const achievements = [
  `<div class="col p-3">
    <img
      src="media/achievements/Swan Tayza Aung.webp"
      alt="Swan Tayza Aung"
      class="rounded img-fluid"
      style="width: 100%"
    />
  </div>`,
  `<div class="col p-3">
    <img
      src="media/achievements/Soe Thway Ko.webp"
      alt="Soe Thway Ko"
      class="rounded img-fluid"
      style="width: 100%"
    />
  </div>`,
  `<div class="col p-3">
    <img
      src="media/achievements/Soe Lin Htet.webp"
      alt="Soe Lin Htet"
      class="rounded img-fluid"
      style="width: 100%"
    />
  </div>`,
  `<div class="col p-3">
    <img
      src="media/achievements/Lin Htet Aung.webp"
      alt="Lin Htet Aung"
      class="rounded img-fluid"
      style="width: 100%"
    />
  </div>`,
  `<div class="col p-3">
    <img
      src="media/achievements/Aung Htoo Han.webp"
      alt="Aung Htoo Han"
      class="rounded img-fluid"
      style="width: 100%"
    />
  </div>`,
  `<div class="col p-3">
    <img
      src="media/achievements/Linn Lett May.webp"
      alt="Linn Lett May"
      class="rounded img-fluid"
      style="width: 100%"
    />
  </div>`,
  `<div class="col p-3">
    <img
      src="media/achievements/Thaw Ye Zay.webp"
      alt="Thaw Ye Zay"
      class="rounded img-fluid"
      style="width: 100%"
    />
  </div>`,
  `<div class="col p-3">
    <img
      src="media/achievements/Kyaw Myo Naing.webp"
      alt="Kyaw Myo Naing"
      class="rounded img-fluid"
      style="width: 100%"
    />
  </div>`,
];
console.log(achievements.length);
document.addEventListener("DOMContentLoaded", function () {
  const achievements_carouselContainer = document.getElementById(
    "achievements-carousel-container",
  );

  const achievements_mobileCarousel = `
    <div id="achievements_carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              ${achievements[0]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${achievements[1]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${achievements[2]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${achievements[3]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${achievements[4]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${achievements[5]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${achievements[6]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${achievements[7]}
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#achievements_carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#achievements_carousel"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    `;

  const achievements_desktopCarousel = `
    <div id="achievements_carousel" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              ${achievements[0]}
              ${achievements[1]}
              ${achievements[2]}

            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              ${achievements[3]}
              ${achievements[4]}
              ${achievements[5]}

            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              ${achievements[6]}
              ${achievements[7]}
              <div class="col p-3">
              </div>
            </div>
          </div>

        </div>

        <a
          class="carousel-control-prev"
          href="#achievements_carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#achievements_carousel"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    `;

  function update_achievements_Carousel() {
    const mobile = window.matchMedia("(max-width: 576px)").matches;
    if (mobile) {
      achievements_carouselContainer.innerHTML = achievements_mobileCarousel;
    } else {
      achievements_carouselContainer.innerHTML = achievements_desktopCarousel;
    }
  }

  update_achievements_Carousel();

  window.addEventListener("resize", update_achievements_Carousel);
});
