function sumAll(arr) {
	arr.sort((a, b) => a - b);

	let total = 0;
	while (arr[0] <= arr[1]) {
		total += arr[0];
		arr[0]++;
	}

	return total;
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));
