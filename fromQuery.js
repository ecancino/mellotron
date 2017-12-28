/**
 * Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly.
 * From [query-string/parse](https://github.com/sindresorhus/query-string#parsestring-options)
 * @static
 * @param {string} str The string to inspect.
 * @param {Object} [opts] Configuration options.
 * @param {string} [opts.arrayFormat='none'] Parsing arrays correctly
 * @returns {string} Returns an object created with [Object.create(null)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) and thus does not have a prototype.
 * @example
 * fromQuery('foo=1&foo=2&foo=3', { arrayFormat: 'none' }));
 * // => { foo: [1,2,3] }
 *
 * fromQuery('foo[]=1&foo[]=2&foo[]=3', { arrayFormat: 'bracket' });
 * // => { foo: [1,2,3] }
 *
 * fromQuery('foo[0]=1&foo[1]=2&foo[3]=3', { arrayFormat: 'index' });
 * // => { foo: [1,2,3] }
 */
const fromQuery = require('query-string').parse
module.exports = fromQuery
