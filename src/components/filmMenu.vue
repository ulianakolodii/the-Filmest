<script setup lang="ts">
import randomFilm from './randomFilm.vue';
</script>

<template>
  <div class="input_container">
    <randomFilm />
  </div>
</template>

<style scoped lang="scss">
input {
  width: 200px;
  height: 30px;
  color: rgb(226, 226, 226);
  background-color: transparent;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 25px;
  padding-left: 10px;
}
</style>