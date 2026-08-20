/**
 * @file how-it-works.js
 * @description Renders the "How It Works" section of the homepage, explaining the mission, vision, and commitment of the "ချိတ်" project.
 * @module components/how-it-works
 */

const CARDS = [
  {
    image: "assets/home/mission.webp",
    alt: "Mission",
    html: `The <span lang="my">"ချိတ်"</span> project aims to connect Myanmar students with the world of international education through peer-to-peer guidance on admissions, scholarships, and financial aid.`,
  },
  {
    image: "assets/home/vision.webp",
    alt: "Vision",
    html: `By offering free advising, webinars, articles, and resources, our goal is to create opportunities by helping other Myanmar students navigate the college admissions process.`,
  },
  {
    image: "assets/home/commitment.webp",
    alt: "Commitment",
    html: `<span lang="my">"ချိတ်"</span> is the fastest-growing Burmese youth organization, operating under its own
      <a
        class="how-it-works__link"
        href="https://docs.google.com/document/d/1FQs_tt6eSS0R5iMg7npOsuZQhxQ49O-8eeiG9_ggiQs/edit?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
      >constitution</a>,
      powered by dedicated volunteers who take pride in the platform they've built.`,
  },
];

function renderCard({ image, alt, html }) {
  return `
    <div class="how-it-works__col">
      <div class="how-it-works__card">
        <img
          class="how-it-works__image"
          src="${image}"
          alt="${alt}"
          loading="lazy"
          decoding="async"
        >
        <p class="how-it-works__text">${html}</p>
      </div>
    </div>
  `;
}

export function mountHowItWorks() {
  const section = document.getElementById("how-it-works");
  if (!section) return;

  section.innerHTML = `
    <div class="how-it-works">
      <div class="how-it-works__container">
        <h2 class="how-it-works__heading">
          How <span lang="my">ချိတ်</span> Works
        </h2>
        <div class="how-it-works__grid">
          ${CARDS.map(renderCard).join("")}
        </div>
      </div>
    </div>
  `;
}
