<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Action Sheet</span>
  </header-bar>
  <scroll-view class="center-block">
    <button-area>
      <Button text="点击弹出 Action Sheet" @click.native="showActionSheet()" raised></Button>
      <Button text="不带 cancel 按钮的" @click.native="showActionSheet(true)" raised></Button>
    </button-area>
  </scroll-view>
  <action-sheet :actions="actionSheet.actions" :open="actionSheet.show" @showMsgModal="showMsg" @close="hideActionSheet()" :showCancel="actionSheet.showCancel"></action-sheet>
  <modal ref="modal" :title="modal.title" :msg="modal.msg"></modal>
</div>
</template>

<script>
export default {
  data () {
    return {
      actionSheet: {
        show: false,
        showCancel: true,
        actions: [{
          isLabel: true,
          name: '选择一个你喜欢的'
        }, {
          name: '守望先锋',
          click: () => {
            this.showMsg('守望先锋')
          }
        }, {
          name: '炉石传说',
          click: () => {
            this.showMsg('炉石传说')
          }
        }, {
          name: '英雄联盟',
          color: 'red',
          click: () => {
            this.showMsg('英雄联盟')
          }
        }, {
          name: '剑灵',
          click: () => {
            this.showMsg('剑灵')
          }
        }]
      },
      modal: {
        show: false,
        msg: '',
        title: '你选择的是'
      }
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    showMsg (val) {
      this.modal.msg = val.name
      this.modal.show = true
      this.$refs.modal.open()
    },
    showActionSheet (flag) {
      this.actionSheet.show = true
      this.actionSheet.showCancel = !flag
    },
    hideActionSheet () {
      this.actionSheet.show = false
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.center-block{
  display: flex;
  align-items: center;
}
</style>
