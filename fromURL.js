/**
 * Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly.
 * From [url/parse](https://nodejs.org/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost)
 * @static
 * @param {string} urlString The URL string to parse.
 * @param {boolean} [parseQueryString=false]  The query property will be set to an object returned by the querystring module's parse() method if `true`.
 * @param {boolean} [slashesDenoteHost=false]  The first token after the literal string // and preceding the next / will be interpreted as the host if `true`.
 * @returns {Object} Returns the parsed URL into a collection of key and value pairs.
 * @example
 * fromURL('https://www.dgmlive.com/kingcrimson/?album=discipline#track-1');
 * // =>
 * // {
 * //   protocol: 'https:',
 * //   slashes: true,
 * //   auth: null,
 * //   host: 'www.dgmlive.com',
 * //   port: null,
 * //   hostname: 'www.dgmlive.com',
 * //   hash: '#track-1',
 * //   search: '?album=discipline',
 * //   query: 'album=discipline',
 * //   pathname: '/kingcrimson/',
 * //   path: '/kingcrimson/?album=discipline',
 * //   href: 'https://www.dgmlive.com/kingcrimson/?album=discipline#track-1'
 * // }
 */
const fromURL = require('url').parse
module.exports = fromURL
