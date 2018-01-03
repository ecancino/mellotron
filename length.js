/**
 * Length of a string by counting [astral symbols](https://web.archive.org/web/20150721114550/http://www.tlg.uci.edu/~opoudjis/unicode/unicode_astral.html) and ignoring [ANSI escape codes](https://github.com/sindresorhus/strip-ansi).
 * From [string-length](https://github.com/sindresorhus/string-length)
 * @static
 * @param {string} s The string to count.
 * @returns {number} Returns length of the string.
 * @example
 * length('🐴');
 * // => 1
 *
 * length('\u001B[1municorn\u001B[22m');
 * // => 7
 */
const length = require('charcount')
module.exports = length
