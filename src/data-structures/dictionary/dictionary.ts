import { defaultToString } from '../../utils/defaultToString'

interface IDictionaryTable {
  [key: string]: any
}

interface IDictionary {
  hasKey: (key: any) => boolean
  set: (key: any, value: any) => boolean
  remove: (key: any) => boolean
  get: (key: any) => any | undefined
  keyValues: () => any[]
  keys: () => any[]
}

export class ValuePair {
  private readonly key: any
  private readonly value: any

  constructor (key, value) {
    this.key = key
    this.value = value
  }

  toString (): string {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `[#${this.key}: ${this.value}]`
  }
}

export default class Dictionary implements IDictionary {
  private readonly table: IDictionaryTable
  private readonly toStrFunction: (item: any) => string

  constructor (toStrFunction = defaultToString) {
    this.toStrFunction = toStrFunction
    this.table = {}
  }

  set (key, value): boolean {
    if (key != null && value != null) {
      const tableKey = this.toStrFunction(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  hasKey (key): boolean {
    return this.table[this.toStrFunction(key)] != null
  }

  remove (key): boolean {
    if (this.hasKey(key)) {
      delete this.table?.[this.toStrFunction(key)]
      return true
    }
    return false
  }

  get (key): any | undefined {
    const valuePair = this.table[this.toStrFunction(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  keyValues (): any[] {
    return Object.values(this.table)
  }

  keys (): any[] {
    return this.keyValues().map((valuePair) => valuePair.key)
  }
}
