"use strict";
// Returns array of numbers in ascending order, i.e., [1,2,3,4,5...]
Object.defineProperty(exports, "__esModule", { value: true });
function getCountup(startingNumber, endingNumber, increment) {
    if (increment === void 0) { increment = 1; }
    if (startingNumber > endingNumber) {
        throw new Error('In the arguments, the first number must be less' +
            ' than or equal to the second number');
    }
    var integers = [];
    for (var i = startingNumber; i <= endingNumber; i += increment) {
        integers.push(i);
    }
    return integers;
}
exports.getCountup = getCountup;
// Returns array of numbers in descending order, i.e., [5,4,3,2,1...]
function getCountdown(startingNumber, endingNumber, increment) {
    if (increment === void 0) { increment = 1; }
    if (startingNumber < endingNumber) {
        throw new Error('In the arguments, the first number must be greater' +
            ' than or equal to the second number');
    }
    var integers = [];
    for (var i = startingNumber; i >= endingNumber; i -= increment) {
        integers.push(i);
    }
    return integers;
}
exports.getCountdown = getCountdown;
