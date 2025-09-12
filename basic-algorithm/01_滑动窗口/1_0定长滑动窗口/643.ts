function findMaxAverage(nums: number[], k: number): number {
  let ans = -Infinity;
  const n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (i < k - 1) {
      continue;
    }
    ans = Math.max(ans, sum / k);
    sum -= nums[i - k + 1];
  }
  return ans;
}
