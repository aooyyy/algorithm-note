function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;

  let ans = 0;
  let l = 0;
  let sum = 0;
  for(let i = 0; i<n; i++) {
      sum+=nums[i]
      while(sum * (i - l + 1) >=k) {
          sum-=nums[l];
          l++;
      }
      ans+=i - l  + 1;
  }
  return ans;
};

export {}