/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let maxDistance = function(nums1, nums2) {
    let i = 0, j = 0, maxDist = 0;
    while (i < nums1.length && j < nums2.length) {
        if (i <= j && nums1[i] <= nums2[j]) {
            maxDist = maxDist > j - i ? maxDist : j - i;
            ++j;

        } else  if (nums1[i] > nums2[j]) {
            ++i;
        } else {
            ++j;
        }
    }
    return maxDist;
};