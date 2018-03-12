<template>
  <div class="ui-infinite-scroll">
    <circular v-show="!loading" :size="24" color="long"></circular>
    <span v-show="!loading" class="ui-infinite-scroll-text">正在加载。。。</span>
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
    }
  },
  watch: {
    loading (val) {
      if (val) {
        this.removeScrollListener()
      }
    }
  },
  methods: {
    onscroll () {
      if (this.loading) return
      const scroller = this.trigger ? this.$parent.$parent.$refs[this.trigger].$el : null
      let h = scroller.scrollHeight - scroller.scrollTop - 5
      let sh = scroller.offsetHeight
      if (h <= sh) {
        this.$emit('load-more')
      }
    },
    addScrollListener () {
      this.handlerScroll = () => {
        this.onscroll()
      }
      const triggerEl = this.trigger ? this.$parent.$parent.$refs[this.trigger].$el : null
      triggerEl.addEventListener('scroll', this.handlerScroll, false)
    },
    removeScrollListener () {
      if (!this.handlerScroll) return
      const triggerEl = this.trigger ? this.$parent.$parent.$refs[this.trigger].$el : null
      triggerEl.removeEventListener('scroll', this.handlerScroll, false)
      this.handlerScroll = null
    }
  },
  activated () {
    this.addScrollListener()
  },
  deactivated () {
    this.removeScrollListener()
  },
  components: {
    circular
  }
}
</script>

<style lang="css">
.ui-infinite-scroll{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  line-height: 36px;
  width: 100%;
}
.ui-infinite-scroll-text{
  margin-left: 16px;
  font-size: 16px;
}
</style>
