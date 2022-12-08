import { defaultToString } from '../../utils/defaultToString'

interface IDictionaryTable {[key: string]: any}

export default class Dictionary implements IDictionary {
  private readonly table: IDictionaryTable
  private readonly toStrFunction: (item: any) => string

  constructor (toStrFunction = defaultToString) {
    this.toStrFunction = toStrFunction
    this.table = {}
  }
}
