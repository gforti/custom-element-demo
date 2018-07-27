# custom-element-demo

Custom elements give developers the ability to extend HTML and create their own tags. Because custom elements are standards based they benefit from the Web's built-in component model. The result is more modular code that can be reused in many different contexts.

## Recommended reading

 - https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
 - https://developers.google.com/web/fundamentals/web-components/

## lifecycle callbacks

`connectedCallback:` Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

`disconnectedCallback:` Invoked each time the custom element is disconnected from the document's DOM.

`adoptedCallback:` Invoked each time the custom element is moved to a new document.

`attributeChangedCallback:` Invoked each time one of the custom element's attributes is added, removed, or changed.

`observedAttributes:` Array of attributes to observe

```js
static get observedAttributes() {return ['w', 'l']; }
```
> All custom elements must have a hyphenated name e.g. todo-item, todo-list etc.

## FAQ

### What is a recommended default template

At the very minimum you can use this code just for the HTML.  This does not include the callbacks.

> You can omit (async () => { ... })(); if you are using imports

```js
(async () => {

    function generateTemplate() {

        const template = document.createElement('template')

        template.innerHTML = `
            <style>                
                :host { }
            </style>
            <div>
                <slot></slot>
            </div>
        `;
        return template
    }

  class CustomComponent extends HTMLElement {
      
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.appendChild(generateTemplate().content.cloneNode(true))
    }
   
  }

  window.customElements.define('custom-component', CustomComponent)
})();
```

For a more full featured template something like this can work.

```js
(async () => {
    /*
     * <script src="custom-component.element.js" defer></script>
     * <custom-component></custom-component>
     */
    function generateTemplate() {

        const template = document.createElement('template');

        template.innerHTML = `
            <style>
                :host h1 {
                  color: var(--on-primary, red);
                  font-size: 2.5rem;                  
                }
            </style>
            <article>
                <h1>{{title}}</h1>
                <slot></slot>
            </article>
        `;
        return template;
    }

  class CustomComponent extends HTMLElement {

    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(generateTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        console.log('Custom element added to page.');
        this.render()
    }

    adoptedCallback() {
        console.log('Custom element moved to new page.');
    }

    static get observedAttributes() {
      return [];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if ( oldValue !== newValue) {
            this.render()
        }
        console.log(`${attr} was changed from ${oldValue} to ${newValue}!`)
    }

    disconnectedCallback() {
      // remove event listeners
        console.log('Custom element removed from page.');
    }

    render() {
        // This is not required nor standard
    }

  }

  window.customElements.define('custom-component', CustomComponent);
})();
```

### How would you recommended styling custom elements

> Note this idea is based from https://material.io/design/material-theming/implementing-your-theme.html#color

While you can just have class names and style it in a CSS file, the idea is to not have dependencies

An idea can be to use CSS variables to customize a theme or layout.

```css
--primary: ;
--on-primary: ;

--accent: ;
--on-accent: ;

--background: ;
--on-background: ;

--surface: ;
--on-surface: 
```

The CSS variable can be used to customize a suite of custom elements that follow a pattern for a theme and layout

```css
background-color: var(--surface, #999);
color: var(--on-surface, #eee);
```

### How do you handle user events from the custom element

### How do you recommend passing in data to a custom element

### How do you recommend getting data from a custom element

### Can Custom Elements use other custom elements

### How can I check if a custom element is not defined

When a custom element is not defined you can use the query selector to find it using this selector `:not(:defined)`

While you can `defer` the custom element from loading right away and use the sample below to wait for all custom elements to be loaded,
I recommend to load them before selecting them in JavaScript without the need for the following script.

```js
(async () => { 
    const undefinedElements = document.querySelectorAll(':not(:defined)');

    const promises = [...undefinedElements].map(
      elem => customElements.whenDefined(elem.localName)
    );

    // Wait for all the children to be upgraded, 
    // then remove the placeholder.
    await Promise.all(promises);                            
    window.dispatchEvent(new CustomEvent('customElementsDefined'))
})()
```

