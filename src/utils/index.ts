export type IEqualsFunction<T> = (a: T, b: T) => boolean

export const defaultToString = (item: any): string => {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${item}`
  }

  return item.toString()
}

export function defaultEquals<T> (a: T, b: T): boolean {
  return a === b
}
