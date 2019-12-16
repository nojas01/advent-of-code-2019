const {lineOneInput, lineTwoInput} = require('./inputs');

exports.puzzleFiveSolution = (lineOne, lineTwo) => {
const lineOneCoordinates = createLine(lineOne);
const lineTwoCoordinates = createLine(lineTwo);
const intersections = lineTwoCoordinates.filter((coordinate) => lineOneCoordinates.find((item) => ((item.x === coordinate.x) && (item.y === coordinate.y)))
).sort((a, b) => (Math.abs(a.x) + Math.abs(a.y) - (Math.abs(b.x) + Math.abs(b.y))));

return (Math.abs(intersections[0].x) + Math.abs(intersections[0].y))
};

const createLine = (movements) => {
    const lineCoordinates = [
        {
            y: 0,
            x: 0,
        },
    ];
    for (let i in movements) {
        const movement                     = movements[i];
        const [empty, direction, distance] = movement.split(/([A-Z])/g);
        lineCoordinates.push(...drawLine(lineCoordinates[lineCoordinates.length -1], direction, parseInt(distance)));
    }
    return lineCoordinates;
};

const drawLine = (start, direction, length, lineStroke = []) => {
    if (length === 0) {
        return lineStroke;
    }
    const lastCoordinate = lineStroke.length? lineStroke[lineStroke.length - 1] : start;
    switch (direction) {
        case 'U':
            lineStroke.push({
                y: lastCoordinate.y += 1,
                x: lastCoordinate.x,
            });
             return drawLine(start, direction, length -1, lineStroke);
        case 'R':
            lineStroke.push({
                y: lastCoordinate.y,
                x: lastCoordinate.x +=1,
            });
            return drawLine(start, direction, length -1, lineStroke);
        case 'D':
            lineStroke.push({
                y: lastCoordinate.y -= 1,
                x: lastCoordinate.x,
            });
            return drawLine(start, direction, length -1, lineStroke);
        case 'L':
            lineStroke.push({
                y: lastCoordinate.y,
                x: lastCoordinate.x -= 1,
            });
            return drawLine(start, direction, length -1, lineStroke);
    }
};


console.log('puzzle5', exports.puzzleFiveSolution(lineOneInput, lineTwoInput));
