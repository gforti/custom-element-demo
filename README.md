# custom-element-demo

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