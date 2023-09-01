/**
 * @param {number} n
 * @return {number[]}
 */
let countBits = (n) => {
    let ans = [0];
    let twoPow = 1;
    for (let i = 1; i < n + 1; ++i) {
        if (i >= 2 * twoPow) {
            twoPow *= 2;
        }
        ans.push(ans[i - (twoPow)] + 1);
        //console.log(i - (twoPow >> 1));



    }
    return ans;
};

