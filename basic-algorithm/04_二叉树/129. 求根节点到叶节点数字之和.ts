function sumNumbers(root: TreeNode | null): number {
  let sum = 0;
  function dfs(node, num) {
      if(!node) return;
      num = num *10 + node.val;
      if(!node.left && !node.right) {
          sum+=num;
      }
      dfs(node.left, num);
      dfs(node.right, num);
  }
  dfs(root, 0)
  return sum;
};