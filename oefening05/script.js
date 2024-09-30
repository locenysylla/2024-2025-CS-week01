'use strict';

// Oefening 05
let dagen = parseInt(prompt(('Geef het aantal dagen: ')));
let uren = parseInt(prompt(('Geef het aantal uren: ')));
let minuten = parseInt(prompt(('Geef het aantal minuten: ')));
let seconden = parseInt(prompt('Geef het aantal seconden: '));

let totaalAantalSeconden = seconden + minuten *60 + uren * 60 * 60 + dagen * 60 * 60 * 24;

console.log(`Het totaal is ${totaalAantalSeconden} seconden`);