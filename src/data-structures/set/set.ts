interface Iitems {[key: string|number]: string | number}

interface Iset {
  has: (element: string | number) => boolean
  add: (element: string | number) => boolean
  delete: (element: string | number) => boolean
  size: () => number
  values: () => Array<string | number>
}
export default class Set implements Iset {
  private items: Iitems

  constructor () {
    this.items = {}
  }

  values (): Array<string | number> {
    const values = []

    for (const key in this.items) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }

  add (element: string | number): boolean {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  has (element: string | number): boolean {
    // eslint-disable-next-line no-prototype-builtins
    return this.items.hasOwnProperty(element)
  }

  delete (element: string | number): boolean {
    if (this.has(element)) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.items[element]
      return true
    }
    return false
  }

  size (): number {
    return Object.keys(this.items).length
  }

  union (otherSet: Set): Set {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  intersection (otherSet: Set): Set {
    const intersectionSet = new Set()

    const values = this.values()
    const otherValues = otherSet.values()

    let biggerSet = values
    let smallerSet = otherValues

    if (otherValues.length > values.length) {
      biggerSet = otherValues
      smallerSet = values
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })

    return intersectionSet
  }

  difference (otherSet: Set): Set {
    const differenceSet = new Set()

    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })

    return differenceSet
  }
}
