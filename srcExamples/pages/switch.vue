<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Switch</span>
    </header-bar>
    <scroll-view>
      <content-title>
        默认
      </content-title>
      <content-block>
        <ui-switch :label="data1 ? 'true' : 'false'" :value.sync="data1" @change="handleChange"></ui-switch>
        <ui-switch :label="data2 ? 'true' : 'false'" :value.sync="data2" @change="handleChange"></ui-switch>
      </content-block>
      <content-title>
        label 在左边的
      </content-title>
      <content-block>
        <ui-switch label-left label="左边的label 1" :value="true" @change="handleChange"></ui-switch>
        <ui-switch label-left label="左边的label 2" :value="false" @change="handleChange"></ui-switch>
      </content-block>

      <content-title>
        搭配 list 使用
      </content-title>
      <list>
        <item-cell>
            <item-title>
              选项1    {{data3 ? 'true': 'false'}}
            </item-title>
            <item-title-after>
              <ui-switch :value.sync="data3" @change="handleChange"></ui-switch>
            </item-title-after>
        </item-cell>
        <item-cell>
            <item-title>
              选项2    {{data4 ? 'true': 'false'}}
            </item-title>
            <item-title-after>
              <ui-switch :value.sync="data4" @change="handleChange"></ui-switch>
            </item-title-after>
        </item-cell>
      </list>

      <content-title>
        搭配其它表单
      </content-title>
      <form-list>
        <text-field label="用户名" placeholder="请输入你的姓名" icon="user"></text-field>
        <item-form icon="question" label="是否是学生">
          <ui-switch :value="true" @change="handleChange"></ui-switch>
        </item-form>
      </form-list>
    </scroll-view>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    },
    handleChange (event) {
      console.log(event)
    }
  },
  data () {
    return {
      data1: false,
      data2: true,
      data3: false,
      data4: true
    }
  }
}
</script>

<style lang="css">
</style>
