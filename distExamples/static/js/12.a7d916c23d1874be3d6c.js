webpackJsonp([12],{507:function(e,n,t){function i(e){t(601)}var a=t(1)(t(542),t(635),i,null,null);e.exports=a.exports},542:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{number:"66666666",timer:null}},activated:function(){this._interval()},methods:{_random:function(e){return Math.round(+e+100*Math.random())},_interval:function(){var e=this;this.timer=setInterval(function(){e.number=""+e._random(e.number)},3500)},back:function(){window.history.back()}},deactivated:function(){console.log("deactivated"),window.clearInterval(this.timer),this.timer=null}}},569:function(e,n,t){n=e.exports=t(484)(!0),n.push([e.i,".demo-number-animate{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-weight:700;color:#ffb510}","",{version:3,sources:["/www/myWorkFolder/long-ui/srcExamples/pages/numberAnimate.vue"],names:[],mappings:"AACA,qBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,gBAAkB,AAClB,aAAe,CAChB",file:"numberAnimate.vue",sourcesContent:["\n.demo-number-animate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-weight: bold;\n  color: #FFB510;\n}\n"],sourceRoot:""}])},601:function(e,n,t){var i=t(569);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(485)("6780f998",i,!0)},635:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"ui-page"},[t("header-bar",[t("icon-button",{attrs:{size:36,icon:"navigate_before"},nativeOn:{click:function(n){e.back(n)}},slot:"left"}),e._v(" "),t("span",[e._v("numberAnimate")])],1),e._v(" "),t("scroll-view",[t("div",{staticClass:"ui-content-block"},[t("div",{staticClass:"demo-number-animate"},[t("number-animate",{attrs:{num:e.number,speed:2e3,separator:","}})],1)])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.a7d916c23d1874be3d6c.js.map