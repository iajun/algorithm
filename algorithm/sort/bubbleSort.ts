export function bubbleSort(arr: number[]) {
  let tail = arr.length;

  // tag if it the arr is already sorted
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < tail - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        swapped = true;
      }
    }
    tail--;
  } while (swapped);

  return arr;
}
