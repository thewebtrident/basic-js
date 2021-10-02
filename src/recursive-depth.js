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
export default class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let itemsDepth = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        return itemsDepth.push(count + this.calculateDepth(item));
      }
    });
    if (itemsDepth.length == 0) return count;
    if (itemsDepth.length >= 1) return Math.max(...itemsDepth);
  }
}
