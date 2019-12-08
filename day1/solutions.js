const input = require("./puzzleInputs");

exports.puzzleOneSolution = (inputs) => {
    return inputs.reduce((acc, curr) => acc + (Math.floor(curr / 3) -2), 0);
};
// console.log('puzzleOneSolution',puzzleOneSolution(input.firstPuzzleInput))

function helper(input, accumulator = 0) {
    if ((Math.floor(input / 3) -2) < 1 ) {
        return parseInt(accumulator);
    }
    let neededFuel = (Math.floor(input / 3) -2);
    accumulator += neededFuel;
    return helper(neededFuel, accumulator);
}

exports.puzzleTwoSolution = (inputs) => {
    return inputs.reduce((acc, curr) => acc + helper(curr), 0);
};

console.log('puzzleOneSolution',puzzleOneSolution(input.firstPuzzleInput))
console.log('puzzleTwoSolution',exports.puzzleTwoSolution(input.firstPuzzleInput));

