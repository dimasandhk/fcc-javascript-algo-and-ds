// let arr1= [1, 2, 3];
// let arr2 =[4, 5, 6];
// let n = 1;

// arr2.splice(n, 0, ...arr1);
// console.log(arr2)

function frankenSplice(arr1, arr2, n) {
	let res = arr2.slice();
	res.splice(n, 0, ...arr1);
	return res;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
