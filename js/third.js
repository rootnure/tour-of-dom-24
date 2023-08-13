// 1. Where to added
const thirdList = document.getElementById('third-list');

// 2. What to add
const li = document.createElement('li');
li.innerText = 'My Dynamic Item';

// 3. Append the child
thirdList.appendChild(li);

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My Dynamic Section</h1>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
`;
mainContainer.appendChild(section);