
//html elements
let row = document.querySelector(`#row`)
//more
let moreButton = document.querySelector(`#moreContent`);
moreButton.addEventListener(`click`,increaseContent);

//api variables
let key = `AIzaSyCJn0ZPR1n0Eqh4xWzTkL6GUE2qpjEWNwU`;
let blogID = `1691183849438288523`;
let blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${key}`;

//total content on page
let total = 3;

function increaseContent (event) {
  total += 3;
  axios.get(blogUrl).then(populatePage);

}



function populatePage (response) {
  console.log(response.data.items);
  let count = response.data.items.length;
  let cards = ``;
  if (total <= count) {
    for (let i = 0; i< total; i++) {
      
      let title = `title`+i;
      let date = `date`+i;
      let labels = `labels`+i;
      let link = `link`+i;
      let image = `image`+i;
      let modal = `modal`+i;
      let modalTitle = `modalTitle`+i;
      let modalBody = `modalBody` + i;
      let modaldate = `modaldate`+i;
      let modallabels = `modallabels`+i;
      let cardSkel = 
        `<div class="card m-2" style="width: 18rem">
        <img
          src="..."
          class="card-img-top rounded mt-2 mb-0"
          alt="..."
          id="${image}"
        />
        <div class="card-body">
          <h5 class="card-title" id="${title}">title</h5>

          <h6 class="card-subtitle mb-2 text-body-secondary" id="${date}">
            1/1/1
          </h6>
          <h6 class="card-subtitle mb-2 text-body-secondary" id="${labels}">
            labels
          </h6>

          <!-- Button trigger modal -->
          <button
            id="${link}"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#${modal}"
          >
            Launch demo modal
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
                    ${modalTitle} CHANGE LATER
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <span
                  class="fw-semibold m-2 text-body-secondary"
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
                  ${modalBody} CHANGE LATER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
      ;
      cards += cardSkel;
      
      row.innerHTML = cards;
    }
  } else if ((total - count) > 0) {
    for (let i = 0; i< count; i++) {
      let title = `title`+i;
      let date = `date`+i;
      let link = `link`+i;
      let labels = `labels`+i;
      let image = `image`+i;
      let modal = `modal`+i;
      let modalTitle = `modalTitle`+i;
      let modalBody = `modalBody` + i;
      let modaldate = `modaldate`+i;
      let modallabels = `modallabels`+i;
      let cardSkel = 
        `<div class="card m-2" style="width: 18rem">
        <img
          src="..."
          class="card-img-top rounded mt-2 mb-0"
          alt="..."
          id="${image}"
        />
        <div class="card-body">
          <h5 class="card-title" id="${title}">title</h5>

          <h6 class="card-subtitle mb-2 text-body-secondary" id="${date}">
            1/1/1
          </h6>
          <h6 class="card-subtitle mb-2 text-body-secondary" id="${labels}">
            labels
          </h6>

          <!-- Button trigger modal -->
          <button
            id="${link}"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#${modal}"
          >
            Launch demo modal
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
                    ${modalTitle} CHANGE LATER
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <span
                  class="fw-semibold m-2 text-body-secondary"
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
                  ${modalBody} CHANGE LATER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
      ;
      cards += cardSkel;
      
      row.innerHTML = cards;
    }
  }
  
  
  for (let i = 0; i < count; i++) {
    //doc queries
    let cardTitle = document.querySelector(`#title${i}`)
    let cardDate = document.querySelector(`#date${i}`);
    let cardLabels = document.querySelector(`#labels${i}`);
    let cardImage = document.querySelector(`#image${i}`)
    cardTitle.innerHTML = response.data.items[i].title;
    cardDate.innerHTML = response.data.items[i].published.substring(0,10);
    let labels = ``;
    for (let j = 0; j < response.data.items[i].labels.length; j++) {
      labels += response.data.items[i].labels[j];
      if (j < response.data.items[i].labels.length -1) {
        labels += `, `;
      }
    }
    cardLabels.innerHTML = labels;
    let imgLink = ``;

    if (response.data.items[i].content.indexOf(`png`) != -1){
      imgLink = response.data.items[i].content.substring(response.data.items[i].content.indexOf(`https`),response.data.items[i].content.indexOf(`png`)+3);
    } else if (response.data.items[i].content.indexOf(`jpg`) != -1) {
      imgLink = response.data.items[i].content.substring(response.data.items[i].content.indexOf(`https`),response.data.items[i].content.indexOf(`jpg`)+3);
    } else if (response.data.items[i].content.indexOf(`jpeg`) != -1) {
      imgLink = response.data.items[i].content.substring(response.data.items[i].content.indexOf(`https`),response.data.items[i].content.indexOf(`jpg`)+4);
    }
    cardImage.src = imgLink;

    //MODAL BULLSHIT
    let modalLabel = document.querySelector(`#modalTitle${i}`);
    let modalBody = document.querySelector(`#modalBody${i}`);
    let modalDate = document.querySelector(`#modaldate${i}`);
    let modalLabels = document.querySelector(`#modallabels${i}`);

    modalLabel.innerHTML = response.data.items[i].title;
    modalBody.innerHTML = response.data.items[i].content;
    modalDate.innerHTML = response.data.items[i].published.substring(0,10);
    let modallabels = ``;
    for (let j = 0; j < response.data.items[i].labels.length; j++) {
      modallabels += response.data.items[i].labels[j];
      if (j < response.data.items[i].labels.length -1) {
        modallabels += `, `;
      }
    }
    modalLabels.innerHTML = modallabels;

  }
  
  
  
}


axios.get(blogUrl).then(populatePage);