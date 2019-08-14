/* eslint-disable no-console */
/**
 * Create object-wrapper which logs significant object access events
 * Uses Proxy and Reflect API
 *
 * Time complexity: O(1)
 *
 * @param {object} obj Object to wrap in logger
 *
 * @returns {object} Object wrapped in logger
 */
function objectLogger(obj) {
  return new Proxy(obj, {
    set(target, propName, propValue, receiver) {
      console.group(`For logged object ${JSON.stringify(target)} was set:`);
      console.log(`Property ${propName} to value ${propValue}`);
      console.groupEnd();

      return Reflect.set(target, propName, propValue, receiver);
    },
    get(target, propName, receiver) {
      console.group(`From logged object ${JSON.stringify(target)} get:`);
      console.log(`Property ${propName} with value ${target[propName]}`);
      console.groupEnd();

      return Reflect.get(target, propName, receiver);
    },
    has(target, propName) {
      console.group(`In logged object ${JSON.stringify(target)} was checked property:`);
      console.log(propName);
      console.groupEnd();

      return Reflect.has(target, propName);
    },
    deleteProperty(target, propName) {
      console.group(`In logged object ${JSON.stringify(target)} was deleted property:`);
      console.log(propName);
      console.groupEnd();

      return Reflect.deleteProperty(target, propName);
    },
    defineProperty(target, propName, descriptor) {
      console.group(`In logged object ${JSON.stringify(target)} was defined property:`);
      console.log(propName);
      console.groupEnd();

      return Reflect.defineProperty(target, propName, descriptor);
    }
  });
}
/* eslint-enable */

/* export: */
exports.objectLogger = objectLogger;
