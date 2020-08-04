import {getCountdown, getCountup} from './index.js';
import {arraysMatch} from '@writetome51/arrays-match';


// Test 1
let countup = getCountup(1, 10);
if (arraysMatch(countup, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
let countdown = getCountdown(10, 1);
if (arraysMatch(countdown, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
countup = getCountup(1, 10, 2);
if (arraysMatch(countup, [1, 3, 5, 7, 9])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
countdown = getCountdown(10, 1, 2);
if (arraysMatch(countdown, [10, 8, 6, 4, 2])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5
countup = getCountup(1, 20, 2);
if (arraysMatch(countup, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6
countdown = getCountdown(20, 1, 2);
if (arraysMatch(countdown, [20, 18, 16, 14, 12, 10, 8, 6, 4, 2])) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
countup = getCountup(1, 20, 7);
if (arraysMatch(countup, [1, 8, 15])) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8
countdown = getCountdown(20, -1, 7);
if (arraysMatch(countdown, [20, 13, 6, -1])) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9
countup = getCountup(-1, 9.5, 1.5);
if (arraysMatch(countup, [-1, 0.5, 2, 3.5, 5, 6.5, 8, 9.5])) console.log('test 9 passed');
else console.log('test 9 FAILED');
