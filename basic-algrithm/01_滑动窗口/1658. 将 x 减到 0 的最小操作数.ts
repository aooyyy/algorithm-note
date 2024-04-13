function minOperations(nums: number[], x: number): number {
  const n = nums.length;
  let target = nums.reduce((a, b) => a + b, 0) - x;
  let ans = -1;
  let l = 0;
  let s = 0;
  if(target < 0) return -1;
  for(let i = 0; i < n; i++) {
      s+=nums[i];
      while(s > target) {
          s-=nums[l];
          l++;
      }
      if(s === target) {
          ans = Math.max(ans, i - l + 1);
      }
  }
  // 此时的ans代表的是满足题意的最大数组长度， 所以，最小操作数为 n - ans;
  return ans === -1 ? ans : n - ans;
};