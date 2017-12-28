/**
 * Check if a `string` has [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)
 * From [has-ansi](https://github.com/chalk/has-ansi)
 * @static
 * @param {string} input The string to validate.
 * @returns {boolean} Returns the result of validation.
 * @example
 * hasAnsi('\u001B[4mUnicorn\u001B[0m');
 * // => true
 *
 * hasAnsi('cake');
 * // => false
 */
const hasAnsi = require('has-ansi')
module.exports = hasAnsi
