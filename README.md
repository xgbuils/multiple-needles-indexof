# multiple-needles-indexof

indexOf with multiple needles

## Install
npm install multiple-needles-indexof

## Example
``` javascript
var mnIndexOf = require('multiple-needles-indexof')

// pass two needles that matches
mnIndexOf('xbcda', ['a', 'cd']) // {index: 2, match: 'cd'}
// pass one needle as string
mnIndexOf('xbcda', 'b') // {index: 1, match: 'b'}
// needles don't match
mnIndexOf('abcda', ['x', 'y']) // undefined
// with offset
mnIndexOf('caabcda', ['c', 'd', 'x'], 2) // {index: 5, match: 'd'}
// no needles returns undefined
mnIndexOf('xaabcda', []) // undefined
```