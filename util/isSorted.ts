export function isSorted(arr: number[]): boolean {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log('not sorted');
      return false;
    }
  }
  console.log('sorted');

  return true;
}
