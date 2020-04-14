/**
 * use the thounght of quick sort
 * then we don't need to sort the whole array and get the item
 */

/**
 * returns the certain item
 * @param arr the array to search in
 * @param order the order of the item
 */
export function findOrderedItem(arr: number[], order: number) {
  if (order < 1 || order > arr.length) return null;
  order -= 1;

  return __find(arr, 0, arr.length, order);
}

/**
 *
 * @param arr the array to search in
 * @param l  [l, r]
 * @param r  [l, r]
 * @param order  the specific order in the array
 */
function __find(arr: number[], l: number, r: number, order: number) {
  const k = __partition(arr, l, r);

  if (k > order) {
    return __find(arr, l, k - 1, order);
  } else if (k < order) {
    return __find(arr, k + 1, r, order);
  } else {
    return arr[k];
  }
}

function __partition(arr: number[], l: number, r: number) {
  // exchange a pair in random
  const ranIdx = (Math.random() * (r - l)) | (0 + l);
  [arr[l], arr[ranIdx]] = [arr[ranIdx], arr[l]];

  // sort
  let baseItem = arr[l];
  // [l, j] <= baseItem (j, r] > baseItem
  let i = l + 1;
  let j = l;

  while (i <= r) {
    if (arr[i] < baseItem) {
      [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
      j++;
    }
    i++;
  }

  [arr[l], arr[j]] = [arr[j], arr[l]];

  return j;
}
