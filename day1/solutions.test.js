const {puzzleOneSolution, puzzleTwoSolution} = require('./solutions');


test('single masses', () => {
    expect(puzzleOneSolution([12])).toBe(2);
    expect(puzzleOneSolution([14])).toBe(2);
    expect(puzzleOneSolution([1969])).toBe(654);
    expect(puzzleOneSolution([100756])).toBe(33583);
});

test('accumulation', () => {
    expect(puzzleOneSolution([12,14,1969,100756])).toBe(2+2+654+33583)
});

test('recursion singles', () => {
    expect(puzzleTwoSolution([14])).toBe(2);
    expect(puzzleTwoSolution([1969])).toBe(966);
    expect(puzzleTwoSolution([100756])).toBe(50346);
});

test('recursion accumulation', () => {
    expect(puzzleTwoSolution([14, 1969, 100756])).toBe(2+966+50346);
});