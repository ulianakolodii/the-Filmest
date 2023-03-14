<script setup lang="ts"></script>

<template>
  <div class="nav_container">
    <p class="menu_title">menu</p>
    <p class="menu_item">- all films</p>
    <p class="menu_item">- find films</p>
    <p class="menu_item">- favorite films</p>
    <p class="menu_title">general</p>
    <p class="menu_item">- log out</p>
  </div>
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
  }
}
</style>
