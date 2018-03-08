<template>
  <div class="ui-scroll-more">
    <circular v-show="loading" :size="24" color="colorOrange"></circular>
    <span v-show="loading" class="ui-scroll-more-text">正在加载。。。</span>
  </div>
</template>

<script>
import circular from '../circular/circular'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      required: true
    },
    pushDistance: {
      type: Number,
      default: 5
    },
    noData: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    noData(newValue) {
      if (newValue) this.removeScrollListener();
    }
  },
  methods: {
    onscroll () {
      if (this.loading) return
      
      //h对应的是内容部分还有多少没有滚动到头
      let h = this.scroller.scrollHeight - this.scroller.scrollTop - this.pushDistance;
      //sh对应的是边界框的尺寸
      let sh = this.scroller.offsetHeight
      //h等于sh时内容容器滚动到容器的底部这时显示加载更多并抛出事件
      if (h <= sh) {
        this.$emit('load-more')
      }
    },
    addScrollListener () {
      this.triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null
      this.scroller = this.trigger ? this.$parent.$refs[this.trigger] : null
      this.triggerEl.addEventListener('scroll', this.onscroll, false)
    },
    removeScrollListener () {
      const triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null
      if (!this.onscroll || !triggerEl) return
      
      triggerEl.removeEventListener('scroll', this.onscroll, false)
      this.onscroll = null
    }
  },
  mounted () {
    this.addScrollListener()
  },
  beforeDestroy () {
    this.removeScrollListener()
  },
  components: {
    circular
  }
}
</script>

<style lang="css">
.ui-scroll-more {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  line-height: 36px;
  width: 100%;
}
.ui-scroll-more-text {
  margin-left: 16px;
  font-size: 16px;
}
</style>