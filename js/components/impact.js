/**
 * @file impact.js
 * @description Renders the impact section of the homepage, showcasing the organization's achievements, statistics, and a YouTube interview.
 * @module components/impact
 */

export function mountImpact() {
  const section = document.getElementById("impact");
  if (!section) return;

  section.innerHTML = `
    <div class="container-fluid background-blue">
      <div class="row m-0 p-2 justify-content-center">
        <div class="justify-content-center p-0 pt-4 d-flex m-3" style="padding-right: 50px">
          <h1 class="textwhite">An <span class="textwhite badge bg-warning text-wrap fs-2">Impactful</span> Organization</h1>
        </div>

        <div class="col-12 col-md-6 mt-3 pt-4">
          <iframe
                        src="https://www.youtube.com/embed/u5jjnT3j17M?si=fm_GEqR6KZpiN68b"
                        class="responsive-iframe"
                        title="YouTube video player"
                        frameborder="5"
                        style="width: 100%; height: 400px"
                        allow="
                            accelerometer;
                            autoplay;
                            clipboard-write;
                            encrypted-media;
                            gyroscope;
                            picture-in-picture;
                            web-share;
                        "
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    >
                    </iframe>
          <p class="text-center textwhite fw-bold mt-2">Interview with Voice of America (VOA) from August 2024</p>
        </div>

        <div class="col-12 col-md-6 p-2">
          <div class="row g-3 justify-content-center">
            <div class="col-sm m-3 text-center">
              <div class="card gray-blue-gradient border-light shadow rounded-5">
                <div class="card-body p-4">
                  <h1 class="m-3 card-title textwhite fs-2"><span class="textorange fs-1">$4M+ </span><br>Scholarships</h1>
                </div>
              </div>
            </div>
            <div class="col-sm m-3 text-center">
              <div class="card gray-blue-gradient border-light shadow rounded-5">
                <div class="card-body p-4">
                  <h1 class="m-3 card-title textwhite fs-2"><span class="textorange fs-1">32K+</span><br>Followers</h1>
                </div>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col-sm m-3 text-center">
              <div class="card gray-blue-gradient border-light shadow rounded-5">
                <div class="card-body p-4">
                  <h1 class="m-3 card-title textwhite fs-2"><span class="textorange fs-1">60+</span><br>Volunteers</h1>
                </div>
              </div>
            </div>
            <div class="col-sm m-3 text-center">
              <div class="card gray-blue-gradient border-light shadow rounded-5">
                <div class="card-body p-4">
                  <h1 class="m-3 card-title textwhite fs-2"><span class="textorange fs-1">40+</span><br>Webinars</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
