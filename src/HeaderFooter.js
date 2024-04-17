class SpecialHeader extends HTMLElement {
    ConnectedCallBack () {
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
class SpecialFooter extends HTMLElement {
    ConnectedCallBack () {
        this.innerHTML = `
        `
        
    }
}

customElements.define('special-header',SpecialHeader);
customElements.define('special-footer',SpecialFooter);