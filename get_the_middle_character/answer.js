function getMiddle(word) {
	if (word.split('').length % 2 === 0) {
		let wordArray = word.split('');
		let middle = wordArray.length / 2;
		return wordArray[middle - 1] + wordArray[middle];
	} else {
		let half = (word.split('').length - 1) / 2;
		return word.split('')[half];
	}
}
