<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchFilm } from '../api/films'
const film = ref()

const route = useRoute()
onBeforeMount(async () => {
  const filmId = route.params.id
  film.value = await fetchFilm(filmId)
})
</script>

<template>
  <div class="film_container">
    <img class="film_poster" :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" />
    <div class="film_description">
      <p>{{ film.title }}</p>
      <p>{{ film.overview }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.film_container{
  display: flex;
  flex-direction: row;
.film_poster {
  max-width: 250px;
}
.film_description{
  display: flex;
  flex-direction: column;
}
}

</style>
