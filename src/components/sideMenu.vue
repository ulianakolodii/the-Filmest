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
@import '../utilities/common.scss';
.nav_container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 200px;
  height: auto;
  border-right: 1px solid $sidebar-border_color;

  .menu_title {
    color: $general-text_color;
    font-size: 24px;
    margin-top: 20px;
  }

  .menu_item {
    cursor: pointer;
    color: $general-text_color;
    text-decoration: none;
  }
}
</style>
