/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let ans = strs[0];
    for (let i = 0; i < strs.length; ++i) {
        for (let j = 0; j < ans.length; ++j) {
            if (strs[i][j] !== ans[j]) {
                ans = ans.slice(0, j);
            }
        }
    }
    return ans;
};