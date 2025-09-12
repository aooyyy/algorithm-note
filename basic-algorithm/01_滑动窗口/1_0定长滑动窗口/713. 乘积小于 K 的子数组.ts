//code
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if(k <=1) return 0;
  const n = nums.length;
  let minus = 1;
  let l = 0;
  let ans = 0;
  for(let i = 0; i < n; i++) {
       minus*=nums[i];
       while(minus >= k) {
           minus/=nums[l];
           l++;
       }
       ans+=i - l + 1;
  }
  return ans;
};