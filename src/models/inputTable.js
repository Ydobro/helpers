import { InputTableCellTypes } from '@/common/enums'

class InputTableCell {
  constructor(key, label, options) {
    this.key = key
    this.label = label
    this.options = options
  }
}

export class InputTableRowCell extends InputTableCell {
  constructor(key, label, options = null) {
    super(key, label, options)
    this.type = InputTableCellTypes.ROW
  }
}
export class InputTableColCell extends InputTableCell {
  constructor(key, label, options = null) {
    super(key, label, options)
    this.type = InputTableCellTypes.COL
  }
}