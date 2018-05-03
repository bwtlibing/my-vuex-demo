const getters = {
  count(state) {
    return state.count
  },
  isOdd(state) {
    return state.count % 2 == 0 ? "偶数" : '奇数'
  },
  hello(state) {
    return 'hello'
  },
  price(state) {
    return state.price
  }
}
export default getters