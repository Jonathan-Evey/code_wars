const pickPeaks = (array) => {
	let answer = {
		pos: [],
		peaks: [],
	};

	array.forEach((element, index) => {
		if (element > array[index + 1]) {
			for (let i = index - 1; i >= 0; i--) {
				if (array[i] > element) {
					i = -1;
					return;
				}
				if (array[i] < element) {
					console.log(i);

					answer.pos = [...answer.pos, i + 1];
					answer.peaks = [...answer.peaks, array[i + 1]];
					i = -1;
					return;
				}
			}
		}
	});
	return answer;
};
