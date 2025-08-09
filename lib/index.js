var concat = Array.prototype.concat;
var filter = Array.prototype.filter;
var isArray = Array.isArray;
export function concatArr(_) {
  if (arguments.length === 0) return [];
  var b = filter.call(arguments, isArray);
  return concat.apply([], b);
}
