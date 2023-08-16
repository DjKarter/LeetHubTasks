/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
    if (target > nums.at(-1))
        return nums.length;
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((r - l) / 2 + l);
        if (nums[mid] < target && nums[mid + 1] > target)
            return mid + 1;
        if (nums[mid] > target) {
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            return mid;
        }

    }
    return 0;
};