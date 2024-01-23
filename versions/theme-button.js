export default class ThemeButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        
    }
    
    connectedCallback(){
        const style = document.createElement('style');
        this.shadowRoot.appendChild(style);
        style.textContent = `
            :host {
              
                flex: 1;
                border: 1px solid var(--background);
                background-size: cover;
                background-position: center;
                display: block;
                height: 50px;
                position: relative;
            }
            :host(:focus) ,  :host(:hover)  {
                border: 1px solid var(--foreground);
            }

        `;

        const theme = this.getAttribute('theme')

        this.setAttribute('id', theme)
        this.style.backgroundImage = `/css-theme-generator/test-images/${theme}.jpg'`
        this.classList.add( 'theme-btn') 
        

    }
}
customElements.define('theme-button', ThemeButton);