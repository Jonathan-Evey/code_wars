const humanYearsCatYearsDogYears = (humanYears) => {
	let catsAge = 0;
	let dogsAge = 0;
	for (let i = 1; i <= humanYears; i++) {
		if (i === 1) {
			console.log('one');
			catsAge = catsAge + 15;
			dogsAge = dogsAge + 15;
		}
		if (i === 2) {
			catsAge = catsAge + 9;
			dogsAge = dogsAge + 9;
		}
		if (i > 2) {
			catsAge = catsAge + 4;
			dogsAge = dogsAge + 5;
		}
	}

	return [humanYears, catsAge, dogsAge];
};
