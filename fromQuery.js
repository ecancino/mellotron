/**
 * Parse a query string into an object.
 * From [querystring/parse](https://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options)
 * @static
 * @param {string} str The URL query string to parse.
 * @param {string} [sep='&'] The substring to delimit key and value pairs.
 * @param {string} [eq='='] The substring to delimit keys and values.
 * @param {Object} [options]
 * @param {Function} [options.decodeURIComponent=querystring.unescape()] The decoding function.
 * @param {Function} [options.maxKeys=1000] Maximum number of keys to parse. 0 to remove key counting limitations.
 * @returns {Object} Returns the parsed URL query string (str) into a collection of key and value pairs.
 * @example
 * fromQuery('foo=1&foo=2&foo=3');
 * // => { foo: ['1', '2', '3' ] }
 *
 * fromQuery('foo:1|foo:2|foo:3', '|', ':');
 * // => { foo: ['1', '2', '3' ] }
 */
const fromQuery = require('querystring').parse
module.exports = fromQuery
