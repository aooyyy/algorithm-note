function hIndex(citations: number[]): number {
  function lowerBound(l, r) {
    while (l + 1 < r) {
      const mid = (l + r) >> 1;
      if (citations.at(-mid) >= mid) {
        l = mid;
      } else {
        r = mid;
      }
    }
    return l;
  }
  const h = lowerBound(0, citations.length + 1);
  return h;
}

export {}