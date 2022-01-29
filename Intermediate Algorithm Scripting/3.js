function destroyer(arr, ...args) {
	args.forEach((value) => {
		let i = 0;
		while (i < arr.length) {
			if (arr[i] === value) {
				arr.splice(i, 1);
			} else {
				++i;
			}
		}
	});

	return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
