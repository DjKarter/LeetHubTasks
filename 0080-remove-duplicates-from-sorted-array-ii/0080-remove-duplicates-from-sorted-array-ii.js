/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let iter = 0, count = 0; 
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] !== nums[iter]) {
            nums[++iter] = nums[i];
            count = 0;
        } else if (!count) {
            nums[++iter] = nums[i];
            count = 1;
        }
    }
    return iter + 1;
};