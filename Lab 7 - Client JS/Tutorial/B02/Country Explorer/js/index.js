// declare the base URL
const regionBaseUrl = 'https://restcountries.com/v3.1/region/';
const countryBaseUrl = 'https://restcountries.com/v3.1/name/';

// Get a reference to the elements you want to interact with

const regionDD = document.querySelector('#region');
const countryDD = document.querySelector('#country');
const factsArea = document.querySelector('#facts-area');

// Add events listeners to the different elements

regionDD.addEventListener('change', handleRegionsChange);
countryDD.addEventListener('change', handleCountryChange);


async function handleRegionsChange(e) {
    // step 1 , construct the URL
    const url = `${regionBaseUrl}${regionDD.value}`;
    const response = await fetch(url);
    const countries = await response.json();
    const countryOptions = countries.map(country => `<option value="${country.name.common}">${country.name.official}</option>`);
    countryDD.innerHTML = countryOptions.join(' ');
}


async function handleCountryChange(e) {
    const url = `${countryBaseUrl}${countryDD.value}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    const country = data[0];
    console.log(country);
    factsArea.innerHTML = convertCountryToHtml(country);
}

function convertCountryToHtml(country) {
    return `
        <h1>Facts about ${country.name.common}</h1>
        <img src="${country.flags.png}" alt="${country.flags.alt}" />
    `
}