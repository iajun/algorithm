import { Heap } from "../../dataStructure/heap";

export function heapSort(arr: number[]) {
  const heap = new Heap(arr);
  let item: number | null = 0;
  const ret = [];
  let i = arr.length - 1;
  while ((item = heap.getMax())) {
    ret[i--] = item;
  }

  return ret;
}
