function lengthOfLongestSubstring(s: string): number {
  let ans = 0;
  const n = s.length;
  const map = new Map();
  let l = 0;
  for (let i = 0; i < n; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    while (map.get(s[i]) > 1) {
      map.set(s[l], (map.get(s[l]) || 0) - 1);
      l++;
    }
    ans = Math.max(ans, i - l + 1);
  }
  return ans;
}
