function maxDepth(root: TreeNode | null): number {
  function dfs(node) {
      if(!node) return 0;
      let left = dfs(node.left);
      let right = dfs(node.right); 
      return Math.max(left, right) + 1;
  }

  return dfs(root);
};
