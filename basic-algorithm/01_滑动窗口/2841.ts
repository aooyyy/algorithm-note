function maxSum(nums: number[], m: number, k: number): number {
  const countMap = new Map();

  let sum = 0;
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    countMap.set(nums[i], (countMap.get(nums[i]) || 0) + 1);
    sum += nums[i];
    if (i < k - 1) continue;
    const total = countMap.size;
    if (total >= m) {
      ans = Math.max(ans, sum);
    }
    const l = nums[i - k + 1];
    sum -= l;
    countMap.set(l, countMap.get(l) - 1);
    if (countMap.get(l) === 0) {
      countMap.delete(l);
    }
  }
  return ans;
}
