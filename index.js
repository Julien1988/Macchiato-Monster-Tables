// #!/usr/bin/env node
// Remember add   "type": "module", In package.json
// let args = process.argv.slice(2); => get arg from console.

import * as randomTables from './api/randomTableApi.js'
import diceGenerator from './utiles/dicegenerator.js'

//let args = process.argv.slice(2);
//let args = 2

//const getNumber = diceGenerator(args);

// 1

function getStuffAndFood(number) {
    console.log('Equipement et nourriture : ' + randomTables.stuffAndFood[number])
    return randomTables.stuffAndFood[number];
}

// getStuffAndFood(getNumber);

// 2

function wealthAndValuables (number) {
    console.log('Eau et consomable : ' + randomTables.wealthAndValuables[number])
    return randomTables.wealthAndValuables[number];
}

// wealthAndValuables(getNumber);


// 3

function  handToHandWeapons(number){
    console.log('Arme de cac : ' + randomTables.handToHandWeapons[number])
    return randomTables.handToHandWeapons[number];
}

// handToHandWeapons(getNumber);

// 4

function armors(number){
    console.log('Armures : ' + randomTables.armors[number])
    return randomTables.armors[number];
}

// armors(getNumber);

// 5


function rangedWeapons(number){
    console.log('Armes à distance : ' + randomTables.rangedWeapons[number])
    return randomTables.rangedWeapons[number];
}

// rangedWeapons(getNumber);

// 6


function magicTrinkets(number){
    console.log('Babioles magiques : ' + randomTables.magicTrinkets[number])
    return randomTables.magicTrinkets[number];
}

// magicTrinkets(getNumber);

// 7


function legacy(number){
    console.log('Héritage : ' + randomTables.legacy[number])
    return randomTables.legacy[number];
}

// legacy(getNumber);

// 8


function faith(number){
    console.log('Foi : ' + randomTables.faith[number])
    return randomTables.faith[number];
}

// faith(getNumber);

// 9


function monsterMotivations(number){
    console.log('Motivation des monstres : ' + randomTables.monsterMotivations[number])
    return randomTables.monsterMotivations[number];
}

// monsterMotivations(getNumber);

// 10


function pnjMotivations(number){
    console.log('Motivation des PNJs : ' + randomTables.pnjMotivations[number])
    return randomTables.pnjMotivations[number];
}

// pnjMotivations(getNumber);

// 11


function enemiesMoral(number){
    console.log('Morale des ennemis : ' + randomTables.enemiesMoral[number])
    return randomTables.enemiesMoral[number];
}

// enemiesMoral(getNumber);

// 12


function mercenarySkills(number){
    console.log('Talent des mercenaires : ' + randomTables.mercenarySkills[number])
    return randomTables.mercenarySkills[number];
}

// mercenarySkills(getNumber);

// 13


function dungeonExploration(number){
    console.log('Exploration du donjon : ' + randomTables.dungeonExploration[number])
    return randomTables.dungeonExploration[number];
}

// dungeonExploration(getNumber);

// 14


function weather(number){
    console.log('Temps : ' + randomTables.weather[number])
    return randomTables.weather[number];
}

// weather(getNumber);

// 15


function explorationOfTheWilderness(number){
    console.log('Exporation des terres sauvages : ' + randomTables.explorationOfTheWilderness[number])
    return randomTables.explorationOfTheWilderness[number];
}

// explorationOfTheWilderness(getNumber);

// 16


function huntingAndGathering(number){
    console.log('Chasse et ceuillette  : ' + randomTables.huntingAndGathering[number])
    return randomTables.huntingAndGathering[number];
}

// huntingAndGathering(getNumber);

// 17


function campEvents(number){
    console.log('Evènement au camp : ' + randomTables.campEvents[number])
    return randomTables.campEvents[number];
}

// campEvents(getNumber);

// 18


function fastTravel(number){
    console.log('Voyage rapide : ' + randomTables.fastTravel[number])
    return randomTables.fastTravel[number];
}

// fastTravel(getNumber);

// 19


function catchUpTheGroup(number){
    console.log('Rattraper le groupe : ' + randomTables.catchUpTheGroup[number])
    return randomTables.catchUpTheGroup[number];
}

// catchUpTheGroup(getNumber);

// 20


function complications(number){
    console.log('Complication : ' + randomTables.complications[number])
    return randomTables.complications[number];
}

// complications(getNumber);







``

  

