<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const favFilms = ref(store.state.favFilms)
</script>

<template>
  <div class="fav-films_container">
    <span v-if="favFilms.length === 0" class="empty-fav-films">
      No Favorites :c You can go back to
      <RouterLink class="discover-link" to="/">all fims</RouterLink> to choose
    </span>
    <ul class="fav-list" v-else>
      <li class="fav-film-item" v-for="favFilm in favFilms" :key="favFilm.title">
        <img class="fav-poster" :src="`https://image.tmdb.org/t/p/w500${favFilm?.poster_path}`" />
        <span class="fav-title">{{ favFilm?.title }}</span>
        <span class="fav-overview">{{ favFilm?.overview }}</span>
        <button class="discover-button">
          <RouterLink class="discover-link" :to="`film/${favFilm.id}`">...more</RouterLink>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';

.fav-films_container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  .empty-fav-films {
    color: $general-text-color;
    font-size: 25px;
    display: flex;

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

    .fav-film-item {
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
}
</style>
