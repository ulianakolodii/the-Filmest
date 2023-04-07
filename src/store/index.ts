import { createStore } from 'vuex'
import { searchFilms } from '../api/films'
import { fetchFilm } from '../api/films'

export type State = {
  favFilms: Record<string, string>
  searchedTitle: string
  searchedFilms: []
  loadedFavorites: Array<Record<string, string | number>>
}

const state: State = {
  favFilms: JSON.parse(localStorage.getItem('favFilms') || '{}'),
  loadedFavorites: [],
  searchedTitle: '',
  searchedFilms: []
}

const saveFavFilms = (favFilms: Record<string, string | number>) => {
  localStorage.setItem(
    'favFilms',
    JSON.stringify(
      Object.fromEntries(
        Object.entries(favFilms).filter(([key, value]: [string, string | number]) => value)
      )
    )
  )
}

export const store = createStore({
  state,
  mutations: {
    TOGGLE_FILM(context, payload) {
      const currentValue = context.favFilms[payload.id]
      context.favFilms[payload.id] = currentValue ? '' : '1'
      saveFavFilms(context.favFilms)
    },
    SEARCH_FILM(context, payload) {
      context.searchedTitle = payload
    },
    SET_SEARCHED_FILMS(context, payload) {
      context.searchedFilms = payload
    },
    SET_LOADED_FAVORITES(context, payload) {
      context.loadedFavorites = payload
    }
  },
  actions: {
    toggleFilm({ commit }) {
      commit('TOGGLE_FILM')
    },
    searchFilm: async ({ commit }, payload) => {
      commit('SEARCH_FILM', payload)
      const result = await searchFilms(payload)
      commit('SET_SEARCHED_FILMS', result)
    },
    fetchFavorites: async ({ commit, getters }) => {
      commit(
        'SET_LOADED_FAVORITES',
        await Promise.all(Object.keys(getters.favFilms).map(fetchFilm))
      )
    }
  },
  getters: {
    favFilms(state) {
      return Object.keys(state.favFilms).reduce((acc, key) => {
        if (!state.favFilms[key]) {
          return acc
        }
        return {
          ...acc,
          [key]: state.favFilms[key]
        }
      }, {})
    },
    searchedTitle(state) {
      return state.searchedTitle
    },
    searchedFilms(state) {
      return state.searchedFilms
    }
  },
  modules: {}
})
