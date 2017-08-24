<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Checkbox And Radio</span>
  </header-bar>
  <scroll-view>
    <content-title>
      checkbox
    </content-title>
    <content-block>
      <checkbox v-for="(item, index) in checkboxData1" :key="index" name="checkbox1" v-model="checkbox1" :nativeValue="item" :label="item" @change="handleChange"></checkbox>
    </content-block>
    <list>
      <item-cell>
        <item-title>选中的项</item-title>
        <item-title-after>{{checkbox1}}</item-title-after>
      </item-cell>
    </list>
    <content-title>
      radio
    </content-title>
    <content-block>
      <radio v-for="(item, index) in radioData1" :key="index" name="radio1" v-model="radio1" :nativeValue="item" :label="item" @change="handleChange"></radio>
    </content-block>
    <list>
      <item-cell>
        <item-title>选中的项</item-title>
        <item-title-after>{{radio1}}</item-title-after>
      </item-cell>
    </list>
    <content-title>
      搭配 list 使用
    </content-title>
    <list>
      <item-cell @click.native="addCheck(item)" ripple v-for="(item, index) in checkboxData2" :key="index" @change="handleChange">
        <item-media>
          <checkbox name="checkbox2" v-model="checkbox2" :nativeValue="item" @change="handleChange"></checkbox>
        </item-media>
        <item-title>
          {{item}}
        </item-title>
      </item-cell>
      <item-cell>
        <item-title>选中的项</item-title>
        <item-title-after>{{checkbox2}}</item-title-after>
      </item-cell>
    </list>
    <content-title>
      搭配 form list 使用
    </content-title>
    <form-list>
      <item-form label="选择一个" icon="question">
        <div>
          <radio v-for="(item, index) in radioData2" :key="index" name="radio2" v-model="radio2" :nativeValue="item" :label="item" @change="handleChange"></radio>
        </div>
      </item-form>
    </form-list>
  </scroll-view>
</div>
</template>

<script>
export default {
  data () {
    return {
      checkboxData1: ['选项1', '选项2', '选项3'],
      checkbox1: [],
      radioData1: ['选项1', '选项2', '选项3'],
      radio1: '',
      checkboxData2: ['选项1', '选项2', '选项3'],
      checkbox2: [],
      radioData2: ['选项1', '选项2', '选项3'],
      radio2: ''
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    handleChange (event) {
      console.log(event)
    },
    addCheck (text) {
      let index = this.checkbox2.indexOf(text)
      if (index === -1) {
        this.checkbox2.push(text)
      } else {
        this.checkbox2.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="css">
.inline{
  display: flex;
}
</style>
