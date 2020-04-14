/**
 * @description: generate an array with random numbers, between min and max
 * @param {len} number
 * @return: number[]
 */
export function generateRandomArray(
  len: number,
  min: number,
  max: number
): number[] {
  const arr = [];

  for (let i = 0; i < len; i++) {
    const num = (min + Math.random() * max) | 0;
    arr.push(num);
  }

  return arr;
}

export function generateNearlyOrderedArray(
  len: number,
  swapTimes: number
): number[] {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr[i] = i;
  }

  for (let j = 0; j < swapTimes; j++) {
    const randomIndex1 = (Math.random() * len) | 0;
    const randomIndex2 = (Math.random() * len) | 0;
    [arr[randomIndex1], arr[randomIndex2]] = [
      arr[randomIndex2],
      arr[randomIndex1],
    ];
  }
  return arr;
}
