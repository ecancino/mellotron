/**
 * Checks if `string` ends with the given target `string`.
 * From [lodash/endsWith](https://lodash.com/docs/4.17.4#endsWith)
 * @static
 * @param {string} target The string to search for.
 * @param {string} string The string to inspect.
 * @returns {string} Returns `true` if `string` ends with `target`, else `false`.
 * @example
 * endsWith('c', 'abc');
 * // => true
 */
const endsWith = require('lodash/fp/endsWith')
module.exports = endsWith
