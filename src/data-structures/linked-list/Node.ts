export class Node<K> {
  left: Node<K>
  right: Node<K>

  constructor (public key: K) {}

  toString (): string {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
    return `${this.key}`
  }
}
