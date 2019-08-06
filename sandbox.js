const {
	createTwoSetsIntersectionToSet,
} = require('./lib');

const set1 = new Set([1, 2, 3, 4, 5, 10, 20]);
const set2 = new Set([5, 8, 20]);

console.log(createTwoSetsIntersectionToSet(set1, set2)); // Set {5, 20}
