import { HashTableSeparateChaining } from './HashTableSeparateChaining'

const hashTableSeparateChainingFactory = (): HashTableSeparateChaining => {
  return new HashTableSeparateChaining()
}

describe('Data Structures :: HashTableSeparateChaining', () => {
  test('Should HashTableSeparateChaining class defined successfully', () => {
    const hashTableSC = hashTableSeparateChainingFactory()
    expect(hashTableSC).toBeDefined()
  })

  test('Should HashTableSeparateChaining class push items successfully', () => {
    const hashTableSC = hashTableSeparateChainingFactory()
    const result = hashTableSC.put('victor', 'victor@mail.com')
    hashTableSC.put('myList', ['banana', 'apple', 'orange'])

    expect(result).toBeTruthy()
    expect(hashTableSC.size()).toBe(2)
  })

  test('Should HashTableSeparateChaining class push items failed', () => {
    const hashTableSC = hashTableSeparateChainingFactory()
    const result = hashTableSC.put('', 'victor@mail.com')

    expect(result).toBeFalsy()
  })

  test('Should HashTableSeparateChaining class get item successfully', () => {
    const hashTableSC = hashTableSeparateChainingFactory()
    hashTableSC.put('victor', 'victor@mail.com')
    hashTableSC.put('test', 'test@mail.com')

    expect(hashTableSC.get('victor')).toBe('victor@mail.com')
  })

  test('Should HashTableSeparateChaining class return undefined if item is not found', () => {
    const hashTableSC = hashTableSeparateChainingFactory()
    hashTableSC.put('victor', 'victor@mail.com')
    hashTableSC.put('test', 'test@mail.com')

    expect(hashTableSC.get('maria')).toBe(undefined)
  })

  test('Should HashTableSeparateChaining class get item successfully with collisions case', () => {
    const hashTableSC = hashTableSeparateChainingFactory()
    hashTableSC.put('victor', 'victor@mail.com')
    hashTableSC.put('test', 'test@mail.com')
    hashTableSC.put('Nathan', 'nathan@mail.com')
    hashTableSC.put('Sargeras', 'sargeras@mail.com')

    expect(hashTableSC.get('Sargeras')).toBe('sargeras@mail.com')
  })
})
