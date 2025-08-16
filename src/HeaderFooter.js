let applyLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSf4pknYO2KCBWIgbzz2FowlWdgTNbnplDcVZgvetM3VgDMKvQ/viewform?usp=dialog";


let socialLinks = `
  <a class="social-media" href="https://www.facebook.com/profile.php?id=61557409119325"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
  <a class="social-media" href="https://www.instagram.com/chate_thehook"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
  <a class="social-media" href="https://www.youtube.com/@Chate_TheHook"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
  <a class="social-media" href="https://t.me/chatethehook"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-telegram" aria-hidden="true"></i></a>
  <a class="social-media" href="https://www.linkedin.com/company/%E1%80%81%E1%80%BB%E1%80%AD%E1%80%90%E1%80%BA-the-hook/"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
`;
class SpecialHeader extends HTMLElement {
    connectedCallback() {
      if (window.location.pathname === "/articles.html") {
      this.innerHTML = `
            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>
            <hr \>
            <nav class="navbar navbar-expand-sm   sticky-top w-100 navbar-transparent p-0">
                <div class="container-fluid m-2">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    ${socialLinks}

                    <div
                        class="collapse navbar-collapse justify-content-center"
                        id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>
                            <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                            <a class="nav-link active" aria-current="page" href="/articles.html"><h3 class= "header-links">Articles</h3></a>
                        </div>
                    </div>
                    <div >
                      <a
                      class="btn btn-primary header-button"
                      target="_blank"
                      href="${applyLink}"
                      role="button"
                      >Apply</a
                      >
                    </div>
                </div>

            </nav>
            `;
        } else if (window.location.pathname === "/events.html") {
            this.innerHTML = `
            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>
            <hr \>
            <nav class="navbar navbar-expand-sm  sticky-top w-100 navbar-transparent p-0">
                <div class="container-fluid m-2">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    ${socialLinks}

                    <div
                        class="collapse navbar-collapse justify-content-center"
                        id="navbarNavAltMarkup"
                        >
                        <div class="navbar-nav">
                        <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>
                        <a class="nav-link active" aria-current="page" href="/events.html"><h3 class= "header-links">Events</h3></a>
                        <a class="nav-link" href="/articles.html"><h3 class= "header-links">Articles</h3></a>

                        </div>
                    </div>
                    <div >
                      <a
                      class="btn btn-primary header-button"
                      target="_blank"
                      href="${applyLink}"
                      role="button"
                      >Apply</a
                      >
                    </div>

                </div>
            </nav>
            `;
        } else if (window.location.pathname === "/") {
            this.innerHTML = `

            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>

            <hr \ />

            <nav class="navbar navbar-expand sticky-top navbar-transparent p-0">
                <div class="container-fluid m-2">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                ${socialLinks}

                <div
                    class="collapse navbar-collapse justify-content-center"
                    id="navbarNavAltMarkup"
                    >
                  <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/"><h3 class= "header-links">Home</h3></a>
                    <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                    <a class="nav-link" href="/articles.html"><h3 class= "header-links">Articles</h3></a>
                  </div>
                </div>
                <div>
                    <a
                    class="btn btn-primary header-button"
                    target="_blank"
                    href="${applyLink}"
                    role="button"
                    >Apply</a
                    >
                </div>
              </div>
            </nav>


            `;
        }
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer">
                <div class="row  pl-5">
                    <div class="col-3 py-5 m-2" >
                        <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
                        <h3 class="text-center"> <span class="textaccent fw-semibold"> Chate </span> Your Dreams </h3>
                        <div class="text-center">
                        ${socialLinks}
                        </div>

                    </div>
                    <div class="col-3 mt-5" >
                        <br \>
                        <h3 class="fw-medium"> Events </h3>
                        <!--
                        <a class="footer-link" target="_self" href="/chatenltinebin.html"><p class="m-0">ချိတ်နဲ့တိုင်ပင်</p></a>
                        --->
                        <a class="footer-link" target="_self" href="/events.html#AboveBeyond"><p class="m-0"> Above & Beyond </p></a>
                        <a class="footer-link" target="_self" href="/events.html#SteppingStone"><p class="m-0"> Stepping Stone </p></a>
                        <a class="footer-link" target="_self" href="/events.html#KyaungShaut"><p class="m-0"> ကျောင်းလျှောက်ကြမယ် </p></a>
                        <a class="footer-link" target="_self" href="/events.html#SuTuPyu"><p class="m-0"> စုတုပြု Series</p></a>

                    </div>
                    <div class="col-3 mt-5" >
                        <br \>
                        <h3 class="fw-medium"> Articles </h3>
                        <a class="footer-link" target="_self" href="/articles.html#FilterOne"><p class="m-0"> College Application (All) </p></a>
                        <a class="footer-link" target="_self" href="/articles.html#FilterTwo"><p class="m-0"> Application Requirements </p></a>
                        <a class="footer-link" target="_self" href="/articles.html#FilterThree"><p class="m-0"> Types of Colleges </p></a
                        <a class="footer-link" target="_self" href="/articles.html#FilterFour"><p class="m-0"> About ချိတ် </p></a>
                        <!-- <a class="footer-link" target="_self" href="/articles.html#FilterFive"><p class="m-0"> Webinar Announcements </p></a> --->
                        <a class="footer-link" target="_self" href="/articles.html#AllArticles"><p class="m-0"> All Articles </p></a>
                    </div>

                    
                </div>
               
                <div class="mx-5 copyright">
                    <p>
                       © 2024 
                       <a href="https://chatethehook.com/" title="The Hook Official Website">ချိတ် - The Hook Official Website</a> 
                       by 
                       <a href="https://chatethehook.com/" title="The Hook">ချိတ် - The Hook</a> 
                       is licensed under 
                       <a href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">
                         CC BY-NC 4.0
                         <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style="height:18px;margin-left:4px;vertical-align:text-bottom;">
                         <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" style="height:18px;margin-left:2px;vertical-align:text-bottom;">
                         <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="NC" style="height:18px;margin-left:2px;vertical-align:text-bottom;">
                       </a>
                    </p>
                 </div>
            </div>
        `;
    }
}
customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);