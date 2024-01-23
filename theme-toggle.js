
class ThemeToggle extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        
        const style = document.createElement('style');
       
        style.textContent = `
            :host {
                display: flex;
                gap: 3px;
                padding: 3px;
            }
            .theme-btn {
                flex: 1;
                border: 1px solid var(--background);
                background-size: cover;
                background-position: center;
                display: block;
                height: 50px;
                position: relative;
            }
            .theme-btn:focus , .theme-btn:hover  {
                border: 1px solid var(--foreground);
            }
        `;
        this.shadowRoot.appendChild(style);
    }
    
    connectedCallback(){
        let themes
        if (this.hasAttribute('themes')){
            themes = this.getAttribute('themes').split(',')

        }
        function toggleTheme (theme) {
            themes.forEach(t => document.body.classList.remove(t))
            document.body.classList.add(theme)
        }

        themes.forEach(theme => {

            const button = document.createElement('button');
            button.setAttribute('id', theme)
            button.classList.add('theme-btn', theme)
            button.style.backgroundImage = `url('/css-theme-generator/test-images/${theme}.webp')`

            button.addEventListener('click', () => toggleTheme(theme));
            this.shadowRoot.appendChild(button)

        })
        const dmtheme = themes[themes.length - 1]
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDarkMode = localStorage.getItem('theme') === dmtheme;

        if (prefersDark || isDarkMode) {
            toggleTheme(dmtheme)
        }

    }
}
customElements.define('theme-toggle', ThemeToggle);