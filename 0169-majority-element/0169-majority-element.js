/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    const counts = {};
    for (const num of nums) 
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    let ans = nums[0];

    for (const num in counts)
        if (counts[ans] < counts[num]) {
            ans = num;
        }
    return ans;
};