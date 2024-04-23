function minDepth(root: TreeNode | null): number {
  // 最小深度，返回最小的叶子节点到根节点的节点数
  let min = Infinity;
  function dfs(node, depth) {
      if (!node) {
          return;
      }
      if (depth >= min) return;
      if (!node.left && !node.right) {
          min = Math.min(depth, min);
      }
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);


  }
  dfs(root, 1);
  return min === Infinity ? 0 : min;

};