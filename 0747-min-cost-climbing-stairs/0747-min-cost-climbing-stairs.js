/**
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function(cost) {
    let a = 0, b = 0;
    for (let i = 2; i < cost.length + 1; ++i) {
          
           [b, a] = [Math.min(cost[i - 1] + b, cost[i - 2] + a), b];
    }
    return b;
};