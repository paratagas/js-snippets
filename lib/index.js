/* import begin */

// array:
const {
  checkArrayForDuplicates,
  makeArrayUnique,
  createTwoArraysUniqueUnion,
  createTwoArraysUniqueDifferenceUnion,
} = require('./array');

// function:
const {
  composeFunctions,
  composeFunctionsPlusReversed,
} = require('./function');

// object:
const {
  objectLogger,
} = require('./object');

// set:
const {
  createTwoSetsIntersection,
  createThreeSetsIntersection,
  isSuperset,
  uniteTwoSets,
  uniteManySets,
  createTwoSetsDifference,
} = require('./set');

// string:
const {
  reverseString,
  trimString,
  isPalindrome,
} = require('./string');

/* import end */

/* export begin */

// array:
exports.checkArrayForDuplicates = checkArrayForDuplicates;
exports.makeArrayUnique = makeArrayUnique;
exports.createTwoArraysUniqueUnion = createTwoArraysUniqueUnion;
exports.createTwoArraysUniqueDifferenceUnion = createTwoArraysUniqueDifferenceUnion;

// function:
exports.composeFunctions = composeFunctions;
exports.composeFunctionsPlusReversed = composeFunctionsPlusReversed;

// object:
exports.objectLogger = objectLogger;

// set:
exports.createTwoSetsIntersection = createTwoSetsIntersection;
exports.createThreeSetsIntersection = createThreeSetsIntersection;
exports.isSuperset = isSuperset;
exports.uniteTwoSets = uniteTwoSets;
exports.uniteManySets = uniteManySets;
exports.createTwoSetsDifference = createTwoSetsDifference;

// string:
exports.reverseString = reverseString;
exports.trimString = trimString;
exports.isPalindrome = isPalindrome;

/* export end */
