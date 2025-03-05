// step 1 : is to check if the index.js file is connected to the html file
// console.log("it is working");

// // dom loaded
const regionBaseURL = "https://restcountries.com/v3.1/region/";
const countryBaseURL = "https://restcountries.com/v3.1/name/";

// step 2. get the reference of the DOM elements you will be interacting with

const regionDD = document.querySelector("#region");
const countryDD = document.querySelector("#country");
const factsArea = document.querySelector("#facts-area");

//  step 3 is to add the event listener to the DOM element

regionDD.addEventListener('change', handleRegionChange);

// step 4 is to define the callback function
async function handleRegionChange(e) {

    const url = `${regionBaseURL}${e.target.value}`;
    const response = await fetch(url);
    const countries = await response.json();

    const countriesOptions = countries
        .map(country => `<option value="${country.name.common}">${country.name.common}</option>`)
        .join(' ')

    countryDD.innerHTML = countriesOptions;


}