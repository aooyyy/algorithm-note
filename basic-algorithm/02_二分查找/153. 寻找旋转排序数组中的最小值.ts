function findMin(nums: number[]): number {
  //旋转之后，数组被分为两份递增子串；
  // 规定小于nums[-1]的染成蓝色，大于的染成红色，ans === 循环结束之后的 right
  let l = -1;
  let r = nums.length - 1;
  while(l + 1 < r) {
      const mid = l + r >> 1;
      if(nums[mid] < nums.at(-1)) {
          r = mid;
      } else {
          l = mid;
      }
  }
  return nums[r];
};