/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let nums_prev = nums.slice(0);
    nums.sort((a, b) => a - b);
    while (l < r) {
        if(nums[l] + nums[r] === target) {
            return [nums_prev.findIndex(element => element === nums[l]), nums. length - 1 -(nums_prev.reverse()).findIndex(element => element === nums[r])];
        }
        else if (nums[l] + nums[r] > target) {
            --r;
        }
        else {
            ++l;
        }
    }
};