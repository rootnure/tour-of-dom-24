// console.log('hello from js');
// console.log(document.body);

/* HTML Manipulation */

const element = document.getElementsByClassName('fruits-container')[0];

// style
element.style.backgroundColor = 'aqua';

// getAttribute
const styleAttributeValue = element.getAttribute('style')
// console.log(styleAttributeValue);

// setAttribute
element.setAttribute('class', 'bold')
// console.log(title);

// removeAttribute
element.removeAttribute('style');
// console.log(title);

// classList
const titleClassList = element.classList;
// console.log(titleClassList);
element.classList.remove('bold'); // remove an existing class from HTML element
element.classList.add('bolder'); // add a new class from HTML element
// console.log(title);

// innerText
const HTMLContent = element.innerHTML; // return the raw html
// console.log(HTMLContent);
const textContent = element.innerText; // return only the visible text in browser
// console.log(textContent);




// -----------------------------------------------------------------


/* Five Ways to get HTML Elements */

// option-5: querySelector
const singleLi = document.querySelector('.fruits-container li');
// console.log(singleLi);

// option-4: querySelectorAll
const someLi = document.querySelectorAll('.fruits-container li');
// console.log(someLi);

// option-3: getElementsByClassName
const places = document.getElementsByClassName('visited');
for (const place of places) {
    // console.log(place.innerText)
}

// option-2: getElementById
const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'Fruits Title Changed by JS';

// option-1: getElementsByTagName
const liCollections = document.getElementsByTagName('li');
for (const li of liCollections) {
    // console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    // console.log(h1.innerText);
}