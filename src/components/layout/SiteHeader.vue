<template>
  <div class="site-header">
    <div class="container site-header__container">
      <router-link class="site-logo site-header__logo" :to="{ name: 'Home' }">H</router-link>
      <nav class="main-menu">
        <router-link class="main-menu__link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="main-menu__link" :to="{ name: 'InputTable' }">Input Table</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss" scoped>
.site-header {
  border-bottom: 1px solid var(--color-light);
  &__container {
    display: flex;
    align-items: center;
  }
  &__logo {
    margin-right: 25px;
  }
}

.site-logo {
  font-size: 40px;
  font-weight: bold;
  color: var(--color-primary);
}

.main-menu {
  font-size: 14px;
  font-weight: 600;
  &__link {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    text-decoration: none;
    transition: .3s all;
    color: var(--color-neutral);
    &.is-active,
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
