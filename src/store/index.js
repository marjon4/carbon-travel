import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      form: {
        start: '',
        end: '',
        passengers: 0
      }
    }
  },
  mutations: {
    setForm (state, value) {
      state.form = value;
    }
  }
})

export default store;