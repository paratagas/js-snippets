const {
  createTwoSetsIntersection,
  createThreeSetsIntersection,
  isSuperset,
  uniteTwoSets,
  uniteManySets,
  createTwoSetsDifference,
} = require('../lib');

describe('Testing Sets:', () => {
  test('createTwoSetsIntersection', () => {
    const setA = new Set([ 1, 2, 3, 4 ]);
    const setB = new Set([ 2, 3 ]);
    const expected = new Set([ 2, 3 ]);
    const expectedToArray = Array.from(new Set([ 2, 3 ]));

    expect(createTwoSetsIntersection(setA, setB)).toStrictEqual(expected);
    expect(Array.from(createTwoSetsIntersection(setA, setB))).toStrictEqual(expectedToArray);
  });

  test('createThreeSetsIntersection', () => {
    const setA = new Set([ 1, 2, 3, 4, 2, 4, 4, 9, 4 ]);
    const setB = new Set([ 2, 3, 2, 7, 9 ]);
    const setC = new Set([ 2, 12, 10, 9 ]);
    const expected = new Set([ 2, 9 ]);

    expect(createThreeSetsIntersection(setA, setB, setC)).toStrictEqual(expected);
  });

  test('isSuperset', () => {
    const setA = new Set([ 1, 2, 3, 4 ]);
    const setB = new Set([ 2, 3 ]);
    const setC = new Set([ 1, 5 ]);
    const expected = true;

    expect(isSuperset(setA, setB)).toStrictEqual(expected);
    expect(isSuperset(setA, setC)).not.toStrictEqual(expected);
  });

  test('uniteTwoSets', () => {
    const setA = new Set([ 1, 2, 3, 4, 5, 10, 20 ]);
    const setB = new Set([ 5, 8, 20 ]);
    const expected = new Set([ 1, 2, 3, 4, 5, 10, 20, 8 ]);

    expect(uniteTwoSets(setA, setB)).toStrictEqual(expected);
  });

  test('uniteManySets', () => {
    const setA = new Set([ 1, 2, 3, 4, 5, 10, 20 ]);
    const setB = new Set([ 5, 8, 20 ]);
    const setC = new Set([ 22 ]);
    const expected = new Set([ 1, 2, 3, 4, 5, 10, 20, 8, 22 ]);

    expect(uniteManySets(setA, setB, setC)).toStrictEqual(expected);
  });

  test('createTwoSetsDifference', () => {
    const setA = new Set([ 1, 2, 3, 4, 5, 10, 20 ]);
    const setB = new Set([ 5, 8, 20 ]);
    const expected = new Set([ 1, 2, 3, 4, 10 ]);

    expect(createTwoSetsDifference(setA, setB)).toStrictEqual(expected);
  });
});
