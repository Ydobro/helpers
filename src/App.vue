<template>
  <InputTable />
</template>

<script>
import InputTable from './components/InputTable.vue'

export default {
  name: 'App',
  components: {
    InputTable
  }
}
</script>

<style>
@import '~normalize.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

table, th, td {
  border: 1px solid#e6e6e6;
}
</style>
