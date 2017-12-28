/**
 * Inserts the separator `string` between each element and concatenating all the elements into a single `string`.
 * From [ramda/join](http://ramdajs.com/docs/#join)
 * @static
 * @param {string} separator The string used to separate the elements.
 * @param {string} xs The elements to join into a string.
 * @returns {boolean} Returns the `string` made by concatenating `xs` with `separator`.
 * @example
 * join('|', [1, 2, 3])
 * // => '1|2|3'
 *
 * join(' ', ['a', 2, 3.4]);
 * // => 'a 2 3.4'
 */
const join = require('ramda/src/join')
module.exports = join
