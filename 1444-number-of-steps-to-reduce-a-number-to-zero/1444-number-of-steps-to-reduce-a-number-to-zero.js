/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    iter = 0;
    while (num != 0) {
        ++iter;
        num = num % 2 === 0 ? num / 2 : num - 1;
    }
    return iter;
};