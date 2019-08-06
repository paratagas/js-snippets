const {
	createTwoSetsIntersectionToSet,
	createTwoSetsIntersectionToArray,
	createThreeSetsIntersectionToSet,
	createThreeSetsIntersectionToArray,
} = require('../lib');

test('createTwoSetsIntersectionToSet', () => {
  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([2, 3]);
  const expectedResult = new Set([2, 3]);

  expect(createTwoSetsIntersectionToSet(setA, setB)).toStrictEqual(expectedResult);
});

test('createTwoSetsIntersectionToArray', () => {
  const setA = new Set([1, 2, 3, 4, 5, 10, 20]);
  const setB = new Set([5, 8, 20]);
  const expectedResult = [5, 20];

  expect(createTwoSetsIntersectionToArray(setA, setB)).toStrictEqual(expectedResult);
});

test('createThreeSetsIntersectionToSet', () => {
  const setA = new Set([1, 2, 3, 4, 2, 4, 4, 9, 4]);
  const setB = new Set([2, 3, 2, 7, 9]);
  const setC = new Set([2, 12, 10, 9]);
  const expectedResult = new Set([2, 9]);

  expect(createThreeSetsIntersectionToSet(setA, setB, setC)).toStrictEqual(expectedResult);
});

test('createThreeSetsIntersectionToArray', () => {
  const setA = new Set([1, 2, 3, 4, 2, 4, 4, 9, 4]);
  const setB = new Set([2, 3, 2, 7, 9]);
  const setC = new Set([2, 12, 10, 9]);
  const expectedResult = [2, 9];

  expect(createThreeSetsIntersectionToArray(setA, setB, setC)).toStrictEqual(expectedResult);
});
