<script>
export default {
  name: 'numberAnimate',
  props: {
    num: String, // 初始化数值
    speed: { // 动画速度
      type: Number,
      default: 1000
    },
    separator: { // 默认选择的分隔符 如：10,000
      type: String,
      default: ''
    },
    dot: { // 保留几位小数
      type: Number,
      default: 0
    }
  },
  computed: {
    arrStr () {
      let arrStr = parseFloat(this.num).toFixed(this.dot)
      if (typeof arrStr === 'number') {
        arrStr = arrStr.toString().split('')
      } else {
        arrStr = arrStr.split('')
      }
      return arrStr
    }
  },
  watch: {
    num () {
      this.init()
    }
  },
  mounted () {
    if (this.num === '') {
      alert('Must set a num')
      return
    }
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      const self = this
      const listNode = document.querySelectorAll('[data-num]')
      for (let i = 0; i < listNode.length; i++) {
        let num = listNode[i].getAttribute('data-num')
        let nodeTop = -(num * listNode[i].clientHeight / 11)
        listNode[i].style.webkitTransform = `translateY(${nodeTop}px)`
        listNode[i].style.MozTransform = `translateY(${nodeTop}px)`
        listNode[i].style.OTransform = `translateY(${nodeTop}px)`
        listNode[i].style.msTransform = `translateY(${nodeTop}px)`
        listNode[i].style.transform = `translateY(${nodeTop}px)`
        listNode[i].style.webkitTransition = `${self.speed / 1000}s`
        listNode[i].style.MozTransition = `${self.speed / 1000}s`
        listNode[i].style.OTransition = `${self.speed / 1000}s`
        listNode[i].style.msTransition = `${self.speed / 1000}s`
        listNode[i].style.transition = `${self.speed / 1000}s`
      }
    }
  },
  render () {
    const { arrStr, separator } = this
    return (
      <div class="ui-number-animate">
        {
          this._l(arrStr, (str, $index) =>
            [
              ($index !== 0 && ((arrStr.length - $index) % 3 === 0) && separator !== '' && str !== '.'
                ? <div class="ui-number-animate-dot">{separator}</div>
                : ''),
              <div class="ui-number-animate-dom" data-num={str}>
                <span class="ui-number-animate-span">0</span>
                <span class="ui-number-animate-span">1</span>
                <span class="ui-number-animate-span">2</span>
                <span class="ui-number-animate-span">3</span>
                <span class="ui-number-animate-span">4</span>
                <span class="ui-number-animate-span">5</span>
                <span class="ui-number-animate-span">6</span>
                <span class="ui-number-animate-span">7</span>
                <span class="ui-number-animate-span">8</span>
                <span class="ui-number-animate-span">9</span>
                <span class="ui-number-animate-span">.</span>
              </div>
            ]
          )
        }
      </div>
    )
  }
}
</script>

<style lang="less">
  .ui-number-animate {
    line-height: 1em;
    height: 1em;
    /*设置数字显示高度*/
    font-size: 22px;
    /*设置数字大小*/
    overflow: hidden;
    display: inline-block;
    position: relative;
    vertical-align: sub
  }

  .ui-number-animate .ui-number-animate-dot {
    width: .4em;
    /*设置分割符宽度*/
    line-height: 1em;
    float: left;
    text-align: center;
    transform: none !important;
    transition: none !important;
  }

  .ui-number-animate .ui-number-animate-dom {
    width: .6em;
    /*设置单个数字宽度*/
    text-align: center;
    float: left;
    position: relative;
    top: 0;
  }

  .ui-number-animate .ui-number-animate-dom .ui-number-animate-span {
    font-size: 22px;
    width: 100%;
    float: left;
  }
</style>
