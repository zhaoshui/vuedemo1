<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <!-- <div class="support">
          <span class="icon" :class="classMap[seller.support[0].type]"></span>
          <span class="text">{{seller.support[0].description}}</span>
        </div> -->
      </div>
      <div class="support-count">
        <!-- <span class="count">{{seller.supports.length}}</span> -->
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  props: {
    seller: {
      type: Object
    },
    created () {
      this.classMap = ['descrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"

.header
  color:#fff
  background:#000
  .content-wrapper
    position:relative
    padding: 24px 12px 18px 24px
    font-size:0
    .avatar
      display:inline-block
      vertical-align:top
      img
        border-radius:2px
    .content
      display:inline-block
      margin-left:16px
      .title
        margin:2px 0 8px 0
        .brand
          display:inline-block
          vertical-align:top
          width:30px
          height:18px
          bg-image('brand')
          background-size:30px 18px
          background-repeat:no-repeat
        .name
          margin-left:6px
          font-size:16px
          line-height:18px
          font-weight:bold
      .description
        margin-bottom:10px
        line-height:12px
        font-size:12px
      .support
        .icon
          display:inline-block
          vertical-align:top
          width:12px
          height:12px
          margin-right:4px
          background-size:12px 12px
          background-repeat:no-repeat
          /*&.descrease
            bg-image('descrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')*/
        .text
          font-size:12px
          line-height:12px
    .support-count
      position:absolute
      right:12px
      bottom:18px
      padding:0 8px
      height:24px
      line-height:24px
      border-radius:14px
      background:rgba(0,0,0,0.2)
      text-align:center
      .count
        font-size:10px
      .icon-keyboard_arrow_right
        font-size:10px
  .bulletin-wrapper
    background:rgba(7,17,27,0.2)
    position:relative
    height:28px
    line-height:28px
    padding:0 22px 8px 12px
    white-space:nowrap
    overflow:hidden
    text-overflow:ellipsis
    .bulletin-title
      display:inline-block
      vertical-align:top
      margin-top:7px
      width:22px
      height:12px
      bg-image('bulletin')
      background-size:22px 12px
      background-repeat:no-repeat
    .bulletin-text
      margin:0 4px
      font-size:10px
    .icon-keyboard_arrow_right
      position:absolute
      font-size:10px
      right:12px
      top:8px
</style>
