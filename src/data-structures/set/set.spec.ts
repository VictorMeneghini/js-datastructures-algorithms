import Set from './set'

const setFactory = (): Set => {
  return new Set()
}

describe('Set', () => {
  test('Should return true if value exist in Set', () => {
    const set = setFactory()
    set.add(1)
    set.add('name')

    expect(set.has(1)).toBeTruthy()
    expect(set.has('name')).toBeTruthy()
    expect(set.has('age')).toBeFalsy()
  })

  test('Should add to set properly', () => {
    const set = setFactory()
    const resultSuccess = set.add(1)

    expect(set.has(1)).toBeTruthy()
    expect(resultSuccess).toBeTruthy()

    const resultFailed = set.add(1)
    expect(resultFailed).toBeFalsy()
  })

  test('Should delete value properly if it is present in set', () => {
    const set = setFactory()
    const resultOnSuccess = set.add('name')

    expect(set.delete('name')).toBeTruthy()
    expect(set.has('name')).toBeFalsy()
    expect(resultOnSuccess).toBeTruthy()

    const resultOnFailure = set.delete('name')
    expect(resultOnFailure).toBeFalsy()
  })

  test('Should count the size of the set properly', () => {
    const set = setFactory()

    set.add(1)
    set.add(2)
    set.add(3)

    expect(set.size()).toBe(3)

    set.delete(2)

    expect(set.size()).toBe(2)
  })

  test('Should return right values', () => {
    const set = setFactory()

    set.add(1)
    set.add(2)
    set.add('name')

    const results = set.values()

    expect(results).toStrictEqual([1, 2, 'name'])
  })
})
