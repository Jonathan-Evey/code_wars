const moveZeros = (array) => {
	let sortedArray = [];
	let zeroCount = 0;
	array.forEach((element) => {
		if (element === 0) {
			zeroCount = zeroCount + 1;
		} else {
			sortedArray.push(element);
		}
	});
	for (let i = 0; i < zeroCount; i++) {
		sortedArray.push(0);
	}
	return sortedArray;
};
