function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let ans = false;
  function dfs(node, sum) {
      if(!node) return;
      if(ans) return;
      sum+=node.val;
      if(!node.left && !node.right) { //到达叶子节点
          if(sum === targetSum) ans = true;
      }
      dfs(node.left, sum);
      dfs(node.right, sum)
  }
  dfs(root, 0);
  return ans;
};