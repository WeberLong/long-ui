<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Modal</span>
  </header-bar>
  <scroll-view>
    <content-block>
        <div>
          这里有许多的常用的弹出框，
          例如 alert、 confirm、 prompt....
          alert有多种级别的提醒，点击一下就知道啦！
        </div>
        <button-row>
          <Button text="Modal" raised @click.native="showModal('simModal')"></Button>
          <Button text="Alert" raised @click.native="showAlert('')"></Button>
        </button-row>
        <button-row>
          <Button text="confirm" raised @click.native="showConfirm"></Button>
          <Button text="prompt" raised @click.native="showPrompt()"></Button>
        </button-row>
      </content-block>
      <content-block>
        <div class="">
          不同类型的alert
        </div>
        <button-row>
          <Button text="info" raised @click.native="showAlert('info')"></Button>
          <Button text="success" raised @click.native="showAlert('success')"></Button>
        </button-row>
        <button-row>
          <Button text="warning" raised @click.native="showAlert('warning')"></Button>
          <Button text="error" raised @click.native="showAlert('error')"></Button>
        </button-row>
      </content-block>
      <content-block>
        <div class="">
          自定义的modal
        </div>
        <button-row>
          <Button text="select Modal" raised @click.native="showModal('selectModal')"></Button>
          <Button text="Login Modal" raised @click.native="showModal('loginModal')"></Button>
        </button-row>
      </content-block>
  </scroll-view>
  <modal title="标题" ref="simModal">
    这里是内容区域，点击关闭按钮，或者遮盖层关闭
  </modal>

  <modal title="Select Modal" ref="selectModal">
    <div class="">
      选择一个你喜欢的 y: {{y}}
    </div>
    <div class="demo-select-modal" ref="selectModalBody">
      <radio :model="radio" name="demoModal" value="守望先锋" label="守望先锋"></radio>
      <radio :model="radio" name="demoModal" value="守望先锋" label="守望先锋"></radio>
      <radio :model="radio" name="demoModal" value="英雄联盟" label="英雄联盟"></radio>
      <radio :model="radio" name="demoModal" value="英雄联盟" label="英雄联盟"></radio>
      <radio :model="radio" name="demoModal" value="英雄联盟" label="英雄联盟"></radio>
      <radio :model="radio" name="demoModal" value="精灵宝可梦go" label="精灵宝可梦go"></radio>
      <radio :model="radio" name="demoModal" value="精灵宝可梦go" label="精灵宝可梦go"></radio>
      <radio :model="radio" name="demoModal" value="精灵宝可梦go" label="精灵宝可梦go"></radio>
      <radio :model="radio" name="demoModal" value="精灵宝可梦go" label="精灵宝可梦go"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
    </div>
  </modal>
  <modal title="Login Modal" ref="loginModal">
    <div class="login-modal">
      <text-field label="用户名" placeholder="请输入用户名"></text-field>
      <text-field label="密码" placeholder="请输入密码" type="password"></text-field>
      <item-form>
        <ui-switch label="自动登录"></ui-switch>
      </item-form>
    </div>
    <Button text="取消" slot="footer" @click.native="hideModal('loginModal')" fill></Button>
    <Button text="登录" slot="footer" @click.native="hideModal('loginModal')" color="red" fill></Button>
  </modal>
  <alert :title="alert.title" :type="alert.type" ref="alert" :msg="alert.msg"></alert>
  <confirm :title="confirm.title" show-icon ref="confirm" @cancel="handlerCancer" @sure="handlerSure" :msg="confirm.msg"></confirm>
  <prompt :title="prompt.title" ref="prompt" @sure="handlerSure" :msg="prompt.msg"></prompt>
</div>
</template>

<script>
export default {
  data () {
    return {
      radio: '守望先锋',
      modal: false,
      selectModal: false,
      loginModal: false,
      alert: {
        show: false
      },
      confirm: {
        show: false
      },
      prompt: {
        show: false
      },
      y: 0
    }
  },
  mounted () {
    this.$refs.selectModalBody.addEventListener('touchstart', this.handleTouchStart, false)
    // this.$refs.selectModalBody.addEventListener('touchmove', this.scrollContent, false)
  },
  beforeDestroy () {
    this.$refs.selectModalBody.removeEventListener('touchstart', this.handleTouchStart, false)
    // this.$refs.selectModalBody.removeEventListener('touchmove', this.scrollContent, false)
  },
  methods: {
    back () {
      window.history.back()
    },
    handleTouchStart () {
      this.scrollContent()
      this.$refs.selectModalBody.addEventListener('touchmove', this.handleTouchMove, false)
      this.$refs.selectModalBody.addEventListener('touchend', this.handleTouchEnd, false)
    },
    handleTouchMove () {
      this.scrollContent()
    },
    handleTouchEnd () {
      this.$refs.selectModalBody.removeEventListener('touchmove', this.handleTouchMove, false)
      this.$refs.selectModalBody.removeEventListener('touchend', this.handleTouchEnd, false)
    },
    scrollContent () {
      let y = this.$refs.selectModalBody.scrollTop
      console.log(y)
      this.y = y
    },
    showModal (ref) {
      this.$refs[ref].open()
    },
    hideModal (ref) {
      this.$refs[ref].close()
    },
    showAlert (type) {
      this.alert = {
        title: '标题',
        msg: !type ? '这是内容' : type === 'info' ? '这是普通信息' : type === 'success' ? '成功啦！' : type === 'warning' ? '这是提醒！' : '出错啦！',
        show: true,
        type: type
      }
      this.$refs.alert.open()
    },
    showConfirm () {
      this.confirm = {
        title: '问题',
        msg: '你确定？',
        show: true
      }
      this.$refs.confirm.open()
    },
    showPrompt () {
      this.prompt = {
        title: '录入信息',
        msg: '请输入你的姓名',
        show: true
      }
      this.$refs.prompt.open()
    },
    handlerSure (input) {
      if (input) {
        this.alert = {
          title: '信息',
          msg: '你输入的是：' + input,
          show: true
        }
        this.$refs.alert.open()
      } else {
        this.alert = {
          title: '信息',
          msg: '你点击了确定',
          show: true
        }
        this.$refs.alert.open()
      }
    },
    handlerCancer () {
      console.log('取消')
    },
    modelChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="css" scoped>
.demo-select-modal{
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 140px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.login-modal .ui-item-form{
  padding: 0;
}
.login-modal .ui-item-form-content{
  padding: 0;
  padding-top: 10px;
}
</style>
