function getAverages(nums: number[], k: number): number[] {
  const n = nums.length;
  const ave = Array(n).fill(-1);
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += nums[i];
    if (i < 2 * k) continue;
    ave[i - k] = Math.trunc(count / (2 * k + 1));
    count -= nums[i - 2 * k];
  }
  return ave;
}
