const members = [
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
console.log(members.length);
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById(
    "achievements-carousel-container",
  );

  const mobileCarousel = `
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              ${members[0]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${members[1]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${members[2]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${members[3]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${members[4]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${members[5]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${members[6]}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              ${members[7]}
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    `;

  const desktopCarousel = `
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              ${members[0]}
              ${members[1]}
              ${members[2]}

            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              ${members[3]}
              ${members[4]}
              ${members[5]}

            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              ${members[6]}
              ${members[7]}
              <div class="col p-3">
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
            ${members[8]}
            ${members[9]}

            </div>
          </div>

        </div>

        <a
          class="carousel-control-prev"
          href="#carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    `;

  function updateCarousel() {
    const mobile = window.matchMedia("(max-width: 576px)").matches;
    if (mobile) {
      carouselContainer.innerHTML = mobileCarousel;
    } else {
      carouselContainer.innerHTML = desktopCarousel;
    }
  }

  updateCarousel();

  window.addEventListener("resize", updateCarousel);
});
