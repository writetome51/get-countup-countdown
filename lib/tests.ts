import { getCountdown, getCountup } from './index';

// Test 1
let countup = getCountup(1, 10);
console.log(countup);


// Test 2
let countdown = getCountdown(10, 1);
console.log(countdown);

// Test 3
countup = getCountup(1, 10, 2);
console.log(countup);


// Test 2
countdown = getCountdown(10, 1, 2);
console.log(countdown);


countup = getCountup(1, 20, 2);
console.log(countup);


// Test 2
countdown = getCountdown(20, 1, 2);
console.log(countdown);


countup = getCountup(1, 20, 7);
console.log(countup);


// Test 2
countdown = getCountdown(20, 1, 7);
console.log(countdown);