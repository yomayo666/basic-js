const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if(Array.isArray(arr) === true){
    let sc =0
    let arr2 = []
    let anc = []
    for(i of arr){
      if(i != -1){
        arr2.push(i)
      }
    }
    arr2.sort(function(a, b) {
      return a - b;
    });
    for(i in arr){
      if(arr[i] == -1){
        anc.push(arr[i])
      }else{
        anc.push(arr2[sc])
        sc += 1
      }

  }
  return anc
}
}

module.exports = {
  sortByHeight
};
