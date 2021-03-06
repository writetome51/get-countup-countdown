# getCountup(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endingNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;increment? = 1<br>): number[]  
Returns array of numbers in ascending order, i.e., [1,2,3,4,5...]. 

# getCountdown(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endingNumber,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;increment? = 1<br>): number[]  
Returns array of numbers in descending order, i.e., [5,4,3,2,1...].


## Examples
```js
getCountup(1, 5);
// --> [1,2,3,4,5]

getCountdown(5, 1);
// --> [5,4,3,2,1]

getCountup(-1, 10, 1.5);
// --> [ -1, 0.5, 2, 3.5, 5, 6.5, 8, 9.5 ]

getCountdown(10, -1, 1.5);
// --> [ 10, 8.5, 7, 5.5, 4, 2.5, 1, -0.5 ]
```

## Installation
`npm i  @writetome51/get-countup-countdown`

## Loading
```js
import {getCountup, getCountdown}  from '@writetome51/get-countup-countdown';
```
