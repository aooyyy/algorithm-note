function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
      ///lower <= nums[i] + nums[j] <= upper  --> lower - nums[j] <= nums[i] <= upper - nums[j]
      const l = lowerBound(i, lower - nums[i]); //
      const r = lowerBound(i, upper - nums[i] + 1);
      count += r - l;
  }
  function lowerBound(r, target) {
      let l = -1;
      while (l + 1 < r) {
          const mid = l + r >> 1;
          if (nums[mid] < target) {
              l = mid
          } else {
              r = mid;
          }
      }
      return r;
  }
  return count;
};