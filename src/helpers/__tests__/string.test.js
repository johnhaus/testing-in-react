import { capitalize } from '../string';

test('it should return null for null', () => {
  expect(capitalize(null)).toBe(null);
});
