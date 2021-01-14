<template>
  <table class="input-table">
    <thead class="input-table__head">
      <tr>
        <th v-for="cell in tableHeader" :key="cell.key" :class="`cell-${cell.type}`">{{ cell.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in tableBody" :key="index">
        <td v-for="cell in row" :key="cell">
          {{ cell.label }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import InputTableData from '@/data/input-table.json'
import useInputTableData from '@/composables/useInputTableData'

export default {
  name: 'InputTable',
  setup() {
    return {
      ...useInputTableData(InputTableData)
    }
  },
}
</script>

<style lang="scss" scoped>
.input-table {
  border-collapse: collapse;
  max-width: 100%;
  td, th {
    padding: 8px;
  }
  &__head {
    .cell-row {
      background-color: #f9f9f9;
    }
    .cell-col {
      background-color: #c9b7c0;
    }
  }
}
</style>
