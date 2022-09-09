/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

const menuIcon = document.getElementById('img');
const closebtn = document.getElementById('closebtn');
const menuLinks = document.getElementById('overlay-content');

menuIcon.addEventListener('click', openNav);
closebtn.addEventListener('click', closeNav);
menuLinks.addEventListener('click', closeNav);

// Dynamic projects section

const cardsData = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredImage: './images/tonic.svg',
    details: [],
    technologies: ['Html', 'CSS', 'Javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredImage: './images/multipost.jpg',
    details: [],
    technologies: ['Html', 'CSS', 'Javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredImage: './images/tonic2.jpg',
    details: [],
    technologies: ['Html', 'CSS', 'Javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredImage: './images/multipost2.jpg',
    details: [],
    technologies: ['Html', 'CSS', 'Javascript'],
    liveLink: '',
    sourceLink: '',
  },
];

function renderTechnologies(items) {
  const ul = document.createElement('ul');
  ul.classList.add('ul-card-style');
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${items[i]}</span>`;
    li.classList.add('li-card-style');
    ul.appendChild(li);
  }
  return ul.outerHTML;
}

function openPopup(event) {
  const index = event.target.id.split('-')[1];
  const data = cardsData[index];
  const parent = document.getElementById('Portfolio');

  const popup = document.createElement('div');
  popup.classList.add('modal');
  popup.id = 'modal';
  popup.innerHTML = `
  <div class="card modal-card">
    <div class="modal-title">
    <h3 class="card-title">${data.name}</h3>
    <img id="close-icon" src="./images/Icon.svg" alt="close">
  </div>
      <div class="card-details">
      <span class="active-span">CANOPY</span>
      <img src="./images/circle.svg" alt="grey circle">
      <span>Back End Dev</span>
      <img src="./images/circle.svg" alt="grey circle">
      <span>2015</span>
      </div>
    <img class="modal-img" src=${data.featuredImage} alt="work snapshot">
    <div class="card-content">
      <p>${data.description}</p>
      <div>
      <ul class="ul-card-style"><li class="li-card-style"><span>Html</span></li><li class="li-card-style"><span>CSS</span></li><li class="li-card-style"><span>Javascript</span></li></ul>
      <div class="modal-buttons">
      <button class="primary-btn modal-button" id="button-0" type="button">
        See live
        <img src="./images/Export.svg" alt="see live" />
      </button>
      <button class="primary-btn modal-button" id="button-0" type="button">
      See Source
      <img src="./images/github-popup.svg" alt="see source" />  
    </button>
    </div>
    </div>
 </div></div>
  `;

  parent.appendChild(popup);
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('close-icon').addEventListener('click', () => {
    parent.removeChild(document.getElementById('modal'));
  });
}

addEventListener('load', () => {
  const parent = document.getElementById('Portfolio');

  for (let i = 0; i < cardsData.length; i++) {
    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
          <img class="card-img" src=${
  cardsData[i].featuredImage
} alt="work snapshot" />
          <div class="card-content">
            <h3 class="card-title">${cardsData[i].name}</h3>
            <div class="card-details">
              <span class="active-span">CANOPY</span>
              <img src="./images/circle.svg" alt="grey circle" />
              <span>Back End Dev</span>
              <img src="./images/circle.svg" alt="grey circle" />
              <span>2015</span>
            </div>
            <p>
              ${cardsData[i].description}
            </p>
            ${renderTechnologies(cardsData[i].technologies)}
            <button class="primary-btn popup" id="button-${i}" type="button">See Project</button>
   `;
    parent.appendChild(card);

    document.getElementById(`button-${i}`).addEventListener('click', openPopup);
  }
});

const form = document.getElementById('form');
const error = document.getElementById('error');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target[1].value === event.target[1].value.toLowerCase()) {
    form.submit();
  } else {
    email.classList.add('active');
    error.innerText = "Please enter email in lowercase like 'aaaa@gmail.com'";
  }
});
