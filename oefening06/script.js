'use strict';

// Oefening 06
let seconden = parseInt(prompt('Geef het aantal seconden: '));

let aantalSeconden = seconden % 60;
let aantalMinuten = parseInt(seconden / 60);

console.log(`${seconden} = ${aantalSeconden} seconden + ${aantalMinuten} minuten`);