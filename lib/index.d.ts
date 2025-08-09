/**
 * Concatenates multiple arrays end-to-end.
 * - if some argument is not an array, it will be ignored.
 *   - this is filtered by `Array.isArray`.
 * - if no arguments are provided, it returns an empty array.
 * @param arrays - Arrays to concatenate.
 * @returns The concatenated array.
 */
declare function concatArr<T extends any[] = unknown[]>(...arrays: unknown[]): T;

export = concatArr;
