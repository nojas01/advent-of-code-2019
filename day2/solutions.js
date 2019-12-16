const {puzzleInput} = require('./inputs');

const puzzleThreeInput = [...puzzleInput];
puzzleThreeInput.splice(1, 1, 12);
puzzleThreeInput.splice(2, 1, 2);

exports.puzzleThreeSolution = (input = []) => {
    let resultArray = [...input];
    for (let i = 0; i < resultArray.length; i += 4) {
        if (resultArray[i] === 1) {
            let sum = resultArray[resultArray[i + 1]] + resultArray[resultArray[i + 2]];
            resultArray.splice(resultArray[i + 3], 1, sum);
        } else if (resultArray[i] === 2) {
            let product = resultArray[resultArray[i + 1]] * resultArray[resultArray[i + 2]];
            resultArray.splice(resultArray[i + 3], 1, product);
        } else if (resultArray[i] === 99) {
            break;
        } else {
            console.log('error');
            break;
        }
    }
    return resultArray;
};

exports.puzzleFourSolution = (input = [], requiredOutput) => {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            let newPuzzleInput = [...puzzleInput];
            newPuzzleInput.splice(1, 1, noun);
            newPuzzleInput.splice(2, 1, verb);
            if (exports.puzzleThreeSolution(newPuzzleInput)[0] === requiredOutput) {
                return {noun, verb};
            }
        }
    }
};

console.log('puzzleThreeSolution', exports.puzzleThreeSolution(puzzleThreeInput)[0]);
console.log('puzzleFourSolution', exports.puzzleFourSolution(puzzleInput, 19690720));
