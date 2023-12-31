# tour-of-dom-24

## Topics Covered
- 1. DOM → Document Object Model
- 2. Five ways to select HTML element(s) (<b>Traversing DOM</b>)
        - <b>getElementsByTagName()</b> // Return a collection of HTML
        - <b>getElementsByClassName()</b> // Return a collection of HTML
        - <b>getElementById()</b> // Return a specific HTML element
        - <b>querySelector()</b> // Return a specific HTML matching element
        - <b>querySelectorAll()</b> // Return a nodeList of HTML element
- 3. Dynamic style, getAttribute, setAttribute, innerText, innerHTML using JS i.e.
        - <b>style</b> → element.style.backgroundColor = 'aqua'; // add dynamic style
        - <b>getAttribute</b> → element.getAttribute('style'); // return attribute value
        - <b>setAttribute</b> → element.setAttribute('class', 'bold'); // set a new attribute
        - <b>removeAttribute</b> → element.removeAttribute('style'); // remove an attribute
        - <b>classList</b> → element.classList; // return all the classes
            - element.classList.remove('bold'); // remove an existing class
            - element.classList.add('bolder'); // add a new class
        - <b>innerText</b> → element.innerText; // return only the visible text in browser
        - <b>innerHTML</b> → element.innerHTML; // return the raw html
- 4. NodeList, parentNode, childNode
        - <b>element.childNodes</b> → Return the children
        - <b>element.parentNode</b> → Return the parent
        - <b>document.createElement()</b> → Creates an instance of the element for the specified tag
        - <b>element.appendChild()</b> → adds a node to the end of the list of children of a specified parent node
- 5. Three Steps to add HTML elements using JS
        - #1: Where to add → select the parent element
        - #2: What to be added → createElement() & set innerHTML/innerText
        - #3: Add the child → appendChild()
