const isValidEyes = (character) => {
	let validFaceEyes = [';', ':'];
	if (
		character === validFaceEyes[0] ||
		character === validFaceEyes[1]
	) {
		return true;
	} else {
		return false;
	}
};
const isValidNose = (character) => {
	let validFaceNose = ['-', '~'];
	if (
		character === validFaceNose[0] ||
		character === validFaceNose[1]
	) {
		return true;
	} else {
		return false;
	}
};
const isValidMouth = (character) => {
	let validFaceMouth = [')', 'D'];
	if (
		character === validFaceMouth[0] ||
		character === validFaceMouth[1]
	) {
		return true;
	} else {
		return false;
	}
};

function countSmileys(array) {
	if (array.length === 0) {
		return 0;
	}
	let faceCount = 0;
	array.forEach((element) => {
		if (element.split('').length === 2) {
			if (
				isValidEyes(element.split('')[0]) &&
				isValidMouth(element.split('')[1])
			) {
				faceCount = faceCount + 1;
			}
		}
		if (element.split('').length === 3) {
			if (isValidEyes(element.split('')[0])) {
				if (
					isValidNose(element.split('')[1]) &&
					isValidMouth(element.split('')[2])
				) {
					faceCount = faceCount + 1;
				}
			}
		}
	});
	return faceCount;
}
