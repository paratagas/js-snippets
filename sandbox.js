/*
const {
  isPalindrome,
} = require('./lib');

console.log(isPalindrome('Was it a car or a cat I saw'));
*/

/*
const {
  trimString,
} = require('./lib');

console.log(trimString(' Some random string with spaces inside and  outside  '));
*/

/*
const {
  makeArrayUnique,
} = require('./lib');

console.log(makeArrayUnique([1, 2, 1, 6, 7, 7, 1, 8]));
console.log(makeArrayUnique([ 'str1', 'str2', 'str3', 'str1', 'str1' ]));
*/

/*
const {
  objectLogger,
} = require('./lib');

let objToLog = {};
let loggedObj = objectLogger(objToLog);
loggedObj.name = 'Evgeni';
loggedObj.age = 38;

*/

/*
const {
  numbersAreNearlyEqual,
} = require('./lib');

const num1 = 0.1 + 0.2;
const num2 = 0.3;
console.log(num1 === num2);
console.log(numbersAreNearlyEqual(num1, num2));
*/

const {
  createMatrixOfSymbols,
  createSlicedMatrixOfSymbols,
} = require('./lib');

// createMatrixOfSymbols(10, '&');
createSlicedMatrixOfSymbols(5, '*');
createSlicedMatrixOfSymbols(10, '=', false);
