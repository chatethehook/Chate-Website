//html elements

let row = document.querySelector(`#row`);

let headerText = document.querySelector(`#header-text`);

//filter buttons

let allArticleButton = document.querySelector(`#allArticle-button`);

let filterOneButton = document.querySelector(`#filterOne-button`);

let filterTwoButton = document.querySelector(`#filterTwo-button`);

let filterThreeButton = document.querySelector(`#filterThree-button`);

let filterFourButton = document.querySelector(`#filterFour-button`);

let filterFiveButton = document.querySelector(`#filterFive-button`);

//more button

let moreButton = document.querySelector(`#moreContent`);

let moreSection = document.querySelector(`#moreSection`);

moreButton.addEventListener(`click`, increaseContent);

//api variables

import BLOGGER_API_KEY from "./bloggerapikey.js";

let key = BLOGGER_API_KEY;

let blogID = `136726928350551179`;

let nextPageToken = ``;

let blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${key}&maxResults=40`;

//content on page

let cards = ``;

let data = [];

let count = 0;

//filters

let filterOne = [`Types of Colleges`, `Application Requirements`];

let filterTwo = [`Application Requirements`];

let filterThree = [`Types of Colleges`];

let filterFour = [`About ချိတ် - The Hook`];

let filterFive = [`Webinar Announcement`];

let desiredContent = [
  filterOne,
  filterTwo,
  filterThree,
  filterFour,
  filterFive,
];

let desiredFilter = 0;

// reset page

function resetPage(event) {
  // Header Text

  if (desiredFilter != -1) {
    headerText.innerHTML = ``;

    for (let i = 0; i < desiredContent[desiredFilter].length; i++) {
      if (i + 1 < desiredContent[desiredFilter].length) {
        headerText.innerHTML += desiredContent[desiredFilter][i] + `, `;
      } else {
        headerText.innerHTML += desiredContent[desiredFilter][i];
      }
    }
  } else {
    headerText.innerHTML = `Articles`;
  }

  cards = ``;

  data = [];

  count = 0;

  blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${key}&maxResults=40`;

  nextPageToken = ``;

  moreButton.disabled = false;

  console.log(`reset`);
}

// populate posts

