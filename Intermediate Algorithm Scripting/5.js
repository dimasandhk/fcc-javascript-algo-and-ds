function whatIsInAName(collection, source) {
	const arr = [];
	// Only change code below this line
	const props = Object.keys(source);
	collection.forEach((data) => {
		if (props.every((prop) => data[prop] == source[prop])) {
			arr.push(data);
		}
	});

	// Only change code above this line
	return arr;
}

const res = whatIsInAName(
	[
		{ first: "Romeo", last: "Montague" },
		{ first: "Mercutio", last: null },
		{ first: "Tybalt", last: "Capulet" }
	],
	{ last: "Capulet" }
);
console.log(res);

const res2 = whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
	apple: 1,
	bat: 2
});
console.log(res2);
