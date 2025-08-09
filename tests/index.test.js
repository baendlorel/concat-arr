// const { describe, it, expect } = require('@jest/globals');
// const { concatArr } = require('../dist/index.js');

import { describe, it, expect } from 'vitest';
import { concatArr } from '../dist/index.mjs';

describe('concatArr', () => {
  it('concatenates number arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const arr3 = [5];
    const result = concatArr(arr1, arr2, arr3);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
