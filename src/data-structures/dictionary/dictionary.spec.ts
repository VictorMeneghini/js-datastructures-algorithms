import Dictionary from './dictionary'

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
})
