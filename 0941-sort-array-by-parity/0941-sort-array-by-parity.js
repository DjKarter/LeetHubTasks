/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let oddIter = -1;
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] % 2 === 0) {
        oddIter++;
        if (oddIter !== i)
          [nums[i], nums[oddIter]] = [nums[oddIter],nums[i]];
      }
    }
    return nums;
};