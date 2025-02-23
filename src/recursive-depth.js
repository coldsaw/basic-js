const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return false;
    }

    let maxDepth = 1;

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        let depth = 1 + this.calculateDepth(el);
        maxDepth = Math.max(depth, maxDepth);
      }
    });
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
