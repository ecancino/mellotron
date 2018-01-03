/**
 * Tests a regular expression against a `string`.
 * From [ramda/match](http://ramdajs.com/docs/#match)
 * @static
 * @param {string} rx A regular expression or a substring to match.
 * @param {string} str The string to match against.
 * @returns {Array} The list of matches or empty `array`.
 * @example
 * match(/([a-z]a)/g, 'bananas');
 * // => ['ba', 'na', 'na']
 */
const match = require('ramda/src/match')
module.exports = match
