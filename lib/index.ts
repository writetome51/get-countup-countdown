import { getCount } from './__privy';


// Returns array of numbers in ascending order, i.e., [1,2,3,4,5...]

export function getCountup(startingNumber, endingNumber, increment = 1): number[] {
	if (startingNumber > endingNumber) throw new Error(
		'The startingNumber must be less than or equal to the endingNumber'
	);
	if (increment < 0) increment = -(increment);
	return getCount(startingNumber, endingNumber, increment);
}


// Returns array of numbers in descending order, i.e., [5,4,3,2,1...]

export function getCountdown(startingNumber, endingNumber, increment = 1): number[] {
	if (startingNumber < endingNumber) throw new Error(
		'The startingNumber must be greater than or equal to the endingNumber'
	);
	if (increment > 0) increment = -(increment);
	return getCount(startingNumber, endingNumber, increment);
}
