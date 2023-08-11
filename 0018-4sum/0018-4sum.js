/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b);

    let iter = 0, count = 0; 
    // if count = 0 then we found only 1 number, count = 1 => 2 ...
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] !== nums[iter]) {
            nums[++iter] = nums[i];
            count = 0;
        } else if (count < 3) {
            nums[++iter] = nums[i];
            ++count;
        }
    }

    let ans = [];
    let setAns = new Set();
    for (let a = 0; a + 3 <= iter; ++a)
        for (let b = a + 1; b + 2 <= iter; ++b)
            for (let c = b + 1;  c + 1 <= iter; ++c)
                for (let d = c + 1; d <= iter; ++d) {
                    if (nums[a] + nums[b] + nums[c] + nums[d] === target && (!setAns.has([nums[a], nums[b], nums[c], nums[d]].toString()))) {
                        ans.push([nums[a], nums[b], nums[c], nums[d]]);
                        setAns.add([nums[a], nums[b], nums[c], nums[d]].toString());
                    }
                }
    return ans ? ans : [];

};