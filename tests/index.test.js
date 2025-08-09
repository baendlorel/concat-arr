import test from 'node:test';
import assert from 'node:assert/strict';
// import { concatArr } from '../src/index.js';
const concatArr = require('../dist/index.js');

console.log('concatArr', concatArr);

test('concatenates number arrays', (t) => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const arr3 = [5];
  const result = concatArr(arr1, arr2, arr3);
  assert.deepEqual(result, [1, 2, 3, 4, 5]);
});

test('concatenates string arrays', (t) => {
  const s1 = ['a'];
  const s2 = ['b', 'c'];
  const result = concatArr(s1, s2);
  assert.deepEqual(result, ['a', 'b', 'c']);
});

test('returns empty array for all empty inputs', (t) => {
  const result = concatArr([], [], []);
  assert.deepEqual(result, []);
});

test('concatenates mixed type arrays', (t) => {
  const result = concatArr([1], ['a'], [true]);
  assert.deepEqual(result, [1, 'a', true]);
});

test('concatenates arrays only, ignores non-array args', (t) => {
  const result = concatArr([1], null, [true], 567, 'sd');
  assert.deepEqual(result, [1, true]);
});
