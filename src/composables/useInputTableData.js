import { computed } from 'vue'
import { InputTableRowCell, InputTableColCell } from '@/models/inputTable'

export default function useInputTableData(data) {
  const { metaData, labels, dataList } = data
  const { rows, cols } = metaData

  /**
   * Prepare header
   */
  const tableHeader = computed(() => {
    const namedRows = rows.map((row) => new InputTableRowCell(row, getLabelByKey(row)))
    const namedCols = []

    Object.entries(cols).map(([key, values]) => {
      namedCols.push(new InputTableColCell(key, getLabelByKey(key)))
      values.forEach(value => {
        namedCols.push(new InputTableColCell(value, getLabelByKey(value)))
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

      const labelsArr = new Array(judgmentIndex).fill(new InputTableRowCell('', '')) // Empty label arrays
      const judgmentCell = new InputTableColCell('judgment', 'judgment')
      const valuesArr = [...dataListItems.splice(0, valuesTableLength)].map((item, index) => {
        return new InputTableColCell(index, item.judgment, item)
      })

      // Fill current Empty row labels:
      Object.entries(valuesArr[0].options.dataMap).map(([key, value]) => {
        const cellIndex = getHeaderCellIndexByKey(key)
        if (cellIndex !== -1) {
          labelsArr[cellIndex] = new InputTableRowCell(key, getLabelByKey(value))
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
