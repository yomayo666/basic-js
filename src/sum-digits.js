const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let an = 0
  if(Number.isInteger(n) === true ){
    br = 0
    n = String(n)
    if(n.length > 1){
      for(j of n){
        an += Number(j)
        if(String(an).length > 1){
          an = String(an)
          for(p in an){
            if(p == an.length - 1){
              br += Number(an[p])
              an = br 
              br = 0
            }else{
              br += Number(an[p])
            }
          }
        }
      }
    }
  }
  return an
}

module.exports = {
  getSumOfDigits
};
