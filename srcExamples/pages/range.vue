<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Range</span>
    </header-bar>
    <scroll-view>
      <form-list>
        <item-form label="默认的">
          <range v-model="range1" @change="handleChange"></range>
          <div>{{range1}}</div>
        </item-form>
        <item-form label="设置默认值">
          <range v-model="range2" @change="handleChange"></range>
          <div>{{range2}}</div>
        </item-form>
        <item-form label="设置最小移动距离">
          <range v-model="range3" :step="5" @change="handleChange"></range>
          <div>{{range3}}</div>
        </item-form>
        <item-form label="设置最小值">
          <range v-model="range4" :min="50" :step="5" @change="handleChange"></range>
          <div>{{range4}}</div>
        </item-form>
        <item-form label="设置最最大值">
          <range v-model="range5" :max="200" :step="10" @change="handleChange"></range>
          <div>{{range5}}</div>
        </item-form>
      </form-list>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      range1: 0,
      range2: 30,
      range3: 10,
      range4: 50,
      range5: 200
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    handleChange (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="css">
</style>
