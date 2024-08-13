document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('carousel-container');

    const mobileCarousel = `
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/nyanlinhtet.webp"
                  alt="Nyan Lin Htet"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Nyan Lin Htet</h2>
                <p class="text-center">
                  <span class="textaccent"
                    >Co-Founder & Admissions Advisor</span
                  >
                  <br />
                  MIT & Stanford '28
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Aung Khant Paing.webp"
                  alt="Aung Khant Paing"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Aung Khant Paing</h2>
                <p class="text-center">
                  <span class="textaccent"
                    >Co-Founder & Admissions Advisor</span
                  >
                  <br />
                  Tufts Univerisity '28
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Wai Yan.webp"
                  alt="Wai Yan Win Aung"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Wai Yan Win Aung</h2>
                <p class="text-center">
                  <span class="textaccent"
                    >Co-Founder & Admissions Advisor</span
                  >
                  <br />
                  Dartmouth College '28
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/yoonwaddyaung.webp"
                  alt="Yoon Waddy Aung"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Yone Waddy Aung</h2>
                <p class="text-center">
                  <span class="textaccent">Admissions Advisor</span>
                  <br />
                  Brown Univerisity '28
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/sainyibhonehtut.webp"
                  alt="Sai Nyi Bhone Htut"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Sai Nyi Bhone Htut</h2>
                <p class="text-center">
                  <span class="textaccent"> Admissions Advisor</span>
                  <br />
                  Swarthmore College '28
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Myat Nandi Kyaw.webp"
                  alt="Myat Nandi Kyaw"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Myat Nandi Kyaw</h2>
                <p class="text-center">
                  <span class="textaccent">Admissions Advisor</span>
                  <br />
                  Mount Holyoke & Union College '28
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Nyan Lin Htet2.webp"
                  alt="Nyan Lin Htet"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Nyan Lin Htet</h2>
                <p class="text-center">
                  <span class="textaccent">Admissions Advisor</span>
                  <br />
                  Gettysburg College '28
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Agga Kyaw.webp"
                  alt="Agga Kyaw"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Agga Kyaw</h2>
                <p class="text-center">
                  <span class="textaccent">Secretary</span>
                  <br />
                  MYLP '24 Youth Participant
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Yoon Ei Ko Ko.webp"
                  alt="Yoon Ei Ko Ko"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Yoon Ei Ko Ko</h2>
                <p class="text-center">
                  <span class="textaccent">Head of Content</span>
                  <br />
                  UWC Mahindra College
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Kyail Nay La.webp"
                  alt="Kyail Nay La"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Kyail Nay La</h2>
                <p class="text-center">
                  <span class="textaccent">Head of Graphics</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Aung Htoo Han.webp"
                  alt="Aung Htoo Han"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Aung Htoo Han</h2>
                <p class="text-center">
                  <span class="textaccent">Public Relations Officer</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Thiha Swe.webp"
                  alt="Thiha Swe"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Thiha Swe</h2>
                <p class="text-center">
                  <span class="textaccent">Page Administrator</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/oattrakyaw.webp"
                  alt="Oattra Kyaw"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Oattra Kyaw</h2>
                <p class="text-center">
                  <span class="textaccent">Website Developer</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/hnincherry.webp"
                  alt="Hnin Cherry"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Hnin Cherry</h2>
                <p class="text-center">
                  <span class="textaccent">UX/UI Designer</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/thusanhtet.webp"
                  alt="Thu San Htet"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Thu San Htet</h2>
                <p class="text-center">
                  <span class="textaccent"
                    >Website Developer & Graphic Designer</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/kyawzinhtun.webp"
                  alt="Kyaw Zin Htun"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Kyaw Zin Tun</h2>
                <p class="text-center">
                  <span class="textaccent">Content Writer</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/linhtetoo.webp"
                  alt="Lin Htet Oo"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Lin Htet Oo</h2>
                <p class="text-center">
                  <span class="textaccent">Content Writer</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Wai Hnin Paing.webp"
                  alt="Wai Hnin Paing"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Wai Hnin Paing</h2>
                <p class="text-center">
                  <span class="textaccent">Content Writer</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/Cho Thar Nwe.webp"
                  alt="Cho Thar Nwe"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Cho Thar Nwe</h2>
                <p class="text-center">
                  <span class="textaccent">Graphic Designer</span>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-12 p-3">
                <img
                  src="media/members/zwekhantaung.webp"
                  alt="Zwe Khant Aung"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Zwe Khant Aung</h2>
                <p class="text-center">
                  <span class="textaccent">Content Translator</span>
                </p>
              </div>
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
              <div class="col-3 p-3">
                <img
                  src="media/members/nyanlinhtet.webp"
                  alt="Nyan Lin Htet"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Nyan Lin Htet</h2>
                <p class="text-center">
                  <span class="textaccent"
                    >Co-Founder & Admissions Advisor</span
                  >
                  <br />
                  MIT & Stanford '28
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Aung Khant Paing.webp"
                  alt="Aung Khant Paing"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Aung Khant Paing</h2>
                <p class="text-center">
                  <span class="textaccent"
                    >Co-Founder & Admissions Advisor</span
                  >
                  <br />
                  Tufts Univerisity '28
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Wai Yan.webp"
                  alt="Wai Yan Win Aung"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Wai Yan Win Aung</h2>
                <p class="text-center">
                  <span class="textaccent"
                    >Co-Founder & Admissions Advisor</span
                  >
                  <br />
                  Dartmouth College '28
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/yoonwaddyaung.webp"
                  alt="Yoon Waddy Aung"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Yone Waddy Aung</h2>
                <p class="text-center">
                  <span class="textaccent">Admissions Advisor</span>
                  <br />
                  Brown Univerisity '28
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              <div class="col-3 p-3">
                <img
                  src="media/members/sainyibhonehtut.webp"
                  alt="Sai Nyi Bhone Htut"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Sai Nyi Bhone Htut</h2>
                <p class="text-center">
                  <span class="textaccent"> Admissions Advisor</span>
                  <br />
                  Swarthmore College '28
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Myat Nandi Kyaw.webp"
                  alt="Myat Nandi Kyaw"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Myat Nandi Kyaw</h2>
                <p class="text-center">
                  <span class="textaccent">Admissions Advisor</span>
                  <br />
                  Mount Holyoke & Union College '28
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Nyan Lin Htet2.webp"
                  alt="Nyan Lin Htet"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Nyan Lin Htet</h2>
                <p class="text-center">
                  <span class="textaccent">Admissions Advisor</span>
                  <br />
                  Gettysburg College '28
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Agga Kyaw.webp"
                  alt="Agga Kyaw"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Agga Kyaw</h2>
                <p class="text-center">
                  <span class="textaccent">Secretary</span>
                  <br />
                  MYLP '24 Youth Participant
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              <div class="col-3 p-3">
                <img
                  src="media/members/Yoon Ei Ko Ko.webp"
                  alt="Yoon Ei Ko Ko"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Yoon Ei Ko Ko</h2>
                <p class="text-center">
                  <span class="textaccent">Head of Content</span>
                  <br />
                  UWC Mahindra College
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Kyail Nay La.webp"
                  alt="Kyail Nay La"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Kyail Nay La</h2>
                <p class="text-center">
                  <span class="textaccent">Head of Graphics</span>
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Aung Htoo Han.webp"
                  alt="Aung Htoo Han"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Aung Htoo Han</h2>
                <p class="text-center">
                  <span class="textaccent">Public Relations Officer</span>
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Thiha Swe.webp"
                  alt="Thiha Swe"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Thiha Swe</h2>
                <p class="text-center">
                  <span class="textaccent">Page Administrator</span>
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              <div class="col-3 p-3">
                <img
                  src="media/members/oattrakyaw.webp"
                  alt="Oattra Kyaw"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Oattra Kyaw</h2>
                <p class="text-center">
                  <span class="textaccent">Website Developer</span>
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/hnincherry.webp"
                  alt="Hnin Cherry"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Hnin Cherry</h2>
                <p class="text-center">
                  <span class="textaccent">UX/UI Designer</span>
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/thusanhtet.webp"
                  alt="Thu San Htet"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Thu San Htet</h2>
                <p class="text-center">
                  <span class="textaccent"
                    >Website Developer & Graphic Designer</span
                  >
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/kyawzinhtun.webp"
                  alt="Kyaw Zin Htun"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Kyaw Zin Tun</h2>
                <p class="text-center">
                  <span class="textaccent">Content Writer</span>
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              <div class="col-3 p-3">
                <img
                  src="media/members/linhtetoo.webp"
                  alt="Lin Htet Oo"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Lin Htet Oo</h2>
                <p class="text-center">
                  <span class="textaccent">Content Writer</span>
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Wai Hnin Paing.webp"
                  alt="Wai Hnin Paing"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Wai Hnin Paing</h2>
                <p class="text-center">
                  <span class="textaccent">Content Writer</span>
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/Cho Thar Nwe.webp"
                  alt="Cho Thar Nwe"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Cho Thar Nwe</h2>
                <p class="text-center">
                  <span class="textaccent">Graphic Designer</span>
                </p>
              </div>
              <div class="col-3 p-3">
                <img
                  src="media/members/zwekhantaung.webp"
                  alt="Zwe Khant Aung"
                  class="rounded img-fluid"
                  style="width: 100%"
                />
                <h2 class="text-center">Zwe Khant Aung</h2>
                <p class="text-center">
                  <span class="textaccent">Content Translator</span>
                </p>
              </div>
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
        const mobile = window.matchMedia('(max-width: 576px)').matches;
        if (mobile) {
            carouselContainer.innerHTML = mobileCarousel;
        } else {
            carouselContainer.innerHTML = desktopCarousel;
        }
    }

    updateCarousel();

    window.addEventListener('resize', updateCarousel);

});