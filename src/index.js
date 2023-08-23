// import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

// axios.defaults.headers.common['x-api-key'] =
//   'live_PvvHSPLmP62YQ4mUBrXod4lCdUppezscIzx44nDBQgdj8RVXF1YPXHwVQ5lLL9MU';

const selection = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorText = document.querySelector('.error');

// fetchBreeds();

// selection.addEventListener('change', fetchCatByBreed);
