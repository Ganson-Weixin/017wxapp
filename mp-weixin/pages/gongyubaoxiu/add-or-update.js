(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gongyubaoxiu/add-or-update"],{"463f":function(e,n,t){},"6d2e":function(e,n,t){"use strict";t.r(n);var i=t("91ce"),r=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=r.a},"91ce":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,r,u,a){try{var o=e[u](a),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function o(e){u(a,i,r,o,s,"next",e)}function s(e){u(a,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("7b00"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{baoxiubiaoti:"",baoxiuneirong:"",tupian:"",baoxiushijian:"",xueshengzhanghao:"",xueshengxingming:"",sfsh:"",shhf:"",userid:""},user:{},ro:{baoxiubiaoti:!1,baoxiuneirong:!1,tupian:!1,baoxiushijian:!1,xueshengzhanghao:!1,xueshengxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=a(i.default.mark((function n(t){var r,u,a,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(u=n.sent,this.user=u.data,this.ruleForm.xueshengzhanghao=this.user.xueshengzhanghao,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=15;break}return this.ruleForm.id=t.id,n.next=13,this.$api.info("gongyubaoxiu",this.ruleForm.id);case 13:u=n.sent,this.ruleForm=u.data;case 15:if(!t.cross){n.next=50;break}a=e.getStorageSync("crossObj"),n.t0=i.default.keys(a);case 18:if((n.t1=n.t0()).done){n.next=50;break}if(o=n.t1.value,"baoxiubiaoti"!=o){n.next=24;break}return this.ruleForm.baoxiubiaoti=a[o],this.ro.baoxiubiaoti=!0,n.abrupt("continue",18);case 24:if("baoxiuneirong"!=o){n.next=28;break}return this.ruleForm.baoxiuneirong=a[o],this.ro.baoxiuneirong=!0,n.abrupt("continue",18);case 28:if("tupian"!=o){n.next=32;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,n.abrupt("continue",18);case 32:if("baoxiushijian"!=o){n.next=36;break}return this.ruleForm.baoxiushijian=a[o],this.ro.baoxiushijian=!0,n.abrupt("continue",18);case 36:if("xueshengzhanghao"!=o){n.next=40;break}return this.ruleForm.xueshengzhanghao=a[o],this.ro.xueshengzhanghao=!0,n.abrupt("continue",18);case 40:if("xueshengxingming"!=o){n.next=44;break}return this.ruleForm.xueshengxingming=a[o],this.ro.xueshengxingming=!0,n.abrupt("continue",18);case 44:if("userid"!=o){n.next=48;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,n.abrupt("continue",18);case 48:n.next=18;break;case 50:this.styleChange();case 51:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},baoxiushijianChange:function(e){this.ruleForm.baoxiushijian=e.target.value,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("gongyubaoxiu",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("gongyubaoxiu",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"9dcd":function(e,n,t){"use strict";var i=t("463f"),r=t.n(i);r.a},"9e91":function(e,n,t){"use strict";t.r(n);var i=t("d8c9"),r=t("6d2e");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("9dcd");var a,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"778a9dca",null,!1,i["a"],a);n["default"]=s.exports},c59e:function(e,n,t){"use strict";(function(e){t("7916"),t("921b");i(t("66fd"));var n=i(t("9e91"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},d8c9:function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}))}},[["c59e","common/runtime","common/vendor"]]]);