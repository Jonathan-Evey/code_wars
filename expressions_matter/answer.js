function expressionMatter(a, b, c) {
	let array = [a, b, c];
	let one = array[0] * (array[1] + array[2]);
	let two = array[0] * array[1] * array[2];
	let three = array[0] + array[1] * array[2];
	let four = (array[0] + array[1]) * array[2];
	let five = array[0] + array[1] + array[2];
	let newArray = [one, two, three, four, five];
	newArray = newArray.sort((a, b) => {
		return b - a;
	});
	return newArray[0];
}
