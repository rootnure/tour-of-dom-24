console.log('hello from js');
// console.log(document.body);


// option-5: querySelector
const singleLi = document.querySelector('.fruits-container li');
console.log(singleLi);

// option-4: querySelectorAll
const someLi = document.querySelectorAll('.fruits-container li');
console.log(someLi);

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
} document.getele

const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    // console.log(h1.innerText);
}