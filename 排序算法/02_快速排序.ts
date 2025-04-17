import { testSort } from 'hy-algokit';

function quickSort(arr: number[]) {
  function partition(arr: number[], left: number, right: number) {
    const pivot = arr[right];
    let i = left;
    let j = right - 1;

    while (i <= j) {
      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
  }

  function sort(left: number, right: number) {
    if (left >= right) return;

    const pivotIndex = partition(arr, left, right);
    sort(left, pivotIndex - 1);
    sort(pivotIndex + 1, right);
  }

  sort(0, arr.length - 1);
  return arr;
}

testSort(quickSort);
export default quickSort;

