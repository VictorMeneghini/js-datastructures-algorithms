import { HashTable } from '../HashTable'
import { LinkedList } from '../../linked-list/LinkedList'
import { ValuePair } from '../../dictionary/dictionary'

export class HashTableSeparateChaining extends HashTable {
  put (key, value): boolean {
    if (key && value) {
      const position = super.hashCode(key)
      if (!this.table[position]) {
        this.table[position] = new LinkedList()
      }
      this.table[position].push(new ValuePair(key, value))
      console.log(this.table)
      return true
    }
    return false
  }
}
