function diffArray(arr1, arr2) {
	const newArr = [];

	arr1.forEach((item1) => {
		const sameItem = arr2.find((item2) => item2 == item1);
		if (!sameItem) newArr.push(item1);
	});

	arr2.forEach((item2) => {
		const sameItem = arr1.find((item1) => item1 == item2);
		if (!sameItem) newArr.push(item2);
	});

	return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
