import {getArrFilled} from '@writetome51/get-arr-filled';


// `increment` must be negative if you want the count to go down.

export function getCount(start, end, increment) {
	if (increment === 0)
		throw new Error('incrementor cannot be 0');
	// So first iteration of callback will work.
	// Also needed to calculate `difference`.
	start += -(increment);
	let difference = (start <= end ? end - start : start - end);
	let length = Math.floor(difference / Math.abs(increment));
	return getArrFilled(length, () => start += increment);
}
