function maxVowels(s: string, k: number): number {
  let ans = 0;
  const n = s.length;
  const vo = new Set(['a', 'e', 'i', 'o', 'u']);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const cur = s[i];
    if (vo.has(cur)) sum++;
    if (i < k - 1) continue;
    ans = Math.max(ans, sum);
    if (ans === k) break;
    const lValue = s[i - k + 1];
    if (vo.has(lValue)) sum--;
  }
  return ans;
}

