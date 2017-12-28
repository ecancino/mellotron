/**
 * Stringify an object into a query string, sorting the keys.
 * From [query-string/stringify](https://github.com/sindresorhus/query-string#stringifyobject-options)
 * @static
 * @param {Object} obj The objecto to inspect.
 * @param {Object} [opts] Configuration options.
 * @param {boolean} [opts.strict=true] Strictly encode URI components with [strict-uri-encode](https://github.com/kevva/strict-uri-encode). It uses [encodeURIComponent](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) if set to false. You probably [don't care](https://github.com/sindresorhus/query-string/issues/42) about this option.
 * @param {boolean} [opts.encode=true] [URL encode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) the keys and values.
 * @param {string} [opts.arrayFormat='none'] Parsing arrays correctly
 * @returns {string} Returns an string representation of the object.
 * @example
 * toQuery({ foo: [1,2,3] }, { arrayFormat: 'bracket' });
 * // => 'foo[]=1&foo[]=2&foo[]=3'
 *
 * toQuery({ foo: [1,2,3] }, { arrayFormat: 'index' });
 * // => 'foo[0]=1&foo[1]=2&foo[3]=3'
 *
 * toQuery({ foo: [1,2,3] });
 * // => 'foo=1&foo=2&foo=3
 */
const toQuery = require('query-string').stringify
module.exports = toQuery
