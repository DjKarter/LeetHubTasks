/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let ans = 0;
    while (n > 1) {
        ans += (n -  n % 2) / 2;
        n = (n -  n % 2) / 2 + 1 * (n % 2 !== 0);
    }
    return ans;
};