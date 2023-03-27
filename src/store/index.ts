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
    addFilm(prevState, payload) {
      state.favFilms.push({ title: payload.title, year: payload.release_date.slice(0, 4) })
      console.log(state.favFilms)
    }
  },
  actions: {
    // addFilm({ commit }, title: string, year: number) {
    //   commit('addFilm', title, year)
    // }
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
