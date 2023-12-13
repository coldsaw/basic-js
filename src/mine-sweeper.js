const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = JSON.parse(JSON.stringify(matrix));
  newMatrix.forEach((arr) => {
    arr.fill(0);
  });

  matrix.forEach((row, r) => {
    row.forEach((col, c) => {
      if (matrix[r][c] === true) {
        for (let i = r - 1; i <= r + 1; i += 1) {
          for (let j = c - 1; j <= c + 1; j += 1) {
            if (
              i >= 0 &&
              j >= 0 &&
              i < matrix.length &&
              j < row.length &&
              (i !== r) | (j !== c)
            ) {
              newMatrix[i][j] += 1;
            }
          }
        }
      }
    });
  });
  return newMatrix;
}
module.exports = {
  minesweeper,
};
