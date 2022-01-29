function spinalCase(str) {
	str = str.replace(/([a-z](?=[A-Z]))/g, "$1 ");
	return str.toLowerCase().replace(/\ |\_/g, "-");
}

const res = spinalCase("This Is Spinal Tap");
console.log(res);
