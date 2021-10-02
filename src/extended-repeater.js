/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  
  let parameters = {
    repeatTimes: Number(options.repeatTimes),
    separator: String(options.separator || '+'),
    addition: String(options.addition),
    additionRepeatTimes: Number(options.additionRepeatTimes),
    additionSeparator: String(options.additionSeparator || '|')
  }

  let STR = '';
  let result = [];

  if (options.additionRepeatTimes != 0 && options.additionRepeatTimes != undefined) {
    for (let i = 1; i <= parameters.additionRepeatTimes; i++) {
      if (i == 1) STR += str;
      STR += parameters.addition;
      if (i == parameters.additionRepeatTimes) break;
      STR += parameters.additionSeparator;
    }
  } else {
    STR += str;
  }

  if (options.repeatTimes == undefined && options.additionRepeatTimes == undefined) return STR + options.addition;
  if (options.repeatTimes == undefined) return STR;

  for (let i = 1; i <= parameters.repeatTimes; i++) {
    result.push(STR);
    if (i == parameters.repeatTimes) break;
    result.push(parameters.separator);
  }

  return result.join('');
}
