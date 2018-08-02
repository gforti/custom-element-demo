# custom-element-demo

Custom elements give developers the ability to extend HTML and create their own tags. Because custom elements are standards based they benefit from the Web's built-in component model. The result is more modular code that can be reused in many different contexts.

## Recommended reading

 - [MDN - Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
 - [MDN - Web Components](https://developers.google.com/web/fundamentals/web-components/)
 - [MDN - Using Templates and Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)

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

## Slots

If you have a template like so
```html
<header>
    <slot></slot>
</header>
<div> ...
```

You can use the custom element slot like so
```html
<popup-message>This is my message</popup-message>
```

The text inside of the custom element tag will be placed in the template slot tag


## Wiki / FAQ

To learn more visit the Wiki page

- [custom-element-demo wiki](https://github.com/gforti/custom-element-demo/wiki)

## Live examples

> Note that all the examples are not using a pollyfill

- [Demo1](https://gforti.github.io/custom-element-demo/public_html/demo1/)
  - Very basic component using slot
- [Demo2](https://gforti.github.io/custom-element-demo/public_html/demo2/)
  - Password toggle.  Password input field can be accessed from custom element class
- [Demo3](https://gforti.github.io/custom-element-demo/public_html/demo3/)
  - Custom element when closed(click on the upper right corner) dispatches a custom event 
- [Demo4](https://gforti.github.io/custom-element-demo/public_html/demo4/)
  - Score card being updated by an observed attribute
- [Demo5 - Broken](https://gforti.github.io/custom-element-demo/public_html/demo5/broken)
  - A simple todo list that starts by fetching a list then allows you to add your own.  One custom element will take in data, the other will display it.  A controller and service manage the state. The state is broken in this example due to the state management being done in the custom element
- [Demo5 - Fixed](https://gforti.github.io/custom-element-demo/public_html/demo5/fixed)
  - Same as the broken demo, but fixed due to the state being managed by the service