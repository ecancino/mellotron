/**
 * Inserts the separator `string` between each element and concatenating all the elements into a single `string`.
 * From [ramda/replace](http://ramdajs.com/docs/#replace)
 * @static
 * @param {string} regex A regular expression or a substring to match.
 * @param {string} replacement The string to replace the matches with.
 * @param {string} str The String to do the search and replacement in.
 * @returns {boolean} Returns the resulted `string`.
 * @example
 * replace('foo', 'bar', 'foo foo foo');
 * // => 'bar foo foo'
 *
 * replace(/foo/g, 'bar', 'foo foo foo');
 * // => 'bar bar bar'
 */
const replace = require('ramda/src/replace')
module.exports = replace
