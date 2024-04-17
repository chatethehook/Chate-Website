class SpecialHeader extends HTMLElement {
    connectedCallBack () {
        this.innerHTML = `
            <p>test</p>
        `
        
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallBack () {
        this.innerHTML = `
        `
        
    }
}
customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)