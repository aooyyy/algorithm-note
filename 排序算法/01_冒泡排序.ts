import { testSort } from 'hy-algokit';
function bubbleSort(arr: number[]) {
  const n = arr.length;
  let swapped = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return arr;
}

testSort(bubbleSort);

export default bubbleSort;

