<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Date Select</span>
    </header-bar>
    <scroll-view>
      <content-title>
        日期 / 时间选择
      </content-title>
      <form-list>
        <date-select label="日期选择"  placeholder="选择日期"></date-select>
        <date-select label="修改格式" format="YYYY年MM月DD日"  placeholder="选择日期"></date-select>
        <date-select label="选择时间" type="min" format="YYYY年MM月DD日 HH时mm分" placeholder="选择时间"></date-select>
      </form-list>
      <content-title>
        限制时间
      </content-title>
      <form-list>
        <date-select label="只能选择工作日" :limit="[{type: 'weekday',available: ['1', '2', '3', '4', '5']}]" placeholder="选择日期"></date-select>
        <date-select label="仅选择17年7月" :limit="[{type:'fromto',from:'2017-07-01',to:'2017-07-31'}]"  placeholder="选择日期"></date-select>
      </form-list>
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

<style lang="css">
</style>
