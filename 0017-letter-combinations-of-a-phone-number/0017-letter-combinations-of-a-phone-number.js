/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
    
    if (digits.length === 0) {
        return [];
    }

    let phone = {
        2 : "abc",
        3 : "def",
        4 : "ghi",
        5 : "jkl",
        6 : "mno",
        7 : "pqrs",
        8 : "tuv",
        9 : "wxyz"
    };
    let ans = [];
    let temp = '';

    let setDigit = (current, pos) => {
        if (current.length >= digits.length) {
            ans.push(current);
        } else {
            if (pos + 1 < phone[digits[current.length]].length) {
                setDigit(current, pos + 1)
            }
            current = current + phone[digits[current.length]][pos];
            setDigit(current, 0);
        }

    }
    setDigit("", 0);
    return ans;
};