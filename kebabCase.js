/**
 * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * From [lodash/kebabCase](https://lodash.com/docs/4.17.4#kebabCase)
 * @static
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
const kebabCase = require('lodash/fp/kebabCase')
module.exports = kebabCase
