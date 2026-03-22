let buttons = document.querySelector(`#apply-buttons`);

let globalLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4pknYO2KCBWIgbzz2FowlWdgTNbnplDcVZgvetM3VgDMKvQ/viewform?usp=dialog";

let mextLink = "https://forms.gle/72JWLVBTUHxNnoDj9";

let applyButtons = `
  <div >
    <a
    class="btn btn-primary header-button m-1"
    target="_blank"
    href="${globalLink}"
    role="button"
    >Global</a
    >
    <a
    class="btn btn-primary accent-button m-1"
    target="_blank"
    href="${mextLink}"
    role="button"
    >MEXT ကို ချိတ်</a
    >

  </div>`;

buttons.innerHTML = applyButtons;
