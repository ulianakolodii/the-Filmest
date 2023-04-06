<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchedTitle = ref()

const handleSubmit = () => {
  store.dispatch('searchFilm', searchedTitle.value)
}
</script>

<template>
  <div class="input_container">
    <form @submit.prevent="handleSubmit">
      <input v-model="searchedTitle" placeholder="search..." />
      <button class="search_button" type="submit">go</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';
input {
  width: 200px;
  height: 30px;
  color: $general-text_color;
  background-color: transparent;
  border: 1px solid $general-text_color;
  border-radius: 25px;
  padding-left: 10px;
  @media (max-width: 560px) {
    margin-bottom: 20px;
  }
}

.search_button {
  width: 34px;
  height: 30px;
  color: $general-text_color;
  background-color: $add-button-color;
  border-radius: 25px;
  margin-left: 8px;

  &:hover {
    background-color: $background-emphasis-color;
    color: $emphasis-color;
  }
}
</style>
