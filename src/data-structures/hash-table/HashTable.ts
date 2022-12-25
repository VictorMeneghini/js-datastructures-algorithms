import { defaultToString } from '../../utils'
import { ValuePair } from '../dictionary/dictionary'

interface ITable {
  [key: string]: any
}

interface IHashTable {
  put: (key: any, value: any) => boolean
  get: (key: any) => any
  size: () => number
  remove: (key: any) => boolean
  isEmpty: () => boolean
}

export class HashTable implements IHashTable {
  private readonly toStrFn
  readonly table: ITable

  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  isEmpty (): boolean {
    return !Object.keys(this.table).length
  }

  remove (key: any): boolean {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]

    if (valuePair) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.table[hash]
      return true
    }

    return false
  }

  size (): number {
    return Object.keys(this.table).length
  }

  put (key, value): boolean {
    if (key && value) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }

    return false
  }

  private loseloseHashCode (key): number {
    if (typeof key === 'number') {
      return key
    }

    const tableKey = this.toStrFn(key)
    let hash: number = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i) as number
    }

    return hash % 37
  }

  hashCode (key): number {
    return this.loseloseHashCode(key)
  }

  get (key): any {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  printTable (): string {
    if (this.isEmpty) { return '' }
    const keys = Object.keys(this.table)

    let objString = `${keys[0]} => ${this?.table[keys[0]].toString() as string || ''}}`

    for (let i = 0; i < keys.length; i++) {
      objString = `${objString}, ${keys[i]} =>  ${this?.table[keys[i]].toString() as string || ''}`
    }

    return objString
  }
}
