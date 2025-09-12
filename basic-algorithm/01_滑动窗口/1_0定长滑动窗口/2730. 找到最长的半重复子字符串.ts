function longestSemiRepetitiveSubstring(s: string): number {
  let n = s.length;
  let l = 0;
  let ans = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
      const c = s[i];
      if (i > 0 && s[i - 1] === c) count++;
      if(count >= 2) {
          l++;
          while(s[l] !== s[l - 1]) l++;
          count = 1;
      }
      ans = Math.max(ans, i - l + 1);
  }
  return ans;
};