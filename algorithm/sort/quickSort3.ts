export function quickSort3(arr: number[]) {
  __sort(arr, 0, arr.length - 1);
  return arr;
}

function __sort(arr: number[], l: number, r: number) {
  if (l >= r) return;
  const [lt, gt] = __partition(arr, l, r);
  __sort(arr, l, lt);
  __sort(arr, gt, r);
}

// [l, lt] < baseItem, (lt, gt) = baseItem , [gt, r] > baseItem
function __partition(arr: number[], l: number, r: number) {
  // optimization: handle nearly ordered array
  const ranIdx = (Math.random() * (r - l) + l) | 0;
  [arr[ranIdx], arr[l]] = [arr[l], arr[ranIdx]];
  // baseItem
  const baseItem = arr[l];
  let lt = l;
  let gt = r + 1;
  let i = l + 1;

  while (i < gt) {
    if (arr[i] < baseItem) {
      [arr[i], arr[lt + 1]] = [arr[lt + 1], arr[i]];
      i++;
      lt++;
    } else if (arr[i] > baseItem) {
      [arr[i], arr[gt - 1]] = [arr[gt - 1], arr[i]];
      gt--;
    } else {
      i++;
    }
  }

  [arr[lt], arr[l]] = [arr[l], arr[lt]];
  lt--;
  return [lt, gt];
}
