// i is the index of the ascending result arr
// k is the index of the mininum of the ascending
// then exchange i and k
export function selectSort(arr: number[]) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let k = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[k]) {
        k = j;
      }
    }

    [arr[i], arr[k]] = [arr[k], arr[i]];
  }

  return arr;
}
