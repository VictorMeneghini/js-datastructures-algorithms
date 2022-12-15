import Dictionary, { ValuePair } from './dictionary'

const dictionaryFactory = (): Dictionary => {
  return new Dictionary()
}

describe('Data Structures :: Dictionary', () => {
  test('Should dictionary class defined successfully', () => {
    const dictionary = dictionaryFactory()
    expect(dictionary).toBeDefined()
  })

  test('Should return false if key does not exist in dictionary', () => {
    const dictionary = dictionaryFactory()
    expect(dictionary.hasKey('name')).toBeFalsy()
  })

  test('Should insert a new value properly', () => {
    const dictionary = dictionaryFactory()

    expect(dictionary.set('teste', 1)).toBeTruthy()
  })

  test('Should do not insert if key or value is undefined or null', () => {
    const dictionary = dictionaryFactory()

    expect(dictionary.set(undefined, undefined)).toBeFalsy()
    expect(dictionary.set(1, undefined)).toBeFalsy()
    expect(dictionary.set(undefined, 1)).toBeFalsy()
  })

  test('Should delete element property', () => {
    const dictionary = dictionaryFactory()
    dictionary.set('test', 1)

    expect(dictionary.remove('test')).toBeTruthy()
    expect(dictionary.remove('anotherTest')).toBeFalsy()
  })

  test('Should get value properly', () => {
    const dictionary = dictionaryFactory()
    dictionary.set('test', 1)

    expect(dictionary.get('test')).toBe(1)
    expect(dictionary.get('anotherTest')).toBe(undefined)
  })

  test('Should return all keysValues', () => {
    const dictionary = dictionaryFactory()
    dictionary.set('test', 1)
    dictionary.set('anotherTest', 2)

    expect(dictionary.keyValues()).toStrictEqual([new ValuePair('test', 1), new ValuePair('anotherTest', 2)])
  })

  test('Should return all keys', () => {
    const dictionary = dictionaryFactory()
    dictionary.set('test', 1)
    dictionary.set('anotherTest', 2)

    expect(dictionary.keys()).toStrictEqual(['test', 'anotherTest'])
  })
})
