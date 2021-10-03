import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let arr = Array.from('' + n);
  let numbers = [];

  for(let i = 0; i < arr.length; i++) {
    let sum = '' 
    for(let n = 0; n < arr.length; n++) { 
      if(i == n) continue;
      sum += arr[n]
    }
    numbers.push(sum)
  }

  return Math.max(...numbers);
}
