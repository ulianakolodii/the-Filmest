<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import randomFilm from './randomFilm.vue'
import { fetchFilms } from '../api/films'

const films = ref()
onMounted(async () => {
  films.value = await fetchFilms()
})
</script>

<template>
  <div class="film_container">
    <randomFilm />
    <div class="popular-films">
      <ul class="list">
        <li class="film-item" v-for="film in films?.results" :key="film.title">
          <span class="title">{{ film.title }}</span>
          <span class="overview">{{ film.overview }}</span>
          <button class="discover-button">
            <RouterLink class="discover-link" :to="`film/${film.id}`">...more</RouterLink>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';
.list {
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
  color: $general-text_color;
  @media (max-width: 560px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .film-item {
    margin: 10px;
    padding: 20px;
    height: 50%;
    width: 30%;
    background-color: rgba(($general-text_color), 0.1);
    border-radius: 5%;
    @media (max-width: 990px) {
      width: 46%;
    }
    @media (max-width: 890px) {
      width: 45%;
    }
    @media (max-width: 790px) {
      width: 100%;
    }

    .title {
      font-size: 25px;
    }
    .overview {
      margin-top: 20px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
    .discover-button {
      max-width: 300px;
      width: 100%;
      margin-top: 15px;
      border-radius: 25px;
      text-align: right;

      .discover-link {
        font-size: 14px;
        color: $emphasis-color;
        text-decoration: none;
      }
    }
  }
}
</style>
