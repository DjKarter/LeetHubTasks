/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
let filter = (arr, fn) => {
  let ans = [];
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i], i))
      ans.push(arr[i]);
  }
  return ans;
}