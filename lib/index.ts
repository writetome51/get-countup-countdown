// Returns array of numbers in ascending order, i.e., [1,2,3,4,5...]

export function getCountup(startingNumber, endingNumber, increment = 1): number[] {
	if (startingNumber > endingNumber) {
		throw new Error('In the arguments, the first number must be less' +
			' than or equal to the second number');
	}
	let integers = [];
	for (let i = startingNumber; i <= endingNumber; i += increment) {
		integers.push(i);
	}
	return integers;
}


// Returns array of numbers in descending order, i.e., [5,4,3,2,1...]

export function getCountdown(startingNumber, endingNumber, increment = 1): number[] {
	if (startingNumber < endingNumber) {
		throw new Error('In the arguments, the first number must be greater' +
			' than or equal to the second number');
	}
	let integers = [];
	for (let i = startingNumber; i >= endingNumber; i -= increment) {
		integers.push(i);
	}
	return integers;
}