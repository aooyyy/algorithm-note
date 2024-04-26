function isBalanced(root: TreeNode | null): boolean {
  // 最小最大节点深度不超过1；
  function dfs(node) {
      if(!node) return 0;
      let left = dfs(node.left);
      if(left === -1)return -1;
      let right = dfs(node.right);
      if(right === -1 || Math.abs(left - right) > 1) return -1;
      return Math.max(left, right) + 1;
  }
  return dfs(root) !== -1;
};