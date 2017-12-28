/**
 * Removes (strips) whitespace from both ends of the string.
 * From [ramda/trim](http://ramdajs.com/docs/#trim)
 * @static
 * @param {string} str The string to trim.
 * @returns {string} Returns the trimmed version of `str`.
 * @example
 * trim('   xyz  ');
 * // => 'xyz'
 */
const trim = require('ramda/src/trim')
module.exports = trim
