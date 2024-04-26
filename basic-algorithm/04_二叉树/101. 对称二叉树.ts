function isSymmetric(root: TreeNode | null): boolean {
  if(!root) return true;
  function dfs(p, q) {
      if(!p || !q) return p === q;
      return p.val === q.val && dfs(p.left, q.right) && dfs(p.right, q.left);
  }
  return dfs(root.left, root.right);
};