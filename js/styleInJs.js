const sections = document.getElementsByTagName('section');
for(const section of sections) {
    section.style.border = '5px solid khaki';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'aqua';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.add('large-text');
placesContainer.classList.remove('large-text');