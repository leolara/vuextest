import Vue from 'vue'
import Vuex from 'vuex'

class Counter {
  private i = 0

  get value () {
    return this.i
  }

  inc () {
    this.i++
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: new Counter()
  },
  mutations: {
    inc (state) {
      state.counter.inc()
    }
  },
  actions: {
  },
  modules: {
  }
})
