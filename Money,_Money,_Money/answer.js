function calculateYears(principal, interest, tax, desired) {
	let currentSum = principal;
	let years = 0;
	if (principal === desired) {
		return 0;
	}
	while (currentSum < desired) {
		let thisYearsInterest = interest * currentSum;
		console.log(thisYearsInterest);
		let taxOwed = thisYearsInterest * tax;
		console.log(thisYearsInterest);
		let interestAfterTax = thisYearsInterest - taxOwed;
		console.log(interestAfterTax);
		currentSum = currentSum + interestAfterTax;
		years = years + 1;
	}
	return years;
}
