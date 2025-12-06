let buttons = document.querySelector(`#apply-buttons`);

let uwcLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSd8WKvfu84FiuBiL_gFvqC8dsp0lxWudqkr_9KRFNHPTK4TwA/viewform?usp=dialog";

let globalLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4pknYO2KCBWIgbzz2FowlWdgTNbnplDcVZgvetM3VgDMKvQ/viewform?usp=dialog";

let lannSaLink = "https://forms.gle/MH4RNX73NZwHBK1j7";

let applyButtons = `
  <div >
    <a
    class="btn btn-primary accent-button m-1"
    target="_blank"
    href="${uwcLink}"
    role="button"
    >UWC</a
    >
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
    href="${lannSaLink}"
    role="button"
    >Lann Sa</a
    >
  </div>`;

buttons.innerHTML = applyButtons;
