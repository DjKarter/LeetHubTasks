/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = (haystack, needle) => {
    let iter = 0, needleIter = 0;
    while (iter < haystack.length) {
        if (needleIter === needle.length) {
            return iter - needleIter;
        }
        if (haystack[iter] === needle[needleIter]) {
            needleIter++;
            ++iter;
        } else {
            iter = iter - needleIter + 1;
            needleIter = 0;
        }
        
    }

    return needleIter === needle.length? iter - needleIter : -1;
};