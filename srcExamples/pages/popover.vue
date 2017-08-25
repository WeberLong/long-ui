<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Popover</span>
    <icon-button slot="right" icon="menu" ref="menu" @click.native="showPopover('menu')"></icon-button>
  </header-bar>
  <scroll-view class="center-block">
    <button-area>
      <Button text="点这里出现" fill color="blue" raised ref="button" @click.native="showBtnPopover('button')"></Button>
    </button-area>
  </scroll-view>
  <div class="demo-tool">
    <Button text="点这里" raised ref="bottom" @click.native="showPopover('bottom')"></Button>
  </div>
  <popover ref="popover" :trigger="trigger">
    <list class="demo-popver-list">
      <item-cell ripple>
        <item-media>
          <icon value="reply"></icon>
        </item-media>
        <item-title>转办</item-title>
      </item-cell>
      <item-cell ripple icon="icon-" title="">
        <item-media>
          <icon value="mode_edit"></icon>
        </item-media>
        <item-title>编辑</item-title>
      </item-cell>
      <item-cell ripple>
        <item-media>
          <icon value="cached"></icon>
        </item-media>
        <item-title>刷新</item-title>
      </item-cell>
    </list>
  </popover>
  <popover ref="btnPopover" :trigger="trigger" :autoPosition="false" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin">
    <list class="demo-popver-list">
      <item-cell ripple>
        <item-media>
          <icon value="reply"></icon>
        </item-media>
        <item-title>转办</item-title>
      </item-cell>
      <item-cell ripple icon="icon-" title="">
        <item-media>
          <icon value="mode_edit"></icon>
        </item-media>
        <item-title>编辑</item-title>
      </item-cell>
      <item-cell ripple>
        <item-media>
          <icon value="cached"></icon>
        </item-media>
        <item-title>刷新</item-title>
      </item-cell>
    </list>
  </popover>
</div>
</template>

<script>
export default {
  data () {
    return {
      trigger: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      targetOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    showPopover (ref) {
      this.trigger = this.$refs[ref].$el
      this.$refs.popover.open()
    },
    showBtnPopover (ref) {
      this.trigger = this.$refs[ref].$el
      this.$refs.btnPopover.open()
    }
  }
}
</script>

<style lang="css" scoped>
.ui-list.demo-popver-list{
  margin: 0;
}
.ui-list.demo-popver-list .ui-item:after{
  content: none;
}
.ui-center-block{
  display: flex;
  align-items: center;
}
.demo-tool{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  height: 48px;
}
</style>
