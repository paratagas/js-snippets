const {
  composeFunctions,
  composeFunctionsPlusReversed,
} = require('../lib');

describe('Testing Functions:', () => {
  test('composeFunctions', () => {
    const firstHandler = arg => `${arg} && firstHandler`;
    const secondHandler = arg => `${arg} && secondHandler`;

    // Regular order in composition
    const composition = composeFunctions(
      firstHandler, // firstHandler first
      secondHandler
    );

    const expected = 'Initial value && firstHandler && secondHandler';
    expect(composition('Initial value')).toStrictEqual(expected);

    // Changing functions order in composeFunctions will get reversed result
    const compositionReversed = composeFunctions(
      secondHandler, // secondHandler first
      firstHandler
    );

    const expectedReversed = 'Initial value && secondHandler && firstHandler';
    expect(compositionReversed('Initial value')).toStrictEqual(expectedReversed);
  });

  test('composeFunctionsPlusReversed', () => {
    const firstHandler = arg => `${arg} && firstHandler`;
    const secondHandler = arg => `${arg} && secondHandler`;

    const composition = composeFunctionsPlusReversed(
      firstHandler,
      secondHandler
    );

    const expected = 'Initial value && firstHandler && secondHandler';

    // Regular order in composition: direction - undefined
    expect(composition('Initial value')).toStrictEqual(expected);
    // Regular order in composition: direction - false
    expect(composition('Initial value', false)).toStrictEqual(expected);
    // Reversed order in composition: direction - zero
    expect(composition('Initial value', 0)).toStrictEqual(expected);

    const expectedReversed = 'Initial value && secondHandler && firstHandler';

    // Reversed order in composition: direction - true
    expect(composition('Initial value', true)).toStrictEqual(expectedReversed);
    // Reversed order in composition: direction - non empty string ('reversed')
    expect(composition('Initial value', 'reversed')).toStrictEqual(expectedReversed);
    // Reversed order in composition: direction - positive number (1)
    expect(composition('Initial value', 1)).toStrictEqual(expectedReversed);
  });
});
