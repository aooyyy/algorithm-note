function maxSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;
  let l = 0;
  const count = {}  // 统计字符出现次数
  for(let i = 0; i < n; i++) {
      let s = nums[i];
      count[s] = (count[s] || 0) + 1;
      while(count[s] > k) {
          count[nums[l]]--;
          l++;
      }
      // 来到这的字符频率没大于k，满足要求
      ans = Math.max(ans, i - l + 1);
  }
  return ans;
};