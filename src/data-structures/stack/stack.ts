export class Stack {
  private readonly items: any

  constructor () {
    this.items = []
  }

  push (item: number): any {
    this.items.push(item)
  }

  size (): number {
    return this.items.length
  }
}
