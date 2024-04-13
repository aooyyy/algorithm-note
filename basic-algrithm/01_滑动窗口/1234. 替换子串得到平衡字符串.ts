function balancedString(s: string): number {
  const n = s.length;
  const m = n / 4;
  const map = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0
  };
  for (let i = 0; i < n; i++) {
    map[s[i]]++;
  }
  if (map['Q'] === m && map['W'] === m && map['E'] === m && map['R'] === m) return 0;
  let l = 0;
  let ans = n + 1;
  for (let i = 0; i < n; i++) {
    map[s[i]]--;
    while (map['Q'] <= m && map['W'] <= m && map['E'] <= m && map['R'] <= m) {
      ans = Math.min(ans, i - l + 1);
      map[s[l]]++;
      l++;
    }
  }
  return ans;
}
