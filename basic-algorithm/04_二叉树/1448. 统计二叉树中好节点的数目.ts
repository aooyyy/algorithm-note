function goodNodes(root: TreeNode | null): number {
  //维护 root 到 curNode - 1 的最大节点值max，cur >=max, sum++;
  let ans = 0;
  function dfs(node, max) {
      if(!node) return;
      if(max <= node.val) ans++;
      dfs(node.left, Math.max(max, node.val));
      dfs(node.right, Math.max(max, node.val));
  }
  dfs(root, -Infinity);

  return ans;
};