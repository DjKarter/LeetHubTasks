/**
 * @param {number[]} nums
 * @return {number}
 */
let numIdenticalPairs = (nums) => {
    const obj = {};
    let ans = 0;
    for (let elem of nums)
        if (obj.hasOwnProperty(elem)) {
            ans += obj[elem];
            obj[elem]++;
        } else {
            obj[elem] = 1;
        }
    return ans;
};