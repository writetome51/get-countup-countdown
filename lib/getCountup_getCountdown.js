"use strict";
// Returns array of integers in ascending order, i.e., [1,2,3,4,5...]
Object.defineProperty(exports, "__esModule", { value: true });
function getCountup(startingNumber, endingNumber) {
    if (startingNumber > endingNumber) {
        throw new Error('In the arguments, the first number must be less' +
            ' than or equal to the second number');
    }
    var integers = [];
    for (var i = startingNumber; i < (endingNumber + 1); ++i) {
        integers.push(i);
    }
    return integers;
}
exports.getCountup = getCountup;
// Returns array of integers in descending order, i.e., [5,4,3,2,1...]
function getCountdown(startingNumber, endingNumber) {
    if (startingNumber < endingNumber) {
        throw new Error('In the arguments, the first number must be greater' +
            ' than or equal to the second number');
    }
    var integers = getCountup(endingNumber, startingNumber);
    return integers.reverse();
}
exports.getCountdown = getCountdown;
