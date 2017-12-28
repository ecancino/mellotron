/**
 * Values are interpolated on a template `string`. Based on Python's [str.format()](http://docs.python.org/library/stdtypes.html#str.format).
 * From [string-format](https://github.com/davidchambers/string-format)
 * @static
 * @param {string} template The string to inspect.
 * @param {...any} [$replacements] Values to be interpolated
 * @returns {string} Returns the result of replacing each {…} placeholder in the template string with its corresponding replacement.
 * @example
 * format('Hello, {}!', 'Alice');
 * // => 'Hello, Alice!'
 *
 * Unmatched placeholders produce no output:
 * format('{0}, you have {1} unread message{2}', 'Steve', 1);
 * // => 'Steve, you have 1 unread message'
 *
 * Can reference a positional argument multiple times:
 * format("The name's {1}. {0} {1}.", 'James', 'Bond');
 * // => "The name's Bond. James Bond."
 */
const format = require('string-format')
module.exports = format
