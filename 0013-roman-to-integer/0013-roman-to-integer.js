/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
      const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    if (s.length === 1) {
        return dict[s[0]];
    }

    let i = 0;
    let ans = 0;

    while(i !== s.length - 1) {
        if (dict[s[i]] >= dict[s[i + 1]]) {
            ans += dict[s[i]];
        } else {
            ans -= dict[s[i]];
        }
        ++i;
    }

    return ans + dict[s[s.length - 1]];
};