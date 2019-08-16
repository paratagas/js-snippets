/**
 * Compare if two numbers are nearly equal
 *
 * Time complexity: O(1)
 *
 * @param {number} number1 Number to compare with
 * @param {number} number2 Number to compare to
 *
 * @returns {boolean} Result of comparison: true if numbers are equal, false - if not
 */
const numbersAreNearlyEqual = (number1, number2) => Math.abs(number1 - number2) < Number.EPSILON;

/* export: */
exports.numbersAreNearlyEqual = numbersAreNearlyEqual;
