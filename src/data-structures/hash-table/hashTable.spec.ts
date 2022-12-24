import { HashTable } from './HashTable'

const hashTableFactory = (): HashTable => {
  return new HashTable()
}

describe('Data Structures :: HashTable', () => {
  test('Should HashTable class defined successfully', () => {
    const hashTable = hashTableFactory()
    expect(hashTable).toBeDefined()
  })

  test('Should put new elements on HashTable correctly', () => {
    const hashTable = hashTableFactory()
    hashTable.put('name', 'victor')
    hashTable.put('age', 2)

    expect(hashTable.size()).toBe(2)
    expect(hashTable.put(undefined, undefined)).toBeFalsy()
  })

  test('Should get right value', () => {
    const hashTable = hashTableFactory()
    hashTable.put('name', 'victor meneghini')

    expect(hashTable.get('name')).toBe('victor meneghini')
    expect(hashTable.get('age')).toBeUndefined()
  })

  test('Should remove right value', () => {
    const hashTable = hashTableFactory()
    hashTable.put('name', 'victor meneghini')
    hashTable.put('age', 1)

    hashTable.remove('name')
    expect(hashTable.get('name')).toBeUndefined()
    expect(hashTable.size()).toBe(1)
    expect(hashTable.remove('age')).toBeTruthy()
    expect(hashTable.remove('any')).toBeFalsy()
  })
})
