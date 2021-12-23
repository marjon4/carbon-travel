import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      form: {
        start: '',
        end: '',
        passengers: 0
      },
      result: {}
    }
  },
  mutations: {
    setForm (state, value) {
      state.form = value;
    },
    setResult(state, value){
      state.result = value;
    },
  },
})

export default store;