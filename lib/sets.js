/**
* Create intersection of two sets
* 
* @param {set} setA First set
* @param {set} setB Second set
* 
* @return {set} Intersection of two sets
*/
function createTwoSetsIntersectionToSet (setA, setB) {
  let intersection = new Set();

  for (let elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }

  return intersection;
}

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([2, 3]);

createTwoSetsIntersectionToSet(set1, set2); // Set {2, 3}

/**
* Create intersection of two sets
* 
* @param {set} setA First set
* @param {set} setB Second set
* 
* @return {array} Intersection of two sets
*/
function createTwoSetsIntersectionToArray (setA, setB) {
  let intersection = [];

  for (let elem of setB) {
    if (setA.has(elem)) {
      intersection.push(elem);
    }
  }

  return intersection;
}

const set3 = new Set([1, 2, 3, 4]);
const set4 = new Set([2, 3]);

createTwoSetsIntersectionToArray(set3, set4); // [2, 3]

/**
* Create intersection of three sets
* 
* @param {set} setA First set
* @param {set} setB Second set
* @param {set} setC Third set
* 
* @return {set} Intersection of three sets
*/
function createThreeSetsIntersectionToSet (setA, setB, setC) {
  let intersection = new Set();
  
  for (let elem of setA) {
    if (setB.has(elem) && setC.has(elem)) {
      intersection.add(elem);
    }
  }
  
  return intersection;
}
   
const set5 = new Set([1, 2, 3, 4, 2, 4, 4, 9, 4]);
const set6 = new Set([2, 3, 2, 7, 9]);
const set7 = new Set([2, 12, 10, 9]);

createThreeSetsIntersectionToSet(set5, set6, set7); // Set {2, 9}

/**
* Create intersection of three sets
* 
* @param {set} setA First set
* @param {set} setB Second set
* @param {set} setC Third set
* 
* @return {array} Intersection of three sets
*/
function createThreeSetsIntersectionToArray (setA, setB, setC) {
  let intersection = [];
  
  for (let elem of setA) {
    if (setB.has(elem) && setC.has(elem)) {
      intersection.push(elem);
    }
  }
  
  return intersection;
}
   
const set8 = new Set([1, 2, 3, 4, 2, 4, 4, 9, 4]);
const set9 = new Set([2, 3, 2, 7, 9]);
const set10 = new Set([2, 12, 10, 9]);

createThreeSetsIntersectionToArray(set8, set9, set10); // [2, 9]

/* exports: */
exports.createTwoSetsIntersectionToSet = createTwoSetsIntersectionToSet;
exports.createTwoSetsIntersectionToArray = createTwoSetsIntersectionToArray;
exports.createThreeSetsIntersectionToSet = createThreeSetsIntersectionToSet;
exports.createThreeSetsIntersectionToArray = createThreeSetsIntersectionToArray;
