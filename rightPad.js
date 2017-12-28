/**
 * Pads `string` on the right side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
 * From [lodash/padEnd](https://lodash.com/docs/4.17.4#padEnd)
 * @static
 * @param {number} length The padding length.
 * @param {string} string The string to pad.
 * @returns {string} Returns the padded string.
 * @example
 * rightPad(6, 'abc');
 * // => 'abc   '
 */
const rightPad = require('lodash/fp/padEnd')
module.exports = rightPad
