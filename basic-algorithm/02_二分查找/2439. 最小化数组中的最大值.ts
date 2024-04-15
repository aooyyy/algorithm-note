function minimizeArrayValue(nums: number[]): number {
  // 最小的最大值
  let ans = 0;
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
      sum+=nums[i]
      // i === 1 时，若nums[1] < nums[0]， 最小值为nums[0], 
      // i >=1 时，ans === max(当前nums的平均值, 原来的ans)
      ans = Math.max(ans, sum / (i + 1) );
  }
  return Math.ceil(ans);
 
};

export {};