function maxAncestorDiff(root: TreeNode | null): number {
  //maxValue = max(maxV - node.val, node.val - minV);
  let ans = 0;
  function dfs(node, min, max) {
      if(!node) return;
      max = Math.max(node.val, max);
      min = Math.min(node.val, min);
      ans = Math.max(ans, node.val - min, max - node.val);
      dfs(node.left, min, max);
      dfs(node.right, min, max);
  }
  if(!root) return 0;
  dfs(root, root.val, root.val)
  return ans;
};