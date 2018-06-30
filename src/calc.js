let _ = require("lodash");

export function dynamic(distance, spacers) {
	let table = [];
	let lastSpacer = [];
	let solutions = [];

	for (let i = 0; i <= distance; i++) {
		table.push(Number.MAX_SAFE_INTEGER);
		lastSpacer.push(-1);
	}
	table[0] = 0;

	// find number of spacers in optimal solution
	for (let i = 0; i < spacers.length; i++) {
		for (let j = 0; j <= distance; j++) {
			if (j >= spacers[i].length) {
				table[j] = Math.min(table[j], table[j - spacers[i].length] + 1);

				if (table[j] === (table[j - spacers[i].length]) + 1) {
					lastSpacer[j] = i;
				}
			}
		}
	}

	let numSpacers = table[distance];
	if (numSpacers === 0 || numSpacers === Number.MAX_SAFE_INTEGER) {
		return undefined;
	}

	// find which spacers were used
	do {
		solutions.push(lastSpacer[distance]);
		distance -= spacers[lastSpacer[distance]].length;
		numSpacers--;
	} while (lastSpacer[distance] > -1);

	let sumSpacers = 0;

	for (let i = 0; i < solutions.length; i++) {
		sumSpacers += spacers[solutions[i]].length;
		spacers[solutions[i]].quantity++;
	}
	return spacers;
}

export function greedy(distance, spacers) {
	let sortedSpacers = _.sortBy(spacers, [function(o) {
		return o.length;		
	}]);

	for (let i = sortedSpacers.length - 1; i >= 0; i--) {
		while (sortedSpacers[i].length < distance) {
			distance -= sortedSpacers[i].length;
			sortedSpacers[i].quantity++;
		}
	}

	return sortedSpacers;
}