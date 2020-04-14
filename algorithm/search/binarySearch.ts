export function binarySearch(arr: number[], item: number) {
  return __search(arr, 0, arr.length - 1, item);
}

/**
 * returns if the item is found, if found, return the index, else return -1;
 * need to pay attention; the search range is [l, r]
 * notion: the array must be sorted
 * @param arr the sorted arr to search in
 * @param l the left range
 * @param r the right range
 * @param item the searching item
 */
function __search(arr: number[], l: number, r: number, item: number) {
  if (l > r) return -1;
  if (l === r && arr[l] !== item) return -1;

  const mid = (l + (r - l) / 2) | 0;

  if (arr[mid] > item) {
    return __search(arr, l, mid - 1, item);
  } else if (arr[mid] < item) {
    return __search(arr, mid + 1, r, item);
  } else {
    return mid;
  }
}
/**
 * returns the before-first index and the after-last index of the target item
 * @param arr array needs to search in
 * @param item the need-to-search target
 */
export function binarySearchRange(arr: number[], item: number) {
  let i = __search(arr, 0, arr.length - 1, item);

  if (!~i) return -1;
  let j = i;
  while (i-- && arr[i] === item);
  while (j++ && arr[j] === item);
  return [i, j];
}
