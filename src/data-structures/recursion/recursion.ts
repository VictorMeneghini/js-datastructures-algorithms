export const factorial = (n: number): number => {
  if (n === 1 || n === 0) {
    return 1
  }

  return n * factorial(n - 1)
}

export const fibonacci = (n: number): any => {
  if (n < 1) return 0
  if (n <= 2) return 1

  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))
