/* Three steps to add HTML element using JS */

// 1. where to add
const placesList = document.getElementById('places-list');

// 2. what to be added
const newLI = document.createElement('li');
li.innerText = 'Saidpur';

// 3. add the child
placesList.appendChild(li);

// -------------------------------------------------------------------------

// 1. Where to add
const mainContainer2 = document.getElementById('main-container');

// 2. What to be added
const section2 = document.createElement('section'); // 2.1. Where to be added

const newH1 = document.createElement('h1'); // 2.2. What to be added
newH1.innerText = 'My Food List';
section2.appendChild(newH1); // 2.3. Append the child

const newUL2 = document.createElement('ul'); // 2.2.1. Where to be added
const newLI1 = document.createElement('li'); // 2.2.2. What to be added
newLI1.innerText = 'Biriani';
newUL2.appendChild(newLI1); // 2.2.3. Append the child

const newLI2 = document.createElement('li'); // 2.3.2. What to be added
newLI2.innerText = 'Borhani';
newUL2.appendChild(newLI2); // 2.3.3. Append the child

const newLI3 = document.createElement('li'); // 2.4.2. What to be added
newLI3.innerText = 'Tehari';
newUL2.appendChild(newLI3); // 2.4.3. Append the child

section2.appendChild(newUL2); // 2.3. Append the child2

// 3. Append the child
mainContainer2.appendChild(section2);

// -------------------------------------------------------------------------

/* Set innerHTML directly */
// 1. Where to add
const mainContainer = document.getElementById('main-container');

// 2 What to be added
const newSection = document.createElement('section');
newSection.innerHTML = `
<h1>Flower Shop</h1>
<ul>
    <li>Tulip</li>
    <li>Belli</li>
    <li>Sunflower</li>
</ul>
`;

// 3. Add the child
mainContainer.appendChild(newSection);

