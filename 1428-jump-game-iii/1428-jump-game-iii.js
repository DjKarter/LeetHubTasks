/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
let canReach = function(arr, start) {
    if (start < 0 || start > arr.length || arr[start] === -1)
        return false;

    if (arr[start] === 0)
        return true;

    let left = start - arr[start], right  = start + arr[start];
    arr[start] = -1;
    return (arr.at(left) === undefined ? false : canReach(arr, left) ||  (arr.at(right) === undefined ? false : canReach(arr, right)));
};