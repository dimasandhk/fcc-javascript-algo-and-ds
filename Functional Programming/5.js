// Only change code below this line
function urlSlug(title) {
	return title.trim().split(/\s+/).join("-").toLowerCase();
}
// Only change code above this line
const res = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(urlSlug(" Winter Is  Coming"));
console.log(res);
