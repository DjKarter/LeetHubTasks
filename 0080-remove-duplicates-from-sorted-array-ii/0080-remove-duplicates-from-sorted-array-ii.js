/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let iter = 0, count = 0; 
    // if count = 0 then we found only 1 number, if count = 1, then 2 numbers
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