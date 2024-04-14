function minWindow(s: string, t: string): string {
  const n = s.length;
  const m = t.length;
  if (n < m) return "";
  let ansL = -1;
  let ansR = n;
  const ctnT = Array(128).fill(0);
  const ctnS = Array(128).fill(0);
  let less = 0;
  for (const c of t) {
      const pointCode = c.codePointAt(0) as number;
      if (ctnT[pointCode]++ === 0) {
          less++;
      }
  }
  let l = 0;
  for(let i = 0; i < n; i++) {
      const c = s[i].codePointAt(0) as number;
      if(++ctnS[c] === ctnT[c]) {
          less--;
      }

      while(less === 0) {  //满足题意
          if(i -l < ansR - ansL) {
              console.log(i, l)
              ansL = l;
              ansR = i;
          }
          const x = s[l++].codePointAt(0) as number;
          if(ctnS[x]-- === ctnT[x]) {
              less++;
          }

      }
  }
  return ansL < 0 ? "" : s.slice(ansL, ansR + 1);
};
