class SpecialHeader extends HTMLElement {
    ConnectedCallBack () {
        this.innerHTML = `
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