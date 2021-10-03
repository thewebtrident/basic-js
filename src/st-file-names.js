/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let times = 0;
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    for (let n = 0; n <= i; n++) {
      if (names[i] == names[n]) times++;
    }

    if (times > 1) {
      arr.push(names[i] + `(${times - 1})`);
    } else {
      arr.push(names[i]);
    }
    times = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) arr = renameFiles(arr);
  }

  return arr;
}
