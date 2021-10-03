/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 * aabbccdc
 */
export default function encodeLine(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    let value = 1;

    while (str[i] == str[i + value] && str[i] != str[i - 1]) {
      count++;
      value++;
    }

    if (count == 1 && str[i - 1] != str[i]) arr.push(str[i]);
    if (count > 1) arr.push(`${count + str[i]}`);
  }

  return arr.join("");
}
