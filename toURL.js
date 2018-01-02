/**
 * Convert an url object to URL.
 * From [url/format](https://nodejs.org/api/url.html#url_url_format_urlobject)
 * @static
 * @param {Object|string} urlObject A URL object (as returned by url.parse() or constructed otherwise). If a string, it is converted to an object by passing it to url.parse().
 * @returns {string} Returns the resulted URL.
 * @example
 * toURL({
 *  protocol: 'https',
 *  host: 'www.dgmlive.com',
 *  hash: '#track-1',
 *  query: { album: 'discipline' },
 *  pathname: '/kingcrimson'
 * })
 * // => "https://www.dgmlive.com/kingcrimson?album=discipline#track-1"
 */
const toURL = require('url').format
module.exports = toURL
