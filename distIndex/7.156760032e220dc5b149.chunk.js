webpackJsonp([7],{785:function(e,t,r){var o=r(38)(r(810),r(889),null,null);o.options.__file="G:\\html\\iview-admin-index\\iview-admin\\src\\views\\business\\enroll\\enroll.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] enroll.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},801:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},802:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);r.obj[r.prop]=o}}return t};t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var a=e;return Array.isArray(e)&&!Array.isArray(r)&&(a=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,a){o.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=t.merge(e[a],r,n):e.push(r):e[a]=r}),e):Object.keys(r).reduce(function(e,a){var i=r[a];return o.call(e,a)?e[a]=t.merge(e[a],i,n):e[a]=i,e},a)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var a=t.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(o):a<128?r+=n[a]:a<2048?r+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?r+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(o)),r+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return r},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],l=Object.keys(i),s=0;s<l.length;++s){var c=l[s],u=i[c];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:c}),r.push(u))}return a(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},803:function(e,t,r){"use strict";var o=r(805),n=r(804),a=r(801);e.exports={formats:a,parse:n,stringify:o}},804:function(e,t,r){"use strict";var o=r(802),n=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=o.split(t.delimiter,i),s=0;s<l.length;++s){var c,u,d=l[s],p=d.indexOf("]="),f=-1===p?d.indexOf("="):p+1;-1===f?(c=t.decoder(d,a.decoder),u=t.strictNullHandling?null:""):(c=t.decoder(d.slice(0,f),a.decoder),u=t.decoder(d.slice(f+1),a.decoder)),n.call(r,c)?r[c]=[].concat(r[c]).concat(u):r[c]=u}return r},l=function(e,t,r){for(var o=t,n=e.length-1;n>=0;--n){var a,i=e[n];if("[]"===i)a=[],a=a.concat(o);else{a=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(l,10);!isNaN(s)&&i!==l&&String(s)===l&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(a=[],a[s]=o):a[l]=o}o=a}return o},s=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=a.exec(o),c=s?o.slice(0,s.index):o,u=[];if(c){if(!r.plainObjects&&n.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var d=0;null!==(s=i.exec(o))&&d<r.depth;){if(d+=1,!r.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+o.slice(s.index)+"]"),l(u,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},c=Object.keys(n),u=0;u<c.length;++u){var d=c[u],p=s(d,n[d],r);l=o.merge(l,p,r)}return o.compact(l)}},805:function(e,t,r){"use strict";var o=r(802),n=r(801),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,n,a,i,s,c,u,d,p,f,b){var m=t;if("function"==typeof c)m=c(r,m);else if(m instanceof Date)m=p(m);else if(null===m){if(a)return s&&!b?s(r,l.encoder):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||o.isBuffer(m)){if(s){return[f(b?r:s(r,l.encoder))+"="+f(s(m,l.encoder))]}return[f(r)+"="+f(String(m))]}var v=[];if(void 0===m)return v;var y;if(Array.isArray(c))y=c;else{var g=Object.keys(m);y=u?g.sort(u):g}for(var h=0;h<y.length;++h){var w=y[h];i&&null===m[w]||(v=Array.isArray(m)?v.concat(e(m[w],n(r,w),n,a,i,s,c,u,d,p,f,b)):v.concat(e(m[w],r+(d?"."+w:"["+w+"]"),n,a,i,s,c,u,d,p,f,b)))}return v};e.exports=function(e,t){var r=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===i.delimiter?l.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,d="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,p="boolean"==typeof i.encode?i.encode:l.encode,f="function"==typeof i.encoder?i.encoder:l.encoder,b="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,v="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,y="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,h,w=n.formatters[i.format];"function"==typeof i.filter?(h=i.filter,r=h("",r)):Array.isArray(i.filter)&&(h=i.filter,g=h);var k=[];if("object"!=typeof r||null===r)return"";var j;j=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=a[j];g||(g=Object.keys(r)),b&&g.sort(b);for(var O=0;O<g.length;++O){var C=g[O];d&&null===r[C]||(k=k.concat(s(r[C],C,x,u,d,p?f:null,h,b,m,v,w,y)))}var N=k.join(c),S=!0===i.addQueryPrefix?"?":"";return N.length>0?S+N:""}},810:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(116),n=function(e){return e&&e.__esModule?e:{default:e}}(o),a=r(803);t.default={data:function(){return{state:"0",requestCode:"",dogNumber:"",dogNumber1:"",client:"",remark:"",oldSoft:"",newSoft:"",registerCode:"",newversionhidden:"",newnumber:"",oldversion:"",newversion:"",oldnumber:""}},methods:{getCode:function(){var e=this;if(!this.requestCode)return void this.$Message.error("请输入请求码");n.default.ajax.get("getDecode.asp?registerCode="+this.requestCode).then(function(t){var r=t.data;if("error"==r)e.$Message.error("请求码错误");else{e.dogNumber=r.dogCode.substr(0,5),e.dogNumber1=r.dogCode,e.newversionhidden=r.priceVersion;var o="";switch(r.priceVersion){case 0:o=0==e.state?"商业经典版":"汽车美容";break;case 1:o=0==e.state?"商业标准版":"汽车美容(多店面)";break;case 2:o=0==e.state?"商业增强版":"一站式(多店面)";break;case 3:o="商业全能版";break;case 4:o="工业经典版";break;case 5:o=0==e.state?"工业标准版":"汽修";break;case 6:o="工业增强版";break;case 7:o=0==e.state?"工业全能版":"一站式";break;case 8:o="汽修(多店面)";break;default:o=r.priceVersion}e.newversion=o,e.newnumber=r.number,e.newSoft=o+":"+r.number;var n="";switch(r.oldPriceVersion){case 0:n="空";break;case 6:n=0==e.state?"商业经典版":"汽车美容";break;case 2:n=0==e.state?"商业标准版":"汽车美容(多店面)";break;case 1:n=0==e.state?"商业增强版":"一站式(多店面)";break;case 5:n="商业全能版";break;case 9:n="工业经典版";break;case 8:n=0==e.state?"工业标准版":"汽修";break;case 7:n="工业增强版";break;case 4:n=0==e.state?"工业全能版":"一站式";break;case 3:n="汽修(多店面)";break;default:n=r.oldPriceVersion}e.oldversion=n,e.oldnumber=r.oldNumber,e.oldSoft=n+":"+r.oldNumber}})},getRegisterCode:function(){var e=this;if(this.oldSoft==this.newSoft)return void e.$Message.info("本次注册软件没有变化");if(this.client.length>25)return void e.$Message.info("客户太长");var t={oldversion:this.oldversion,newnumber:this.newnumber,oldnumber:this.oldnumber,dogCode:this.dogNumber1,newversion:this.newversion};n.default.ajax.post("getRegisterMoney.asp",a.stringify(t)).then(function(t){var r=t.data;if(3==r.state)e.$Message.info("注册版本不可低于老版本");else if(4==r.state)e.$Message.info("余额不足，请先联系济胜软件充值");else if(2==r.state)e.$Message.info("注册的老版本跟登记不符");else{var o="";o=0==r.taskmoney?"充值没有达到任务量,本次注册将按普通代理折扣,是否确认注册?":"是否确认注册?",e.$confirm(o,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={dogCode:e.dogNumber1,newversioncode:e.newversionhidden,newnumber:e.newnumber,client:e.client,remark:e.remark,oldversion:e.oldversion,newversion:e.newversion,oldnumber:e.oldnumber,registerCharge:r.money,discount:r.discount,state:e.state};n.default.ajax.post("getRegisterCode.asp",a.stringify(t)).then(function(t){e.registerCode=t.data})}).catch(function(){})}})}}}},889:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",[r("Form",[r("FormItem",{attrs:{label:"软件",prop:"software","label-width":160}},[r("Select",{staticStyle:{width:"300px"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[r("Option",{attrs:{value:"0"}},[e._v("商务")]),e._v(" "),r("Option",{attrs:{value:"1"}},[e._v("汽修")])],1)],1),e._v(" "),r("FormItem",{attrs:{label:"请求码",prop:"requestCode","label-width":160}},[r("Input",{staticStyle:{width:"450px"},model:{value:e.requestCode,callback:function(t){e.requestCode=t},expression:"requestCode"}}),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:function(t){t.preventDefault(),e.getCode(t)}}},[e._v("\n              获取\n          ")])],1),e._v(" "),r("FormItem",{attrs:{label:"加密狗号",prop:"dogNumber","label-width":160}},[r("Input",{staticStyle:{width:"300px"},attrs:{readonly:""},model:{value:e.dogNumber,callback:function(t){e.dogNumber=t},expression:"dogNumber"}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dogNumber1,expression:"dogNumber1"}],attrs:{type:"hidden"},domProps:{value:e.dogNumber1},on:{input:function(t){t.target.composing||(e.dogNumber1=t.target.value)}}})],1),e._v(" "),r("FormItem",{attrs:{label:"客户",prop:"client","label-width":160}},[r("Input",{staticStyle:{width:"300px"},model:{value:e.client,callback:function(t){e.client=t},expression:"client"}})],1),e._v(" "),r("FormItem",{attrs:{label:"备注",prop:"remark","label-width":160}},[r("Input",{staticStyle:{width:"300px"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1),e._v(" "),r("FormItem",{attrs:{label:"老软件",prop:"oldSoft","label-width":160}},[r("Input",{staticStyle:{width:"300px"},attrs:{readonly:""},model:{value:e.oldSoft,callback:function(t){e.oldSoft=t},expression:"oldSoft"}})],1),e._v(" "),r("FormItem",{attrs:{label:"新软件",prop:"newSoft","label-width":160}},[r("Input",{staticStyle:{width:"300px"},attrs:{readonly:""},model:{value:e.newSoft,callback:function(t){e.newSoft=t},expression:"newSoft"}})],1),e._v(" "),r("FormItem",{attrs:{label:"注册码",prop:"registerCode","label-width":160}},[r("Input",{staticStyle:{width:"450px"},attrs:{readonly:""},model:{value:e.registerCode,callback:function(t){e.registerCode=t},expression:"registerCode"}}),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:function(t){t.preventDefault(),e.getRegisterCode(t)}}},[e._v("\n              请求\n          ")]),e._v(" "),r("p",[e._v("(将此注册码复制到软件的注册界面)")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});