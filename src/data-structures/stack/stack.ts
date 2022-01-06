export class Stack {
  private items: any

  constructor () {
    this.items = []
  }

  push (item: number): void {
    this.items.push(item)
  }

  clear (): void {
    this.items = []
  }

  pop (): any {
    const removedItem = this.items.pop()
    return removedItem
  }

  isEmpty (): boolean {
    return this.items.length === 0
  }

  peek (): any {
    return this.items[this.items.length - 1]
  }

  size (): number {
    return this.items.length
  }

  toString (): String {
    return this.items.toString()
  }

  toArray (): any[] {
    return this.items
  }
}
