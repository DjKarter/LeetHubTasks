/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let averageOfLevels = function(root) {
    let ans = [], amount = [];
    let bfs = (r, lvl) => {
        ans[lvl] = ans[lvl] ? ans[lvl] + r.val : r.val;
        amount[lvl] = amount[lvl] ? amount[lvl] + 1 : 1;
        if (r.left !== null)
            bfs(r.left, lvl + 1);
        if (r.right !== null)
            bfs(r.right, lvl + 1);
    }
    bfs(root, 0);
    for(let i = 0; i < ans.length; ++i) {
        ans[i] = ans[i] / amount[i];
        ans[i].toFixed(5);
    }
    return ans;
};