/**
 * Check if array has duplicates
 *
 * Time complexity: O(n)
 *
 * @param {array} arr Array to check duplicates in
 *
 * @returns {boolean} True if has duplicates, false - if doesn't
 */
const checkArrayForDuplicates = arr => new Set(arr).size !== arr.length;

/**
 * Removes all duplicated items from array of numbers or strings
 *
 * Time complexity: O(n)
 *
 * @param {array} arr Array to make unique
 *
 * @returns {array} Array without duplicates
 */
const makeArrayUnique = arr => [ ...new Set(arr) ];

/**
 * Create array that has all the unique elements from both of the original arrays
 *
 * Time complexity: O(n)
 *
 * @param {array} arrA Array with duplicated items
 * @param {array} arrB Array with duplicated items
 *
 * @returns {array} Unique union of arrA and arrB
 */
const createTwoArraysUniqueUnion = (arrA, arrB) => Array.from(new Set(arrA.concat(arrB)));

/**
 * Create array that has all the unique elements from arrA and not from arrB
 * and all the unique elements from arrB and not from arrA
 *
 * Time complexity: O(n + m)
 *
 * @param {array} arrA Array with duplicated items
 * @param {array} arrB Array with duplicated items
 *
 * @returns {array} Unique union of different items from arrA and arrB
 */
function createTwoArraysUniqueDifferenceUnion(arrA, arrB) {
  const uniqueArr1 = new Set(arrA);
  const uniqueArr2 = new Set(arrB);

  for (let item of arrA) {
    uniqueArr2.delete(item);
  }

  for (let item of arrB) {
    uniqueArr1.delete(item);
  }

  return [ ...uniqueArr1, ...uniqueArr2 ];
}

/* export: */
exports.checkArrayForDuplicates = checkArrayForDuplicates;
exports.makeArrayUnique = makeArrayUnique;
exports.createTwoArraysUniqueUnion = createTwoArraysUniqueUnion;
exports.createTwoArraysUniqueDifferenceUnion = createTwoArraysUniqueDifferenceUnion;
