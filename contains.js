/**
 * Inserts the separator `string` between each element and concatenating all the elements into a single `string`.
 * From [ramda/contains](http://ramdajs.com/docs/#contains)
 * @static
 * @param {string} a The item to compare against.
 * @param {string} list The string to consider
 * @returns {boolean} Returns `true` if an equivalent item is in list, `false` otherwise.
 * @example
 * contains('á', 'Zárate')
 * // => true
 *
 * const taco = contains('salsa');
 * taco('Un taco sin salsa no es taco');
 * // => true
 */
const contains = require('ramda/src/contains')
module.exports = contains
