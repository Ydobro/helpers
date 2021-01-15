<template>
  <div class="page page--input-table">
    <div class="container">
      <h1 class="page-title">Input Table Page</h1>
      <InputTable />
    </div>
  </div>
</template>

<script>
import InputTable from '@/components/InputTable.vue'

export default {
  name: 'InputTablePage',
  components: {
    InputTable
  }
}
</script>
