/**
 * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * From [lodash/kebabCase](https://lodash.com/docs/4.17.4#kebabCase)
 * @static
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 * slugify('Foo Bar');
 * // => 'foo-bar'
 *
 * slugify('__FOO_BAR__');
 * // => 'foo-bar'
 */
const slugify = require('lodash/fp/kebabCase')
module.exports = slugify
