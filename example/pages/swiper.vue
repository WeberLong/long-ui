<template>
  <div>
    <swiper auto loop height="180px">
      <swiper-item class="black"><h2 class="title">4800万全场景四摄</h2></swiper-item>
      <swiper-item class="black"><h2 class="title">潮流色2.5D玻璃机身</h2></swiper-item>
      <swiper-item class="black"><h2 class="title">4000mAh大电量</h2></swiper-item>
      <swiper-item class="black"><h2 class="title">18W快充</h2></swiper-item>
      <swiper-item class="black"><h2 class="title">骁龙665处理器</h2></swiper-item>
      <swiper-item class="black"><h2 class="title">小金刚品质</h2></swiper-item>
    </swiper>
    <br/>
    <br/>
    <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><p>Redmi Note 8</p></swiper-item>
      <swiper-item><p>RedmiBook 14增强版</p></swiper-item>
      <swiper-item><p>Redmi红米电视70英寸</p></swiper-item>
      <swiper-item><p>Redmi神秘旗舰新品</p></swiper-item>
      <swiper-item><p>4000mAh大电量 + 18W快充</p></swiper-item>
      <swiper-item><p>德国莱茵 TÜV 低蓝光认证</p></swiper-item>
    </swiper>
    <br/>
    <br/>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.black {
  background-color: #000;
}
.title {
  line-height: 180px;
  text-align: center;
  color: #fff;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  p {
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
}
</style>
