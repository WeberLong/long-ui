<template>
  <div class="ui-indexlist">
    <div id="wrapper" class="ui-indexlist-content" ref="content">
      <div id="scroller">
        <slot></slot>
      </div>
      <div class="ui-indexlist-nav" @touchstart="handleTouchStart" ref="nav">
        <ul class="ui-indexlist-navlist">
          <li class="ui-indexlist-navitem" v-for="(section, index) in sections" :key="index" :data-nav="section">
            <span class="ui-indexlist-navitem-inner" :class="{'active-nav':currentIndicator===section}">{{ section }}</span>
          </li>
        </ul>
      </div>

      <div v-show="currentFloor" class="ui-indexlist-fixed" ref="fixed">
        <div class="fixed-title">{{currentFloor}}</div>
      </div>
      
      <div class="ui-indexlist-indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
    </div>
  </div>
</template>

<script>
  import 'utils/iscroll-probe.js'
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
        myScroll: null,
        scrollY: 0,
        sections: [],
        listHeight: [],
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentFloor: '',
        navOffsetX: 0,
        fixedTitleY: -1
      }
    },

    watch: {
      sections () {
        this.init()
      },
      scrollY (y) {
        const listHeight = this.listHeight
        const sections = this.sections
        // 当滚动到顶部，y<=0
        if (y > 0) {
          this.currentFloor = ''
          this.currentIndicator = ''
          return
        }
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-y >= height1 && -y < height2) {
            this.currentFloor = sections[i]
            this.currentIndicator = sections[i]
            this.fixedTitleY = height2 + y
            return
          }
        }
        // 当滚动到底部，且y大于最后一个元素的上限
        if (-y >= listHeight.length - 1) {
          this.currentFloor = sections[listHeight.length - 1]
          this.currentIndicator = sections[listHeight.length - 1]
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

      handleTouchStart (e) {
        if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
          this.navOffsetX = e.changedTouches[0].clientX
          this.scrollList(e.changedTouches[0].clientY)
          if (this.indicatorTime) {
            clearTimeout(this.indicatorTime)
          }
          this.moving = true
          window.addEventListener('touchmove', this.handleTouchMove)
          window.addEventListener('touchend', this.handleTouchEnd)
        }
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
        if (currentItem || currentItem.classList.contains('ui-indexlist-navitem') || currentItem.classList.contains('ui-indexlist-navitem-inner')) {
          this.currentIndicator = currentItem.innerText
          let targetDOM = this.$refs.content.querySelectorAll(`[data-index=${currentItem.innerText}]`)
          if (targetDOM.length > 0) {
            this.myScroll.scrollToElement(targetDOM[0], 0)
            this.scrollY = this.myScroll.y
          }
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
      // isPassive () {
      //   let supportsPassiveOption = false
      //   try {
      //     addEventListener('test', null, Object.defineProperty({}, 'passive', {
      //       get: function () {
      //         supportsPassiveOption = true
      //       }
      //     }))
      //   } catch (e) {}
      //   return supportsPassiveOption
      // }
    },

    mounted () {
      const self = this
      if (self.indexs.length) {
        self.sections = self.indexs
      }
      self.calculateScrollHeight()
      self.init()
      /* eslint-disable */
      self.myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true })
      self.myScroll.on('scroll', () => { self.scrollY = self.myScroll.y })
      self.myScroll.on('scrollEnd', () => { self.scrollY = self.myScroll.y })
      // document.addEventListener(
      //   'touchmove',
      //   function (e) { e.preventDefault() },
      //   self.isPassive() ? {capture: false, passive: false} : false
      // )
    },

    beforeDestroy () {
      this.myScroll.destroy()
      this.myScroll = null
    }
  }
</script>

<style lang="less">
  .ui-indexlist {
    position: fixed;
    top: 54px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    .ui-indexlist-content {
      // position: absolute;
      // width: 100%;
      // top: 0;
      // bottom: 0;
      // left: 0;
      // margin: 0;
      // padding: 0;
      // overflow: hidden;
      // z-index: 1;

      position: relative;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    
    .ui-indexlist-nav {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      // padding-right: 6px;

      background-color: rgba(255, 255, 255, 0);
      text-align: center;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 18;
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
      // padding: 1px 2.2px;
      // line-height: 1.2;
      // font-size: 10px;
      padding: 1px 4px;
      line-height: 1.2;
      font-size: 10px;
      user-select: none;
      -webkit-touch-callout: none;
      .ui-indexlist-navitem-inner {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
      }
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
      z-index: 2;
    }
  }
  #scroller {
    position: absolute;
    z-index: 1;
    width: 100%;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
  }
</style>
