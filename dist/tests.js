"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Test 1
var countup = index_1.getCountup(1, 10);
console.log(countup); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// Test 2
var countdown = index_1.getCountdown(10, 1);
console.log(countdown); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// Test 3
countup = index_1.getCountup(1, 10, 2);
console.log(countup); // [ 1, 3, 5, 7, 9 ]
// Test 4
countdown = index_1.getCountdown(10, 1, 2);
console.log(countdown); // [ 10, 8, 6, 4, 2 ]
// Test 5
countup = index_1.getCountup(1, 20, 2);
console.log(countup); // [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]
// Test 6
countdown = index_1.getCountdown(20, 1, 2);
console.log(countdown); // [ 20, 18, 16, 14, 12, 10, 8, 6, 4, 2 ]
// Test 7
countup = index_1.getCountup(1, 20, 7);
console.log(countup); // [ 1, 8, 15 ]
// Test 8
countdown = index_1.getCountdown(20, -1, 7);
console.log(countdown); // [ 20, 13, 6, -1 ]
// Test 9
countdown = index_1.getCountup(-1, 9.5, 1.5);
console.log(countdown); // [ -1, 0.5, 2, 3.5, 5, 6.5, 8, 9.5 ]
