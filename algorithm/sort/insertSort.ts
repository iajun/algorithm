// [left, right] to sort
// [left, i] is sorted
// item is the first needs to sort
// k is the index that arr[j] should be at
export function insertSort(arr: number[], left = 0, right = arr.length) {
  for (let i = left; i < right; i++) {
    let item = arr[i + 1];
    let k = i;

    while (arr[k] > item && k >= left) {
      [arr[k + 1], arr[k]] = [arr[k], arr[k + 1]];
      k--;
    }
    // arr[k + 1] > item
    // arr[k + 1] = arr[k + 2]
    // arr[k] <= item
    arr[k + 1] = item;
  }

  return arr;
}
