concat = Array.prototype.concat;
filter = Array.prototype.filter;
isArray = Array.isArray;
exports.concatArr = function () {
  if (arguments.length === 0) return [];
  b = filter.call(arguments, isArray);
  return concat.apply([], b);
};
