const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let result = '';
  let acc = 1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i + 1]) {
      acc += 1;
    } else {
      if (acc > 1) {
        result += acc;
      }
      result += arr[i];
      acc = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
