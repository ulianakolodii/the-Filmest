<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onBeforeMount, computed, ref } from 'vue'
import type { ComputedRef } from 'vue'
import { randomFilms } from '../api/films'
import { useStore } from 'vuex'
import type { Film } from '../api/films'
const store = useStore()
const toggleFilm = (favFilm: Film) => {
  store.commit('TOGGLE_FILM', favFilm)
}

const films = ref()
let randomIndex = 0
let isFavorite: ComputedRef<boolean>

onBeforeMount(async () => {
  films.value = await randomFilms()
  const getRandomFilmIndex = () => {
    randomIndex = Math.floor(Math.random() * films.value.results.length)
    isFavorite = computed(() => store.getters.favFilms[films.value.results[randomIndex].id])
    return randomIndex
  }
  getRandomFilmIndex()
})
</script>

<template>
  <div class="random-film-container">
    <div class="random-poster">
      <span v-if="films" class="random-title">{{ films.results[randomIndex].title }}</span>
      <img
        v-if="films && films.results[randomIndex].poster_path !== null"
        :src="`https://image.tmdb.org/t/p/w500${films.results[randomIndex].poster_path}`"
      />
      <img
        v-if="films && films.results[randomIndex].poster_path === null"
        src="https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg"
      />
      <div v-if="films" class="poster-shade"></div>
    </div>

    <div class="random-buttons">
      <button class="random-watch-button">
        <RouterLink
          v-if="films"
          class="random-watch-link"
          :to="`film/${films.results[randomIndex].id}`"
          >watch</RouterLink
        >
      </button>
      <button
        class="toggle-button"
        @click="toggleFilm(films.results[randomIndex])"
        v-bind:class="{ favorite: isFavorite }"
      >
        ★
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';

.random-film-container {
  display: flex;
  flex-direction: column;
  .random-poster {
    margin: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    height: 200px;
    overflow: hidden;
    border-radius: 24px;
    position: relative;

    .random-title {
      z-index: 1;
      font-size: 36px;
      color: $general-text_color;
      padding: 10px;
      text-align: center;
    }

    img {
      filter: blur(6px);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .poster-shade {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(131, 40, 40, 0) 0%, $general-background-color 100%);
    }
  }

  .random-buttons {
    position: relative;
    z-index: 10;
    margin-top: -50px;
    margin-left: 55px;
    max-width: 130px;
    display: flex;
    justify-content: space-around;

    .random-watch-button {
      width: 70px;
      height: 35px;
      border-radius: 15px;
      background-color: $important_button-color;
      text-decoration: none;
      .random-watch-link {
        color: $general-text_color;
        text-decoration: none;
      }
    }

    .toggle-button {
      width: 40px;
      height: 35px;
      border-radius: 15px;
      background-color: rgb(226, 226, 226, 0.4);
      color: $general-text_color;
      font-weight: bold;
    }

    .favorite {
      color: $emphasis-color;
      background-color: $background-emphasis-color;
    }
  }
}
</style>
