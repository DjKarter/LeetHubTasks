/**
 * @param {number} n
 * @return {number}
 */
let integerBreak = function(n) {
    if (n === 2)
        return 1;
    let ans = 1;
    const repressor = (sum, mult, nums) => {
        for (let i = 1; i <= Math.ceil(Math.sqrt(n)); ++i) {

            if (sum + i < n && i >= nums.at(-1)) {
                repressor(sum + i, mult * i, [...nums, i]);
            } else if (sum + i === n) {
                ans = Math.max(ans, mult * i);
                break;
            }
        }
    }
    repressor(0, 1, [0]);
    return ans;
};