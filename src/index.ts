var concat = Array.prototype.concat;
var filter = Array.prototype.filter;
var isArray = Array.isArray;
/**
 * Concatenates multiple arrays end-to-end.
 * - if some argument is not an array, it will be ignored.
 *   - this is filtered by `Array.isArray`.
 * - if no arguments are provided, it returns an empty array.
 * @param arrays - Arrays to concatenate.
 * @returns The concatenated array.
 */
export function concatArr(...args: any[]): any[] {
  if (arguments.length === 0) return [];
  var b = filter.call(arguments, isArray);
  return concat.apply([], b);
}
