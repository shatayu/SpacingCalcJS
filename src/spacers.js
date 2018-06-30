 export function getSpacers() {
	function Spacer (length, name, ID) {
		this.length = length;
		this.name = name;
		this.ID = ID;
		this.quantity = 0;
	}

	var spacers = [];

	if (document.getElementById("s125").checked) {
		spacers.push(new Spacer(125, "1/8\" SPACER", "s125"));
	}

	if (document.getElementById("s250").checked) {
		spacers.push(new Spacer(250, "1/4\" SPACER", "s250"));
	}

	if (document.getElementById("s375").checked) {
		spacers.push(new Spacer(375, "3/8\" SPACER", "s375"));
	}

	if (document.getElementById("s500").checked) {
		spacers.push(new Spacer(500, "1/2\" SPACER", "s500"));
	}

	if (document.getElementById("s190").checked) {
		spacers.push(new Spacer(190, "4.6MM SPACER", "s190"));
	}

	if (document.getElementById("s330").checked) {
		spacers.push(new Spacer(330, "8MM SPACER", "s330"));
	}

	if (document.getElementById("s32").checked) {
		spacers.push(new Spacer(32, "STEEL WASHER", "s32"));
	}

	if (document.getElementById("s40").checked) {
		spacers.push(new Spacer(40, "TEFLON WASHER", "s40"));
	}

	return spacers;
}

export function displaySpacer(spacer) {
	let element = document.createElement("div");
	element.innerHTML = spacer.name + " (x" + spacer.quantity + ")";
	return element;
}
