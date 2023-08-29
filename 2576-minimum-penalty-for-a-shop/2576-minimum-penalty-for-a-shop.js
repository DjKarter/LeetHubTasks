/**
 * @param {string} customers
 * @return {number}
 */
let bestClosingTime = (customers) => {

    let min = {pen : (customers.match(/Y/g) ?? []).length, index : 0}, pen = min.pen;

    for (let i = 0; i <= customers.length; ++i) {
        pen += customers[i] === 'Y' ? -1 : 1;
        if (pen < min.pen) {
            min.pen = pen;
            min.index = i + 1;
        }
    }
    return min.index;
};
