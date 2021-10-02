import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  if (typeof matrix != 'object' || matrix.length == 0) return 0;
  let number = 0;
  let count = 0;
  let newArr = [];
  newArr = newArr.concat(...matrix);
  newArr.forEach(item => {
    if (item == '^^') count++;
  });
  return count;
}
