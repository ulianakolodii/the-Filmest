import { createStore } from 'vuex'

export type State = { favFilms: Array<Object> }

const state: State = {
  favFilms: []
}

export const store = createStore({
  state,
  mutations: {
    addFilm(prevState, payload) {
      state.favFilms.push({
        id: payload.id,
        overview: payload.overview,
        poster_path: payload.poster_path,
        title: payload.title
      })
    }
  },
  actions: {
    addFilm(context) {
      context.commit('addFilm')
    }
  },
  getters: {
    favFilms(state) {
      return state.favFilms
    }
  },
  modules: {}
})
