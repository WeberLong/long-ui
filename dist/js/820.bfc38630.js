"use strict";(self["webpackChunkui"]=self["webpackChunkui"]||[]).push([[820],{7820:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ui-page"},[e("header-bar",[e("icon-button",{attrs:{slot:"left",size:36,icon:"navigate_before"},nativeOn:{click:function(e){return t.back.apply(null,arguments)}},slot:"left"}),e("span",[t._v("overlay")])],1),e("scroll-view",[e("button-area",[e("Button",{attrs:{text:"显示 overlay",raised:""},nativeOn:{click:function(e){return t.toggleOverlay()}}}),e("Button",{attrs:{text:"显示白色的 overlay",raised:""},nativeOn:{click:function(e){return t.toggleWhiteOverlay()}}})],1),t.showWhite?e("overlay",{attrs:{opacity:.8,color:"#FFF"},nativeOn:{click:function(e){return t.toggleWhiteOverlay()}}}):t._e()],1),t.show?e("overlay",{nativeOn:{click:function(e){return t.toggleOverlay()}}}):t._e()],1)},r=[],a={data(){return{show:!1,showWhite:!1}},methods:{back(){window.history.back()},toggleOverlay(){this.show=!this.show},toggleWhiteOverlay(){this.showWhite=!this.showWhite}}},o=a,l=n(1001),s=(0,l.Z)(o,i,r,!1,null,null,null),u=s.exports}}]);