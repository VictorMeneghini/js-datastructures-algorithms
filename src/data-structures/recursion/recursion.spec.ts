import { factorial } from './recursion'

describe('Calculate factorial properly', () => {
  test('Calculate factorial of 5', () => {
    const result = factorial(5)

    expect(result).toBe(120)
  })
})
