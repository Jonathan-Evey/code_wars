function squareDigits(num) {
	let numArray = num.toString().split('');
	let newNumArray = [];
	numArray.forEach((number) => {
		let newNumber = parseInt(number) * parseInt(number);
		newNumArray.push(newNumber);
	});
	return parseInt(newNumArray.join(''));
}
