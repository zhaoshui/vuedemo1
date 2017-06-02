<template>
  <div id="app">
    <vheader :seller="seller"></vheader>
    <ul class="nav">
      <router-link to="/route/goods" tag="li"><a>商品</a></router-link>
      <router-link to="/route/judge" tag="li"><a>评价</a></router-link>
      <router-link to="/route/seller" tag="li"><a>商家</a></router-link>
    </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import vheader from './components/header/header'
export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  created: function () {
    this.$http.get('/api/seller').then(function (response) {
      console.log(response)
    }).catch(function (err) {
      console.log(err)
    })
  },
  components: {
    vheader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../static/css/reset.css"
  @import "./common/stylus/mixin.styl"
.nav
  display:flex
  width:100%
  height:40px
  line-height:40px
  text-align:center
  /*border-bottom:1px solid rgba(7,17,27,0.1)*/
  border-1px(rgba(7,17,27,0.1))
  & > li
    flex:1
    &.router-link-exact-active > a
      color:rgb(240,20,20)
    & > a
      color:rgb(77,85,93)
      font-size:14px
      display:block

</style>
