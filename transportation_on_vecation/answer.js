function rentalCarCost(days) {
	if (days < 3) {
		return 40 * days;
	}
	if (days < 7) {
		return 40 * days - 20;
	} else {
		return 40 * days - 50;
	}
}
