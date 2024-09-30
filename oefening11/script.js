'use strict';

// Oefening 11
let artikelnaam = prompt('Artikelnaam: ');
let inkoomprijs = parseFloat(prompt('Wat is de inkoomprijs: '));
let winstPercentage = parseFloat(prompt('Wat is de geweste winstpercentage'));

let verkoopPrijs = (inkoomprijs * winstPercentage) / 100 + inkoomprijs;

console.log(`Artikel "${artikelnaam}" verkoop je voor ${verkoopPrijs.toFixed(2)} EUR.`);
