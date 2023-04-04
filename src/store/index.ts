import { createStore } from 'vuex'
import { searchFilms } from '../api/films'

export type State = { favFilms: Record<string, string>; searchedTitle: string; searchedFilms: [] }

const state: State = {
  favFilms: JSON.parse(localStorage.getItem('favFilms') || '{}'),
  searchedTitle: '',
  searchedFilms: []
}

const saveFavFilms = (favFilms: Record<string, string>) => {
  localStorage.setItem(
    'favFilms',
    JSON.stringify(
      Object.fromEntries(Object.entries(favFilms).filter(([key, value]: [number, number]) => value))
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
    }
  },
  getters: {
    favFilms(state) {
      return state.favFilms
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
