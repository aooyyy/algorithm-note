function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  const n = customers.length;
  let ans1 = 0;
  for (let i = 0; i < n; i++) {
    ans1 += grumpy[i] === 0 ? customers[i] : 0;
  }
  let ans2 = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 1) {
      sum += customers[i];
    }
    if (i < minutes - 1) continue;
    ans2 = Math.max(ans2, sum);
    if (grumpy[i - minutes + 1]) {
      sum -= customers[i - minutes + 1];
    }
  }
  return ans1 + ans2;
}
