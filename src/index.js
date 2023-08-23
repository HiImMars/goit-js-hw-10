// import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix';

const selection = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorText = document.querySelector('.error');

selection.addEventListener('change', onSelectChange);

function createList() {
  loader.classList.remove('is-hidden');
  selection.classList.add('is-hidden');
  errorText.classList.add('is-hidden');

  fetchBreeds()
    .then(data => {
      const catList = data
        .map(({ id, name }) => `<option value="${id}">${name}</option>`)
        .join(' ');

      selection.innerHTML = catList;

      new SlimSelect({
        select: selection,
      });

      loader.classList.add('is-hidden');
      selection.classList.remove('is-hidden');
    })
    .catch(error => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}
createList();

function onSelectChange(event) {
  loader.classList.remove('is-hidden');
  catInfo.classList.add('is-hidden');

  const selectedBreedId = event.currentTarget.value;
  fetchCatByBreed(selectedBreedId)
    .then(data => {
      renderMarkupInfo(data);
      loader.classList.add('is-hidden');
      catInfo.classList.remove('is-hidden');
    })
    .catch(error => {
      loader.classList.add('is-hidden');
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}

function renderMarkupInfo(data) {
  const { breeds, url } = data[0];
  const { name, temperament, description } = breeds[0];
  const breedCard = `<img class="photo-cat" width = "300px" src="${url}" alt="${name}">
    <div class="text-part">
  <h2 class="cat-name">${name}</h2>
  <p class="cat-descr">${description}</p>
  <p class="cat-temperament"><span class="temperament-label">Temperament:</span> ${temperament}</p>
  </div>`;

  catInfo.innerHTML = breedCard;
}
