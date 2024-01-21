"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[6375],{76375:function(e,o,t){t.r(o),t.d(o,{default:function(){return h}});var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"page-login"},[t("van-form",{on:{submit:e.onSubmit}},[e.smsModeSignIn&&!e.unbind?t("van-field",{attrs:{autocomplete:"new-password","left-icon":"phone",maxlength:"11",placeholder:"手机号",type:"tel"},model:{value:e.form.phoneNumber,callback:function(o){e.$set(e.form,"phoneNumber",o)},expression:"form.phoneNumber"}}):t("van-field",{attrs:{autocomplete:"new-password","left-icon":"manager",maxlength:"20",placeholder:"用户名",type:"text"},model:{value:e.form.userName,callback:function(o){e.$set(e.form,"userName",o)},expression:"form.userName"}}),e.passwordModeSignIn||e.unbind?t("van-field",{attrs:{"right-icon":e.showPassword?"eye-o":"closed-eye",type:e.showPassword?"text":e.$root.dynamicPasswordInputType,autocomplete:"new-password","left-icon":"lock",placeholder:"密码"},on:{"click-right-icon":function(o){e.showPassword=!e.showPassword}},model:{value:e.form.password,callback:function(o){e.$set(e.form,"password",o)},expression:"form.password"}}):e._e(),e.graphicVerify?t("van-field",{attrs:{autocomplete:"new-password","left-icon":"youzan-shield",placeholder:"验证码"},scopedSlots:e._u([{key:"extra",fn:function(){return[t("van-image",{staticClass:"verifyCode",attrs:{src:e.verifyImageBase64},on:{click:e.refreshImageVerifyCode}})]},proxy:!0}],null,!1,2715648759),model:{value:e.form.imgCode,callback:function(o){e.$set(e.form,"imgCode",o)},expression:"form.imgCode"}}):e._e(),e.smsModeSignIn&&!e.unbind?t("van-field",{attrs:{autocomplete:"new-password","left-icon":"youzan-shield",placeholder:"短信验证码"},scopedSlots:e._u([{key:"extra",fn:function(){return[t("van-button",{staticClass:"btnGetVerifyCode primary",attrs:{"native-type":"button",size:"small"},on:{click:e.getSmsVerifyCode}},[e.smsCountdown?t("van-count-down",{attrs:{time:e.smsCountdown,"auto-start":"",format:"ss"},on:{finish:function(o){e.smsCountdown=0}}}):[e._v(" 获取验证码")]],2)]},proxy:!0}],null,!1,2740329012),model:{value:e.form.smsCode,callback:function(o){e.$set(e.form,"smsCode",o)},expression:"form.smsCode"}}):e._e(),e.slideVerify?t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("div",{ref:"dx"})]):e._e(),e.unbind?[t("van-button",{staticClass:"primary block unbind"},[e._v(" 确认登陆")])]:[t("div",{staticClass:"ver"},[t("span",{staticStyle:{"text-align":"left"}},[e._v(" 版本号：V "+e._s(e.$root.version)+" ")]),t("span",{staticStyle:{"text-align":"right"},on:{click:e.onForgotPsw}},[e._v(" 忘记密码？ ")])]),t("van-button",{staticClass:"primary block"},[e._v(" 登录")]),t("van-divider",{staticStyle:{color:"#6f5bfeff"}},[e._v("or")]),t("van-button",{staticClass:"block",attrs:{color:"#6f5bfeff","native-type":"button",plain:""},on:{click:function(o){e.mode=1===e.mode?2:1}}},[e._v(" "+e._s(e.modeSwitchButtonContext)+" ")])]],2)],1)},n=[],s=t(39873),i=(t(83040),t(9653),t(74916),t(15306),t(77601),t(3843),t(83710),t(53045)),a=t(64436),f=t(95426),u=t(39766),d={data:function(){return{form:{userName:"",phoneNumber:"",password:"",imgCode:"",smsCode:"",verifyToken:""},verifyImageBase64:"",showPassword:!1,smsCountdown:0,verifyUniqid:"",originalMode:null}},computed:{mode:{get:function(){return this.originalMode||Number(this.$root.registerMode)},set:function(e){this.originalMode=e}},unbind:function(){return"1"===this.$route.query.unbind},passwordModeSignIn:function(){return 1===this.mode},smsModeSignIn:function(){return 1!==this.mode},modeSwitchButtonContext:function(){return 1===this.mode?"短信验证码登录":2===this.mode?"密码登录":void 0},graphicVerify:function(){return 1===Number(this.$root.verifyCodeType)},slideVerify:function(){return 2===Number(this.$root.verifyCodeType)}},created:function(){this.refreshImageVerifyCode()},methods:{loginDevice:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,(0,u.x)(e);case 2:t=o.sent,t&&6===t.length&&(0,i.rd)({userName:e.form.userName,password:e.form.password,code:e.form.imgCode,verifyUniqid:e.verifyUniqid,securePassword:t,verifyToken:e.form.verifyToken}).then((function(o){var t=o.ok,r=o.data,n=o.msg;t?(e.$root.setUserInfo(r.userInfo),e.$st.set("USER_INFO",r.userInfo),e.$st.set("TOKEN",r.token),e.$root.token=r.token,(0,f.Ks)(r.token),e.$root.refreshGlobalNotices(),e.$root.loadConfig(),e.$root.loadBanks(),e.$router.replace("/")):(e.refreshImageVerifyCode(),e.dx&&e.dx.reload(),e.form.verifyToken="",e.form.smsCode="",e.form.imgCode="",e.$toast.fail(n))}));case 4:case"end":return o.stop()}}),o)})))()},onSubmit:function(){var e=this;return this.passwordModeSignIn&&0===this.form.userName.length?this.$toast.fail("请输入用户名"):(!/^(?![^a-zA-Z]+$)(?!\D+$)/.test(this.form.password)||this.form.password.length<6||this.form.password.length>15)&&(this.passwordModeSignIn||this.unbind)?this.$toast.fail("请输入6-15位字母数字组成的密码"):this.slideVerify&&!this.form.verifyToken?this.$toast.fail("请滑动验证"):this.graphicVerify&&!this.form.imgCode?this.$toast.fail("请输入图形证码"):this.unbind?void this.loginDevice():this.smsModeSignIn?/^1[3456789]\d{9}$/.test(this.form.phoneNumber)?""===this.form.smsCode?this.$toast.fail("请输入短信验证码"):void(0,i.uL)({phoneNumber:this.form.phoneNumber,smsCode:this.form.smsCode,code:this.form.imgCode,verifyUniqid:this.verifyUniqid,verifyToken:this.form.verifyToken}).then((function(o){var t=o.ok,r=o.data,n=o.msg,s=o.code;if(1001===s)return e.$router.push("/qr_login");t?(e.$root.setUserInfo(r.userInfo),e.$st.set("USER_INFO",r.userInfo),e.$st.set("TOKEN",r.token),e.$root.token=r.token,(0,f.Ks)(r.token),e.$root.refreshGlobalNotices(),e.$root.loadConfig(),e.$root.loadBanks(),e.$root.loadPayments(),e.$router.replace("/")):(e.refreshImageVerifyCode(),e.dx&&e.dx.reload(),e.form.verifyToken="",e.form.smsCode="",e.form.imgCode="",e.$toast.fail(n))})):this.$toast.fail("请输入合法的手机号码"):void(0,i.x4)({userName:this.form.userName,password:this.form.password,code:this.form.imgCode,verifyUniqid:this.verifyUniqid,verifyToken:this.form.verifyToken}).then((function(o){var t=o.ok,r=o.data,n=o.msg,s=o.code;if(1001===s)return e.$router.push("/qr_login");t?(e.$root.setUserInfo(r.userInfo),e.$st.set("USER_INFO",r.userInfo),e.$st.set("TOKEN",r.token),e.$root.token=r.token,(0,f.Ks)(r.token),e.$root.refreshGlobalNotices(),e.$root.loadConfig(),e.$root.loadBanks(),e.$root.loadPayments(),e.$router.replace("/")):(e.refreshImageVerifyCode(),e.dx&&e.dx.reload(),e.form.verifyToken="",e.form.imgCode="",e.$toast.fail(n))}))},refreshImageVerifyCode:function(){var e=this;(0,a.mg)({codeType:"login"}).then((function(o){var t=o.ok,r=o.data,n=o.code;if(t)e.verifyUniqid=r.verifyUniqid,e.verifyImageBase64=r.verifyCode;else if(400===n)return e.$toast.fail("请输入合法的手机号码")}))},smsCount:function(){var e=this.$st.get("LAST_SMS_REQUEST");if(e){var o=Date.now()-Number(e);o<60&&(this.smsCountdown=1e3*(60-o))}},getSmsVerifyCode:function(){var e=this;this.smsCountdown||(0,a.Z3)({phoneNumber:this.form.phoneNumber,codeType:"login"}).then((function(o){var t=o.ok,r=o.msg;o.data;t?(e.$toast.success(r),e.smsCountdown=6e4,e.$st.set("LAST_SMS_REQUEST",Date.now())):e.$toast.fail(r)}))},onForgotPsw:function(){var e=this;this.$dialog.confirm({className:"retrievePsw",message:"找回密码,请联系客服",confirmButtonColor:"#6f59fe",confirmButtonText:"确认",cancelButtonText:"取消",beforeClose:function(o,t){"confirm"===o&&e.$root.openCustomerService(),t()}})}},mounted:function(){var e=this,o=this.$refs.dx;o&&(this.dx=_dx.Captcha(o,{appId:"ff5d9ebfae73ebe5d524d6414abf66de",apiServer:"https://cap-api.dingxiang-inc.com",style:"inline",success:function(o){e.form.verifyToken=o},fail:function(){e.form.verifyToken=""}}))}},c=d,m=t(1001),l=(0,m.Z)(c,r,n,!1,null,null,null),h=l.exports},64436:function(e,o,t){t.d(o,{H6:function(){return i},Z3:function(){return s},mg:function(){return n}});var r=t(95426),n=function(e){return(0,r.q)({url:"/Api/Common/VerifyCode/getImageCode",method:"POST",data:e})},s=function(e){return(0,r.q)({url:"/Api/Common/VerifyCode/sendCode",method:"POST",data:e})},i=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.q)({url:"/Api/User/UploadFile/uploadLargeVideo",method:"POST",data:e,opts:o})}},39766:function(e,o,t){t.d(o,{D:function(){return i},x:function(){return s}});var r=t(39873),n=(t(83040),t(41539),t(32564),t(53045)),s=function(e){return e.$toast("请输入资金密码"),new Promise((function(o,t){e.$root.showPassowordKeyboard=!0,e.$root.$once("root:global-password",function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o(t));case 1:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}())}))},i=function(e){return e.$root.userInfo&&e.$root.userInfo.isGoogleAuthenticator?(e.$toast("请输入Google安全码"),new Promise((function(o,t){setTimeout((function(){e.$root.showPassowordKeyboard=!0,e.$root.$once("root:global-password",function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(r){var s,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r&&"close-by-route-change"!==r){t.next=2;break}return t.abrupt("return",o(!1));case 2:return t.next=4,(0,n.Wg)({safeCode:r});case 4:s=t.sent,i=s.ok,a=s.msg,i?o(!0):(o(!1),e.$toast.fail(a));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),0)}))):Promise.resolve(!0)}}}]);
//# sourceMappingURL=6375.651f0d3b.js.map