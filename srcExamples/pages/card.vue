<template>
  <div class="ui-page">
    <header-bar>
      <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
      <span>Card</span>
    </header-bar>
    <scroll-view>
      <content-title>Card</content-title>
      <card>
        <card-content>
          Vue.js 是用于构建交互式的 Web  界面的库。它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API。
        </card-content>
      </card>

      <card>
        <card-header>
          <card-title>Vue.js</card-title>
        </card-header>
        <card-content>
          Vue.js 是用于构建交互式的 Web  界面的库。它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API。
        </card-content>
        <card-footer>
          card footer
        </card-footer>
      </card>
      <content-title>不同风格的card</content-title>
      <card>
        <card-image src="http://vuejs.org/images/logo.png">
          <card-title style="color:#7e848c;">vue.js</card-title>
        </card-image>
        <card-content>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </card-content>
      </card>
      <card>
        <card-header>
          <card-title>Vue.js</card-title>
          <card-tools>
            <icon-button icon="camera"></icon-button>
          </card-tools>
        </card-header>
        <card-image src="http://vuejs.org/images/logo.png">
        </card-image>
        <card-content>
          Vue.js 是用于构建交互式的 Web  界面的库。它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API。
        </card-content>
        <card-footer>
          <icon-button icon="heart"></icon-button>
          <icon-button icon="share2"></icon-button>
        </card-footer>
      </card>
      <card>
        <card-header>
          <card-title>列表组合</card-title>
        </card-header>
        <card-content>
          <list>
            <item>
              <item-media>
                <img src="../assets/kongzi-avatar.jpg"/>
              </item-media>
              <item-content>
                <item-title-row>
                  <item-title>《论语》</item-title>
                  <item-title-after>2017-08-01</item-title-after>
                </item-title-row>
                <item-sub-title>
                  《学而》
                </item-sub-title>
                <item-text>
                  子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”
                </item-text>
              </item-content>
            </item>
            <item>
              <item-media>
                <img src="../assets/kongzi-avatar.jpg"/>
              </item-media>
              <item-content>
                <item-title-row>
                  <item-title>《论语》</item-title>
                  <item-title-after>2017-08-01</item-title-after>
                </item-title-row>
                <item-sub-title>
                  《述而》
                </item-sub-title>
                <item-text>
                  子曰：“三人行，必有我师焉。择其善者而从之，其不善者而改之。”
                </item-text>
              </item-content>
            </item>
            <item>
              <item-media>
                <img src="../assets/kongzi-avatar.jpg"/>
              </item-media>
              <item-content>
                <item-title-row>
                  <item-title>《论语》</item-title>
                  <item-title-after>2017-08-01</item-title-after>
                </item-title-row>
                <item-sub-title>
                  《为政》
                </item-sub-title>
                <item-text>
                  子曰：“学而不思则罔,思而不学则殆。”
                </item-text>
              </item-content>
            </item>
          </list>
        </card-content>
        <card-footer>
          <icon-button icon="heart"></icon-button>
          <icon-button icon="share2"></icon-button>
        </card-footer>
      </card>
    </scroll-view>
  </div>
</template>

<script>
export default{
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
