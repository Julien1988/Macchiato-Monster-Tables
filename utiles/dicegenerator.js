// Dice generator.
export default function diceGenerator(max) {
    console.log(Math.floor(Math.random() * Math.floor(max)));
    return Math.floor(Math.random() * Math.floor(max));
};