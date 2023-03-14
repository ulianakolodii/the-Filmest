<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav_container">
    <p class="menu_title">menu</p>
    <RouterLink to="/" class="menu_item">- all films</RouterLink>
    <RouterLink to="/favorites" class="menu_item">- favorite films</RouterLink>
    <p class="menu_title">general</p>
    <p class="menu_item">- log out</p>
  </nav>
</template>

<style scoped lang="scss">
.nav_container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 200px;
  height: auto;
  color: rgb(226, 226, 226);
  border-right: 1px solid rgb(226, 226, 226);

  .menu_title {
    font-size: 24px;
    margin-top: 20px;
  }

  .menu_item {
    cursor: pointer;
  }
}
</style>
