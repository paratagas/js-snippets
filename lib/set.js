/**
 * Create intersection of two sets
 *
 * Time complexity: O(n)
 * 
 * @param {set} setA First set
 * @param {set} setB Second set
 * 
 * @returns {set} Intersection of two sets
 */
function createTwoSetsIntersection(setA, setB) {
  let intersection = new Set();

  for (let item of setB) {
    if (setA.has(item)) {
      intersection.add(item);
    }
  }

  return intersection;
}

/**
 * Create intersection of three sets
 *
 * Time complexity: O(n)
 * 
 * @param {set} setA First set
 * @param {set} setB Second set
 * @param {set} setC Third set
 * 
 * @returns {set} Intersection of three sets
 */
function createThreeSetsIntersection(setA, setB, setC) {
  let intersection = new Set();
  
  for (let item of setA) {
    if (setB.has(item) && setC.has(item)) {
      intersection.add(item);
    }
  }
  
  return intersection;
}

/**
 * Check whether one set is a superset of another (contains all the items of the other set)
 *
 * Time complexity: O(n)
 * 
 * @param {set} superset Tested to be superset
 * @param {set} subset All its items supposed to be in superset
 * 
 * @returns {boolean} Value of check
 */
function isSuperset(superset, subset) {
  for (let item of subset) {
    if (!superset.has(item)) {
      return false;
    }
  }

  return true;
}

/**
 * Create a new set of two united sets without duplicates
 *
 * Time complexity: O(n). For more than 2 sets use uniteManySets
 *
 * @param {set} setA Set to unite
 * @param {set} setB Set to unite
 *
 * @returns {set} United two sets (unsorted)
 */
function uniteTwoSets(setA, setB) {
  let union = new Set(setA);

  for (let item of setB) {
    union.add(item);
  }

  return union;
}

/**
 * Create a new set of many united sets without duplicates
 *
 * Time complexity: O(n2). For 2 sets use uniteTwoSets
 *
 * @param {set} sets Sets to unite
 *
 * @returns {set} United sets (unsorted)
 */
function uniteManySets(...sets) {
  let union = new Set();

  for (let set of sets) {
    for (let item of set) {
      union.add(item);
    }
  }

  return union;
}

/**
 * Create difference of setA from setB:
 * all of the elements in setA that are not in setB
 *
 * Time complexity: O(n)
 *
 * @param {set} setA Set to check for different items
 * @param {set} setB Set to compare to
 *
 * @returns {set} Difference
 */
function createTwoSetsDifference(setA, setB) {
  let difference = new Set(setA);

  for (let item of setB) {
    difference.delete(item);
  }

  return difference;
}

/* export: */
exports.createTwoSetsIntersection = createTwoSetsIntersection;
exports.createThreeSetsIntersection = createThreeSetsIntersection;
exports.isSuperset = isSuperset;
exports.uniteTwoSets = uniteTwoSets;
exports.uniteManySets = uniteManySets;
exports.createTwoSetsDifference = createTwoSetsDifference;
