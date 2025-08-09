/**
 * Concatenates multiple arrays end-to-end.
 * - if some argument is not an array, it will be ignored.
 *   - this is filtered by `Array.isArray`.
 * - if no arguments are provided, it returns an empty array.
 * @param {...any[][]} arrays - Arrays to concatenate.
 * @returns {any[]} The concatenated array.
 */
declare function concatArr<T extends any[]>(...arrays: any[]): T;

export = concatArr;
