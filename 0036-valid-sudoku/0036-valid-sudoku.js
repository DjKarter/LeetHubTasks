/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
    let squareCheck = (iter1, iter2) => {
        let ans = 0;
        for (let i = Math.floor(iter1 / 3) * 3; i < Math.floor(iter1 / 3) * 3 + 3; ++i)
            for (let j = Math.floor(iter2 / 3) * 3; j < Math.floor(iter2 / 3) * 3 + 3; ++j) {
                if (board[iter1][iter2] === board[i][j])
                    ans++;
            }
        return ans === 1;
    };
    let horizontalCheck = (iter1, iter2) => {
        let ans = 0;
        for (let i = 0; i < 9; ++i) {
            if (board[iter1][iter2] === board[iter1][i])
                ans++;
        }
        return ans === 1;

    };
    let verticalCheck = (iter1, iter2) => {
        let ans = 0;
        for (let i = 0; i < 9; ++i) {
            if (board[iter1][iter2] === board[i][iter2])
                ans++;
        }
        return ans === 1;
    };

    let totalCheck =  (iter1, iter2) => {
        if (verticalCheck(iter1, iter2) && horizontalCheck(iter1, iter2) && squareCheck(iter1, iter2)) {
            return true;
        }
        return false;
    }
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] === '.')
                continue;
            if (!totalCheck(i,j))
                return false;
        }
    }
    return true;
};
