<template>
    <div class="ui-ripple-ink" :style="{'color': color}"></div>
</template>

<script>
import classlist from 'utils/classList'

const startRipple = function (eventType, event) {
  let holder = event.currentTarget || event.target

  if (holder && !classlist.has(holder, 'ui-ripple-ink')) {
    holder = holder.querySelector('.ui-ripple-ink')
  }

  if (!holder) {
    return
  }

  const prev = holder.getAttribute('data-ui-event')

  if (prev && prev !== eventType) {
    return
  }

  holder.setAttribute('data-ui-event', eventType)

  const rect = holder.getBoundingClientRect()
  let x = event.offsetX
  let y

  if (x === undefined) {
    x = event.clientX - rect.left
    y = event.clientY - rect.top
  } else {
    y = event.offsetY
  }

  const ripple = document.createElement('div')
  let max

  if (rect.width === rect.height) {
    max = rect.width * 1.412
  } else {
    max = Math.sqrt(
      (rect.width * rect.width) + (rect.height * rect.height)
    )
  }

  const dim = (max * 2) + 'px'

  ripple.style.width = dim
  ripple.style.height = dim
  ripple.style.marginLeft = -max + x + 'px'
  ripple.style.marginTop = -max + y + 'px'

  ripple.className = 'ui-ripple-ink__ink'
  holder.appendChild(ripple)

  setTimeout(() => {
    classlist.add(ripple, 'is-held')
  }, 0)

  const releaseEvent = (eventType === 'mousedown' ? 'mouseup' : 'touchend')

  const handleRelease = function () {
    document.removeEventListener(releaseEvent, handleRelease)

    classlist.add(ripple, 'is-done')

    setTimeout(() => {
      holder.removeChild(ripple)

      if (holder.children.length === 0) {
        classlist.remove(holder, 'active')
        holder.removeAttribute('data-ui-event')
      }
    }, 450)
  }

  document.addEventListener(releaseEvent, handleRelease)
}

const handleMouseDown = function (e) {
  if (e.button === 0) {
    startRipple(e.type, e)
  }
}

const handleTouchStart = function (e) {
  if (e.changedTouches) {
    for (let i = 0; i < e.changedTouches.length; ++i) {
      startRipple(e.type, e.changedTouches[i])
    }
  }
}

export default {
  name: 'ripple',
  props: {
    trigger: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    }
  },
  watch: {
    trigger () {
      this.$nextTick(() => {
        this.initialize()
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initialize()
    })
  },
  beforeDestory () {
    const triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null
    if (triggerEl && Object.prototype.toString.call(triggerEl) === '[object HTMLAnchorElement]') {
      triggerEl.removeEventListener('touchstart', handleTouchStart)
      triggerEl.removeEventListener('mousedown', handleMouseDown)
    }
    if (triggerEl && Object.prototype.toString.call(triggerEl) === '[object Array]') {
      for (let i = 0; i < triggerEl.length; i++) {
        triggerEl[i].removeEventListener('touchstart', handleTouchStart)
        triggerEl[i].removeEventListener('mousedown', handleMouseDown)
      }
    }
  },
  methods: {
    initialize () {
      const triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null
      if (triggerEl && Object.prototype.toString.call(triggerEl) === '[object HTMLAnchorElement]') {
        triggerEl.addEventListener('touchstart', handleTouchStart)
        triggerEl.addEventListener('mousedown', handleMouseDown)
      }
      if (triggerEl && Object.prototype.toString.call(triggerEl) === '[object Array]') {
        for (let i = 0; i < triggerEl.length; i++) {
          triggerEl[i].addEventListener('touchstart', handleTouchStart)
          triggerEl[i].addEventListener('mousedown', handleMouseDown)
        }
      }
    }
  }
}
</script>

<style lang="less">
.ui-ripple-ink {
  display: block;
  overflow: hidden;
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
}
.ui-ripple-ink__ink {
  position: absolute;
  width: 0;
  height: 0;
  background-clip: padding-box;
  background-color: currentColor;
  border-radius: 50%;
  pointer-events: none;
  position: absolute;
  transform: scale(0);
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  user-select: none;

  &.is-held {
    transform: scale(1);
  }

  &.is-done {
    opacity: 0!important;
  }
}
</style>
