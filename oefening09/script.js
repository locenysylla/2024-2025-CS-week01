
'use strict';

// Oefening 09
let getal1 = parseInt(prompt('geef mij jouw 1ste getal'));
let getal2 = parseInt(prompt('geef mij jouw 2de getal'));
let getal3 = parseInt(prompt('geef mij jouw 3de getal'));

let totaalGemiddelde = (getal1 + getal2 + getal3) / 3;

console.log(`Het gemiddelde van de drie getallen is ${totaalGemiddelde.toFixed(2)}`);