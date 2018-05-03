<template>
<div id="app">
  <p>welcom vuex-demo</p>
  <input type="button" name="" value="增加" @click="add">
  <input type="button" name="" value="减少" @click="reduce">
  <input type="button" name="" value="偶数增加" @click="oddAdd">
  <input type="button" name="" value="异步增加" @click="clickAsync">

  <div class="">
    当前的数字：{{count}}; 这是:{{isOdd}}
    <br> {{hello}}
  </div>
  <br> 增加价格：{{price}}
</div>
</template>

<script>
const FF = 'FF'
console.log([FF]);
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'count', 'isOdd', 'hello', 'price'
    ])
  },
  methods: {
    ...mapActions([
      'add',
      'reduce',
      'oddAdd',
      'clickAsync'
    ])
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
