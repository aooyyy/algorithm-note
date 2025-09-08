function minimumRecolors(blocks: string, k: number): number {
  const n = blocks.length;
  let maxCount = 0,
    count = 0;
  for (let i = 0; i < n; i++) {
    if (blocks[i] === 'B') count++;
    if (i < k - 1) continue;
    maxCount = Math.max(count, maxCount);
    if (blocks[i - k + 1] === 'B') count--;
  }
  return k - maxCount;
}

