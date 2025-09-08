function maxScore(cardPoints: number[], k: number): number {
  const n = cardPoints.length;
  const total = cardPoints.reduce((a, b) => a + b, 0);
  if (k === n) return total;
  let windowSum = 0;
  for (let i = 0; i < n - k; i++) {
    windowSum += cardPoints[i];
  }
  let minSum = windowSum;
  for (let i = n - k; i < n; i++) {
    windowSum += cardPoints[i] - cardPoints[i - (n - k)];
    minSum = Math.min(minSum, windowSum);
  }
  return total - minSum;
}
