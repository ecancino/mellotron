/**
 * Removes leading whitespace or specified characters from `string`.
 * From [lodash/trimStart](https://lodash.com/docs/4.17.4#trimStart)
 * @static
 * @param {string} [string=''] The string to trim.
 * @returns {string} Returns the trimmed string.
 * @example
 * trimStart('  abc  ');
 * // => 'abc  '
 */
const trimLeft = require('lodash/fp/trimStart')
module.exports = trimLeft
