import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  count: 10,
}

const mutations = {
  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  }
}

const actions = {
  add: ({
    commit
  }) => {
    commit('add')
    console.log(commit);
  },
  reduce: ({
    commit
  }) => {
    commit('reduce')
  },
  oddAdd: ({
    commit,
    state
  }) => {
    if (state.count % 2 == 0) {
      commit('add')
    }
  }
}

const getters = {
  count(state) {
    return state.count
  },
  isOdd(state) {
    return state.count % 2 == 0 ? "偶数" : '奇数'
  },
  hello(state) {
    return 'hello'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})