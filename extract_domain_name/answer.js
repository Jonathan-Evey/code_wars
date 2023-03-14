const domainName = (url) => {
	let spliturl = url.split('.');
	if (spliturl[0].includes('www')) {
		console.log(spliturl[1]);
		return spliturl[1];
	}
	if (spliturl[0].includes('//')) {
		return spliturl[0].split('//')[1];
	}
	return spliturl[0];
};
