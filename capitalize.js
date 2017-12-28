/**
 * Capitalize the first letter of a `string`, or all words in a `string`.
 * From [capitalize](https://github.com/grncdr/js-capitalize)
 * @static
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the capitalized string.
 * @example
 * capitalize('united states');
 * // => 'United states'
 *
 * capitalize.words('united states');
 * // => 'United States'
 */
const capitalize = require('capitalize')
module.exports = capitalize
