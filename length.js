/**
 * Count visual length of javascript string.
 * From [charcount](https://github.com/nodeca/charcount)
 * @static
 * @param {string} s The string to count.
 * @returns {number} Returns length of the string.
 * @example
 * length('🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒');
 * // => 12
 */
const length = require('charcount')
module.exports = length
