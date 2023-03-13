function correct(string) {
	let stringArray = string.split('');
	let updatedStringArray = [];
	stringArray.forEach((letter) => {
		if (letter === '5') {
			updatedStringArray.push('S');
		} else if (letter === '0') {
			updatedStringArray.push('O');
		} else if (letter === '1') {
			updatedStringArray.push('I');
		} else {
			updatedStringArray.push(letter);
		}
	});
	return updatedStringArray.join('');
}

// top voted solution
// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
