/**
 * Pads `string` on the left and right sides if it's shorter than `length`. Padding characters are truncated if they can't be evenly divided by `length`.
 * From [lodash/pad](https://lodash.com/docs/4.17.4#pad)
 * @static
 * @param {number} length The padding length.
 * @param {string} string The string to pad.
 * @returns {string} Returns the padded string.
 * @example
 * pad(8, 'abc');
 * // => '  abc   '
 */
const pad = require('lodash/fp/pad')
module.exports = pad
