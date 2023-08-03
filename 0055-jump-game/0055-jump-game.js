/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1)
        return true;
    let jumpLength = --nums[0];
    for (let i = 1; i < nums.length - 1; ++i) {
        if (jumpLength < 0)
            return false;
        jumpLength = jumpLength < nums[i] ? nums[i] : jumpLength;
        --jumpLength;
    }
    
    return jumpLength >= 0 ? true : false;
};