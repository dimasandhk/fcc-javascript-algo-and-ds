function sentensify(str) {
	// Only change code below this line
	const punct = str.match(/[.,:!?-]/)[0];
	return str.split(punct).join(" ");
	// Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
