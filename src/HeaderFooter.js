alert(window.location.pathname)
class SpecialHeader extends HTMLElement {
    connectedCallback () {
        
        if (window.location.pathway === '/articles.html') {
            this.innerHTML = `
            <nav class="navbar navbar-expand-sm bg-body sticky-top">
                <div class="container-fluid">
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
                <div
                    class="collapse navbar-collapse justify-content-center"
                    id="navbarNavAltMarkup"
                >
                    <div class="navbar-nav">
                    <a class="nav-link" href="/">Home</a>
                    <a class="nav-link active" aria-current="page" href="/articles.html">Articles</a>

                    <a class="nav-link" href="/events.html">Events</a>
                    
                    </div>
                </div>
                </div>
            </nav>
            `
        }
        else if (window.location.pathway === '/events.html') {
            this.innerHTML = `
            <nav class="navbar navbar-expand-sm bg-body sticky-top">
                <div class="container-fluid">
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
                <div
                    class="collapse navbar-collapse justify-content-center"
                    id="navbarNavAltMarkup"
                >
                    <div class="navbar-nav">
                    <a class="nav-link" href="/">Home</a>
                    <a class="nav-link" href="/articles.html">Articles</a>

                    <a class="nav-link active" aria-current="page" href="/events.html">Events</a>
                    
                    </div>
                </div>
                </div>
            </nav>
            `
        }
        else if (window.location.pathname === '/') {
            this.innerHTML = `
            <nav class="navbar navbar-expand-sm bg-body sticky-top">
                <div class="container-fluid">
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
                <div
                    class="collapse navbar-collapse justify-content-center"
                    id="navbarNavAltMarkup"
                >
                    <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="/articles.html">Articles</a>

                    <a class="nav-link" href="/events.html">Events</a>
                    
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
            <div class="footer">
                <br />
                <p>
                    <a
                        class="primary"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        >Chate</a
                    >
                    source code
                    <a
                        href="https://github.com/salamijason/chate-website"
                        target="_blank"
                        rel="noopener noreferrer"
                        >github</a
                    >
                </p>
            </div>
        `
        
    }
}
customElements.define('special-header',SpecialHeader);
customElements.define('special-footer',SpecialFooter);
