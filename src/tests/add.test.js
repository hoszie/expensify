const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(4, 5);
  expect(result).toBe(9)
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Nick');
  expect(result).toBe('Hello Nick!');
});

test('should generate greeting from no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!')
})
