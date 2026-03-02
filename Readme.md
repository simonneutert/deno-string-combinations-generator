# string-combinations-generator

A utility for generating all possible non-empty combinations and permutations of
an array of strings.

## Features

- Returns all non-empty subsets and their permutations.
- Simple API for use in Deno projects.
- Includes tests.

## Usage

```typescript
import { generateStringCombinations } from "jsr:@your-namespace/string-combinations-generator";

const input = ["a", "b", "c"];
// Generate combinations with custom separator,
// the default is ";"
const combinations = generateStringCombinations(input, ",");
// combinations: new Set([
//   "a", "b", "c",
//   "a,b", "a,c", "b,a", "b,c", "c,a", "c,b",
//   "a,b,c", "a,c,b", "b,a,c", "b,c,a", "c,a,b", "c,b,a"
// ])
```

```typescript
import { generateStringCombinationsSorted } from "jsr:@your-namespace/string-combinations-generator";

const input = ["a", "b", "c"];
// Generate combinations with custom separator,
// the default is ";"
const combinations = generateStringCombinationsSorted(input, ",");
// combinations: new Set([
//   "a", "b", "c",
//   "a,b", "a,c", "b,c",
//   "a,b,c"
// ])
```

## API

### generateStringCombinations(input: string[], separator: string): string[]

Returns all non-empty combinations and permutations of the input array, joined
by semicolons or your separator of choice.

## Development

Run tests with:

```
deno test
```

## License

MIT
