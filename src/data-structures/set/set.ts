interface Iset {
  has (element: string | number): Boolean
  add (element: string | number): Boolean
  delete (element: string | number): Boolean
  size (): number
  values (): Array<string | number>
}

export default class Set implements Iset {
  private items

  constructor() {
    this.items = {}
  }

  values() {
    let values = []

    for (let key in this.items) {
      if(this.items.hasOwnProperty(key)){
        values.push(this.items[key])
      }
    }
    return values
  }

  add(element: string | number) {
    if(!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  has(element: string | number) {
    return this.items.hasOwnProperty(element)
  }

  delete(element: string | number): Boolean {
    if(this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  size() {
    return Object.keys(this.items).length
  }
  
}