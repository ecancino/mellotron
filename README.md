# [mellotron](https://www.npmjs.com/package/mellotron) *0.2.4*

> Synthetic string orchestra. Curated list of string manipulation curried functions
```
  yarn add mellotron
```
```
  npm install mellotron
```

## Methods
> [capitalize](#capitalize)
> [concat](#concat)
> [contains](#contains)
> [deburr](#deburr)
> [endsWith](#endsWith)
> [format](#format)
> [fromQuery](#fromQuery)
> [fromURL](#fromURL)
> [isString](#isString)
> [join](#join)
> [leftPad](#leftPad)
> [length](#length)
> [match](#match)
> [pad](#pad)
> [replace](#replace)
> [reverse](#reverse)
> [rightPad](#rightPad)
> [slugify](#slugify)
> [split](#split)
> [startsWith](#startsWith)
> [test](#test)
> [toLower](#toLower)
> [toQuery](#toQuery)
> [toString](#toString)
> [toUpper](#toUpper)
> [toURL](#toURL)
> [trim](#trim)
> [trimLeft](#trimLeft)
> [trimRight](#trimRight)

<a id="capitalize"></a>
## capitalize([string&#x3D;&#x27;&#x27;]) 
Capitalize the first letter of a `string`.
From [lodash/capitalize](https://lodash.com/docs/4.17.4#capitalize)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to convert. | *Optional* |


##### Examples
```javascript
capitalize('united states');
// => 'United states'
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

<a id="contains"></a>
## contains(a, list) 
Inserts the separator `string` between each element and concatenating all the elements into a single `string`.
From [ramda/contains](http://ramdajs.com/docs/#contains)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `string`  | The item to compare against. | &nbsp; |
| list | `string`  | The string to consider | &nbsp; |


##### Examples
```javascript
contains('á', 'Zárate')
// => true

const taco = contains('salsa');
taco('Un taco sin salsa no es taco');
// => true
```

##### Returns
- `boolean`  Returns `true` if an equivalent item is in list, `false` otherwise.

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
## format(template, values) 
Values are interpolated on a template `string`.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| template | `string`  | The &#x60;string&#x60; with placeholders. | &nbsp; |
| values | `Array.<*>` `Object`  | Values to be interpolated | &nbsp; |


##### Examples
```javascript
// Allows creating templates:
const readMessages = format('{0}, you have {1} unread message{2}')
readMessages(['Holly', 2, 's'])
// => 'Holly, you have 2 unread messages'

// Unmatched placeholders produce no output:
readMessages(['Steve', 1])
// => 'Steve, you have 1 unread message'

// Supports property access via dot notation
const bobby = { first: 'Bobby', last: 'Fischer' };
const garry = { first: 'Garry', last: 'Kasparov' };
format('{0.first} {0.last} vs. {1.first} {1.last}', [bobby, garry])
// => 'Bobby Fischer vs. Garry Kasparov'

// Supports property access via object property
const jamesBond = { firstname: 'James', lastname: 'Bond' };
format('The name is {lastname}. {firstname} {lastname}.', jamesBond)
// => 'The name is Bond. James Bond.'
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
## length(s) 
Count visual length of javascript string.
From [charcount](https://github.com/nodeca/charcount)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| s | `string`  | The string to count. | &nbsp; |


##### Examples
```javascript
length('🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒');
// => 12
```

##### Returns
- `number`  Returns length of the string.

<a id="match"></a>
## match(rx, str) 
Tests a regular expression against a `string`.
From [ramda/match](http://ramdajs.com/docs/#match)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| rx | `string`  | A regular expression or a substring to match. | &nbsp; |
| str | `string`  | The string to match against. | &nbsp; |


##### Examples
```javascript
match(/([a-z]a)/g, 'bananas');
// => ['ba', 'na', 'na']
```

##### Returns
- `Array`  The list of matches or empty `array`.

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
replace(/foo/g, 'bar', 'foo foo foo');
// => 'bar bar bar'

const censor = replace('the night', 'some time');
censor("Let's spend the night together")
// => "Let's spend some time together"
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
## slugify([string&#x3D;&#x27;&#x27;]) 
Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
From [lodash/kebabCase](https://lodash.com/docs/4.17.4#kebabCase)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to convert. | *Optional* |


##### Examples
```javascript
slugify('Foo Bar');
// => 'foo-bar'

slugify('__FOO_BAR__');
// => 'foo-bar'
```

##### Returns
- `string`  Returns the kebab cased string.

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

<a id="test"></a>
## test(pattern, str) 
Determines whether a given `string` matches a given regular expression.
From [ramda/test](http://ramdajs.com/docs/#test)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| pattern | `string`  | A regular expression or a substring to match. | &nbsp; |
| str | `string`  | The string to match against. | &nbsp; |


##### Examples
```javascript
test(/^x/, 'xyz');
// => true

test(/^y/, 'xyz');
// => false
```

##### Returns
- `boolean`  The result of the test.

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

