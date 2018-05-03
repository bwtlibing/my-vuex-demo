import * as type from './type'

const actions = {
  add: ({
    commit
  }) => {
    commit(type.ADD)
  },
  reduce: ({
    commit
  }) => {
    commit(type.REDUCE)
  },
  oddAdd: ({
    commit,
    state
  }) => {
    if (state.count % 2 == 0) {
      commit(type.ADD)
    }
  },
  clickAsync: ({
    commit
  }) => {
    new Promise((resolve) => {
      setTimeout(function () {
        commit('ADD')
      }, 1000);
      resolve()
    })
  }
}

export default actions