# [mellotron](https://www.npmjs.com/package/mellotron) *0.1.8*

> Synthetic string orchestra. Curated list of string manipulation curried functions
```
  yarn add mellotron
```
```
  npm install mellotron
```

## Methods
> [camelCase](#camelCase)
> [capitalize](#capitalize)
> [concat](#concat)
> [deburr](#deburr)
> [endsWith](#endsWith)
> [format](#format)
> [fromQuery](#fromQuery)
> [fromURL](#fromURL)
> [hasAnsi](#hasAnsi)
> [isString](#isString)
> [join](#join)
> [kebabCase](#kebabCase)
> [leftPad](#leftPad)
> [length](#length)
> [pad](#pad)
> [replace](#replace)
> [reverse](#reverse)
> [rightPad](#rightPad)
> [slugify](#slugify)
> [split](#split)
> [startsWith](#startsWith)
> [stripAnsi](#stripAnsi)
> [toLower](#toLower)
> [toQuery](#toQuery)
> [toString](#toString)
> [toUpper](#toUpper)
> [toURL](#toURL)
> [trim](#trim)
> [trimLeft](#trimLeft)
> [trimRight](#trimRight)

<a id="camelCase"></a>
## camelCase([string&#x3D;&#x27;&#x27;]) 
Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
From [lodash/camelCase](https://lodash.com/docs/4.17.4#camelCase)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to convert. | *Optional* |


##### Examples
```javascript
camelCase('Foo Bar');
// => 'fooBar'
```

##### Returns
- `string`  Returns the camel cased string.

<a id="capitalize"></a>
## capitalize([string&#x3D;&#x27;&#x27;]) 
Capitalize the first letter of a `string`, or all words in a `string`.
From [capitalize](https://github.com/grncdr/js-capitalize)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to convert. | *Optional* |


##### Examples
```javascript
capitalize('united states');
// => 'United states'

capitalize.words('united states');
// => 'United States'
```

##### Returns
- `string`  Returns the capitalized string.

<a id="concat"></a>
## concat([string&#x3D;&#x27;&#x27;, string&#x3D;&#x27;&#x27;]) 
Concatenate the given `strings`.
From [ramda/concat](http://ramdajs.com/docs/#concat)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The first string to add. | *Optional* |
| string&#x3D;&#x27;&#x27; | `string`  | The second string to add. | *Optional* |


##### Examples
```javascript
concat('ABC', 'DEF');
// => 'ABCDEF'

const prefix = concat('cyber');
prefix('space');
// => 'cyberspace'
```

##### Returns
- `string`  Returns the result of concatenating the given `strings`.

<a id="deburr"></a>
## deburr([string&#x3D;&#x27;&#x27;]) 
Deburrs `string` by converting letters to basic Latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
From [lodash/deburr](https://lodash.com/docs/4.17.4#deburr)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to deburr. | *Optional* |


##### Examples
```javascript
deburr('déjà vu');
// => 'deja vu'
```

##### Returns
- `string`  Returns the deburred string.

<a id="endsWith"></a>
## endsWith(target, string) 
Checks if `string` ends with the given target `string`.
From [lodash/endsWith](https://lodash.com/docs/4.17.4#endsWith)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| target | `string`  | The string to search for. | &nbsp; |
| string | `string`  | The string to inspect. | &nbsp; |


##### Examples
```javascript
endsWith('c', 'abc');
// => true

const endsWithR = endsWith('r');
endsWithR('bar');
// => true
```

##### Returns
- `boolean`  Returns `true` if `string` ends with `target`, else `false`.

<a id="format"></a>
## format(template, *) 
Values are interpolated on a template `string`.
From [string-format](https://github.com/davidchambers/string-format)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| template | `string`  | The string to inspect. | &nbsp; |
| * | `Array.<string>`  | List of values to be interpolated | &nbsp; |


##### Examples
```javascript
format('Hello, {}!', ['Alice']);
// => 'Hello, Alice!'

// Unmatched placeholders produce no output:
format('{0}, you have {1} unread message{2}', ['Steve', 1]);
// => 'Steve, you have 1 unread message'

// Allows creating templates:
const template = format("The name's {1}. {0} {1}.");
template(['James', 'Bond']) // => 'The name's Bond. James Bond.'
template(['David', 'Chambers']) // => 'The name's Chambers. David Chambers.'
```

##### Returns
- `string`  Returns the result of replacing each {…} placeholder in the template string with its corresponding replacement.

<a id="fromQuery"></a>
## fromQuery(str[, sep&#x3D;&#x27;&amp;&#x27;, eq&#x3D;&#x27;&#x3D;&#x27;, options]) 
Parse a query string into an object.
From [querystring/parse](https://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | The URL query string to parse. | &nbsp; |
| sep&#x3D;&#x27;&amp;&#x27; | `string`  | The substring to delimit key and value pairs. | *Optional* |
| eq&#x3D;&#x27;&#x3D;&#x27; | `string`  | The substring to delimit keys and values. | *Optional* |
| options | `Object`  |  | *Optional* |
| options.decodeURIComponent&#x3D;querystring.unescape() | `Function`  | The decoding function. | *Optional* |
| options.maxKeys&#x3D;1000 | `Function`  | Maximum number of keys to parse. 0 to remove key counting limitations. | *Optional* |


##### Examples
```javascript
fromQuery('foo=1&foo=2&foo=3');
// => { foo: ['1', '2', '3' ] }

fromQuery('foo:1|foo:2|foo:3', '|', ':');
// => { foo: ['1', '2', '3' ] }
```

##### Returns
- `Object`  Returns the parsed URL query string (str) into a collection of key and value pairs.

<a id="fromURL"></a>
## fromURL(urlString[, parseQueryString&#x3D;false, slashesDenoteHost&#x3D;false]) 
Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly.
From [url/parse](https://nodejs.org/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| urlString | `string`  | The URL string to parse. | &nbsp; |
| parseQueryString&#x3D;false | `boolean`  | The query property will be set to an object returned by the querystring module&#x27;s parse() method if &#x60;true&#x60;. | *Optional* |
| slashesDenoteHost&#x3D;false | `boolean`  | The first token after the literal string // and preceding the next / will be interpreted as the host if &#x60;true&#x60;. | *Optional* |


##### Examples
```javascript
fromURL('https://www.dgmlive.com/kingcrimson/?album=discipline#track-1');
// =>
// {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.dgmlive.com',
//   port: null,
//   hostname: 'www.dgmlive.com',
//   hash: '#track-1',
//   search: '?album=discipline',
//   query: 'album=discipline',
//   pathname: '/kingcrimson/',
//   path: '/kingcrimson/?album=discipline',
//   href: 'https://www.dgmlive.com/kingcrimson/?album=discipline#track-1'
// }
```

##### Returns
- `Object`  Returns the parsed URL into a collection of key and value pairs.

<a id="hasAnsi"></a>
## hasAnsi(input) 
Check if a `string` has [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)
From [has-ansi](https://github.com/chalk/has-ansi)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| input | `string`  | The string to validate. | &nbsp; |


##### Examples
```javascript
hasAnsi('\u001B[4mUnicorn\u001B[0m');
// => true

hasAnsi('cake');
// => false
```

##### Returns
- `boolean`  Returns the result of validation.

<a id="isString"></a>
## isString(val) 
See if an object is an instance of the String constructor.
From [ramda/is](http://ramdajs.com/docs/#is)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | The value to test. | &nbsp; |


##### Examples
```javascript
isString('s');
// => true

isString(new String(''));
// => true
```

##### Returns
- `boolean`  Returns if the value is a String.

<a id="join"></a>
## join(separator, xs) 
Inserts the separator `string` between each element and concatenating all the elements into a single `string`.
From [ramda/join](http://ramdajs.com/docs/#join)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| separator | `string`  | The string used to separate the elements. | &nbsp; |
| xs | `string`  | The elements to join into a string. | &nbsp; |


##### Examples
```javascript
join(' ', ['a', 2, 3.4]);
// => 'a 2 3.4'

const piper = join('|');
piper(['Pied', 'Piper', 'of', 'Hamelin']);
// => 'Pied|Piper|of|Hamelin'
```

##### Returns
- `string`  Returns the `string` made by concatenating `xs` with `separator`.

<a id="kebabCase"></a>
## kebabCase([string&#x3D;&#x27;&#x27;]) 
Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
From [lodash/kebabCase](https://lodash.com/docs/4.17.4#kebabCase)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to convert. | *Optional* |


##### Examples
```javascript
kebabCase('Foo Bar');
// => 'foo-bar'

kebabCase('__FOO_BAR__');
// => 'foo-bar'
```

##### Returns
- `string`  Returns the kebab cased string.

<a id="leftPad"></a>
## leftPad(length, string) 
Pads `string` on the left side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
From [lodash/padStart](https://lodash.com/docs/4.17.4#padStart)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| length | `number`  | The padding length. | &nbsp; |
| string | `string`  | The string to pad. | &nbsp; |


##### Examples
```javascript
leftPad(6, 'abc');
// => '   abc'
```

##### Returns
- `string`  Returns the padded string.

<a id="length"></a>
## length(input) 
Length of a string by counting [astral symbols](https://web.archive.org/web/20150721114550/http://www.tlg.uci.edu/~opoudjis/unicode/unicode_astral.html) and ignoring [ANSI escape codes](https://github.com/sindresorhus/strip-ansi).
From [string-length](https://github.com/sindresorhus/string-length)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| input | `string`  | The string to count. | &nbsp; |


##### Examples
```javascript
length('🐴');
// => 1

length('\u001B[1municorn\u001B[22m');
// => 7
```

##### Returns
- `number`  Returns length of the string.

<a id="pad"></a>
## pad(length, string) 
Pads `string` on the left and right sides if it's shorter than `length`. Padding characters are truncated if they can't be evenly divided by `length`.
From [lodash/pad](https://lodash.com/docs/4.17.4#pad)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| length | `number`  | The padding length. | &nbsp; |
| string | `string`  | The string to pad. | &nbsp; |


##### Examples
```javascript
pad(8, 'abc');
// => '  abc   '
```

##### Returns
- `string`  Returns the padded string.

<a id="replace"></a>
## replace(regex, replacement, str) 
Inserts the separator `string` between each element and concatenating all the elements into a single `string`.
From [ramda/replace](http://ramdajs.com/docs/#replace)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| regex | `string`  | A regular expression or a substring to match. | &nbsp; |
| replacement | `string`  | The string to replace the matches with. | &nbsp; |
| str | `string`  | The String to do the search and replacement in. | &nbsp; |


##### Examples
```javascript
replace('foo', 'bar', 'foo foo foo');
// => 'bar foo foo'

const censor = replace(/(bad)/g, '***');
censor('Maybe bad words')
```

##### Returns
- `string`  Returns the resulted `string`.

<a id="reverse"></a>
## reverse(list) 
Reverse a `string`.
From [ramda/reverse](http://ramdajs.com/docs/#reverse)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `string`  | The string to reverse. | &nbsp; |


##### Examples
```javascript
reverse('abc');
// => 'cba'

reverse('ab');
// => 'ba'
```

##### Returns
- `string`  Returns a new string with the characters in reverse order.

<a id="rightPad"></a>
## rightPad(length, string) 
Pads `string` on the right side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
From [lodash/padEnd](https://lodash.com/docs/4.17.4#padEnd)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| length | `number`  | The padding length. | &nbsp; |
| string | `string`  | The string to pad. | &nbsp; |


##### Examples
```javascript
rightPad(6, 'abc');
// => 'abc   '
```

##### Returns
- `string`  Returns the padded string.

<a id="slugify"></a>
## slugify(options, string) 
Coerces foreign symbols to their english equivalent (check out the [charMap](https://github.com/simov/slugify/blob/master/index.js) for more details).
From [slugify](https://github.com/simov/slugify)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `string` `object`  | The string to convert. | &nbsp; |
| options.replacement&#x3D;&#x27;-&#x27; | `string`  | The string to replace spaces with. | *Optional* |
| options.remove&#x3D;null | `string` `regex`  | The string to replace spaces with. | *Optional* |
| options.lower&#x3D;false | `boolean`  | If the result should be lowercase. | *Optional* |
| string | `string`  | The string to convert. | &nbsp; |


##### Examples
```javascript
slugify('Some string');
// => 'Some-string'

slugify('some String', '_');
// => 'some_String'

slugify(`O Brother, Where Art Thou?`, { remove: /[,?]/g, replacement: '|', lower: true });
// => 'o|brother|where|art|thou'

slugify.extend({ '☢': 'radioactive' });
slugify('unicode ♥ is ☢');
// => 'unicode-love-is-radioactive'
```

##### Returns
- `string`  Returns the slugified string.

<a id="split"></a>
## split(sep, str) 
Splits a `string` into an `array` of strings based on the given separator.
From [ramda/split](http://ramdajs.com/docs/#split)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sep | `string`  | The pattern. | &nbsp; |
| str | `string`  | The string to separate into an array. | &nbsp; |


##### Examples
```javascript
split('.', 'a.b.c.xyz.d');
// => ['a', 'b', 'c', 'xyz', 'd']

const tail = ary => ary.slice(1);
const path = split('/');
tail(path('/usr/local/bin/node'));
// => [usr', 'local', 'bin', 'node']
```

##### Returns
- `Array`  Returns the resulting array.

<a id="startsWith"></a>
## startsWith(target, string) 
Checks if `string` starts with the given target `string`.
From [lodash/startsWith](https://lodash.com/docs/4.17.4#startsWith)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| target | `string`  | The string to search for. | &nbsp; |
| string | `string`  | The string to inspect. | &nbsp; |


##### Examples
```javascript
startsWith('a', 'abc');
// => true

const startsWithM = startsWith('M');
startsWithM('Mellotron');
// => true
```

##### Returns
- `boolean`  Returns `true` if `string` starts with `target`, else `false`.

<a id="stripAnsi"></a>
## stripAnsi(input) 
Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)
From [strip-ansi](https://github.com/chalk/strip-ansi)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| input | `string`  | The string to clean. | &nbsp; |


##### Examples
```javascript
stripAnsi('\u001B[4mUnicorn\u001B[0m');
// => 'Unicorn'
```

##### Returns
- `string`  Returns the string without ANSI escape codes.

<a id="toLower"></a>
## toLower(str) 
Convert to lower case.
From [ramda/toLower](http://ramdajs.com/docs/#toLower)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | The string to lower case. | &nbsp; |


##### Examples
```javascript
toLower('XYZ');
// => 'xyz'
```

##### Returns
- `string`  Returns the lower case version of `str`.

<a id="toQuery"></a>
## toQuery(str[, sep&#x3D;&#x27;&amp;&#x27;, eq&#x3D;&#x27;&#x3D;&#x27;, options]) 
Stringify an object into a query string, sorting the keys.
From [querystring/stringify](https://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | The URL query string to parse. | &nbsp; |
| sep&#x3D;&#x27;&amp;&#x27; | `string`  | The substring to delimit key and value pairs. | *Optional* |
| eq&#x3D;&#x27;&#x3D;&#x27; | `string`  | The substring to delimit keys and values. | *Optional* |
| options | `Object`  |  | *Optional* |
| options.decodeURIComponent&#x3D;querystring.unescape() | `Function`  | The decoding function. | *Optional* |


##### Examples
```javascript
toQuery({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// => 'foo=bar&baz=qux&baz=quux&corge='

toQuery({ foo: 'bar', baz: 'qux' }, '|', ':');
// => foo:bar|baz:qux'
```

##### Returns
- `Object`  Returns the parsed URL query string (str) into a collection of key and value pairs.

<a id="toString"></a>
## toString(val) 
Convert to `string`.
From [ramda/toString](http://ramdajs.com/docs/#toString)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | The value to convert. | &nbsp; |


##### Examples
```javascript
toString(42);
// => '42'

toString([1, 2, 3]);
//=> '[1, 2, 3]'

toString({ foo: 1, bar: 2, baz: 3 });
//=> '{"bar": 2, "baz": 3, "foo": 1}'
```

##### Returns
- `string`  Returns the string representation of the given value

<a id="toUpper"></a>
## toUpper(str) 
Convert to upper case.
From [ramda/toUpper](http://ramdajs.com/docs/#toUpper)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | The string to upper case. | &nbsp; |


##### Examples
```javascript
toUpper('abc');
// => 'ABC'
```

##### Returns
- `string`  Returns the upper case version of `str`.

<a id="toURL"></a>
## toURL(urlObject) 
Convert an url object to URL.
From [url/format](https://nodejs.org/api/url.html#url_url_format_urlobject)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| urlObject | `Object` `string`  | A URL object (as returned by url.parse() or constructed otherwise). If a string, it is converted to an object by passing it to url.parse(). | &nbsp; |


##### Examples
```javascript
toURL({
 protocol: 'https',
 host: 'www.dgmlive.com',
 hash: '#track-1',
 query: { album: 'discipline' },
 pathname: '/kingcrimson'
})
// => "https://www.dgmlive.com/kingcrimson?album=discipline#track-1"
```

##### Returns
- `string`  Returns the resulted URL.

<a id="trim"></a>
## trim(str) 
Removes (strips) whitespace from both ends of the string.
From [ramda/trim](http://ramdajs.com/docs/#trim)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | The string to trim. | &nbsp; |


##### Examples
```javascript
trim('   xyz  ');
// => 'xyz'
```

##### Returns
- `string`  Returns the trimmed version of `str`.

<a id="trimLeft"></a>
## trimLeft([string&#x3D;&#x27;&#x27;]) 
Removes leading whitespace or specified characters from `string`.
From [lodash/trimStart](https://lodash.com/docs/4.17.4#trimStart)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to trim. | *Optional* |


##### Examples
```javascript
trimStart('  abc  ');
// => 'abc  '
```

##### Returns
- `string`  Returns the trimmed string.

<a id="trimRight"></a>
## trimRight([string&#x3D;&#x27;&#x27;]) 
Removes trailing whitespace or specified characters from `string`.
From [lodash/trimEnd](https://lodash.com/docs/4.17.4#trimEnd)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to trim. | *Optional* |


##### Examples
```javascript
trimRight('  abc  ');
// => '  abc'
```

##### Returns
- `string`  Returns the trimmed string.

