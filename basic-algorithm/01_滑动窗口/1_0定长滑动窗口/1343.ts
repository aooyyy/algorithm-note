function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let sum = 0;
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    const cur = arr[i];
    sum += cur;
    if (i < k - 1) continue;
    if (sum / k >= threshold) count++;
    sum -= arr[i - k + 1];
  }
  return count;
}
