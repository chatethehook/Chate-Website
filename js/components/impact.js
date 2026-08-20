/**
 * @file impact.js
 * @description Renders the impact section of the homepage, showcasing the organization's achievements, statistics, and a YouTube interview.
 * @module components/impact
 */

const STATS = [
  { value: "$4M+", label: "Scholarships" },
  { value: "32K+", label: "Followers" },
  { value: "60+", label: "Volunteers" },
  { value: "40+", label: "Webinars" },
];

function renderStat({ value, label }) {
  return `
    <div class="impact__stat">
      <span class="impact__stat-value">${value}</span>
      <span class="impact__stat-label">${label}</span>
    </div>
  `;
}

export function mountImpact() {
  const section = document.getElementById("impact");
  if (!section) return;

  section.innerHTML = `
    <div class="impact__container">
      <h2 class="impact__heading">
        An <span class="impact__highlight">Impactful</span> Organization
      </h2>

      <div class="impact__grid">
        <div class="impact__video">
          <div class="impact__video-frame">
            <iframe
              src="https://www.youtube.com/embed/u5jjnT3j17M?si=fm_GEqR6KZpiN68b"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
          <p class="impact__video-caption">
            Interview with Voice of America (VOA) from August 2024
          </p>
        </div>

        <div class="impact__stats">
          ${STATS.map(renderStat).join("")}
        </div>
      </div>
    </div>
  `;
}
