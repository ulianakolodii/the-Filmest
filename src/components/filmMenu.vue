<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import randomFilm from './randomFilm.vue'
import { fetchFilms } from '../api/films'
import { useStore } from 'vuex'

const store = useStore()

const popularFilms = ref()
const searchedFilms = computed(() => store.getters.searchedFilms)

onMounted(async () => {
  popularFilms.value = await fetchFilms()
})
</script>
ß
<template>
  <div class="film_container">
    <randomFilm />
    <div class="popular-films">
      <ul v-if="Object.keys(searchedFilms).includes('results')" class="list">
        <li
          class="film-item"
          v-for="serachedFilm in searchedFilms?.results"
          :key="serachedFilm.title"
        >
          <img
            v-if="serachedFilm?.poster_path !== null"
            class="fav-poster"
            :src="`https://image.tmdb.org/t/p/w500${serachedFilm?.poster_path}`"
          />
          <img
            class="fav-poster"
            v-if="serachedFilm?.poster_path === null"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          />
          <span class="title">{{ serachedFilm.title }}</span>
          <span class="overview">{{ serachedFilm.overview }}</span>
          <button class="discover-button">
            <RouterLink class="discover-link" :to="`film/${serachedFilm.id}`">...more</RouterLink>
          </button>
        </li>
      </ul>
      <ul v-else class="list">
        <li class="film-item" v-for="popularFilm in popularFilms?.results" :key="popularFilm.title">
          <img
            class="fav-poster"
            :src="`https://image.tmdb.org/t/p/w500${popularFilm?.poster_path}`"
          />
          <span class="title">{{ popularFilm.title }}</span>
          <span class="overview">{{ popularFilm.overview }}</span>
          <button class="discover-button">
            <RouterLink class="discover-link" :to="`film/${popularFilm.id}`">...more</RouterLink>
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
