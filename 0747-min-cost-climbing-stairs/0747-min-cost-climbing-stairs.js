/**
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function(cost) {
    let a = 0, b = 0, temp;
    for (let i = 2; i < cost.length + 1; ++i) {
        temp = b;
        b = Math.min(cost[i - 1] + b, cost[i - 2] + a)
        a = temp;
    }
    return b;
};