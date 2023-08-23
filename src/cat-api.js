// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_PvvHSPLmP62YQ4mUBrXod4lCdUppezscIzx44nDBQgdj8RVXF1YPXHwVQ5lLL9MU';

const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT = '/breeds';
const CAT_INFO = '/images/search';
const API_KEY =
  'live_PvvHSPLmP62YQ4mUBrXod4lCdUppezscIzx44nDBQgdj8RVXF1YPXHwVQ5lLL9MU';

function fetchBreeds() {
  return fetch(`${BASE_URL}${END_POINT}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}${CAT_INFO}?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
