import { Stack } from './stack'

const stack = new Stack()

describe('Stack', () => {
  test('should return an empty stack', () => {
    expect(stack.size()).toBe(0)
  })
})
