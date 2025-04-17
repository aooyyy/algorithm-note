import { testSort } from 'hy-algokit';
function quickSortInPlace(arr: number[], left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const pivotIndex = partition(arr, left, right);
  quickSortInPlace(arr, left, pivotIndex - 1);
  quickSortInPlace(arr, pivotIndex + 1, right);
  return arr;
}

function partition(arr: number[], left: number, right: number): number {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

testSort(quickSortInPlace);

