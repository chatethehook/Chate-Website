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
    <div class="container-fluid background-gray py-5">
      <div class="justify-content-center p-0 d-flex m-3" style="padding-right: 50px">
        <h1>Our <span class="textaccent">Team Members</span></h1>
      </div>
      <div id="member-carousel-container"></div>
    </div>
  `;

  initMembersCarousel();
}

function initMembersCarousel() {
  const container = document.getElementById("member-carousel-container");
  if (!container) return;

  const isMobile = () => window.matchMedia("(max-width: 576px)").matches;

  const renderMemberCard = (member) => `
    <div class="col p-3">
      <img 
        src="assets/members/${member.filename}" 
        alt="${member.alt}" 
        class="rounded img-fluid" 
        style="width: 100%" 
        loading="lazy" 
        decoding="async" 
      />
      <h2 class="text-center">${member.name}</h2>
      <p class="text-center">
        <span class="textaccent">${member.role}</span>
      </p>
      ${member.subtitle ? `<p class="text-center">${member.subtitle}</p>` : ""}
    </div>`;

  const renderCarousel = (itemsPerSlide) => {
    let slidesHTML = "";

    for (let i = 0; i < MEMBERS.length; i += itemsPerSlide) {
      const slideItems = MEMBERS.slice(i, i + itemsPerSlide)
        .map(renderMemberCard)
        .join("");

      slidesHTML += `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="row row-cols-1 row-cols-sm-4">${slideItems}</div>
        </div>`;
    }

    return `
      <div id="members-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">${slidesHTML}</div>
        <a class="carousel-control-prev" href="#members-carousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#members-carousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>`;
  };

  function updateCarousel() {
    const itemsPerSlide = isMobile() ? 1 : 4;
    container.innerHTML = renderCarousel(itemsPerSlide);
  }

  updateCarousel();
  window.addEventListener("resize", updateCarousel);
}
