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

## FAQ

### What is a recommended default template

### How would you recommended styling custom elements

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

