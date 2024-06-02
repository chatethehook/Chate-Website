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
                    <div
                        class="collapse navbar-collapse justify-content-center"
                        id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>

                            <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                        
                        </div>
                    </div>
                    <div >
                        <button class="header-button"><p class="header-links" >Apply</p></button>
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
                    <button class="header-button"><p class="header-links" >Apply</p></button>
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
                    <button class="header-button"><p class="header-links" >Apply</p></button>
                </div>
                </div>
            </nav>
            
        </div>
            `
        }
        
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <div class="footer">
                <div class="row  pl-5">
                    <div class="col-3 py-5" >
                        <img class="logo" src="media/logo-transparent.png" alt="" srcset="">
                        <h3 class="text-center"> <span class="textaccent fw-semibold"> ချိတ် </span> Your Dreams </h3>
                        <div class="text-center">
                            <a class="social-media" href="https://www.facebook.com/profile.php?id=61557409119325" 
                            target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
                            <a class="social-media" href="https://www.instagram.com/chate_thehook" 
                            target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                        </div>
                        
                    </div>
                    <div class="col-3 mt-5" >
                        <br \> 
                        <h3 class="fw-medium"> Webinars </h3>
                        <p class="m-0"> Upcoming Webinars </p>
                        <p> Past Webinars </p>
                    </div>
                </div>
            </div>
        `
        
    }
}
customElements.define('special-header',SpecialHeader);
customElements.define('special-footer',SpecialFooter);
