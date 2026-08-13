/**
 * @file hero.js
 * @description Renders the hero section of the homepage, including the main heading, buttons, and an image.
 * @module components/hero
 */

export function mountHero() {
  const heroHTML = `
    <div class="container-fluid blue-gradient pb-5">
      <div class="row align-items-center">
        <div class="col-md-6 d-flex">
          <div class="container-fluid px-2 p-lg-5">
            <img class="img-fluid rounded" src="assets/icons/spark-blue.webp" alt="Spark Icon" />

            <h1 class="text-right">
              Creating free college application resources for
              <span class="textaccent">Myanmar students</span>
            </h1>

            <div class="container m-1">
              <div>
                <a
                  class="btn btn-primary header-button m-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.gle/72JWLVBTUHxNnoDj9"
                  role="button"
                >
                  Global
                </a>
                <a 
                  class="btn btn-primary accent-button m-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.gle/72JWLVBTUHxNnoDj9"
                  role="button"
                >
                  MEXT ကို ချိတ်
                </a>
              </div>
            </div>

            <br />
          </div>
        </div>

        <div class="col-md-6 d-flex">
          <img
            class="img-fluid rounded mx-auto d-block"
            src="assets/home/chate-transparent.png"
            alt="Chate's slogan - Chate your dreams"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  `;

  const heroContainer = document.getElementById("hero");
  if (heroContainer) {
    heroContainer.innerHTML = heroHTML;
  }
}
