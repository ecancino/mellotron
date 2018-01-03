/**
 * Determines whether a given `string` matches a given regular expression.
 * From [ramda/test](http://ramdajs.com/docs/#test)
 * @static
 * @param {string} pattern A regular expression or a substring to match.
 * @param {string} str The string to match against.
 * @returns {boolean} The result of the test.
 * @example
 * test(/^x/, 'xyz');
 * // => true
 *
 * test(/^y/, 'xyz');
 * // => false
 */
const test = require('ramda/src/test')
module.exports = test
