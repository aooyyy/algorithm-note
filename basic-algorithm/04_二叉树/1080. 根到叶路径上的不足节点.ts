function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
  function dfs(node, limit) {
      if (!node) return;
      limit -= node.val;
      if (!node.left && !node.right) {
          return limit > 0 ? null : node;
      }
      if (node.left) {
          node.left = dfs(node.left, limit);
      }
      if (node.right) {
          node.right = dfs(node.right, limit);
      }
      return (node.left || node.right) ? node : null;
  }
  return dfs(root, limit);
};