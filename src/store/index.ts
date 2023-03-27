import { createStore } from 'vuex'

export type State = { favFilms: Array<Object> }

const state: State = {
  favFilms: [
    { title: 'film1', year: '2022' },
    { title: 'film2', year: '2023' }
  ]
}

export const store = createStore({
  state,
  mutations: {
    addFilm(favFilm) {
      state.favFilms.push(favFilm)
    }
  },
  actions: {
    addFilm({ commit }) {
      commit('addFilm')
    }
  },
  getters: {
    favFilms(state) {
      return state.favFilms
    }
  },
  modules: {}
})
