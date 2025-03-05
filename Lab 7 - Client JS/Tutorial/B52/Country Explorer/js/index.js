// Check if this file works and is linked to the html page
// console.log("Yes the file is linked");

// end points
const regionsEndPoint = "https://restcountries.com/v3.1/region/";
const countryEndPoint = "https://restcountries.com/v3.1/name/";

// 1. Get the references to the DOM elements

const regionDD = document.querySelector("#region");
const countryDD = document.querySelector("#country");
const factsArea = document.querySelector("#facts-area");


// 2. add event listener 
regionDD.addEventListener('change', handleRegionChange);
countryDD.addEventListener('change', handleCountryChange);

// 3. write the function to handle the change event

async function handleRegionChange(e) {
    // get the countries of the selected region from an API end point
    const url = `${regionsEndPoint}${e.target.value}`;
    const response = await fetch(url)
    const data = await response.json();
    const countryOptions = data
        .map(country => country.name.common)
        .map(name => `<option value="${name}">${name}</option>`)
        .join('');

    countryDD.innerHTML = countryOptions;

}


async function handleCountryChange(e) {
    const url = `${countryEndPoint}${countryDD.value}`;
    const response = await fetch(url);
    const data = await response.json();
    factsArea.innerHTML = convertCountryToHTML(data[0]);
}

function convertCountryToHTML(country) {
    const currencies = Object.values(country.currencies).map(currency => currency.name).join(", ");
    console.log(currencies);

    return `
        <h1> ${country.name.common}</h1> <br>
        <img src="${country.flags.png}" alt="${country.flags.alt}" width="100" height="100">

        <table>
            <tr>
                <th>Official Name</th>
                <td> ${country.name.official}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td> ${country.population}</td>
            </tr>
            <tr>
                <th>Currencies</th>
                <td> ${currencies}</td>
            </tr>
        </table>
        `
}