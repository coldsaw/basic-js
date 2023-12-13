const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n
    .toString()
    .split('')
    .map((num) => Number(num));
  let min = arr.length - 1;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < arr[i + 1]) {
      min = i;
      i = arr.length;
    }
  }
  arr.splice(min, 1);
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit,
};
