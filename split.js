/**
 * Splits a `string` into an `array` of strings based on the given separator.
 * From [ramda/split](http://ramdajs.com/docs/#split)
 * @static
 * @param {string} sep The pattern.
 * @param {string} str The string to separate into an array.
 * @returns {Array} Returns the resulting array.
 * @example
 * const path = split('/');
 * path('/usr/local/bin/node');
 * // => ['', 'usr', 'local', 'bin', 'node']
 */
const split = require('ramda/src/split')
module.exports = split
