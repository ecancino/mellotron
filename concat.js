/**
 * Concatenate the given `strings`.
 * From [ramda/concat](http://ramdajs.com/docs/#concat)
 * @static
 * @param {string} [string=''] The first string to add.
 * @param {string} [string=''] The second string to add.
 * @returns {string} Returns the result of concatenating the given `strings`.
 * @example
 * concat('ABC', 'DEF');
 * // => 'ABCDEF'
 */
const concat = require('ramda/src/concat')
module.exports = concat
