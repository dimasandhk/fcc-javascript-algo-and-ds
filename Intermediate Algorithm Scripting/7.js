const MAP = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&apos;"
};

function convertHTML(str) {
	return str.replace(/[&<>"']/g, (i) => MAP[i]);
}

console.log(convertHTML("Dolce & Gabbana"));
