/**
 *   @author Graus, Michael (grausm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 5 MidAmerica Bus Company || created: 11.25.2017
 *   @todo nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let prices = [];
let passengers, zones;

function main() {
    setPrices();
    setPassengers();
    setZones();
    printPrice();
}

main();

function setPrices() {
    for (let i = 0; i < 4; i++) {
        prices[i] = [];


        prices[0] = [];
        prices[1] = [];
        prices[2] = [];
        prices[3] = [];
        prices[0][0] = 7.50;
        prices[0][1] = 10.00;
        prices[0][2] = 12.00;
        prices[0][3] = 12.75;
        prices[1][0] = 14.00;
        prices[1][1] = 18.50;
        prices[1][2] = 22.00;
        prices[1][3] = 23.00;
        prices[2][0] = 20.00;
        prices[2][1] = 21.00;
        prices[2][2] = 32.00;
        prices[2][3] = 33.00;
        prices[3][0] = 35.00;
        prices[3][1] = 27.50;
        prices[3][2] = 36.00;
        prices[3][3] = 37.00;
    }
}

function setPassengers() {
    passengers = PROMPT.questionInt(`\n\tHow many passengers? [1-4]: `);
    if (passengers > 4 || passengers < 1) {
        console.log(`\n\tIncorrect number.`);
        return setPassengers();
    }
    else {
        passengers = passengers - 1; }
}

function setZones() {
    zones = PROMPT.questionInt(`\n\tHow many zones crossed? [0-3]: `);
    if (zones > 3 || zones < 0) {
        console.log(`\n\tIncorrect number.`);
        return setZones();
    }
}

function printPrice() {
    console.log(`\n\tTicket price is $${prices[passengers][zones]}.
                \n\tThank you for using MidAmerica Bus Company.`);
}