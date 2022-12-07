import { Stack } from './stack'

const stackFactory = (): Stack => {
  return new Stack()
}

describe('Data Structures :: Stack', () => {
  test('Should return right number of pushed items', () => {
    const stack = stackFactory()

    expect(stack.size()).toBe(0)
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.push(3)
    expect(stack.size()).toBe(3)
  })

  test('Should return right number of popped items', () => {
    const stack = stackFactory()
    stack.push(1)
    stack.push(2)

    const poppedItem = stack.pop()

    expect(stack.size()).toBe(1)
    expect(poppedItem).toBe(2)
  })

  test('Should return an empty stack when clear method is called', () => {
    const stack = stackFactory()
    stack.push(1)
    stack.push(2)

    stack.clear()

    expect(stack.size()).toBe(0)
  })

  test('Should return true when stack is empty', () => {
    const stack = stackFactory()
    stack.push(1)
    stack.push(2)

    stack.clear()

    expect(stack.isEmpty()).toBeTruthy()
  })

  test('Should return false when stack is not empty', () => {
    const stack = stackFactory()
    stack.push(1)
    stack.push(2)

    expect(stack.isEmpty()).toBeFalsy()
  })

  test('Should return the last element of the stack', () => {
    const stack = stackFactory()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)

    expect(stack.peek()).toBe(4)
  })

  test('Should return the Stack as a String', () => {
    const stack = stackFactory()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)

    expect(stack.toString()).toBe('1,2,3,4')
  })

  test('Should return the Stack as an Array', () => {
    const stack = stackFactory()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)

    expect(stack.toArray()).toEqual([1, 2, 3, 4])
  })
})
