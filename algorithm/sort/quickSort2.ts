export function quickSort2(arr: number[]) {
  __sort(arr, 0, arr.length - 1);
  return arr;
}

function __sort(arr: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  let k = __partition(arr, left, right);

  __sort(arr, left, k - 1);
  __sort(arr, k + 1, right);
}

// [left, ..., i, ..., j, ... right]
// [left, i] <= baseItem <= [j, right]
function __partition(arr: number[], left: number, right: number) {
  // optimization: handle nearly ordered array
  const ranIdx = (Math.random() * (right - left) + left) | 0;
  [arr[ranIdx], arr[left]] = [arr[left], arr[ranIdx]];
  // pick a base benchmark
  let i = left + 1;
  let j = right;
  const baseItem = arr[left];

  while (true) {
    while (arr[i] < baseItem && i <= j) i++;
    while (arr[j] > baseItem && j > i) j--;

    if (i > j) {
      break;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++, j--;
  }

  [arr[left], arr[j]] = [arr[j], arr[left]];

  return j;
}
