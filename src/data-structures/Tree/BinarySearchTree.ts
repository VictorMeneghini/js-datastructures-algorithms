// import { Node } from './Node/Node'
import { defaultCompare } from '../../utils'

export class BinarySearchTree {
  protected root

  constructor (protected compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }
}
