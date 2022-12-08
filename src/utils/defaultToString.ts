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
