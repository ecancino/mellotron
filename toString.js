/**
 * Convert to `string`.
 * From [ramda/toString](http://ramdajs.com/docs/#toString)
 * @static
 * @param {string} val The value to convert.
 * @returns {string} Returns the string representation of the given value
 * @example
 * toString(42);
 * // => '42'
 *
 * toString([1, 2, 3]);
 * //=> '[1, 2, 3]'
 *
 * toString({ foo: 1, bar: 2, baz: 3 });
 * //=> '{"bar": 2, "baz": 3, "foo": 1}'
 */
const toString = require('ramda/src/toString')
module.exports = toString
