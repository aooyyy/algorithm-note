// 模拟
function findPeakElement(nums: number[]): number {
  nums.unshift(-Infinity);
  nums.push(-Infinity);
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      return i - 1;
    }
  }
  return -1;
}

// 二分
function findPeakElement1(nums: number[]): number {
  // 如何二分 ？ 峰值的左右两侧满足单调性，left左侧的染成红色，right右侧的染成蓝色，循环结束之后，right处就是峰值；
  // 二分上下界
  let l = -1;
  let r = nums.length - 1;
  while(l + 1 < r) {
      const mid = (l + r) >>1;
      if(nums[mid] > nums[mid + 1]) {
          r = mid;
      } else {
          l = mid;
      }
  }
  return r;
};

export {};
