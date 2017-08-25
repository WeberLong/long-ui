<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Button</span>
  </header-bar>
  <scroll-view>
    <content-title>flat buttons</content-title>
      <content-block>
        <button-row>
          <Button text="button"></Button>
          <Button text="button"></Button>
          <Button text="button"></Button>
        </button-row>
        <button-row>
          <Button text="button"></Button>
          <Button text="button"></Button>
        </button-row>
      </content-block>

      <content-title>Raised Buttons</content-title>
      <content-block>
        <button-row>
          <Button raised text="button"></Button>
          <Button raised text="button"></Button>
          <Button raised text="button"></Button>
        </button-row>
      </content-block>

      <content-title>Raised Fill Buttons</content-title>
      <content-block>
        <button-row>
          <Button fill raised text="button"></Button>
          <Button fill raised text="button"></Button>
          <Button fill raised text="button"></Button>
        </button-row>
      </content-block>

      <content-title>Color Buttons</content-title>
      <content-block>
        <button-row>
          <Button fill raised text="default"></Button>
          <Button fill raised color="red" text="red"></Button>
          <Button fill raised color="blue" text="blue"></Button>
        </button-row>
        <button-row>
          <Button fill raised color="green" text="green"></Button>
          <Button fill raised color="amber" text="amber"></Button>
        </button-row>
      </content-block>

      <content-title>Big Buttons</content-title>
      <content-block>
        <button-row>
          <Button big text="button"></Button>
          <Button big text="button"></Button>
        </button-row>
        <button-row>
          <Button fill big raised color="red" text="button"></Button>
          <Button fill big raised color="red" text="button"></Button>
        </button-row>
      </content-block>
      <content-title>icon buttons</content-title>
      <content-block class="inline-content-block">
        <icon-button icon="pencil"></icon-button>
        <icon-button icon="share2" fill></icon-button>
        <icon-button icon="search" color="red" fill></icon-button>
        <icon-button icon="plus" color="green" fill></icon-button>
      </content-block>
  </scroll-view>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css" scoped>
.inline-content-block{
    display: flex;
    justify-content: flex-start;
}

.inline-content-block .ui-icon-button {
    margin-left: 10px;
}

</style>
