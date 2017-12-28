/**
 * Checks if `string` starts with the given target `string`.
 * From [lodash/startsWith](https://lodash.com/docs/4.17.4#startsWith)
 * @static
 * @param {string} target The string to search for.
 * @param {string} string The string to inspect.
 * @returns {string} Returns `true` if `string` starts with `target`, else `false`.
 * @example
 * startsWith('a', 'abc');
 * // => true
 */
const startsWith = require('lodash/fp/startsWith')
module.exports = startsWith
