// src/insertionSort.test.ts
import { insertionSort } from './insertionSort';

describe('insertionSort', () => {

  test('should sort an array of numbers in ascending order', () => {
    const arr = [2, 1];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2]);
  });


  test('should sort an array of numbers in ascending order', () => {
    const arr = [5, 2, 9, 1, 5, 6];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 5, 5, 6, 9]);
  });

  test('should handle an empty array', () => {
    const arr: number[] = [];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([]);
  });

  test('should handle an array with one element', () => {
    const arr = [1];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1]);
  });

  test('should handle an array with already sorted elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with all identical elements', () => {
    const arr = [2, 2, 2, 2, 2];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([2, 2, 2, 2, 2]);
  });

  test('should sort a large array of numbers', () => {
    const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
