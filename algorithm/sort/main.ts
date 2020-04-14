import { timeHelper } from '../../util/computeTime';
import {
  generateRandomArray,
  generateNearlyOrderedArray,
} from '../../util/generateArray';
import { isSorted } from '../../util/isSorted';
import { selectSort } from './selectSort';
import { bubbleSort } from './bubbleSort';
import { insertSort } from './insertSort';
import { quickSort2 } from './quickSort2';
import { quickSort3 } from './quickSort3';
import { mergeSort } from './mergeSort';
import { heapSort } from './heapSort';
import {
  BinarySearchTree,
  BinarySearchTreeNode,
} from '../../dataStructure/binarySearchTree';
import { findOrderedItem } from './findOrderedItem';

// const arr = generateNearlyOrderedArray(1000000, 1);
const arr = generateRandomArray(10000000, 0, 2000000);
const arr2 = [...arr];

// isSorted(timeHelper(bubbleSort)([...arr]));
// isSorted(timeHelper(selectSort)([...arr]));
// isSorted(timeHelper(insertSort)([...arr]));
// isSorted(timeHelper(insertSortInIndex)([...arr], 0, arr.length - 1));
// isSorted(timeHelper(mergeSort)([...arr]));
// isSorted(timeHelper(mergeSortBU)([...arr]));
isSorted(timeHelper(quickSort2)(arr));
// isSorted(timeHelper(quickSort3)([...arr]));
// isSorted(timeHelper(heapSort)([...arr]));
// isSorted(timeHelper(testSort)([...arr]));
timeHelper(findOrderedItem)(arr2, 100);
