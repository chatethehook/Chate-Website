/**
 * @file hero.js
 * @description Renders the hero section of the homepage, including the main heading, buttons, and an image.
 * @module components/hero
 */

export function mountHero() {
  const heroContainer = document.getElementById("hero");

  if (!heroContainer) return;

  const heroHTML = `
    <section class="hero">
      <div class="hero__container">
        <div class="row align-items-center g-5">

          <div class="col-12 col-lg-6 order-2 order-lg-1">
            <div class="hero__content">
              <img
                class="hero__spark"
                src="assets/icons/spark-blue.webp"
                alt=""
                aria-hidden="true"
              >

              <h1 class="hero__title">
                Creating free college application resources for
                <span class="hero__highlight">
                  Myanmar students
                </span>
              </h1>

              <p class="hero__description">
                Explore accessible resources and opportunities to help
                Myanmar students navigate their college application journey.
              </p>

              <div class="hero__actions">
                <a
                  class="hero__button hero__button--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.gle/72JWLVBTUHxNnoDj9"
                >
                  Global
                </a>

                <a
                  class="hero__button hero__button--accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.gle/72JWLVBTUHxNnoDj9"
                >
                  MEXT<span class="hero__button-burmese" lang="my">ကို ချိတ်</span>
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6 order-1 order-lg-2">
            <div class="hero__visual">
              <img
                class="hero__image"
                src="assets/home/chate-transparent.png"
                alt="Chate's slogan - Chate your dreams"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `;

  heroContainer.innerHTML = heroHTML;
}
