import { HashTableSeparateChaining } from './HashTableSeparateChaining'

const hashTableSeparateChainingFactory = (): HashTableSeparateChaining => {
  return new HashTableSeparateChaining()
}

describe('Data Structures :: HashTableSeparateChaining', () => {
  test('Should HashTableSeparateChaining class defined successfully', () => {
    const hashTableSC = hashTableSeparateChainingFactory()

    expect(hashTableSC).toBeDefined()
  })
})
