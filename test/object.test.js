const {
  objectLogger,
} = require('../lib');

describe('Testing Objects:', () => {
  /* eslint-disable no-console, require-jsdoc, no-unused-expressions */
  test('objectLogger', () => {
    function Man(name, age, occupation) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
    }

    const man = new Man('Evgeni', 38, 'developer');
    let loggedMan = objectLogger(man);
    loggedMan.name = 'Eugene';
    loggedMan.name;
    console.log('absentProp in loggedMan: ', 'absentProp' in loggedMan);
    delete loggedMan.age;
    Object.defineProperty(loggedMan, 'newAge', { value: 37 });
  });
  /* eslint-enable */
});