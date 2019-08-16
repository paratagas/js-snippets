const {
  numbersAreNearlyEqual,
} = require('../lib');

describe('Testing Numbers:', () => {
  test('numbersAreNearlyEqual', () => {
    const num1 = 0.1 + 0.2;
    const num2 = 0.3;

    expect(num1 === num2).not.toStrictEqual(true);
    expect(numbersAreNearlyEqual(num1, num2)).toStrictEqual(true);
  });
});
