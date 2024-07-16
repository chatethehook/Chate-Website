class SpecialHeader extends HTMLElement {
    connectedCallback () {
        
        if (window.location.pathname === '/articles.html') {
            this.innerHTML = `
            <img class="logo" src="media/logo-transparent.png" alt="" srcset="">
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
                    <a class="social-media" href="https://www.facebook.com/profile.php?id=61557409119325" 
                    target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
                <a class="social-media" href="https://www.instagram.com/chate_thehook" 
                    target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                    <a class="social-media" href="https://www.youtube.com/@Chate_TheHook" 
                    target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
                
                    <div
                        class="collapse navbar-collapse justify-content-center"
                        id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>

                            <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                        
                        </div>
                    </div>
                    <div >
                    <a class="btn btn-primary header-button" href="https://docs.google.com/forms/d/e/1FAIpQLSctyiEOsy1r3ef4RFfu5SZg48fl0PWcNasSrIIZJ7EZYF9dfQ/viewform?usp=sf_link" role="button">Apply</a>
                    </div>
                </div>
                </div>
            </nav>
            `
        }
        else if (window.location.pathname === '/events.html') {
            this.innerHTML = `
            <img class="logo" src="media/logo-transparent.png" alt="" srcset="">
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
                    <a class="social-media" href="https://www.facebook.com/profile.php?id=61557409119325" 
                        target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
                    <a class="social-media" href="https://www.instagram.com/chate_thehook" 
                        target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                    <a class="social-media" href="https://www.youtube.com/@Chate_TheHook" 
                        target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
                
                    <div
                        class="collapse navbar-collapse justify-content-center"
                        id="navbarNavAltMarkup"
                        >
                        <div class="navbar-nav">
                        <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>

                        <a class="nav-link active" aria-current="page" href="/events.html"><h3 class= "header-links">Events</h3></a>
                        
                        </div>
                    </div>
                    <div >
                        <a class="btn btn-primary header-button" href="https://docs.google.com/forms/d/e/1FAIpQLSctyiEOsy1r3ef4RFfu5SZg48fl0PWcNasSrIIZJ7EZYF9dfQ/viewform?usp=sf_link" role="button">Apply</a>
                    </div>
                
                </div>
            </nav>
            `
        }
        else if (window.location.pathname === '/') {
            this.innerHTML = `
            
            <img class="logo" src="media/logo-transparent.png" alt="" srcset="">
            
            <hr \>
            
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
                    <a class="social-media" href="https://www.facebook.com/profile.php?id=61557409119325" 
                        target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
                    <a class="social-media" href="https://www.instagram.com/chate_thehook" 
                        target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                    <a class="social-media" href="https://www.youtube.com/@Chate_TheHook" 
                        target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
                
                    <div
                        class="collapse navbar-collapse justify-content-center"
                        id="navbarNavAltMarkup"
                        >
                        <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/"><h3 class= "header-links">Home</h3></a>

                        <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                        
                        </div>
                    </div>
                    <div >
                        
                        <a class="btn btn-primary header-button" href="https://docs.google.com/forms/d/e/1FAIpQLSctyiEOsy1r3ef4RFfu5SZg48fl0PWcNasSrIIZJ7EZYF9dfQ/viewform?usp=sf_link" role="button">Apply</a>
                    </div>
                </div>
                </div>
            </nav>
            
        
            `
        }
        
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <img class="logo" src="media/logo-transparent.png" alt="" srcset="" />

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
          <a
            class="social-media"
            href="https://www.facebook.com/profile.php?id=61557409119325"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fa-brands fa-facebook" aria-hidden="true"></i
          ></a>
          <a
            class="social-media"
            href="https://www.instagram.com/chate_thehook"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fa-brands fa-instagram" aria-hidden="true"></i
          ></a>
          <a
            class="social-media"
            href="https://www.youtube.com/@Chate_TheHook"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fa-brands fa-youtube" aria-hidden="true"></i
          ></a>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/"
                ><h3 class="header-links">Home</h3></a
              >

              <a class="nav-link" href="/events.html"
                ><h3 class="header-links">Events</h3></a
              >
            </div>
          </div>
          <div>
            <a
              class="btn btn-primary header-button"
              href="https://docs.google.com/forms/d/e/1FAIpQLSctyiEOsy1r3ef4RFfu5SZg48fl0PWcNasSrIIZJ7EZYF9dfQ/viewform?usp=sf_link"
              role="button"
              >Apply</a
            >
          </div>
        </div>
      </nav>
        `
        
    }
}
customElements.define('special-header',SpecialHeader);
customElements.define('special-footer',SpecialFooter);
