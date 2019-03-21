## getCountup(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endingNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;increment? = 1<br>): number[]  
Returns array of numbers in ascending order, i.e., [1,2,3,4,5...]. 

## getCountdown(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endingNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;increment? = 1<br>): number[]  
Returns array of numbers in descending order, i.e., [5,4,3,2,1...].


## Examples
```js
getCountup(1, 10);
// --> [1,2,3,4,5,6,7,8,9,10]

getCountdown(10, 1);
// --> [10,9,8,7,6,5,4,3,2,1]

getCountup(1, 10, 2);
// --> [1,3,5,7,9]

getCountdown(10, 1, 2);
// --> [10,8,6,4,2]

getCountup(-1, 9.5, 1.5);
// --> [ -1, 0.5, 2, 3.5, 5, 6.5, 8, 9.5 ]
```

## Installation
`npm i  @writetome51/get-countup-countdown`

## Loading
```ts
// if using TypeScript:
import {getCountup, getCountdown}  from '@writetome51/get-countup-countdown';
    
// if using ES5 JavaScript:
var getCountup = require('@writetome51/get-countup-countdown').getCountup;
var getCountdown = require('@writetome51/get-countup-countdown').getCountdown;
```
