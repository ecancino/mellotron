/**
 * Deburrs `string` by converting letters to basic Latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 * From [lodash/deburr](https://lodash.com/docs/4.17.4#deburr)
 * @static
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 * deburr('déjà vu');
 * // => 'deja vu'
 */
const deburr = require('lodash/fp/deburr')
module.exports = deburr
