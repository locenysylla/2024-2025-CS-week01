"use strict";

// Oefening 04

/*let basis = parseFloat(prompt('Wat is de basis van de driehoek?'));
let hoogte = parseFloat(prompt('Wat is de hoogte van de driehoek?'));

let oppervlakte = basis * hoogte / 2
console.log(`Oppervlakte = ${oppervlakte.toFixed(2)}`)*/

let basis = parseFloat(prompt('Geef mij de basis van de driehoek'));
let hoogte = parseFloat(prompt('Geef mij de hoogte van de driehoek'));
let oppervlakte = basis * hoogte / 2;

console.log(`De basis van de driehoek is ${basis}\nDe hoogte van de driehoek is ${hoogte}\nDe oppervlakte bedraagt ${oppervlakte.toFixed(3)}`);
