import { capitalize } from '../string';

test('it should return null for null', () => {
  expect(capitalize(null)).toBe(null);
});

test('capitalize should handle an empty string', () => {
  expect(capitalize("")).toBe("");
});

test('capitalize should handle a one letter string', () => {
  expect(capitalize("A")).toBe("A");
});

test('capitalize should handle a one letter string', () => {
  expect(capitalize("a")).toBe("A");
});

test('capitalize should handle a word in lowercase', () => {
  expect(capitalize("word")).toBe("Word");
});

test('capitalize should handle a word already capitalized', () => {
  expect(capitalize("Word")).toBe("Word");
});

test('capitalize should handle a word in all caps', () => {
  expect(capitalize("WORD")).toBe("Word");
});
