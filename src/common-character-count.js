const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  rf = String(s2)
  let an = 0
  for(i of s1){
    if(rf.indexOf(i) !== -1){
      rf = rf.replace(i)
      an += 1
    }
  }
  return an
}

module.exports = {
  getCommonCharacterCount
};
