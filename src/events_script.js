let pastContent = `
    
    <div
        class="justify-content-center p-2 d-flex"
        style="padding-right: 50px"
    >
        <h1 class="">
        Past
        <span class="textaccent text-center">Webinars</span>
        </h1>
    </div>
    <div class="row p-2">
        <div class="col-3">
        <iframe
            src="https://www.youtube.com/embed/sxHyH7kSoNU?si=gBx4uXoWJqyNnniA"
        >
        </iframe>
        <h2 class="m-0">
            My Journey from Community College to Columbia University&nbsp;
            <span class="textaccent"
            ><p class="d-inline m-0 text-right">26/05/2024</p></span
            >
        </h2>
        <p class="m-1">"ကျောင်းလျှောက်ကြမယ်" Webinar Series, Episode 4</p>
        <p>Rachel Soe</p>
        </div>
        <div class="col-3">
        <iframe
            src="https://www.youtube.com/embed/YOwYQ56EZaA?si=1nCk3neoXNqL4by9"
        >
        </iframe>
        <h2 class="m-0">
            Misconceptions in College Applications&nbsp;
            <span class="textaccent"
            ><p class="d-inline m-0 text-right">09/05/2024</p></span
            >
        </h2>
        <p class="m-1">"ကျောင်းလျှောက်ကြမယ်" Webinar Series, Episode 3</p>
        <p>Yin Min Thant</p>
        </div>
        <div class="col-3">
        <iframe
            src="https://www.youtube.com/embed/HRfzWAFDMQk?si=Yg7OvPHK8tSN_lju"
        >
        </iframe>
        <h2 class="m-0">
            Why LACs?&nbsp;
            <span class="textaccent"
            ><p class="d-inline m-0 text-right">20/04/2024</p></span
            >
        </h2>
        <p class="m-1">"ကျောင်းလျှောက်ကြမယ်" Webinar Series, Episode 2</p>
        <p>Sai Nyi Bhone Htut, Myat Nadi Kyaw</p>
        </div>
        <div class="col-3">
        <img
            src="media/webinar resources/nlhfirstwebinar.png"
            alt="webinar thumbnail"
            class="img-fluid rounded"
        />
        <h2 class="m-0">
            US College Admissions Overview&nbsp;
            <span class="textaccent"
            ><p class="d-inline m-0 text-right">14/04/2024</p></span
            >
        </h2>
        <p class="m-1">"ကျောင်းလျှောက်ကြမယ်" Webinar Series, Episode 1</p>
        <p>Nyan Lin Htet</p>
        </div>
    </div>
`;
let newContent = `
<div
        class="justify-content-center p-2 d-flex"
        style="padding-right: 50px"
      >
        <h1 class="">
          Upcoming
          <span class="textaccent text-center">Webinars</span>
        </h1>
      </div>
      <div class="row p-2">
        <div class="col-3">
          <img
                        src="media/webinar resources/Zoom_background.png"
                        alt="webinar thumbnail"
                        class="img-fluid rounded pb-2"
                    />
          <h2 class="m-0">
            What Are Top Colleges Looking For?&nbsp;
            <span class="textaccent"
              ><p class="d-inline m-0 text-right">02/06/2024</p></span
            >
          </h2>
          <p class="m-1">"ကျောင်းလျှောက်ကြမယ်" Webinar Series, Episode 5</p>
          <p>Min Thaik Aung Saw</p>
        </div>
      </div>
`;
let allwebButton = document.querySelector(`#allweb-button`);
let newwebButton = document.querySelector(`#newweb-button`);
let pastwebButton = document.querySelector(`#pastweb-button`);
let webinarsection = document.querySelector(`#webinar-panel`);


webinarsection.innerHTML = newContent + pastContent;

// button changes
function changeToAll(event) {
    event.preventDefault();
    
    allwebButton.classList.add(`clicked`);
    newwebButton.classList.remove(`clicked`);
    pastwebButton.classList.remove('clicked');

    webinarsection.innerHTML = newContent + pastContent;
    
}
function changeToNew(event) {
    event.preventDefault();
    
    allwebButton.classList.remove(`clicked`);
    newwebButton.classList.add(`clicked`);
    pastwebButton.classList.remove('clicked');
    
    webinarsection.innerHTML = newContent;

    
}
function changeToPast(event) {
    event.preventDefault();
    
    allwebButton.classList.remove(`clicked`);
    newwebButton.classList.remove(`clicked`);
    pastwebButton.classList.add('clicked');
    
    webinarsection.innerHTML = pastContent;

}

allwebButton.addEventListener(`click`,changeToAll);
newwebButton.addEventListener(`click`,changeToNew);
pastwebButton.addEventListener(`click`,changeToPast);


