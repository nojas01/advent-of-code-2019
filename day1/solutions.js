const {firstPuzzleInput} = require("./puzzleInputs");

const calculateFuel = (d) => (Math.floor(d / 3) -2);

const helper = (input, accumulator = 0) => {
    if (calculateFuel(input) < 1) return parseInt(accumulator);
    let neededFuel = calculateFuel(input);
    return helper(neededFuel, (accumulator += neededFuel));
};

exports.puzzleOneSolution = (inputs) => {
    return inputs.reduce((acc, curr) => acc + calculateFuel(curr), 0);
};

exports.puzzleTwoSolution = (inputs) => {
    return inputs.reduce((acc, curr) => acc + helper(curr), 0);
};

console.log('puzzleOneSolution',exports.puzzleOneSolution(firstPuzzleInput));
console.log('puzzleTwoSolution',exports.puzzleTwoSolution(firstPuzzleInput));

