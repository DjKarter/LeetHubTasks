/**
 * @param {number[][]} pairs
 * @return {number}
 */
let findLongestChain = (pairs) => {
    pairs.sort((a, b) => a[1] - b[1]);
    let temp = -1001, ans = 0;
    for (const [left, right] of pairs) 
        if (temp < left) {
            temp = right;
            ++ans;
        }
    
    return ans;
};