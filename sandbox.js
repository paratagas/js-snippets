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

const {
  objectLogger,
} = require('./lib');

let objToLog = {};
let loggedObj = objectLogger(objToLog);
loggedObj.name = 'Evgeni';
loggedObj.age = 38;
