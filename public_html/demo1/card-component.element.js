(async () => {

    function generateTemplate() {

        const template = document.createElement('template')

        template.innerHTML = `
            <style>                
                :host .card {
                    background-color: #fff;
                    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
                    color: #4a4a4a;
                    max-width: 100%;
                    padding: 1rem;
                    position: relative;
                    transition: 0.3s;
                }
                :host .card:hover {
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                }

            </style>
            <div class="card">
                <slot></slot>
            </div>

        `;
        return template
    }

  class CardComponent extends HTMLElement {
      
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.appendChild(generateTemplate().content.cloneNode(true))
    }
   
  }

  window.customElements.define('card-component', CardComponent)
})();
