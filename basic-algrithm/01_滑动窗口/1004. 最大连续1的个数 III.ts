function longestOnes(nums: number[], k: number): number {
  const n = nums.length;
  let cnt0 = 0;
  let l = 0;
  let ans = 0;
  for(let i = 0; i < n; i++) {
      const num = nums[i];
      cnt0+=1 - num;
      while(cnt0 > k) {
          cnt0-=1 - nums[l];
          l++;
      }
      ans = Math.max(ans, i - l + 1);
  }
  return ans;
};