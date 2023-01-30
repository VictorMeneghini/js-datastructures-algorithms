import { factorial, fibonacci } from './recursion'

describe('Recursion', () => {
  test('Calculate factorial of 5', () => {
    const result = factorial(5)

    expect(result).toBe(120)
  })

  test('Calculate fibonacci', () => {
    const result = fibonacci(10)

    expect(result).toBe(55)
  })
})
