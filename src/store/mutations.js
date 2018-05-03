// const ADD = "ADD"
// const REDUCE = 'REDUCE'

import {
  ADD,
  REDUCE
} from './type'

const mutations = {
  [ADD](state) {
    state.count++
  },
  [REDUCE](state) {
    state.count--
  }
}
export default mutations