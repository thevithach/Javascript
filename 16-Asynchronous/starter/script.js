'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}
  `)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
