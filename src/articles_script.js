
//html elements
let row = document.querySelector(`#row`)
//more
let moreButton = document.querySelector(`#moreContent`);
let moreSection = document.querySelector(`#moreSection`);
moreButton.addEventListener(`click`,increaseContent);

//api variables
import BLOGGER_API_KEY from "./bloggerapikey.js";
let key = BLOGGER_API_KEY;


let blogID = `136726928350551179`;
let nextPageToken = ``;
let blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${key}&maxResults=32`;

//content on page
let cards = ``;
let data = [];
let count = 0;
function increaseContent (event) {

  axios.get(blogUrl).then(populatePage);
  
}


function populatePage (response) {
  console.log(response.data.items);

  let tempCount = response.data.items.length;
  // push to local data array
  for (let i = 0; i< tempCount ; i++){
    data.push(response.data.items[i]);
  }
  console.log(count);
  console.log(tempCount);

  //prepping for "more" button
  if (response.data.nextPageToken != null ){
    console.log(`next page token:` + response.data.nextPageToken);
    nextPageToken = response.data.nextPageToken;
    blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${key}&maxResults=8&pageToken=${nextPageToken}`;
  } else {
    nextPageToken = `end`;
    moreSection.innerHTML = ``;
  }
  
    for (let i = count; i< data.length; i++) {
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
        `<div class="card border-light article m-0 mx-auto" style="width: 18rem">
          <img
            src="..."
            class="card-img-top rounded mt-2 mb-0"
            alt="..."
            id="${image}"
          />
        <div class="card-body">
          <h5 class="card-title" id="${title}"></h5>

          <h6 class="card-subtitle mb-2 text-body-secondary" id="${date}">
            
          </h6>
          <h6 class="card-subtitle mb-2 text-body-secondary" id="${labels}">
            
          </h6>

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
                  ${modalBody} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
      ;
      cards += cardSkel;
    }
    
    row.innerHTML = cards;
  
  
  
  for (let i = 0; i < data.length; i++) {
    //doc queries
    let cardTitle = document.querySelector(`#title${i}`)
    let cardDate = document.querySelector(`#date${i}`);
    let cardLabels = document.querySelector(`#labels${i}`);
    let cardImage = document.querySelector(`#image${i}`)
    cardTitle.innerHTML = data[i].title;
    cardDate.innerHTML = data[i].published.substring(0,10);
    let labels = ``;
    for (let j = 0; j < data[i].labels.length; j++) {
      labels += data[i].labels[j];
      if (j < data[i].labels.length -1) {
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
   
    imgLink= data[i].content.substring(data[i].content.indexOf(`https`), data[i].content.indexOf(`.jpg"`)+4);
    console.log(`image link:` + imgLink);

    cardImage.src = imgLink;

    //MODAL BULLSHIT
    let modalLabel = document.querySelector(`#modalTitle${i}`);
    let modalBody = document.querySelector(`#modalBody${i}`);
    let modalDate = document.querySelector(`#modaldate${i}`);
    let modalLabels = document.querySelector(`#modallabels${i}`);

    modalLabel.innerHTML = data[i].title;
    modalBody.innerHTML = data[i].content;
    modalDate.innerHTML = data[i].published.substring(0,10);
    let modallabels = ``;
    for (let j = 0; j < data[i].labels.length; j++) {
      modallabels += data[i].labels[j];
      if (j < data[i].labels.length -1) {
        modallabels += `, `;
      }
    }
    modalLabels.innerHTML = modallabels;

  }

  count += tempCount;
}


axios.get(blogUrl).then(populatePage);