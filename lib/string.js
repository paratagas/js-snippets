/**
 * Reverse given string to opposite order
 *
 * Time complexity: O(n)
 *
 * @param {string} str String to reverse
 *
 * @returns {string} Reversed string
 */
const reverseString = str => str.split('').reverse().join('');

/**
 * Remove all spaces in given string: both inside and outside
 *
 * Time complexity: O(n)
 *
 * @param {string} str String to trim
 *
 * @returns {string} Trimmed string
 */
const trimString = str => str.replace(/\s/g, '');

/**
 * Check if string is palindrome:
 * sequence of characters which reads the same backward as forward
 * e.g. 'level' -> 'level', 'Racecar' -> 'racecaR', 'Step on no pets' -> 'step on no petS'
 *
 * Time complexity: O(n)
 *
 * @param {string} str String to check
 *
 * @returns {boolean} Result of check: true - if is palindome, false - if not
 */
function isPalindrome(str) {
  const strPrepared = trimString(str.toLocaleLowerCase());
  const length = strPrepared.length;
  const pivot = length % 2;
  const firstPart = strPrepared.substr(0, length / 2);
  const secondPart = strPrepared.substr((length / 2 + pivot));

  return firstPart === reverseString(secondPart);
}

/* export: */
exports.reverseString = reverseString;
exports.trimString = trimString;
exports.isPalindrome = isPalindrome;
