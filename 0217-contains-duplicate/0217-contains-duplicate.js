/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    let checker = new Set(nums);
    return nums.length !== checker.size;
};