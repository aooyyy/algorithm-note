
function searchRange(nums: number[], target: number): number[] {
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
  let l = -1;
  let r = nums.length;
  const startIndex = lowerBound(l, r, target);  //找到大小等于target的索引
  const endIndex = lowerBound(l, r, target + 1);// 找到大小等于target + 1的索引， 然后减去1就是target的结束位置
  if(startIndex === nums.length || nums[startIndex] !== target) {
      return [-1, -1]
  }
  return [startIndex, endIndex - 1];

};