/**
 * Coerces foreign symbols to their english equivalent (check out the [charMap](https://github.com/simov/slugify/blob/master/index.js) for more details).
 * From [slugify](https://github.com/simov/slugify)
 * @static
 * @param {string|object} options The string to convert.
 * @param {string} [options.replacement='-'] The string to replace spaces with.
 * @param {string|regex} [options.remove=null] The string to replace spaces with.
 * @param {boolean} [options.lower=false] If the result should be lowercase.
 * @param {string} string The string to convert.
 * @returns {string} Returns the slugified string.
 * @example
 * slugify('Some string');
 * // => 'Some-string'
 *
 * slugify('some String', '_');
 * // => 'some_String'
 *
 * slugify(`O Brother, Where Art Thou?`, { remove: /[,?]/g, replacement: '|', lower: true })
 * // => 'o|brother|where|art|thou'
 *
 * slugify.extend({ '☢': 'radioactive' })
 * slugify('unicode ♥ is ☢')
 * // => 'unicode-love-is-radioactive'
 */
const slugify = require('slugify')
module.exports = slugify
