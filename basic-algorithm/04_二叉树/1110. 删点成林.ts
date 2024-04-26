function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const deletList = new Set(to_delete);
  const ans = [];
  function dfs(node) {
      if (!node) return null;
      node.left = dfs(node.left);
      node.right = dfs(node.right);
      if (!deletList.has(node.val)) {
          return node;
      }
      if (node.left) ans.push(node.left);
      if (node.right) ans.push(node.right);
      return null;
  }
  if (dfs(root)) ans.push(root);
  return ans;
};