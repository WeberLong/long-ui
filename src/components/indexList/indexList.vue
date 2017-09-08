<template>
  <div class="ui-indexlist">
    <div class="ui-indexlist-content" ref="content" :style="{ 'height': currentHeight + 'px'}">
      <slot></slot>
    </div>
    
    <div class="ui-indexlist-nav" @touchstart="handleTouchStart" ref="nav">
      <ul class="ui-indexlist-navlist">
        <li class="ui-indexlist-navitem" v-for="(section, index) in sections" :key="index" :data-nav="section"
          :class="{'active-nav':currentIndicator===section}">
          {{ section }}
        </li>
      </ul>
    </div>

    <div class="ui-indexlist-fixed" ref="fixed">
      <div class="fixed-title">{{currentFloor}}</div>
    </div>
    
    <div class="ui-indexlist-indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
  </div>
</template>

<script>
  const TITLE_HEIGHT = 24
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
        listHeight: [],
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentFloor: '',
        currentHeight: this.height,
        navOffsetX: 0,
        fixedTitleY: -1
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
      },
      fixedTitleY (val) {
        let fixedTop = (val > 0 && val < TITLE_HEIGHT) ? val - TITLE_HEIGHT : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    },

    methods: {
      init () {
        let listItems = this.$refs.content.getElementsByTagName('p')
        if (listItems.length > 0) {
          this.firstSection = listItems[0]
        }
      },

      scrollContent () {
        const listHeight = this.listHeight
        const sections = this.sections
        let y = document.getElementsByClassName('ui-indexlist-content')[0].scrollTop
        // 当滚动到顶部，y<=0
        if (y <= 0) {
          this.currentFloor = sections[0]
          this.currentIndicator = sections[0]
          return
        }
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (y >= height1 && y < height2) {
            this.currentFloor = sections[i]
            this.currentIndicator = sections[i]
            this.fixedTitleY = height2 - y
            return
          }
        }
        // 当滚动到底部，且y大于最后一个元素的上限
        if (y >= listHeight.length - 1) {
          this.currentFloor = sections[listHeight.length - 1]
          this.currentIndicator = sections[listHeight.length - 1]
        }
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
          this.currentIndicator = this.currentFloor
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
      },

      calculateScrollHeight () {
        this.listHeight = []
        const list = document.querySelectorAll('[data-index]')
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },

    mounted () {
      if (this.indexs.length) {
        this.sections = this.indexs
      }
      if (!this.currentHeight) {
        this.currentHeight = document.documentElement.clientHeight - (document.getElementsByClassName('ui-header-bar')[0].clientHeight + 1)
      }
      this.calculateScrollHeight()
      this.currentIndicator = this.sections[0]
      this.currentFloor = this.sections[0]

      this.init()
      document.getElementsByClassName('ui-indexlist-content')[0].addEventListener('scroll', this.scrollContent, false)
      // document.getElementsByClassName('ui-indexlist-content')[0].addEventListener('touchend', this.scrollContent, false)
    },

    beforeDestroy () {
      document.getElementsByClassName('ui-indexlist-content')[0].removeEventListener('scroll', this.scrollContent, false)
      // document.getElementsByClassName('ui-indexlist-content')[0].removeEventListener('touchend', this.scrollContent, false)
    }
  }
</script>

<style lang="less">
  .ui-indexlist {
    width: 100%;
    position: relative;
    overflow: hidden;

    .ui-indexlist-content {
      position: relative;
      margin: 0;
      padding: 0;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }
    
    .ui-indexlist-nav {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      padding-right: 6px;
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
      padding: 0 1.2px;
      line-height: 1.2;
      font-size: 10px;
      user-select: none;
      -webkit-touch-callout: none;
    }
    .active-nav {
      background: #7e848c;
      color: #fff;
      border-radius: 50%;
    }

    .ui-indexlist-fixed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: #f5f6f7;
      z-index: 16;
      .fixed-title {
        height: 24px;
        padding: 0 16px;
        font-size: 16px;
        font-weight: 500;
      }
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
