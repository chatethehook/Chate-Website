/**
 * @file how-it-works.js
 * @description Renders the "How It Works" section of the homepage, explaining the mission, vision, and commitment of the "ချိတ်" project.
 * @module components/how-it-works
 */

export function mountHowItWorks() {
  const section = document.getElementById("how-it-works");
  if (!section) return;

  section.innerHTML = `
    <div class="container-fluid pt-5 pb-5 background-gray">
      <div class="justify-content-center d-flex m-3 p-0" style="padding-right: 50px">
        <h1>How <span class="textaccent">ချိတ်</span> Works</h1>
      </div>
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card border-light shadow rounded-5">
              <div class="card-body p-4 pt-3">
                <img src="assets/home/mission.webp" alt="Mission" class="rounded img-fluid p-3">
                <h2 class="m-2 card-title text-center">
                  The <span class="textaccent">“ချိတ်”</span> project aims to connect Myanmar students with the world of international education through peer-to-peer guidance on admissions, scholarships, and financial aid.
                </h2>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card border-light shadow rounded-5">
              <div class="card-body p-4 pt-3">
                <img src="assets/home/vision.webp" alt="Vision" class="rounded img-fluid p-3">
                <h2 class="m-2 card-title text-center">
                  By offering free advising, webinars, articles, and resources, our goal is to create opportunities by helping other Myanmar students navigate the college admissions process.
                </h2>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card border-light shadow rounded-5">
              <div class="card-body p-4 pt-3">
                <img src="assets/home/commitment.webp" alt="Commitment" class="rounded img-fluid p-3">
                <h2 class="m-2 card-title text-center">
                  <span class="textaccent">“ချိတ်”</span> is the fastest-growing Burmese youth organization, operating under its own 
                  <a href="https://docs.google.com/document/d/1FQs_tt6eSS0R5iMg7npOsuZQhxQ49O-8eeiG9_ggiQs/edit?usp=drivesdk" target="_blank">constitution</a>, 
                  powered by dedicated volunteers who take pride in the platform they've built.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
