/**
 * @param {number} columnNumber
 * @return {string}
 */
let convertToTitle = (num) => {
    let ans = '';
    while (num > 0) {
        num--;
        ans = String.fromCharCode(65 + num % 26) + ans;
        num = Math.floor(num / 26);
    }
    return ans;
};
