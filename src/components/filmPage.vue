<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchFilm } from '../api/films'
import { useStore } from 'vuex'

const store = useStore()
const film = ref()
const route = useRoute()

const isFavorite = computed(() => store.getters.favFilms[route.params.id])

onMounted(async () => {
  const filmId = route.params.id
  film.value = await fetchFilm(filmId)
})

const toggleFilm = (favFilm: Object) => {
  store.commit('TOGGLE_FILM', favFilm)
}
</script>

<template>
  <div class="main-container">
    <div class="poster-container">
      <img
        v-if="film?.poster_path !== null"
        class="poster-image"
        :src="`https://image.tmdb.org/t/p/w500${film?.poster_path}`"
      />
      <img
        class="poster-image"
        v-if="film?.poster_path === null"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
      />
      <div v-if="film" class="poster-shade"></div>
    </div>
    <div class="info-container">
      <div class="website-title">
        <span class="color-text">the</span>
        <span>Film</span>
      </div>
      <span class="title">
        {{ film?.title }}
      </span>
      <span class="tagline">{{ film?.tagline }}</span>
      <div class="tags">
        <div class="genres">
          {{ film?.genres?.map((el) => el.name).join(', ') }}
        </div>
        <div class="countries">
          {{ film?.production_countries.map((el) => el.iso_3166_1).join(', ') }}
        </div>
        <div class="release-date">
          {{ film?.release_date.slice(0, 4) }}
        </div>
        <div class="runtime">{{ film?.runtime }} min</div>
      </div>
      <div class="companies">
        {{ film?.production_companies?.map((el) => el.name).join(', ') }}
      </div>
      <div class="overview">{{ film?.overview }}</div>
      <button
        class="favorite-button"
        @click="toggleFilm(film)"
        v-bind:class="{ favorite: isFavorite }"
      >
        ★
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';

.main-container {
  display: flex;
  @media (max-width: 970px) {
    flex-direction: column;
  }
  .poster-container {
    display: flex;
    position: relative;
    padding-left: 30px;
    @media (max-width: 970px) {
      width: 300px;
    }

    .poster-image {
      max-width: 250px;
      max-height: 375px;
    }

    .poster-shade {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, $general-background_color 100%);
    }
  }
  .info-container {
    z-index: 10;
    margin-left: -40px;
    display: flex;
    flex-direction: column;
    color: $general-text_color;
    padding-top: 40px;
    @media (max-width: 970px) {
      margin-left: 24px;
    }

    .website-title {
      display: flex;
      opacity: 60;

      .color-text {
        color: $emphasis-color;
        margin-right: 4px;
      }
    }

    .title {
      font-size: 36px;
      margin-top: -5px;
    }
    .tagline {
      font-style: italic;
      opacity: 60%;
      margin-top: -6px;
    }

    .tags {
      margin-top: 30px;
      margin-bottom: 10px;
      display: flex;
      opacity: 60%;

      div {
        display: flex;

        p ~ p::before {
          content: ', ';
        }
      }

      & > p,
      div {
        margin-right: 10px;
        padding-left: 10px;
        border-left: 1px solid white;
      }

      & > div:first-child {
        border-left: none;
        padding-left: 0px;
      }
    }

    .companies {
      display: flex;
      flex-wrap: wrap;
      font-style: italic;
      margin-top: -10px;
    }

    .overview {
      display: flex;
      margin-top: 20px;
      font-size: 20px;
      line-height: 1.5em;
      @media (max-width: 560px) {
        margin-bottom: 40px;
      }
    }

    .favorite-button {
      width: 40px;
      height: 35px;
      border-radius: 15px;
      background-color: $add-button-color;
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
