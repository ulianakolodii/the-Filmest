<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import type { Film } from '@/api/films'
const store = useStore()
const favoriteFilms = computed(() => store.state.loadedFavorites as Array<Record<string, unknown>>)
let filteredTitle = ref()
let filteredFilms = ref()

const removeFromFavorites = (favorite: Object) => {
  store.commit('TOGGLE_FILM', favorite)
  store.dispatch('fetchFavorites')
}

const handleSubmit = () => {
  filteredFilms.value = favoriteFilms.value.filter((favorite) => {
    return String(favorite.title).toLowerCase() === String(filteredTitle.value).toLowerCase()
  })
}

onMounted(async () => {
  store.dispatch('fetchFavorites')
})
</script>

<template>
  <div class="fav-films_container">
    <div v-if="favoriteFilms && favoriteFilms.length">
      <div v-if="filteredFilms && filteredFilms.length">
        <ul class="fav-list">
          <li class="fav-film-item" v-for="filteredFilm in filteredFilms" :key="filteredFilm.title">
            <button class="delete_favorite" @click="removeFromFavorites(filteredFilm)">x</button>
            <img
              class="fav-poster"
              v-if="filteredFilm?.poster_path === null"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            /><img
              v-else
              class="fav-poster"
              :src="`https://image.tmdb.org/t/p/w500${filteredFilm?.poster_path}`"
            />
            <div class="fav-title">{{ filteredFilm?.title }}</div>
            <div class="fav-overview">{{ filteredFilm?.overview }}</div>
            <button class="discover-button">
              <RouterLink class="discover-link" :to="`film/${filteredFilm.id}`">...more</RouterLink>
            </button>
          </li>
        </ul>
      </div>
      <div v-else>
        <ul class="fav-list">
          <li class="fav-film-item" v-for="favoriteFilm in favoriteFilms" :key="favoriteFilm.title">
            <button class="delete_favorite" @click="removeFromFavorites(favoriteFilm)">x</button>
            <img
              class="fav-poster"
              v-if="favoriteFilm?.poster_path === null"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            /><img
              v-else
              class="fav-poster"
              :src="`https://image.tmdb.org/t/p/w500${favoriteFilm?.poster_path}`"
            />
            <div class="fav-title">{{ favoriteFilm?.title }}</div>
            <div class="fav-overview">{{ favoriteFilm?.overview }}</div>
            <button class="discover-button">
              <RouterLink class="discover-link" :to="`film/${favoriteFilm.id}`">...more</RouterLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="empty-fav-films">
      No Favorites :c You can go back to
      <RouterLink class="discover-link" to="/">all fims</RouterLink> to choose
    </div>
    <form @submit.prevent="handleSubmit">
      <input class="favorites-input" v-model="filteredTitle" placeholder="search in favorites" />
      <button class="search_button" type="submit">go</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.fav-films_container {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  .empty-fav-films {
    color: $general-text-color;
    font-size: 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 10px;

    a {
      text-decoration: none;
      color: $emphasis-color;
      margin: 0 5px;
    }
  }
  .fav-list {
    margin: 25px;
    display: flex;
    flex-wrap: wrap;
    color: $general-text_color;
    @media (max-width: 560px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }

    .not-visible {
      display: none;
    }

    .fav-film-item {
      display: flex;
      flex-direction: column;
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

      .delete_favorite {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        color: $general-text_color;
        background-color: $add-button-color;
        border-radius: 25px;
        padding-bottom: 3px;
        margin-bottom: -22px;
        margin-left: 4px;
        z-index: 10;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;

        &:hover {
          background-color: $background-emphasis-color;
          color: $emphasis-color;
        }
      }

      .fav-poster {
        margin-bottom: 20px;
      }

      .fav-title {
        font-size: 25px;
      }
      .fav-overview {
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

  .favorites-input {
    width: 200px;
    height: 30px;
    color: $general-text_color;
    background-color: transparent;
    border: 1px solid $general-text_color;
    border-radius: 25px;
    padding-left: 10px;
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
}
</style>
