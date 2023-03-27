<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const favFilms = ref(store.state.favFilms)
</script>

<template>
  <div class="film_container">{{ favFilms.map((el) => el.title) }}</div>
</template>

<style scoped lang="scss"></style>
