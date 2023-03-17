<script setup lang="ts">
import { onMounted, ref } from 'vue'
import randomFilm from './randomFilm.vue'
import { fetchFilms } from '../api/films'
import type { Film } from '../api/films'

const films = ref()

// const filmss = ({
//   movieID,
//   original_title,
//   tagline,
//   overview,
//   homepage,
//   poster,
//   production,
//   production_countries,
//   genre,
//   release,
//   vote,
//   runtime,
//   revenue,
//   backdrop
// }: Film) => {
// }

onMounted(async () => {
  films.value = await fetchFilms()
})
</script>

<template>
  <div class="film_container">
    <randomFilm />
    <div class="popular_films">
      <ul class="films_list">
        <li class="film_item" v-for="film in films?.results" :key="film.title">
          <p class="film_title">{{ film.title }}</p>
          <p class="film_overview">{{ film.overview }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';
.films_list {
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
  color: $general-text_color;

  .film_item {
    margin: 10px;
    height: 50%;
    width: 30%;

    .film_title {
      font-size: 25px;
    }
    .film_overview {
      margin-top: 20px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
  }
}
</style>
