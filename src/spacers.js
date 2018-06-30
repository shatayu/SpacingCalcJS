 export function getSpacers() {
	function Spacer (length, name, ID) {
		this.length = length;
		this.name = name;
		this.ID = ID;
		this.quantity = 0;
	}

	var spacers = [];

	if (document.getElementById("s125").checked) {
		spacers.push(new Spacer(125, "0.125 Spacer (Nylon)", "s125"));
	}

	if (document.getElementById("s250").checked) {
		spacers.push(new Spacer(250, "0.250 Spacer (Nylon)", "s250"));
	}

	if (document.getElementById("s375").checked) {
		spacers.push(new Spacer(375, "0.375 Spacer (Nylon)", "s375"));
	}

	if (document.getElementById("s500").checked) {
		spacers.push(new Spacer(500, "0.500 Spacer (Nylon)", "s500"));
	}

	if (document.getElementById("s190").checked) {
		spacers.push(new Spacer(190, "4.6mm Spacer", "s190"));
	}

	if (document.getElementById("s330").checked) {
		spacers.push(new Spacer(330, "8mm Spacer", "s330"));
	}

	if (document.getElementById("s32").checked) {
		spacers.push(new Spacer(32, "Steel Washer (0.032)", "s32"));
	}

	if (document.getElementById("s40").checked) {
		spacers.push(new Spacer(40, "Teflon Washer (0.040)", "s40"));
	}

	return spacers;
}

export function displaySpacer(spacer) {
	let element = document.createElement("div");
	element.innerHTML = spacer.name + " (x" + spacer.quantity + ")";
	return element;
}
