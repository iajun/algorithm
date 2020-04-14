import { insertSort } from './insertSort';

export function mergeSort(arr: number[]) {
  __sort(arr, 0, arr.length - 1, []);
  return arr;
}

// merge [left, mid] and [mid + 1, right]
//         |                |
//         i                j
//            \           /
//                   k
function __merge(
  arr: number[],
  left: number,
  mid: number,
  right: number,
  tmp: number[]
) {
  let i = left;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= right) {
    tmp[k++] = arr[i] > arr[j] ? arr[j++] : arr[i++];
  }

  while (i <= mid) {
    tmp[k++] = arr[i++];
  }

  while (j <= right) {
    tmp[k++] = arr[j++];
  }

  k = 0;
  while (left <= right) {
    arr[left++] = tmp[k++];
  }
}

function __sort(arr: number[], left: number, right: number, tmp: number[]) {
  if (right - left <= 16) {
    return void insertSort(arr, left, right);
  }

  const mid = ((left + right) / 2) | 0;

  __sort(arr, left, mid, tmp);
  __sort(arr, mid + 1, right, tmp);

  arr[mid] > arr[mid + 1] && __merge(arr, left, mid, right, tmp);
}
