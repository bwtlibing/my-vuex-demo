<template>
<div id="app">
  <h1>哈哈哈</h1>
  <h2>other分支</h2>
  <h3>vsCode的编辑器 </h3>
  <h3>vsCode的第三次提交 </h3>
  <p>welcom vuex-demo</p>
  <h3>提交到主分支master</h3>
  <h3>提交到master分支</h3>
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
