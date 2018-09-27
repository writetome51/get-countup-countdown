// Returns array of integers in ascending order, i.e., [1,2,3,4,5...]

export function getCountup(startingNumber, endingNumber): number[] {
	if (startingNumber > endingNumber) {
		throw new Error('In the arguments, the first number must be less' +
			' than or equal to the second number');
	}
	let integers = [];
	for (let i = startingNumber; i < (endingNumber + 1); ++i) {
		integers.push(i);
	}
	return integers;
}


// Returns array of integers in descending order, i.e., [5,4,3,2,1...]

export function getCountdown(startingNumber, endingNumber): number[] {
	if (startingNumber < endingNumber) {
		throw new Error('In the arguments, the first number must be greater' +
			' than or equal to the second number');
	}
	let integers = getCountup(endingNumber, startingNumber);
	return integers.reverse();
}
