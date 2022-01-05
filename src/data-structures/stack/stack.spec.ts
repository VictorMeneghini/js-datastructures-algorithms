import { Stack } from './stack'

const stack = new Stack()

describe('Stack', () => {
  test('should return value ', () => {
    expect(stack.great()).toBe('hello world')
  });
});