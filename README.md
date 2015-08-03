# multiple-needles-indexof

Function that finds the first occurrence of one of specified values in a string.

## Install
npm install multiple-needles-indexof

## Example
``` javascript
var mnIndexOf = require('multiple-needles-indexof')

// pass two needles that matches
mnIndexOf('xbcda', ['a', 'cd']) // 2
// pass one needle as string
mnIndexOf('xbcda', 'b') // 1
// needles don't match
mnIndexOf('abcda', ['x', 'y']) // undefined
// with offset
mnIndexOf('caabcda', ['c', 'd', 'x'], 2) // 4
// no needles returns undefined
mnIndexOf('xaabcda', []) // undefined
```