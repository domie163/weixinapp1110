(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpintuihuo/add-or-update"],{"07fd":function(n,e,t){"use strict";(function(n){t("f7c5");r(t("66fd"));var e=r(t("94db"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"0c62":function(n,e,t){},"4fdf":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,r,i,u,a){try{var o=n[u](a),c=o.value}catch(s){return void t(s)}o.done?e(c):Promise.resolve(c).then(r,i)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){u(a,r,i,o,c,"next",n)}function c(n){u(a,r,i,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("9e28"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{dingdanbianhao:"",shangpinmingcheng:"",tupian:"",jine:"",tuihuoyuanyin:"",shenqingriqi:"",nonghuzhanghao:"",nonghuxingming:"",yonghuming:"",yonghuxingming:"",sfsh:"",shhf:"",userid:""},user:{},ro:{dingdanbianhao:!1,shangpinmingcheng:!1,tupian:!1,jine:!1,tuihuoyuanyin:!1,shenqingriqi:!1,nonghuzhanghao:!1,nonghuxingming:!1,yonghuming:!1,yonghuxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var t=this;return a(r.default.mark((function i(){var u,a,o,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return u=n.getStorageSync("nowTable"),i.next=3,t.$api.session(u);case 3:if(a=i.sent,t.user=a.data,t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=13;break}return t.ruleForm.id=e.id,i.next=11,t.$api.info("shangpintuihuo",t.ruleForm.id);case 11:a=i.sent,t.ruleForm=a.data;case 13:if(!e.cross){i.next=64;break}o=n.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 16:if((i.t1=i.t0()).done){i.next=64;break}if(c=i.t1.value,"dingdanbianhao"!=c){i.next=22;break}return t.ruleForm.dingdanbianhao=o[c],t.ro.dingdanbianhao=!0,i.abrupt("continue",16);case 22:if("shangpinmingcheng"!=c){i.next=26;break}return t.ruleForm.shangpinmingcheng=o[c],t.ro.shangpinmingcheng=!0,i.abrupt("continue",16);case 26:if("tupian"!=c){i.next=30;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,i.abrupt("continue",16);case 30:if("jine"!=c){i.next=34;break}return t.ruleForm.jine=o[c],t.ro.jine=!0,i.abrupt("continue",16);case 34:if("tuihuoyuanyin"!=c){i.next=38;break}return t.ruleForm.tuihuoyuanyin=o[c],t.ro.tuihuoyuanyin=!0,i.abrupt("continue",16);case 38:if("shenqingriqi"!=c){i.next=42;break}return t.ruleForm.shenqingriqi=o[c],t.ro.shenqingriqi=!0,i.abrupt("continue",16);case 42:if("nonghuzhanghao"!=c){i.next=46;break}return t.ruleForm.nonghuzhanghao=o[c],t.ro.nonghuzhanghao=!0,i.abrupt("continue",16);case 46:if("nonghuxingming"!=c){i.next=50;break}return t.ruleForm.nonghuxingming=o[c],t.ro.nonghuxingming=!0,i.abrupt("continue",16);case 50:if("yonghuming"!=c){i.next=54;break}return t.ruleForm.yonghuming=o[c],t.ro.yonghuming=!0,i.abrupt("continue",16);case 54:if("yonghuxingming"!=c){i.next=58;break}return t.ruleForm.yonghuxingming=o[c],t.ro.yonghuxingming=!0,i.abrupt("continue",16);case 58:if("userid"!=c){i.next=62;break}return t.ruleForm.userid=o[c],t.ro.userid=!0,i.abrupt("continue",16);case 62:i.next=16;break;case 64:t.styleChange();case 65:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shenqingriqiChange:function(n){this.ruleForm.shenqingriqi=n.target.value,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.userid){e.next=3;break}return n.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(!n.ruleForm.id){e.next=8;break}return e.next=6,n.$api.update("shangpintuihuo",n.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,n.$api.add("shangpintuihuo",n.ruleForm);case 10:n.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])},9330:function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return r}));var i=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"94db":function(n,e,t){"use strict";t.r(e);var r=t("9330"),i=t("f991");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("e2e1");var a,o=t("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"323fb8f4",null,!1,r["a"],a);e["default"]=c.exports},e2e1:function(n,e,t){"use strict";var r=t("0c62"),i=t.n(r);i.a},f991:function(n,e,t){"use strict";t.r(e);var r=t("4fdf"),i=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=i.a}},[["07fd","common/runtime","common/vendor"]]]);