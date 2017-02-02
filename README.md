# remap
> Replace each character of a string using a map

```javascript
const remap = require('remap')

var chars = { f: 't', b: 'f' }
var value = 'foo bar'

console.log(remap(chars)(value)) // -> too far
```

## Installation
```sh
npm install --save baggo/remap
```

## License
MIT
