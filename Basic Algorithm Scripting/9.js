function mutation(arr) {
	arr.forEach((str, i) => (arr[i] = str.toLowerCase().split("")));
	let bool = true;

	arr[1].forEach((letter) => {
		if (!arr[0].find((letter2) => letter == letter2)) {
			bool = false;
		}
	});
	return bool;
}

console.log(mutation(["hello", "hey"]));
