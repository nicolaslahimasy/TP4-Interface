import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null, 
  },
  mutations: {
    setUser(state, user) {
      state.user = user; 
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    signIn({ commit }, user) {

      commit('setUser', user);
    },
    signOut({ commit }) {

      commit('clearUser');
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});
