<template>
  <div class="ui-indexlist">
    <div class="ui-indexlist-content" ref="content" :style="{ 'height': currentHeight + 'px'}">
      <slot></slot>
    </div>
    
    <div class="ui-indexlist-nav" @touchstart="handleTouchStart" ref="nav">
      <ul class="ui-indexlist-navlist">
        <li class="ui-indexlist-navitem" v-for="(section, index) in sections" :key="index">{{ section }}</li>
      </ul>
    </div>
    
    <div class="ui-indexlist-indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
  </div>
</template>

<script>
  export default {
    name: 'ui-index-list',

    props: {
      indexs: {
        type: Array,
        default () {
          return []
        }
      },
      height: Number,
      showIndicator: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        sections: [],
        // navWidth: 0,
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentHeight: this.height,
        navOffsetX: 0
      }
    },

    watch: {
      sections () {
        this.init()
      },
      height (val) {
        if (val) {
          this.currentHeight = val
        }
      }
    },

    methods: {
      init () {
        // this.$nextTick(() => {
        //   this.navWidth = this.$refs.nav.clientWidth
        // })
        let listItems = this.$refs.content.getElementsByTagName('p')
        if (listItems.length > 0) {
          this.firstSection = listItems[0]
        }
      },

      // handleContentTouchMove (e) {
      //   e.preventDefault()
      //   this.scrollContent(e.changedTouches[0].clientY)
      // },

      scrollContent () {
        let y = document.getElementsByClassName('ui-indexlist-content')[0].scrollTop
        console.log(y)
      },

      handleTouchStart (e) {
        if (e.target.tagName !== 'LI') {
          return
        }
        this.navOffsetX = e.changedTouches[0].clientX
        this.scrollList(e.changedTouches[0].clientY)
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime)
        }
        this.moving = true
        window.addEventListener('touchmove', this.handleTouchMove)
        window.addEventListener('touchend', this.handleTouchEnd)
      },

      handleTouchMove (e) {
        e.preventDefault()
        this.scrollList(e.changedTouches[0].clientY)
      },

      handleTouchEnd () {
        this.indicatorTime = setTimeout(() => {
          this.moving = false
          this.currentIndicator = ''
        }, 500)
        window.removeEventListener('touchmove', this.handleTouchMove)
        window.removeEventListener('touchend', this.handleTouchEnd)
      },

      scrollList (y) {
        let currentItem = document.elementFromPoint(this.navOffsetX, y)
        if (!currentItem || !currentItem.classList.contains('ui-indexlist-navitem')) {
          return
        }
        this.currentIndicator = currentItem.innerText
        let targetDOM = this.$refs.content.querySelectorAll(`[data-index=${currentItem.innerText}]`)
        if (targetDOM.length > 0) {
          this.$refs.content.scrollTop = targetDOM[0].getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top
        }
      }
    },

    mounted () {
      if (this.indexs.length) {
        this.sections = this.indexs
      }
      if (!this.currentHeight) {
        this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top
      }
      console.log('this.currentHeight:')
      console.log(document.documentElement.clientHeight)
      console.log(this.$refs.content.getBoundingClientRect().top)
      console.log(this.$refs.content)
      console.log(this.currentHeight)
      this.init()
      console.log(document.getElementsByClassName('ui-indexlist-content'))
      document.getElementsByClassName('ui-indexlist-content')[0].addEventListener('scroll', this.scrollContent, false)
    },

    beforeDestroy () {
      document.getElementsByClassName('ui-indexlist-content')[0].removeEventListener('scroll', this.scrollContent, false)
    }
  }
</script>

<style lang="less">
  .ui-indexlist {
    width: 100%;
    position: relative;
    overflow: hidden;

    .ui-indexlist-content {
      margin: 0;
      padding: 0;
      overflow: auto;
    }
    
    .ui-indexlist-nav {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      // background-color: #fff;

      background-color: rgba(255, 255, 255, 0);
      // border-left: solid 1px #ddd;
      text-align: center;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .ui-indexlist-navlist {
      padding: 0;
      margin: 0;
      list-style: none;
      max-height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .ui-indexlist-navitem {
      padding: 2px 6px;
      font-size: 12px;
      user-select: none;
      -webkit-touch-callout: none;
    }
    
    .ui-indexlist-indicator {
      position: absolute;
      width: 50px;
      height: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      line-height: 50px;
      background-color: rgba(0, 0, 0, .7);
      border-radius: 5px;
      color: #fff;
      font-size: 22px;
    }
  }
</style>
