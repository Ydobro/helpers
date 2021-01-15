<template>
  <div class="site-header">
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'InputTable' }">Input Table</router-link>
    </nav>
  </div>

  <div class="site-content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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

.site-header {
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
}

table, th, td {
  border: 1px solid#e6e6e6;
}
</style>
