export function swap(arr: any[], i: number, j: number) {
  if (i < 0 || i >= arr.length) return;
  if (j < 0 || j >= arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
