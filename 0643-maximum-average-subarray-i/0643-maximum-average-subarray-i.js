/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findMaxAverage = function(nums, k) {
    let ans = 0;
    for (let i = 0; i < k; ++i)
        ans += nums[i];

    let temp = ans;

    for (let i = k; i < nums.length; ++i) {
        temp = temp - nums[i - k] + nums[i];
        if (ans < temp) 
            ans = temp;
    }
    return (ans / k).toFixed(5);
};