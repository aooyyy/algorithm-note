function minEatingSpeed(piles: number[], h: number): number {
  // k满足单调性，因为k越大，越容易吃完香蕉
  let l = 0;
  let r = Math.max(...piles) + 1;

  function check(k) {
    let total = 0;
    for (const p of piles) {
      total += Math.ceil(p / k);
    }
    if (total <= h) return true;
    return false;
  }
  while (l + 1 < r) {
    const mid = (l + r) >> 1;
    if (!check(mid)) {
      l = mid;
    } else {
      r = mid;
    }
  }
  return r;
}

export {}