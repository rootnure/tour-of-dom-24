console.log('this is inside first.js')
// option 1
const allLi = document.getElementsByTagName('li');
console.log(allLi);
// option 2
const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);
// option 3
const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'brown';
secondSection.style.backgroundColor = 'lightskyblue';
// option 4
// document.querySelectorAll
// option 5
// document.querySelector