'use strict';

// Oefening 10
let aantalGewonnen = parseInt(prompt("geef het aantal gewonnen: "));
let aantalGelijk = parseInt(prompt("geef het aantal gelijk: "));
let aantalVerloren = parseInt(prompt("geef het aantal verloren: "));

let punten = aantalGewonnen * 3 + aantalGelijk * 1 + aantalVerloren * 0;


consoleLog(`Uw ploeg scoorde al ${punten} punten.`);