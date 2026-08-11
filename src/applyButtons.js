let buttons = document.querySelector(`#apply-buttons`);

let globalLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4pknYO2KCBWIgbzz2FowlWdgTNbnplDcVZgvetM3VgDMKvQ/viewform?usp=dialog";

let transferLink = "https://forms.gle/7J2TaXb9CRUXxvS26";

let chatenltinebinLink =
  "https://newchatenltinebin.chatethehook.com/chatenltinebin.html";

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
    href="${transferLink}"
    role="button"
    >Transfer ကို ချိတ်</a
    >
<a class="btn btn-primary accent-button m-1" target="_blank" rel="noopener noreferrer" href="${chatenltinebinLink}" role="button" >ချိတ်နဲ့တိုင်ပင်</a>
  </div>`;

buttons.innerHTML = applyButtons;
