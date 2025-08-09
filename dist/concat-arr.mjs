c = Array.prototype.concat;
f = Array.prototype.filter;
i = Array.isArray;
exports.concatArr = function () {
  if (arguments.length === 0) return [];
  b = f.call(arguments, i);
  return c.apply([], b);
};
