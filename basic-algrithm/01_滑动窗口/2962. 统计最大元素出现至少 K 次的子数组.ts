function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;
  let sum = 0;
  let max = Math.max.apply(null, nums);
  let l = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
      const num = nums[i];
      if (num === max) {
          count++;
      }
      while (count === k) {
          if (nums[l] === max) {
              count--;
          }
          l++
      }
      sum += l;
  }
  return sum;
};



export {}