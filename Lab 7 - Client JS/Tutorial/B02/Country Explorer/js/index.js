// Get a reference to the elements you want to interact with

const regionDD = document.querySelector('#region');
const countryDD = document.querySelector('#country');
const factsArea = document.querySelector('#facts-area');

// Add events listeners to the different elements

regionDD.addEventListener('change', handleRegionsChange);


function handleRegionsChange() {
    alert('Regions dropdown changed');

}