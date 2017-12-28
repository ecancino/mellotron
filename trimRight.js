/**
 * Removes trailing whitespace or specified characters from `string`.
 * From [lodash/trimEnd](https://lodash.com/docs/4.17.4#trimEnd)
 * @static
 * @param {string} [string=''] The string to trim.
 * @returns {string} Returns the trimmed string.
 * @example
 * trimRight('  abc  ');
 * // => '  abc'
 */
const trimRight = require('lodash/fp/trimStart')
module.exports = trimRight
