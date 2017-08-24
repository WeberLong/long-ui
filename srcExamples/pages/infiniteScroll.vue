<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Infinite Scroll</span>
    </header-bar>
    <scroll-view ref="scroller">
      <content-block>
        <p class="refresh-desc">
           向下滑动可以加载更多的数据
        </p>
      </content-block>
      <list>
        <item-cell v-for="(item, index) in items" :key="index">
          <item-title>
            {{item}}
          </item-title>
        </item-cell>
      </list>
      <p v-if="nomore" style="text-align:center;"> -- 我是有底线的~ -- </p>      
      <infinite-scroll v-else style="margin-bottom:16px;" trigger="scroller" @load-more="loadMore" :loading="loading"></infinite-scroll>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['1', '2', '3', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
      end: 20,
      nomore: false,
      loading: false
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        if (this.end < 60) {
          for (let i = this.end; i < this.end + 20; i++) {
            this.items.push(String(i + 1))
          }
        } else {
          this.nomore = true
        }
        this.end += 20
      }, 1000)
    }
  }
}
</script>

<style lang="css">
</style>
