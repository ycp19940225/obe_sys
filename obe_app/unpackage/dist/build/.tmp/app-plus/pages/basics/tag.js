(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/tag"],{"0e94":function(t,a,s){"use strict";s.r(a);var e=s("db72"),i=s("cbe6");for(var c in i)"default"!==c&&function(t){s.d(a,t,function(){return i[t]})}(c);var l=s("2877"),n=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=n.exports},b62d:function(t,a,s){"use strict";s("97e8");var e=c(s("b0ce")),i=c(s("0e94"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},b874:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{ColorList:this.ColorList}}};a.default=e},cbe6:function(t,a,s){"use strict";s.r(a);var e=s("b874"),i=s.n(e);for(var c in e)"default"!==c&&function(t){s.d(a,t,function(){return e[t]})}(c);a["default"]=i.a},db72:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"353f740e-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("标签")])],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("view",{staticClass:"padding-sm flex flex-wrap"},[t._l(t.ColorList,function(a,e){return"gray"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()}),t._l(t.ColorList,function(a,e){return"gray"!=a.name&&"black"!=a.name&&"white"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag light",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()})],2),t._m(5),s("view",{staticClass:"padding-sm flex flex-wrap"},t._l(t.ColorList,function(a,e){return"white"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag",class:"line-"+a.name},[t._v(t._s(a.title))])]):t._e()})),t._m(6),t._m(7),t._m(8),t._m(9)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white solid-bottom"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签形状")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding bg-white solid-bottom"},[s("view",{staticClass:"cu-tag"},[t._v("默认")]),s("view",{staticClass:"cu-tag round"},[t._v("椭圆")]),s("view",{staticClass:"cu-tag radius"},[t._v("圆角")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签尺寸")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding bg-white"},[s("view",{staticClass:"cu-tag radius sm"},[t._v("小尺寸")]),s("view",{staticClass:"cu-tag radius"},[t._v("普通尺寸")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签颜色")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("镂空标签")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("胶囊样式")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding"},[s("view",{staticClass:"cu-capsule"},[s("view",{staticClass:"cu-tag bg-red"},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-red"},[t._v("12")])]),s("view",{staticClass:"cu-capsule round"},[s("view",{staticClass:"cu-tag bg-blue "},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-blue"},[t._v("23")])]),s("view",{staticClass:"cu-capsule round"},[s("view",{staticClass:"cu-tag bg-blue "},[t._v("说明")]),s("view",{staticClass:"cu-tag line-blue"},[t._v("123")])]),s("view",{staticClass:"cu-capsule radius"},[s("view",{staticClass:"cu-tag bg-grey "},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-grey"},[t._v("23")])]),s("view",{staticClass:"cu-capsule radius"},[s("view",{staticClass:"cu-tag bg-brown sm"},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-brown sm"},[t._v("23")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("数字标签")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding flex justify-between align-center"},[s("view",{staticClass:"cu-avatar xl radius"},[t._v("港"),s("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),s("view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}},[s("view",{staticClass:"cu-tag badge"},[t._v("9")])]),s("view",{staticClass:"cu-avatar xl radius"},[s("view",{staticClass:"cu-tag badge"},[t._v("99")]),s("text",{staticClass:"cuIcon-people"})]),s("view",{staticClass:"cu-avatar xl radius"},[s("view",{staticClass:"cu-tag badge"},[t._v("99+")])])])}];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})}},[["b62d","common/runtime","common/vendor"]]]);