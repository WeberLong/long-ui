webpackJsonp([30],{"9uch":function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e={data:function(){return{bottomPopup:!1,topPopup:!1,leftPopup:!1,rightPopup:!1}},methods:{back:function(){window.history.back()},open:function(t){this[t+"Popup"]=!0},close:function(t){this[t+"Popup"]=!1}},watch:{topPopup:function(t){var o=this;t&&setTimeout(function(){o.topPopup=!1},2e3)}}},i={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"ui-page"},[n("header-bar",[n("icon-button",{attrs:{slot:"left",size:36,icon:"navigate_before"},nativeOn:{click:function(o){return t.back(o)}},slot:"left"}),t._v(" "),n("span",[t._v("Popup")])],1),t._v(" "),n("scroll-view",{staticClass:"center-block"},[n("button-area",[n("Button",{attrs:{text:"上面弹出",raised:""},nativeOn:{click:function(o){t.open("top")}}}),t._v(" "),n("Button",{attrs:{text:"下面弹出",raised:""},nativeOn:{click:function(o){t.open("bottom")}}}),t._v(" "),n("Button",{attrs:{text:"左边弹出",raised:""},nativeOn:{click:function(o){t.open("left")}}}),t._v(" "),n("Button",{attrs:{text:"右边弹出",raised:""},nativeOn:{click:function(o){t.open("right")}}})],1)],1),t._v(" "),n("popup",{staticClass:"demo-popup-bottom",attrs:{position:"bottom",open:t.bottomPopup},on:{close:function(o){t.close("bottom")}}},[n("div",{staticClass:"demo-popup-bar"},[n("span",[t._v("弹出")]),t._v(" "),n("a",{staticClass:"demo-link",attrs:{href:"javascript:;"},nativeOn:{click:function(o){t.close("bottom")}}},[t._v("关闭")])]),t._v(" "),n("content-block",[t._v("\n      Popup 弹出框组件，可以从上下左右四个方位弹出，也可以直接渐变透明度显示，弹出框的宽度高度需要自己设置\n    ")])],1),t._v(" "),n("popup",{staticClass:"demo-popup-top",attrs:{position:"top",overlay:!1,open:t.topPopup}},[t._v("\n    更新成功\n  ")]),t._v(" "),n("popup",{staticClass:"demo-popup-left",attrs:{position:"left",open:t.leftPopup},on:{close:function(o){t.close("left")}}},[n("button-area",[n("Button",{attrs:{text:"关闭弹框",fill:"",color:"blue",raised:""},nativeOn:{click:function(o){t.close("left")}}})],1)],1),t._v(" "),n("popup",{staticClass:"demo-popup-right",attrs:{position:"right",open:t.rightPopup},on:{close:function(o){t.close("right")}}},[n("button-area",[n("Button",{attrs:{text:"关闭弹框",fill:"",color:"blue",raised:""},nativeOn:{click:function(o){t.close("right")}}})],1)],1)],1)},staticRenderFns:[]};var p=n("VU/8")(e,i,!1,function(t){n("VXXF")},"data-v-03761e56",null);o.default=p.exports},VXXF:function(t,o){}});
//# sourceMappingURL=30.e962bca55f51e08fdeab.js.map