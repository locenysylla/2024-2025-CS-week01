'use strict';

// Oefening 04
let basis = parseFloat(prompt('Wat is de basis van de driehoek?'));
let hoogte = parseFloat(prompt('Wat is de hoogte van de driehoek?'));

let oppervlakte = basis * hoogte / 2
console.log(`Oppervlakte = ${oppervlakte.toFixed(2)}`)