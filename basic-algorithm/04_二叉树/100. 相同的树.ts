function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  function dfs(p, q) {
      if(!p || !q) return p === q;

      return p.val === q.val && dfs(p.left, q.left) && dfs(p.right, q.right);
  }

  return dfs(p, q);
};