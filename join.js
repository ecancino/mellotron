/**
 * Inserts the separator `string` between each element and concatenating all the elements into a single `string`.
 * From [ramda/join](http://ramdajs.com/docs/#join)
 * @static
 * @param {string} separator The string used to separate the elements.
 * @param {string} xs The elements to join into a string.
 * @returns {string} Returns the `string` made by concatenating `xs` with `separator`.
 * @example
 * join(' ', ['a', 2, 3.4]);
 * // => 'a 2 3.4'
 *
 * const piper = join('|');
 * piper(['Pied', 'Piper', 'of', 'Hamelin']);
 * // => 'Pied|Piper|of|Hamelin'
 */
const join = require('ramda/src/join')
module.exports = join
