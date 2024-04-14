function maximumCount(nums: number[]): number {
  function lowerBound(l, r, target) {
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
   const negIndex = lowerBound(-1, nums.length, 0); //索引 >=0, 负数数目：negIndex - 1 - 0 + 1 === negIndex; 因为不包含0， 所以要减去 1；
   const posIndex = lowerBound(-1, nums.length, 1);
   return Math.max(negIndex, nums.length - posIndex);
};