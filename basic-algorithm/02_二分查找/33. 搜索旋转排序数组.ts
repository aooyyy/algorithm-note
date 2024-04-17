function search(nums: number[], target: number): number {
  // 二分找最小值， 分成两端有序数组，然后分别查找
  //1.找最小值
  let l = -1;
  let r = nums.length - 1;
  while (l + 1 < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < nums.at(-1)) {
      r = mid;
    } else {
      l = mid;
    }
  }
  // 2.有序数组二分查target
  let left = r - 1;
  let right = nums.length;
  if (target > nums.at(-1)) {
    //在第一段找
    left = -1;
    right = r;
  }
  function lowerBound(l, r) {
    // left左侧的小于target， right右侧的大于target
    while (l + 1 < r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] < target) {
        l = mid;
      } else {
        r = mid;
      }
    }
    return r;
  }

  const index = lowerBound(left, right);
  if (nums[index] === target) {
    return index;
  }
  return -1;
}

export {}