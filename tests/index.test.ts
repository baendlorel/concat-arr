import { describe, it, expect } from 'vitest';
import { concatArr } from '../src/index.js';

describe('concatArr', () => {
  it('concatenates number arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const arr3 = [5];
    const result = concatArr(arr1, arr2, arr3);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('concatenates string arrays', () => {
    const s1 = ['a'];
    const s2 = ['b', 'c'];
    const result = concatArr(s1, s2);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('returns empty array for all empty inputs', () => {
    const result = concatArr([], [], []);
    expect(result).toEqual([]);
  });

  it('concatenates mixed type arrays', () => {
    const result = concatArr([1], ['a'], [true]);
    expect(result).toEqual([1, 'a', true]);
  });

  it('concatenates arrays only, ignores non-array args', () => {
    const result = concatArr([1], null, [true], 567, 'sd');
    expect(result).toEqual([1, true]);
  });
});
