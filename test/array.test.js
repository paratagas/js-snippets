const {
  checkArrayForDuplicates,
  makeArrayUnique,
  createTwoArraysUniqueUnion,
  createTwoArraysUniqueDifferenceUnion,
} = require('../lib');

describe('Testing Arrays:', () => {
  test('checkArrayForDuplicates', () => {
    const arrayA = [ 1, 2, 3, 4, 5, 6 ];
    const arrayB = [ 1, 1, 2, 3, 4, 5, 4 ];

    expect(checkArrayForDuplicates(arrayA)).toStrictEqual(false);
    expect(checkArrayForDuplicates(arrayB)).toStrictEqual(true);
  });

  test('makeArrayUnique', () => {
    const arrayA = [ 1, 2, 1, 6, 7, 7, 1, 8 ];
    const expectedA = [ 1, 2, 6, 7, 8 ];
    expect(makeArrayUnique(arrayA)).toStrictEqual(expectedA);

    const arrayB = [ 'str1', 'str2', 'str3', 'str1', 'str1' ];
    const expectedB = [ 'str1', 'str2', 'str3' ];
    expect(makeArrayUnique(arrayB)).toStrictEqual(expectedB);
  });

  test('createTwoArraysUniqueUnion', () => {
    expect(createTwoArraysUniqueUnion([ 1, 1, 2, 2 ], [ 2, 3, 4, 5 ])).toStrictEqual([ 1, 2, 3, 4, 5 ]);
    expect(createTwoArraysUniqueUnion([ 1, 2 ], [ 3, 4, 5 ])).toStrictEqual([ 1, 2, 3, 4, 5 ]);
    expect(createTwoArraysUniqueUnion([], [ 2, 2, 3, 4, 5 ])).toStrictEqual([ 2, 3, 4, 5 ]);
  });

  test('createTwoArraysUniqueDifferenceUnion', () => {
    expect(createTwoArraysUniqueDifferenceUnion([ 1, 1, 2, 2 ], [ 2, 3, 4, 5 ])).toStrictEqual([ 1, 3, 4, 5 ]);
  });
});
