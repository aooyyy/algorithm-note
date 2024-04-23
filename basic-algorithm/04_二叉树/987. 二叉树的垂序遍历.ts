function verticalTraversal(root: TreeNode | null): number[][] {
  let list = [];
  let preList = []; //以（0， 0）为基准， 保留 (x, y), y属于负数的垂序节点列表

  function dfs(node, x, y) {
    if (!node) return;
    //将节点值放入对应的list
    if (y >= 0) {
      if (!list[y]) {
        list[y] = [];
      }
      list[y].push([x, node.val]);
    } else {
      //放入preList
      if (!preList[-y - 1]) {
        preList[-y - 1] = [];
      }
      preList[-y - 1].push([x, node.val]);
    }
    dfs(node.left, x + 1, y - 1);
    dfs(node.right, x + 1, y + 1);
  }
  dfs(root, 0, 0);
  function sortListByRow(list) {
    return list.map((column) => {
      return column
        .sort((a, b) => {
          if (a[0] !== b[0]) return a[0] - b[0];
          return a[1] - b[1];
        })
        .map((item) => item[1]);
    });
  }
  return sortListByRow(preList.reverse()).concat(sortListByRow(list));
}
