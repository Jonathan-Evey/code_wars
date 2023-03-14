const rot13 = (message) => {
	let codedMessage = [];
	console.log(codedMessage);
	for (let i = 0; i < message.length; i++) {
		if (
			message.charCodeAt(i) > 64 &&
			message.charCodeAt(i) < 91
		) {
			if (message.charCodeAt(i) + 13 > 90) {
				codedMessage.push(
					String.fromCharCode(
						64 + (message.charCodeAt(i) + 13 - 90)
					)
				);
			} else {
				codedMessage.push(
					String.fromCharCode(message.charCodeAt(i) + 13)
				);
			}
		} else if (
			message.charCodeAt(i) > 96 &&
			message.charCodeAt(i) < 123
		) {
			if (message.charCodeAt(i) + 13 > 122) {
				codedMessage.push(
					String.fromCharCode(
						96 + (message.charCodeAt(i) + 13 - 122)
					)
				);
			} else {
				codedMessage.push(
					String.fromCharCode(message.charCodeAt(i) + 13)
				);
			}
		} else {
			codedMessage.push(message.charAt(i));
		}
	}
	console.log(codedMessage.join(''));
};

rot13('test');
