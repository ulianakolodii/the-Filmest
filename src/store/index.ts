import { createStore } from 'vuex'

export type State = { favFilms: Record<string, string> }

const state: State = {
  favFilms: JSON.parse(localStorage.getItem('favFilms') || '{}')
}

const saveFavFilms = (favFilms: Record<string, string>) => {
  localStorage.setItem(
    'favFilms',
    JSON.stringify(Object.fromEntries(Object.entries(favFilms).filter(([key, value]) => value)))
  )
}

export const store = createStore({
  state,
  mutations: {
    ADD_FILM(context, payload) {
      const currentValue = context.favFilms[payload.id]
      context.favFilms[payload.id] = currentValue ? '' : '1'
      saveFavFilms(context.favFilms)
    }
  },
  actions: {
    addFilm({ commit }) {
      commit('ADD_FILM')
    }
  },
  getters: {
    favFilms(state) {
      return state.favFilms
    }
  },
  modules: {}
})
