import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null, // Store the user state here
  },
  mutations: {
    setUser(state, user) {
      state.user = user; // Update the user state
    },
    clearUser(state) {
      state.user = null; // Clear the user state
    },
  },
  actions: {
    signIn({ commit }, user) {
      // Commit the mutation to set the user state
      commit('setUser', user);
    },
    signOut({ commit }) {
      // Commit the mutation to clear the user state
      commit('clearUser');
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});
