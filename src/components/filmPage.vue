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

const filmReleaseDate = () => {
  return film.value.release_date.slice(0, 4)
}
</script>

<template>
  <div class="film_container">
    <div>
      <div class="poster_container">
        <img class="film_poster" :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" />
        <div class="poster_shadow"></div>
      </div>
    </div>
    <div class="film_description">
      <div class="website-title_container">
        <p class="color_text">the</p>
        <p>Film</p>
      </div>
      <p class="film_title">{{ film?.title }}</p>
      <p class="film_tagline">{{ film?.tagline }}</p>
      <div class="film_tags">
        <span>
          <p v-for="genre in film?.genres" :key="genre.id">{{ genre.name }}</p>
        </span>
        <span>
          <p v-for="country in film?.production_countries" :key="country.iso_3166_1">
            {{ country.iso_3166_1 }}
          </p>
        </span>
        <p>{{ filmReleaseDate() }}</p>
        <p>{{ film.runtime }} min</p>
      </div>
      <p v-for="company in film?.production_companies" :key="company.id">{{ company.name }}</p>
      <p>{{ film.overview }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';
.film_container {
  display: flex;
  flex-direction: row;
  position: relative;

  .poster_container {
    position: relative;
    .film_poster {
      max-width: 250px;
    }
    .poster_shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 250px;
      height: 390px;
      background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, $general-background_color 100%);
    }
  }

  .film_description {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 230px;
    width: 320px;
    color: $general-text_color;

    .website-title_container {
      display: flex;

      .color_text {
        color: $emphasis-color;
        margin-right: 4px;
      }
    }

    .film_title {
      font-size: 36px;
      margin-top: -5px;
    }
    .film_tagline {
      font-style: italic;
      opacity: 60%;
      margin-top: -6px;
    }

    .film_tags {
      margin-top: 30px;
      display: flex;
      opacity: 60%;

      span {
        display: flex;

        p ~ p::before {
          content: ', ';
        }
      }

      & > p,
      span {
        margin-right: 10px;
        padding-left: 10px;
        border-left: 1px solid white;
      }

      & > span:first-child {
        border-left: none;
        padding-left: 0px;
      }
    }
  }
}
</style>
