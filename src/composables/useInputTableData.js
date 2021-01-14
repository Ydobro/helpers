import { computed } from 'vue'
import { InputTableCellTypes } from '@/common/enums'

class InputTableCell {
  constructor(key, label, type, options = null) {
    this.key = key
    this.label = label
    this.type = type
    this.options = options
  }
}

export default function useInputTableData(data) {
  const { metaData, labels, dataList } = data
  const { rows, cols } = metaData

  /**
   * Prepare header
   */
  const tableHeader = computed(() => {
    const namedRows = rows.map((row) => new InputTableCell(row, getLabelByKey(row), InputTableCellTypes.ROW))
    const namedCols = []

    Object.entries(cols).map(([key, values]) => {
      namedCols.push(new InputTableCell(key, getLabelByKey(key), InputTableCellTypes.COL))
      values.forEach(value => {
        namedCols.push(new InputTableCell(value, getLabelByKey(value), InputTableCellTypes.COL))
      })
    })

    return [...namedRows, ...namedCols]
  })

  /**
   * Prepare body
   */
  const tableBody = computed(() => {
    const headerItemsCount = tableHeader.value.length - 1 // The same number as Header
    const judgmentIndex = rows.length // judgment presented in the first cell after last Header row
    const valuesTableLength = headerItemsCount - judgmentIndex // [...Labels, judgment, ...Values ]

    // Fill rows
    const bodyRows = []
    let [...dataListItems] = dataList

    while (dataListItems.length) {
      let row = []

      const labelsArr = new Array(judgmentIndex).fill(new InputTableCell('', '', InputTableCellTypes.ROW)) // Empty label arrays
      const judgmentCell = new InputTableCell('judgment', 'judgment', InputTableCellTypes.COL)
      const valuesArr = [...dataListItems.splice(0, valuesTableLength)].map((item, index) => {
        return new InputTableCell(index, item.judgment, InputTableCellTypes.COL, item)
      })

      // Fill current Empty row labels:
      Object.entries(valuesArr[0].options.dataMap).map(([key, value]) => {
        const cellIndex = getHeaderCellIndexByKey(key)
        if (cellIndex !== -1) {
          labelsArr[cellIndex] = new InputTableCell(key, getLabelByKey(value), InputTableCellTypes.ROW)
        }
      })

      row = [...labelsArr, judgmentCell, ...valuesArr]

      bodyRows.push(row)
    }

    return bodyRows
  })

  /**
   * Returns readable label
   * 
   * @param {String} key 
   */
  const getLabelByKey = ((key) => {
    return labels[key] || key
  })

  /**
   * @param {String} key 
   */
  const getHeaderCellIndexByKey = ((key) => {
    return rows.findIndex((el) => el === key)
  })

  return {
    tableHeader,
    tableBody
  }
}
