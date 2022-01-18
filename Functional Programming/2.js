const squareList = (arr) => {
	// Only change code below this line
	const filtered = arr.filter((num) => {
		return String(num).indexOf(".") == -1 && num > 0;
	});
	return filtered.map((num) => num * num);
	// Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
