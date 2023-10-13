/**
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function(cost) {
    let ans = [0, 0];
    for (let i = 2; i < cost.length + 1; ++i) {
            ans.push(Math.min(cost[i - 1] + ans[i - 1], cost[i - 2] + ans[i - 2]));
    }
    return ans.at(-1);
};