import { assertEquals } from "@std/assert";

import {
  generateStringCombinations,
  generateStringCombinationsSorted,
} from "./mod.ts";

Deno.test("generateStringCombinationsSorted returns all combinations for 'abc' with default separator ';'", () => {
  const input = ["a", "b", "c"];
  const expected = [
    "a",
    "b",
    "c",
    "a;b",
    "a;c",
    "b;c",
    "a;b;c",
  ];
  const result = generateStringCombinationsSorted(input);
  for (const combo of expected) {
    if (!result.has(combo)) {
      throw new Error(`Missing combination: ${combo}`);
    }
  }
  if (result.size !== expected.length) {
    throw new Error(
      `Expected ${expected.length} combinations, got ${result.size}`,
    );
  }
  assertEquals(result.size, expected.length);
  assertEquals(new Set(result), new Set(expected));
  assertEquals(Array.from(result).sort(), expected.sort());
});

Deno.test("generateStringCombinations returns all combinations for 'abc' with default separator ';'", () => {
  const input = ["a", "b", "c"];
  const expected = [
    "a",
    "b",
    "c",
    "a;b",
    "a;c",
    "b;a",
    "b;c",
    "c;a",
    "c;b",
    "a;b;c",
    "a;c;b",
    "b;a;c",
    "b;c;a",
    "c;a;b",
    "c;b;a",
  ];
  const result = generateStringCombinations(input);
  for (const combo of expected) {
    if (!result.has(combo)) {
      throw new Error(`Missing combination: ${combo}`);
    }
  }
  if (result.size !== expected.length) {
    throw new Error(
      `Expected ${expected.length} combinations, got ${result.size}`,
    );
  }
  assertEquals(result.size, expected.length);
  assertEquals(new Set(result), new Set(expected));
  assertEquals(Array.from(result).sort(), expected.sort());
});

Deno.test("generateStringCombinations returns all combinations for 'abc' with separator ','", () => {
  const input = ["a", "b", "c"];
  const expected = [
    "a",
    "b",
    "c",
    "a,b",
    "a,c",
    "b,a",
    "b,c",
    "c,a",
    "c,b",
    "a,b,c",
    "a,c,b",
    "b,a,c",
    "b,c,a",
    "c,a,b",
    "c,b,a",
  ];
  const result = generateStringCombinations(input, ",");
  for (const combo of expected) {
    if (!result.has(combo)) {
      throw new Error(`Missing combination: ${combo}`);
    }
  }
  if (result.size !== expected.length) {
    throw new Error(
      `Expected ${expected.length} combinations, got ${result.size}`,
    );
  }
  assertEquals(result.size, expected.length);
  assertEquals(new Set(result), new Set(expected));
  assertEquals(Array.from(result).sort(), expected.sort());
});
