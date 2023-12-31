/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    let iter = 0; 
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] !== nums[iter]) 
            nums[++iter] = nums[i];
    }
    return iter + 1;
};