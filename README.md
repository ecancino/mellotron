# mellotron *0.1.1*

> Synthetic string orchestra. Curated list of string manipulation curried functions

> [`camelCase`](#camelCase)
> [`capitalize`](#capitalize)
> [`concat`](#concat)
> [`deburr`](#deburr)
> [`endsWith`](#endsWith)
> [`format`](#format)
> [`fromQuery`](#fromQuery)
> [`hasAnsi`](#hasAnsi)
> [`isString`](#isString)
> [`join`](#join)
> [`kebabCase`](#kebabCase)
> [`leftPad`](#leftPad)
> [`length`](#length)
> [`pad`](#pad)
> [`replace`](#replace)
> [`reverse`](#reverse)
> [`rightPad`](#rightPad)
> [`slugify`](#slugify)
> [`split`](#split)
> [`startsWith`](#startsWith)
> [`stripAnsi`](#stripAnsi)
> [`toLower`](#toLower)
> [`toQuery`](#toQuery)
> [`toString`](#toString)
> [`toUpper`](#toUpper)
> [`trim`](#trim)
> [`trimLeft`](#trimLeft)
> [`trimRight`](#trimRight)




## <a id="camelCase">camelCase([string&#x3D;&#x27;&#x27;])</a> 

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


***



## <a id="capitalize">capitalize([string&#x3D;&#x27;&#x27;])</a> 

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


***



## <a id="concat">concat([string&#x3D;&#x27;&#x27;, string&#x3D;&#x27;&#x27;])</a> 

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
```


##### Returns


- `string`  Returns the result of concatenating the given `strings`.


***



## <a id="deburr">deburr([string&#x3D;&#x27;&#x27;])</a> 

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


***



## <a id="endsWith">endsWith(target, string)</a> 

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
```


##### Returns


- `string`  Returns `true` if `string` ends with `target`, else `false`.


***



## <a id="format">format(template, *)</a> 

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

Unmatched placeholders produce no output:
format('{0}, you have {1} unread message{2}', ['Steve', 1]);
// => 'Steve, you have 1 unread message'

Allows creating templates:
const template = format("The name's {1}. {0} {1}.");
template(['James', 'Bond']) // => 'The name's Bond. James Bond.'
template(['David', 'Chambers']) // => 'The name's Chambers. David Chambers.'
```


##### Returns


- `string`  Returns the result of replacing each {…} placeholder in the template string with its corresponding replacement.


***



## <a id="fromQuery">fromQuery(str[, opts])</a> 

Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly.
From [query-string/parse](https://github.com/sindresorhus/query-string#parsestring-options)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | The string to inspect. | &nbsp; |
| opts | `Object`  | Configuration options. | *Optional* |
| opts.arrayFormat&#x3D;&#x27;none&#x27; | `string`  | Parsing arrays correctly | *Optional* |




##### Examples

```javascript
fromQuery('foo=1&foo=2&foo=3', { arrayFormat: 'none' }));
// => { foo: [1,2,3] }

fromQuery('foo[]=1&foo[]=2&foo[]=3', { arrayFormat: 'bracket' });
// => { foo: [1,2,3] }

fromQuery('foo[0]=1&foo[1]=2&foo[3]=3', { arrayFormat: 'index' });
// => { foo: [1,2,3] }
```


##### Returns


- `string`  Returns an object created with [Object.create(null)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) and thus does not have a prototype.


***



## <a id="hasAnsi">hasAnsi(input)</a> 

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


***



## <a id="isString">isString(val)</a> 

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


***



## <a id="join">join(separator, xs)</a> 

Inserts the separator `string` between each element and concatenating all the elements into a single `string`.
From [ramda/join](http://ramdajs.com/docs/#join)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| separator | `string`  | The string used to separate the elements. | &nbsp; |
| xs | `string`  | The elements to join into a string. | &nbsp; |




##### Examples

```javascript
join('|', [1, 2, 3])
// => '1|2|3'

join(' ', ['a', 2, 3.4]);
// => 'a 2 3.4'
```


##### Returns


- `string`  Returns the `string` made by concatenating `xs` with `separator`.


***



## <a id="kebabCase">kebabCase([string&#x3D;&#x27;&#x27;])</a> 

Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
From [lodash/kebabCase](https://lodash.com/docs/4.17.4#kebabCase)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| string&#x3D;&#x27;&#x27; | `string`  | The string to convert. | *Optional* |




##### Examples

```javascript
kebabCase('Foo Bar')
// => 'foo-bar'

kebabCase('__FOO_BAR__');
// => 'foo-bar'
```


##### Returns


- `string`  Returns the kebab cased string.


***



## <a id="leftPad">leftPad(length, string)</a> 

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


***



## <a id="length">length(input)</a> 

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


***



## <a id="pad">pad(length, string)</a> 

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


***



## <a id="replace">replace(regex, replacement, str)</a> 

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

replace(/foo/g, 'bar', 'foo foo foo');
// => 'bar bar bar'
```


##### Returns


- `string`  Returns the resulted `string`.


***



## <a id="reverse">reverse(list)</a> 

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


***



## <a id="rightPad">rightPad(length, string)</a> 

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


***



## <a id="slugify">slugify(options, string)</a> 

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
slugify(null, 'Some string');
// => 'Some-string'

slugify('_', 'some string');
// => 'some_string'

slugify({ remove: /[,?]/g, replacement: '|', lower: true }, `O Brother, Where Art Thou?`)
// => 'o|brother|where|art|thou'

slugify.extend({ '☢': 'radioactive' })
slugify('unicode ♥ is ☢')
// => 'unicode-love-is-radioactive'
```


##### Returns


- `string`  Returns the slugified string.


***



## <a id="split">split(sep, str)</a> 

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

split('/', '/usr/local/bin/node');
// => ['', 'usr', 'local', 'bin', 'node']
```


##### Returns


- `Array`  Returns the resulting array.


***



## <a id="startsWith">startsWith(target, string)</a> 

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
```


##### Returns


- `string`  Returns `true` if `string` starts with `target`, else `false`.


***



## <a id="stripAnsi">stripAnsi(input)</a> 

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


***



## <a id="toLower">toLower(str)</a> 

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


***



## <a id="toQuery">toQuery(obj[, opts])</a> 

Stringify an object into a query string, sorting the keys.
From [query-string/stringify](https://github.com/sindresorhus/query-string#stringifyobject-options)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | The objecto to inspect. | &nbsp; |
| opts | `Object`  | Configuration options. | *Optional* |
| opts.strict&#x3D;true | `boolean`  | Strictly encode URI components with [strict-uri-encode](https://github.com/kevva/strict-uri-encode). It uses [encodeURIComponent](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) if set to false. You probably [don't care](https://github.com/sindresorhus/query-string/issues/42) about this option. | *Optional* |
| opts.encode&#x3D;true | `boolean`  | [URL encode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) the keys and values. | *Optional* |
| opts.arrayFormat&#x3D;&#x27;none&#x27; | `string`  | Parsing arrays correctly | *Optional* |




##### Examples

```javascript
toQuery({ foo: [1,2,3] }, { arrayFormat: 'bracket' });
// => 'foo[]=1&foo[]=2&foo[]=3'

toQuery({ foo: [1,2,3] }, { arrayFormat: 'index' });
// => 'foo[0]=1&foo[1]=2&foo[3]=3'

toQuery({ foo: [1,2,3] });
// => 'foo=1&foo=2&foo=3
```


##### Returns


- `string`  Returns an string representation of the object.


***



## <a id="toString">toString(val)</a> 

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


***



## <a id="toUpper">toUpper(str)</a> 

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


***



## <a id="trim">trim(str)</a> 

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


***



## <a id="trimLeft">trimLeft([string&#x3D;&#x27;&#x27;])</a> 

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


***



## <a id="trimRight">trimRight([string&#x3D;&#x27;&#x27;])</a> 

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


***
