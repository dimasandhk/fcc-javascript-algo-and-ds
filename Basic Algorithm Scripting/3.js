function findLongestWordLength(str) {
	str = str.split(" ").sort((a, b) => b.length - a.length)[0].length;
	return str;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
