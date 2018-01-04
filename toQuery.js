/**
 * Stringify an object into a query string, sorting the keys.
 * From [querystring/stringify](https://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options)
 * @static
 * @param {string} str The URL query string to parse.
 * @param {string} [sep='&'] The substring to delimit key and value pairs.
 * @param {string} [eq='='] The substring to delimit keys and values.
 * @param {Object} [options]
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
