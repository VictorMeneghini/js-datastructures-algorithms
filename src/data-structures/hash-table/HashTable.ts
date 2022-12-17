import { defaultToString } from '../../utils/defaultToString'
import { ValuePair } from '../dictionary/dictionary'

interface ITable {
  [key: string]: any
}

// interface IHashTable {
//   put(key:)
// }

export class HashTable {
  private readonly toStrFn
  private readonly table: ITable

  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  put (key, value): boolean {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }

    return false
  }

  loseloseHashCode (key): number {
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
}

const hashTable = new HashTable()

hashTable.put('victor', 'vhmeneghini@gmail.com')
console.log(hashTable.get('victor'))
