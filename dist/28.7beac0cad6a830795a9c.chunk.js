webpackJsonp([28],{789:function(e,t,a){var l=a(38)(null,a(912),null,null);l.options.__file="D:\\iview-admin\\src\\views\\business\\renewal\\renewal.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] renewal.vue: functional components are not supported with templates, they should use render functions."),e.exports=l.exports},912:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Card",[a("Form",[a("FormItem",{attrs:{label:"服务请求码",prop:"requestCode","label-width":160}},[a("Input",{staticStyle:{width:"450px"},model:{value:e.requestCode,callback:function(t){e.requestCode=t},expression:"requestCode"}}),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(t){t.preventDefault(),e.getCode(t)}}},[e._v("\n              请求\n          ")])],1),e._v(" "),a("FormItem",{attrs:{label:"上次日期",prop:"lastDay","label-width":160}},[a("Input",{staticStyle:{width:"300px"},attrs:{readonly:""},model:{value:e.lastDay,callback:function(t){e.lastDay=t},expression:"lastDay"}})],1),e._v(" "),a("FormItem",{attrs:{label:"本次日期",prop:"today","label-width":160}},[a("Input",{staticStyle:{width:"300px"},attrs:{readonly:""},model:{value:e.today,callback:function(t){e.today=t},expression:"today"}})],1),e._v(" "),a("FormItem",{attrs:{label:"服务到期后处理",prop:"manage","label-width":160}},[a("Select",{staticStyle:{width:"300px"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[a("Option",{attrs:{value:"0"}},[e._v("提醒")]),e._v(" "),a("Option",{attrs:{value:"1"}},[e._v("停止使用")])],1)],1),e._v(" "),a("FormItem",{attrs:{label:"控制连接电脑",prop:"software","label-width":160}},[a("Select",{staticStyle:{width:"300px"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[a("Option",{attrs:{value:"0"}},[e._v("商务")]),e._v(" "),a("Option",{attrs:{value:"1"}},[e._v("汽修")])],1)],1),e._v(" "),a("FormItem",{attrs:{label:"客户名称",prop:"client","label-width":160}},[a("Input",{staticStyle:{width:"300px"},model:{value:e.client,callback:function(t){e.client=t},expression:"client"}})],1),e._v(" "),a("FormItem",{attrs:{label:"服务码",prop:"registerCode","label-width":160}},[a("Input",{staticStyle:{width:"450px"},attrs:{readonly:""},model:{value:e.registerCode,callback:function(t){e.registerCode=t},expression:"registerCode"}}),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(t){t.preventDefault(),e.getRegisterCode(t)}}},[e._v("\n              生成\n          ")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});