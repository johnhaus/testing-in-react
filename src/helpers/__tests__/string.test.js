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
