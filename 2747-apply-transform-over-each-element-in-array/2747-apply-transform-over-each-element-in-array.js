/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

let map = function(arr, fn) {
    let new_arr = [];
    for (let i = 0; i < arr.length; ++i) {
        new_arr.push(fn(arr[i], i));
    }
    return new_arr;
};
