(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/design"],{6345:function(t,a,s){"use strict";s.r(a);var e=s("79bb"),i=s.n(e);for(var o in e)"default"!==o&&function(t){s.d(a,t,function(){return e[t]})}(o);a["default"]=i.a},"79bb":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{ColorList:this.ColorList,modalName:"",round:!1,size:"",color:"red",shadow:!1,border:!1,bordersize:""}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetRound:function(t){this.round=t.detail.value},SetSize:function(t){this.size=t.detail.value},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetShadow:function(t){this.shadow=t.detail.value},SetBorder:function(t){this.border=t.detail.value,t.detail.value||(this.bordersize=!1)},SetBorderSize:function(t){this.bordersize=t.detail.value}}};a.default=e},8552:function(t,a,s){"use strict";s("97e8");var e=o(s("b0ce")),i=o(s("9a6b"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},"8cf2":function(t,a,s){},"9a6b":function(t,a,s){"use strict";s.r(a);var e=s("a9d6"),i=s("6345");for(var o in i)"default"!==o&&function(t){s.d(a,t,function(){return i[t]})}(o);s("d4e4");var l=s("2877"),r=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=r.exports},a9d6:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"681448ca-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("按钮 / 设计")])],1),s("view",{staticClass:"padding-xl"},[s("view",{staticClass:"box bg-white text-center radius"},[s("button",{staticClass:"cu-btn",class:[t.border?t.bordersize?"lines-"+t.color:"line-"+t.color:"bg-"+t.color,t.round?"round":"",t.size,t.shadow?"shadow":""]},[t._v("我是一个按钮")])],1),s("view",{staticClass:"padding text-center"},[t._v('class="cu-btn'),t.color?s("text",[t._v(t._s(" ")+" "+t._s(t.border?t.bordersize?"lines-"+t.color:"line-"+t.color:"bg-"+t.color)+" "+t._s(t.round?"round":"")+" "+t._s(t.size)+" "+t._s(t.shadow?"shadow":""))]):t._e(),t._v('"')])]),s("view",{staticClass:"cu-form-group margin-top",attrs:{"data-target":"ColorModal",eventid:"681448ca-0"},on:{tap:t.showModal}},[s("view",{staticClass:"title"},[t._v("选择颜色")]),s("view",{staticClass:"padding solid radius shadow-blur",class:"bg-"+t.color})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否圆角")]),s("switch",{staticClass:"blue",class:t.round?"checked":"",attrs:{eventid:"681448ca-1"},on:{change:t.SetRound}})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("选择尺寸")]),s("radio-group",{attrs:{eventid:"681448ca-2",mpcomid:"681448ca-1"},on:{change:t.SetSize}},[s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"sm"}}),s("text",{staticClass:"margin-left-sm"},[t._v("小")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),s("text",{staticClass:"margin-left-sm"},[t._v("中")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"lg"}}),s("text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否添加阴影")]),s("switch",{class:t.shadow?"checked":"",attrs:{eventid:"681448ca-3"},on:{change:t.SetShadow}})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否镂空")]),s("switch",{class:t.border?"checked":"",attrs:{eventid:"681448ca-4"},on:{change:t.SetBorder}})]),t.border?s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("边框大小")]),s("radio-group",{attrs:{eventid:"681448ca-5",mpcomid:"681448ca-2"},on:{change:t.SetBorderSize}},[s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),s("text",{staticClass:"margin-left-sm"},[t._v("小")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"s"}}),s("text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1):t._e(),s("view",{staticClass:"cu-modal",class:"ColorModal"==t.modalName?"show":""},[s("view",{staticClass:"cu-dialog"},[s("view",{staticClass:"cu-bar justify-end solid-bottom"},[s("view",{staticClass:"content"},[t._v("选择颜色")]),s("view",{staticClass:"action",attrs:{eventid:"681448ca-6"},on:{tap:t.hideModal}},[s("text",{staticClass:"cuIcon-close text-red"})])]),s("view",{staticClass:"grid col-5 padding"},t._l(t.ColorList,function(a,e){return"white"!=a.name?s("view",{key:e,staticClass:"padding-xs",attrs:{"data-color":a.name,eventid:"681448ca-7-"+e},on:{tap:t.SetColor}},[s("view",{staticClass:"padding-tb radius",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()}))])])],1)},i=[];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})},d4e4:function(t,a,s){"use strict";var e=s("8cf2"),i=s.n(e);i.a}},[["8552","common/runtime","common/vendor"]]]);