function populatePage(response) {
  console.log(response.data.items);

  let postCount = response.data.items.length;

  console.log(`postCount:` + postCount);

  let addFactor = 0;

  console.log(`desired filter: ` + desiredFilter);

  // push to local data array

  for (let i = 0; i < postCount; i++) {
    // looping thru posts i

    let added = false;

    let labelsLength = response.data.items[i].labels.length;

    if (desiredFilter != -1) {
      for (let j = 0; j < labelsLength; j++) {
        // looping thru post's labels j

        for (let k = 0; k < desiredContent[desiredFilter].length; k++) {
          // looping thru desired filter's labels k

          let tempLabel = desiredContent[desiredFilter][k];

          //console.log(`tempLabel: ` + tempLabel);

          if (response.data.items[i].labels[j].indexOf(tempLabel) != -1) {
            data.push(response.data.items[i]);

            addFactor++;

            added = true;

            break;
          }
        }

        if (added) {
          break;
        }
      }
    } else {
      data.push(response.data.items[i]);

      addFactor++;
    }
  }

  console.log(`inicount:` + count);

  console.log(`add factor: ` + addFactor);

  //prepping for "more" button

  console.log(`next page token:` + response.data.nextPageToken);

  if (response.data.nextPageToken) {
    nextPageToken = response.data.nextPageToken;

    blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${key}&maxResults=30&pageToken=${nextPageToken}`;
  } else {
    nextPageToken = `end`;

    console.log(`next page token: ` + nextPageToken);

    //moreSection.innerHTML = ``;

    moreButton.disabled = true;
  }

  for (let i = count; i < data.length; i++) {
    let title = `title` + i;

    let date = `date` + i;

    let labels = `labels` + i;

    let link = `link` + i;

    let image = `image` + i;

    let modal = `modal` + i;

    let modalTitle = `modalTitle` + i;

    let modalBody = `modalBody` + i;

    let modaldate = `modaldate` + i;

    let modallabels = `modallabels` + i;

    let cardSkel = `<div class="card border-0 article m-0 mx-1 " style="width: 17rem">

          <img

            src="..."

            class="card-img-top rounded mt-2 mb-0"

            alt="..."

            id="${image}"

          />

        <div class="card-body">

          <h5 class="card-title" id="${title}"></h5>




          <h6 class="card-subtitle mb-2 text-body-secondary" id="${date}"></h6>


          <h6 class="card-subtitle mb-2 text-body-secondary" id="${labels}"></h6>







          <!-- Button trigger modal -->

          <button

            id="${link}"

            type="button"

            class="btn btn-primary"

            data-bs-toggle="modal"

            data-bs-target="#${modal}"

          >

            Read

          </button>



          <!-- Modal -->

          <div

            class="modal fade"

            id="${modal}"

            tabindex="-1"

            aria-labelledby="${modalTitle}"

            aria-hidden="true"

          >

            <div class="modal-dialog modal-xl">

              <div class="modal-content">

                <div class="modal-header">

                  <h1 class="modal-title fs-5" id="${modalTitle}">

                    ${modalTitle}

                  </h1>

                  <button

                    type="button"

                    class="btn-close"

                    data-bs-dismiss="modal"

                    aria-label="Close"

                  ></button>

                </div>

                <span

                  class="fw-semibold m-2 text-body-secondary textaccent"

                  id="${modaldate}"

                >

                  1/1/1

                </span>

                <span

                  class="fw-semibold m-2 mt-0 text-body-secondary"

                  id="${modallabels}"

                >

                  labels

                </span>

                <div id="${modalBody}" class="modal-body">

                  ${modalBody}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

        `;

    cards += cardSkel;
  }

  row.innerHTML = cards;

  for (let i = 0; i < data.length; i++) {
    //doc queries

    let cardTitle = document.querySelector(`#title${i}`);

    let cardDate = document.querySelector(`#date${i}`);

    let cardLabels = document.querySelector(`#labels${i}`);

    let cardImage = document.querySelector(`#image${i}`);

    cardTitle.innerHTML = data[i].title;

    cardDate.innerHTML = data[i].published.substring(0, 10);

    let labels = ``;

    for (let j = 0; j < data[i].labels.length; j++) {
      labels += data[i].labels[j];

      if (j < data[i].labels.length - 1) {
        labels += `, `;
      }
    }

    cardLabels.innerHTML = labels;

    let imgLink = ``;

    /*

    if (data[i].content.indexOf(`.png"`) != -1){

      imgLink = data[i].content.substring(data[i].content.indexOf(`https`),data[i].content.indexOf(`.png"`)+4);

    } else if (data[i].content.indexOf(`.jpg"`) != -1) {

      imgLink = data[i].content.substring(data[i].content.indexOf(`<a href="https`)+9,data[i].content.indexOf(`.jpg"`)+4);

    }

    */

    imgLink = data[i].content.substring(
      data[i].content.indexOf(`https`),
      data[i].content.indexOf(`.jpg"`) + 4,
    );

    //console.log(`image link:` + imgLink);

    cardImage.src = imgLink;

    //MODAL BULLSHIT

    let modalLabel = document.querySelector(`#modalTitle${i}`);

    let modalBody = document.querySelector(`#modalBody${i}`);

    let modalDate = document.querySelector(`#modaldate${i}`);

    let modalLabels = document.querySelector(`#modallabels${i}`);

    modalLabel.innerHTML = data[i].title;

    modalBody.innerHTML = data[i].content;

    modalDate.innerHTML = data[i].published.substring(0, 10);

    let modallabels = ``;

    for (let j = 0; j < data[i].labels.length; j++) {
      modallabels += data[i].labels[j];

      if (j < data[i].labels.length - 1) {
        modallabels += `, `;
      }
    }

    modalLabels.innerHTML = modallabels;
  }

  count += addFactor;

  console.log(`new count:` + count);
}

// increase number of posts shown on page

function increaseContent(event) {
  axios.get(blogUrl).then(populatePage);
}

// changing content as webinar buttons are clicked

