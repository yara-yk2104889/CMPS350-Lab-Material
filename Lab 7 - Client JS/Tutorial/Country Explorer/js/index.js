// Base URLS
// check if the dom is loaded
const REGION_BASE_URL = "https://restcountries.com/v3.1/region/";
const COUNTRY_BASE_URL = "https://restcountries.com/v3.1/name/";

const regionDD = document.querySelector("#region");
const countryDD = document.querySelector("#country");
const factsArea = document.querySelector("#facts-area");
const mainContent = document.querySelector("#main-content");

// Listen to events on the region dropdown
regionDD.addEventListener("change", handleRegionChange);
countryDD.addEventListener("change", handleCountryChange);

// write the function to handle the region change event

async function handleRegionChange() {

    const url = `${REGION_BASE_URL}${regionDD.value}`;
    const response = await fetch(url);
    const data = await response.json();
    const countryNames = data.map(country => country.name.common);
    const countryOptions = countryNames
        .map(name => `<option value="${name}">${name}</option>`);
    countryDD.innerHTML = countryOptions.join(' ');
}


