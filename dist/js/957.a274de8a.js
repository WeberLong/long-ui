"use strict";(self["webpackChunkui"]=self["webpackChunkui"]||[]).push([[957],{3957:function(e,t,l){l.r(t),l.d(t,{default:function(){return r}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ui-page"},[t("header-bar",[t("icon-button",{attrs:{slot:"left",size:36,icon:"navigate_before"},nativeOn:{click:function(t){return e.back.apply(null,arguments)}},slot:"left"}),t("span",[e._v("Select Field")])],1),t("scroll-view",[t("content-title",[e._v(" 选择框 ")]),t("form-list",[t("select-field",{attrs:{label:"单选框",options:e.games,placeholder:"选择一个你喜欢的"},on:{"focus-change":e.handleFocusChange}}),t("select-field",{attrs:{label:"多选框",multi:"",options:e.games,placeholder:"选择一个你喜欢的"}})],1),t("content-title",[e._v(" 带 icon 的选择框 ")]),t("form-list",[t("select-field",{attrs:{icon:"heart",label:"单选框",options:e.games,placeholder:"选择一个你喜欢的"}}),t("select-field",{attrs:{icon:"star-full",label:"多选框",multi:"",options:e.games,placeholder:"选择一个你喜欢的"}})],1)],1)],1)},n=[],s={data(){return{games:[{value:"01",text:"守望先锋"},{value:"03",text:"英雄联盟"},{value:"04",text:"炉石传说"},{value:"05",text:"风暴英雄"}]}},methods:{back(){window.history.back()},handleFocusChange(e){console.log(e)}}},o=s,i=l(1001),c=(0,i.Z)(o,a,n,!1,null,null,null),r=c.exports}}]);