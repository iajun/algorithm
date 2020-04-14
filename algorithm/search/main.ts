import { generateRandomArray } from '../../util/generateArray';
import { mergeSort } from '../sort/mergeSort';
import { binarySearch, binarySearchRange } from './binarySearch';

let arr = generateRandomArray(100, 0, 20);
mergeSort(arr);
let ret = binarySearchRange(arr, 10);
if (ret) {
  console.log(arr.slice(ret[0] - 2, ret[1] + 2));
}

console.log(ret);
