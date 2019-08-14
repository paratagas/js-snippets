const {
  reverseString,
  trimString,
  isPalindrome,
} = require('../lib');

describe('Testing Strings:', () => {
  test('reverseString', () => {
    expect(reverseString('javascript')).toStrictEqual('tpircsavaj');
    expect(reverseString('javascript')).not.toStrictEqual('javascript');
  });

  test('trimString', () => {
    const str = ' Some random string with spaces inside and  outside  ';
    const expected = 'Somerandomstringwithspacesinsideandoutside';

    expect(trimString(str)).toStrictEqual(expected);
  });

  test('isPalindrome', () => {
    expect(isPalindrome('Radar')).toStrictEqual(true);
    expect(isPalindrome('RaceCar')).toStrictEqual(true);
    expect(isPalindrome('zaaz')).toStrictEqual(true);
    expect(isPalindrome('string')).not.toStrictEqual(true);
    expect(isPalindrome('Was it a car or a cat I saw')).toStrictEqual(true);
  });
});
