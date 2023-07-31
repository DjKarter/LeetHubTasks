/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if (bits.length === 1)
        return true;
    
    if (bits[bits.length - 2] === 0) 
        return true;
    
    let state = false;
    count = 1;

    for (let i = bits.length - 3; i >= 0; --i) {
        if (bits[i] === 1){
            ++count;
        } else {
            break;
        }
    }

    if (count % 2 === 0) {
        state = true;
    }
    
    return state;
};