import { defaultToString } from '../../utils/defaultToString'
import { ValuePair } from '../dictionary/dictionary'

interface ITable {
  [key: string]: any
}

interface IHashTable {
  put: (key: any, value: any) => boolean
  get: (key: any) => any
  size: () => number
  remove: (key: any) => boolean
}

export class HashTable implements IHashTable {
  private readonly toStrFn
  private readonly table: ITable

  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  remove (key: any): boolean {
    console.log(this.table)

    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    console.log(valuePair)

    if (valuePair) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.table[hash]
      return true
    }

    console.log(key)

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

  private hashCode (key): number {
    return this.loseloseHashCode(key)
  }

  get (key): any {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
}

const hashTable = new HashTable()

hashTable.put('victor', 'vhmeneghini@gmail.com')
console.log(hashTable.get('victor'))
