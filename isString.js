const is = require('ramda/src/is')
/**
 * See if an object is an instance of the String constructor.
 * From [ramda/is](http://ramdajs.com/docs/#is)
 * @static
 * @param {string} val The value to test.
 * @returns {boolean} Returns if the value is a String.
 * @example
 * isString('s');
 * // => true
 *
 * isString(new String(''));
 * // => true
 */
const isString = is(String)
module.exports = isString
