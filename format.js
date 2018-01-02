const curry = require('ramda/src/curry')
const concat = require('ramda/src/concat')
const stringFormat = require('string-format')

/**
 * Values are interpolated on a template `string`.
 * From [string-format](https://github.com/davidchambers/string-format)
 * @static
 * @param {string} template The string to inspect.
 * @param {string[]} * List of values to be interpolated
 * @returns {string} Returns the result of replacing each {…} placeholder in the template string with its corresponding replacement.
 * @example
 * format('Hello, {}!', ['Alice']);
 * // => 'Hello, Alice!'
 *
 * // Unmatched placeholders produce no output:
 * format('{0}, you have {1} unread message{2}', ['Steve', 1]);
 * // => 'Steve, you have 1 unread message'
 *
 * // Allows creating templates:
 * const template = format("The name's {1}. {0} {1}.");
 * template(['James', 'Bond']) // => 'The name's Bond. James Bond.'
 * template(['David', 'Chambers']) // => 'The name's Chambers. David Chambers.'
 */

const format = curry((template, replacements) => stringFormat.apply(null, concat([template], replacements)))
module.exports = format
