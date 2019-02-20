"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Test 1
var countup = index_1.getCountup(1, 10);
console.log(countup);
// Test 2
var countdown = index_1.getCountdown(10, 1);
console.log(countdown);
// Test 3
countup = index_1.getCountup(1, 10, 2);
console.log(countup);
// Test 2
countdown = index_1.getCountdown(10, 1, 2);
console.log(countdown);
countup = index_1.getCountup(1, 20, 2);
console.log(countup);
// Test 2
countdown = index_1.getCountdown(20, 1, 2);
console.log(countdown);
countup = index_1.getCountup(1, 20, 7);
console.log(countup);
// Test 2
countdown = index_1.getCountdown(20, 1, 7);
console.log(countdown);
