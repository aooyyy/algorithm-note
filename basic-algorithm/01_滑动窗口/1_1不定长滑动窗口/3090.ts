function maximumLengthSubstring(s: string): number {
  let ans = 0;
  const n = s.length;
  const map = new Map();
  let l = 0;
  for (let i = 0; i < n; i++) {
    const cur = s[i];
    map.set(cur, (map.get(cur) ?? 0) + 1);
    while (map.get(cur) > 2) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    ans = Math.max(ans, i - l + 1);
  }
  return ans;
}
