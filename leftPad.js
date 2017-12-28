/**
 * Pads `string` on the left side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
 * From [lodash/padStart](https://lodash.com/docs/4.17.4#padStart)
 * @static
* @param {number} length The padding length.
 * @param {string} string The string to pad.
 * @returns {string} Returns the padded string.
 * @example
 * leftPad(6, 'abc');
 * // => '   abc'
 */
const leftPad = require('lodash/fp/padStart')
module.exports = leftPad
