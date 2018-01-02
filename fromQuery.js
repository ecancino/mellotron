/**
 * Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly.
 * From [querystring/parse](https://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options)
 * @static
 * @param {string} str The URL query string to parse.
 * @param {string} [sep='&'] The substring used to delimit key and value pairs in the query string. Defaults to '&'.
 * @param {string} [eq='='] The substring used to delimit keys and values in the query string. Defaults to '='.
 * @param {Object} [options]
 * @param {Function} [options.decodeURIComponent=querystring.unescape()] The function to use when decoding percent-encoded characters in the query string.
 * @param {Function} [options.maxKeys=1000]  Specifies the maximum number of keys to parse. Defaults to 1000. Specify 0 to remove key counting limitations.
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
