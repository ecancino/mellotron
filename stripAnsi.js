/**
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)
 * From [strip-ansi](https://github.com/chalk/strip-ansi)
 * @static
 * @param {string} input The string to clean.
 * @returns {string} Returns the string without ANSI escape codes.
 * @example
 * stripAnsi('\u001B[4mUnicorn\u001B[0m');
 * // => 'Unicorn'
 */
const stripAnsi = require('strip-ansi')
module.exports = stripAnsi
