# concat-arr

A super simple utility to concatenate multiple arrays end-to-end.

> Recommended: set "type": "module" in your package.json to use this module with ES6 imports.

For more awesome packages, check out [my homepage💛](https://baendlorel.github.io/?repoType=npm)

## Features

- Only concatenates arguments that are arrays. Non-array arguments are ignored.
- Returns an empty array if no valid arrays are provided.
- No dependencies, minimal and fast.

## Installation

```sh
npm install concat-arr
```

## Usage

```js
const concatArr = require('concat-arr');

concatArr([1, 2], [3, 4], [5]); // [1, 2, 3, 4, 5]
concatArr([1], 'not array', [2, 3]); // [1, 2, 3]
concatArr(); // []
```

## API

### concatArr(...arrays)

- **arrays**: Any number of arguments. Only those that are arrays will be concatenated.
- **Returns**: A new array containing all elements from the input arrays, in order. If no array arguments are given, returns an empty array.

## License

MIT
