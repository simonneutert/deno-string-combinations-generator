# string-combinations-generator

A utility for generating all possible non-empty combinations and permutations of an array of strings.

## Features

- Returns all non-empty subsets and their permutations.
- Simple API for use in Deno projects.
- Includes tests.

## Usage

```typescript
import { generateStringCombinations } from "jsr:@your-namespace/string-combinations-generator";

const input = ["a", "b", "c"];
const combinations = generateStringCombinations(input);
// combinations: [
//   "a", "b", "c",
//   "a,b", "a,c", "b,a", "b,c", "c,a", "c,b",
//   "a,b,c", "a,c,b", "b,a,c", "b,c,a", "c,a,b", "c,b,a"
// ]
```

## API

### generateStringCombinations(input: string[]): string[]

Returns all non-empty combinations and permutations of the input array, joined by commas.

## Development

Run tests with:

```
deno test
```

## License

MIT

