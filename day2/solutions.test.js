const {puzzleThreeSolution, puzzleFourSolution} = require('./solutions');
const {puzzleInput}                             = require('./inputs');

test('small arrays', () => {
    expect(puzzleThreeSolution([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
    expect(puzzleThreeSolution([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
    expect(puzzleThreeSolution([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
    expect(puzzleThreeSolution([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
});

test('variable inputs', () => {
    expect(puzzleFourSolution(puzzleInput, 4330636)).toMatchObject({noun: 12, verb: 2});
});
