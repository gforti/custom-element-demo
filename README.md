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

## Wiki / FAQ

To learn more visit the Wiki page

https://github.com/gforti/custom-element-demo/wiki