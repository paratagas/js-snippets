/**
 * Create function-conveyor for step by step data processing
 * Output result of previous step becomes input value for next step
 *
 * Time complexity: O(n)
 *
 * @param {array} functions List of functions
 *
 * @returns {function} Functions composer
 */
const composeFunctions = (...functions) => (initialValue) =>
  functions.reduce(
    (composedValue, func) => func(composedValue),
    initialValue
  );

/**
 * Create function-conveyor for step by step data processing
 * Output result of previous step becomes input value for next step
 * Can change applied handlers order to reversed (default: first to last)
 *
 * Time complexity: O(n)
 *
 * @param {array} functions List of functions
 *
 * @returns {function} Functions composer
 */
const composeFunctionsPlusReversed = (...functions) => (initialValue, reversed) => {
  const direction = reversed ? 'reduceRight' : 'reduce';

  return functions[direction](
    (composedValue, func) => func(composedValue),
    initialValue
  );
};

/* export: */
exports.composeFunctions = composeFunctions;
exports.composeFunctionsPlusReversed = composeFunctionsPlusReversed;
