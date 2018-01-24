/**
 * Loosely validate a URL.
 * From [is-url](https://github.com/segmentio/is-url)
 * @static
 * @param {string} string The URL string to validate.
 * @returns {Object} Returns true if string is a URL, false otherwise.
 * @example
 * isURL('http://symbolics.com');
 * // => true
 *
 * isURL('http://')
 * // => false
 *
 * isURL('bbn.com')
 * // => false
 */
const isURL = require('is-url')
module.exports = isURL