function changeURLToAllArticles(event) {
  //event.preventDefault();

  allArticleButton.classList.add(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.remove("clicked");

  //editing url

  window.history.pushState(
    { additionalInformation: "Updated the URL with JS" },
    "All Articles",
    "/articles.html#AllArticles",
  );

  //changing content to desired

  desiredFilter = -1;
}

function changeURLToFilterOne(event) {
  //event.preventDefault();

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.add(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.remove("clicked");

  //editing url

  window.history.pushState(
    { additionalInformation: "Updated the URL with JS" },
    "FilterOne",
    "/articles.html#FilterOne",
  );

  //changing content to desired

  desiredFilter = 0;
}

function changeURLToFilterTwo(event) {
  //event.preventDefault();

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.add("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.remove("clicked");

  //editing url

  window.history.pushState(
    { additionalInformation: "Updated the URL with JS" },
    "FilterTwo",
    "/articles.html#FilterTwo",
  );

  //changing content to desired

  desiredFilter = 1;
}

function changeURLToFilterThree(event) {
  //event.preventDefault();

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.add("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.remove("clicked");

  //editing url

  window.history.pushState(
    { additionalInformation: "Updated the URL with JS" },
    "FilterThree",
    "/articles.html#FilterThree",
  );

  //changing content to desired

  desiredFilter = 2;
}

function changeURLToFilterFour(event) {
  //event.preventDefault();

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.add("clicked");

  filterFiveButton.classList.remove("clicked");

  //editing url

  window.history.pushState(
    { additionalInformation: "Updated the URL with JS" },
    "FilterFour",
    "/articles.html#FilterFour",
  );

  //changing content to desired

  desiredFilter = 3;
}

function changeURLToFilterFive(event) {
  //event.preventDefault();

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.add("clicked");

  //editing url

  window.history.pushState(
    { additionalInformation: "Updated the URL with JS" },
    "FilterFive",
    "/articles.html#FilterFive",
  );

  //changing content to desired

  desiredFilter = 4;
}

// changing content as page reloads

if (window.location.href.indexOf("AllArticles") > -1) {
  console.log(`all articles is true`);

  allArticleButton.classList.add(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.remove("clicked");

  //changing content to desired

  desiredFilter = -1;

  resetPage();
} else if (window.location.href.indexOf("FilterOne") > -1) {
  console.log(`filter one is true`);

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.add(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.remove("clicked");

  //changing content to desired

  desiredFilter = 0;

  resetPage();
} else if (window.location.href.indexOf("FilterTwo") > -1) {
  console.log(`filter Two is true`);

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.add("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.remove("clicked");

  //changing content to desired

  desiredFilter = 1;

  resetPage();
} else if (window.location.href.indexOf("FilterThree") > -1) {
  console.log(`filter Three is true`);

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.add("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.remove("clicked");

  //changing content to desired

  desiredFilter = 2;

  resetPage();
} else if (window.location.href.indexOf("FilterFour") > -1) {
  console.log(`filter Four is true`);

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.add("clicked");

  filterFiveButton.classList.remove("clicked");

  //changing content to desired

  desiredFilter = 3;

  resetPage();
} else if (window.location.href.indexOf("FilterFive") > -1) {
  console.log(`filter Five is true`);

  allArticleButton.classList.remove(`clicked`);

  filterOneButton.classList.remove(`clicked`);

  filterTwoButton.classList.remove("clicked");

  filterThreeButton.classList.remove("clicked");

  filterFourButton.classList.remove("clicked");

  filterFiveButton.classList.add("clicked");

  //changing content to desired

  desiredFilter = 4;

  resetPage();
}

axios.get(blogUrl).then(populatePage);

allArticleButton.addEventListener(`click`, () => {
  changeURLToAllArticles();

  resetPage();

  axios.get(blogUrl).then(populatePage);
});

filterOneButton.addEventListener(`click`, () => {
  changeURLToFilterOne();

  resetPage();

  axios.get(blogUrl).then(populatePage);
});

filterTwoButton.addEventListener(`click`, () => {
  changeURLToFilterTwo();

  resetPage();

  axios.get(blogUrl).then(populatePage);
});

filterThreeButton.addEventListener(`click`, () => {
  changeURLToFilterThree();

  resetPage();

  axios.get(blogUrl).then(populatePage);
});

filterFourButton.addEventListener(`click`, () => {
  changeURLToFilterFour();

  resetPage();

  axios.get(blogUrl).then(populatePage);
});

filterFiveButton.addEventListener(`click`, () => {
  changeURLToFilterFive();

  resetPage();

  axios.get(blogUrl).then(populatePage);
});
