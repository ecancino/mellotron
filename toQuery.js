/**
 * Stringify an object into a query string, sorting the keys.
 * From [querystring/stringify](https://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options)
 * @static
 * @param {string} str The URL query string to parse.
 * @param {string} [sep='&'] The substring used to delimit key and value pairs in the query string. Defaults to '&'.
 * @param {string} [eq='='] The substring used to delimit keys and values in the query string. Defaults to '='.
 * @param {Object} [options]
 * @param {Function} [options.decodeURIComponent=querystring.unescape()] The function to use when decoding percent-encoded characters in the query string.
 * @returns {Object} Returns the parsed URL query string (str) into a collection of key and value pairs.
 * @example
 * toQuery({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
 * // => 'foo=bar&baz=qux&baz=quux&corge='
 *
 * toQuery({ foo: 'bar', baz: 'qux' }, '|', ':');
 * // => foo:bar|baz:qux'
 */
const toQuery = require('querystring').stringify
module.exports = toQuery
