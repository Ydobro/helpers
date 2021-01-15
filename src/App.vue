<template>
  <SiteHeader />

  <div class="site-content">
    <router-view />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>

<style>
@import '~normalize.css';

:root {
  --color-black: #22223b;
  --color-white: #fff;
  --color-primary: #2a9d8f;
  --color-neutral: #646369;
  --color-light: #e9ecef;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-black);
}

.site-content {
  flex: 1 1 auto;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
}

a {
  text-decoration: none;
}

table, th, td {
  border: 1px solid var(--color-light);
}
</style>
