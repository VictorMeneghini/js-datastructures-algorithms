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
      return true
    }
    return false
  }

  get (key): any {
    const position = this.hashCode(key)
    const linkedList = this.table[position]

    if (linkedList && !linkedList.isEmpty()) {
      let current = linkedList.getHead()

      while (current) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
    }
    return undefined
  }
}
