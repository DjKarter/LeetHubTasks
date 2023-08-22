/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let ans = '';
    let temp = ''
    for (let i = 0; i < s.length; ++i) {
        if (temp.indexOf(s[i]) === -1) {
            temp = temp + s[i];
        } else {
            if (ans.length < temp.length)
                ans = temp;
            temp =  temp.substr(temp.indexOf(s[i]) + 1) + s[i];
        }
    }

    return (ans.length < temp.length ? temp : ans).length;
};