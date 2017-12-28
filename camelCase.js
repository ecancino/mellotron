/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 * From [lodash/camelCase](https://lodash.com/docs/4.17.4#camelCase)
 * @static
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 * camelCase('Foo Bar');
 * // => 'fooBar'
 */
const camelCase = require('lodash/fp/camelCase')
module.exports = camelCase
