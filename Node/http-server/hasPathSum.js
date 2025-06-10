var hasPathSum = function(root, targetSum) {
    if (!root) return false; // 如果根节点为空，直接返回 false
    // 如果当前节点是叶子节点，检查路径和是否等于目标值
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }
    // 递归检查左子树和右子树
    const newTargetSum = targetSum - root.val;
    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
};