
// code
function lengthOfLongestSubstring(s: string): number {
  let n = s.length;
  let ans = 0;
  let l = 0;
  const box = new Map();
  for(let i = 0; i < n; i++) {
      box.set(s[i], (box.get(s[i]) || 0) + 1);
      while(box.get(s[i]) > 1) {
          box.set(s[l], box.get(s[l]) - 1);
          l++;
      }
      ans = Math.max(ans, i - l + 1);
  }
  return ans;
};