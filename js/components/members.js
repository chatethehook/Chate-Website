/**
 * @file members.js
 * @description Handles the rendering of the members section on the website, including a responsive carousel for displaying team members.
 * @module components/members
 */

import { MEMBERS } from "../data/members/index.js";

export function mountMembers() {
  const section = document.getElementById("members");

  if (!section) return;

  section.innerHTML = `
    <div class="members__container">
      <h2 class="members__heading">
        Our <span class="members__highlight">Team Members</span>
      </h2>
      <div id="members-carousel-container"></div>
    </div>
  `;

  initMembersCarousel();
}

function initMembersCarousel() {
  const container = document.getElementById("members-carousel-container");

  if (!container) return;

  function getItemsPerSlide() {
    const width = window.innerWidth;
    if (width <= 575.98) return 1;
    if (width <= 991.98) return 2;
    if (width <= 1199.98) return 3;
    return 4;
  }

  const renderMemberCard = (member) => `
    <div class="members__col">
      <div class="members__card">
        <img
          src="assets/members/${member.filename}"
          alt="${member.alt}"
          class="members__image"
          loading="lazy"
          decoding="async"
        >
        <h3 class="members__name">${member.name}</h3>
        <p class="members__role">${member.role}</p>
        ${
          member.subtitle
            ? `<p class="members__subtitle">${member.subtitle}</p>`
            : ""
        }
      </div>
    </div>`;

  const renderCarousel = (itemsPerSlide) => {
    let slidesHTML = "";

    for (let i = 0; i < MEMBERS.length; i += itemsPerSlide) {
      const slideItems = MEMBERS.slice(i, i + itemsPerSlide)
        .map(renderMemberCard)
        .join("");

      slidesHTML += `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="members__row">${slideItems}</div>
        </div>`;
    }

    return `
      <div
        id="members-carousel"
        class="carousel slide members__carousel"
        aria-label="Team members"
      >
        <div class="carousel-inner">${slidesHTML}</div>
        <a
          class="carousel-control-prev"
          href="#members-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#members-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>`;
  };

  let currentItemsPerSlide = getItemsPerSlide();
  let carouselInstance = null;

  function updateCarousel() {
    if (carouselInstance) {
      carouselInstance.dispose();
      carouselInstance = null;
    }

    container.innerHTML = renderCarousel(currentItemsPerSlide);

    const carouselEl = document.getElementById("members-carousel");
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
