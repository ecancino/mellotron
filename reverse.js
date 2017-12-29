/**
 * Reverse a `string`.
 * From [ramda/reverse](http://ramdajs.com/docs/#reverse)
 * @static
 * @param {string} list The string to reverse.
 * @returns {boolean} Returns a new string with the characters in reverse order.
 * @example
 * reverse('abc');
 * // => 'cba'
 *
 * reverse('ab');
 * // => 'ba'
 */
const reverse = require('ramda/src/reverse')
module.exports = reverse
