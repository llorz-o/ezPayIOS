"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[1017],{21017:function(e,o,t){t.r(o),t.d(o,{default:function(){return l}});var s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"page-sign-in"},[t("van-form",{attrs:{"validate-first":""},on:{submit:e.onSubmit}},[t("van-field",{attrs:{autocomplete:"new-password","left-icon":e.icon,maxlength:"20",minlength:"6",placeholder:e.placeholder,type:"text"},model:{value:e.form.userName,callback:function(o){e.$set(e.form,"userName",o)},expression:"form.userName"}}),e.slideVerify?t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("div",{ref:"dx"})]):t("van-field",{attrs:{autocomplete:"new-password","left-icon":"youzan-shield",placeholder:"验证码"},scopedSlots:e._u([{key:"extra",fn:function(){return[t("van-image",{staticClass:"verifyCode",attrs:{src:e.verifyImageBase64},on:{click:e.refreshImageVerifyCode}})]},proxy:!0}]),model:{value:e.form.imgCode,callback:function(o){e.$set(e.form,"imgCode",o)},expression:"form.imgCode"}}),2===e.mode?t("van-field",{attrs:{autocomplete:"new-password",placeholder:"短信验证码","left-icon":"youzan-shield"},scopedSlots:e._u([{key:"extra",fn:function(){return[t("van-button",{staticClass:"btnGetVerifyCode primary",attrs:{size:"small","native-type":"button"},on:{click:e.getSmsVerifyCode}},[e.smsCountdown?t("van-count-down",{attrs:{time:e.smsCountdown,format:"ss","auto-start":""},on:{finish:function(o){e.smsCountdown=0}}}):[e._v(" 获取验证码")]],2)]},proxy:!0}],null,!1,1586256564),model:{value:e.form.smsCode,callback:function(o){e.$set(e.form,"smsCode",o)},expression:"form.smsCode"}}):e._e(),1===e.mode||2===e.mode?[t("van-field",{attrs:{"right-icon":e.showPassword?"eye-o":"closed-eye",type:e.showPassword?"text":e.$root.dynamicPasswordInputType,autocomplete:"new-password","left-icon":"lock",placeholder:"6-15位字母数字，且不能全为字母或数字"},on:{"click-right-icon":function(o){e.showPassword=!e.showPassword}},model:{value:e.form.password,callback:function(o){e.$set(e.form,"password",o)},expression:"form.password"}}),t("van-field",{attrs:{"right-icon":e.showConfirmPassword?"eye-o":"closed-eye",type:e.showConfirmPassword?"text":e.$root.dynamicPasswordInputType,autocomplete:"new-password","left-icon":"lock",placeholder:"6-15位字母数字，且不能全为字母或数字"},on:{"click-right-icon":function(o){e.showConfirmPassword=!e.showConfirmPassword}},model:{value:e.form.confirmPassword,callback:function(o){e.$set(e.form,"confirmPassword",o)},expression:"form.confirmPassword"}})]:e._e(),t("div",{staticClass:"ver"},[e._v("版本号：V "+e._s(e.$root.version))]),1===e.mode||2===e.mode?t("van-button",{key:2,staticClass:"primary block",attrs:{"native-type":"submit"}},[e._v(" 注册 ")]):e._e()],2),t("van-dialog",{staticClass:"signProtocol",attrs:{"confirm-button-text":"我已阅读",title:"注册须知"},model:{value:e.showDialog,callback:function(o){e.showDialog=o},expression:"showDialog"}},[e._v(" "+e._s(e.$root.title)+"是一个专业的支付通道，基于C2C理念 开发设计，全新的UI让会员耳目一新，全新的 认证系统让真实的会员更有安全感，让骗单玩 家无处遁形， 一旦发现骗单，平台将永久冻结账户，永不 解封。最大程度的提升了会员与商户之间的 用户粘度，构建商户与会员之间的紧密链接， "+e._s(e.$root.title)+"将竭诚为广大客户提供最优质的服务。 "),t("br"),e._v(" 交易过程中禁止添加好友 如果添加好友造成被骗单平台概不承担责任。 "),t("br"),e._v(" 交易流程示范 注册-购买V币-到商户平台充值-提款下分 V币-到我要卖币挂单等待买家购买-买家付 款-卖家确认-完成交易。在这整个交易过程 当中，还有一些注意事项，请您务必阅读。 "),t("br"),e._v(" 第一： 为了保证会员之间的交易安全，平台采取的是 实名制用户认证，并终身无法修改认证信息！ 会员必须遵守规定，严格启用本人身份信息， 银行账号信息等；买家付款时必须使用本人身 份信息的银行卡或者其支付工具来购买，如果 使用他人银行账户代为付款，卖家有权可以不 予确认收款。由于本人录入信息不符而造成的 一切损失，由会员自行承担，平台不负担任何 责任； "),t("br"),e._v(" 第二： 为了保证卖家的信息安全，请买家务必在有需 求的时候再进行订单确认，如若发生恶意刷 单，锁定卖家额度而不付款的用户，平台将会 自动冻结账户； "),t("br"),e._v(" 第三： 在购买以及出售V币的交易时间，平台规定 是必须在15分钟内完成，会员在购买或者出售 的时候，一定要非常关注交易是否在正在进行 当中，如有异议也及时的联系平台客服，申请 人工客服介入！由于买卖双方长时间不确认的 交易，系统将自动判定为成交或者取消，由于 系统无法做到百分百准确，平台不承担任何责 任。再次重申，请双方在交易的过程当中要时 刻注意订单变化！ "),t("br"),e._v(" 第四： 『买家』在购买V币的时候，此单：一旦付款 成功．请立即上传截图并点击『我己转账』确认， 确认以后10分钟内如果还没有收到币，此单便 为争议订单，请立即联系在线客服，否则系统将 判断定您的付款无效，取消订单！ "),t("br"),e._v(" 第五： 会员在出售V币的时候，此订单一旦挂单成 功，如有『买家』下单购买并点击了『我已转 账』请您马上查询是否收到汇款，如没有收到 『买家』的转账，请立即点击『未收到转账』 功能，并联系在线客服否则在10分钟后，系统 会判断为此订单交易成功，系统将会自动打币 给『买家』； ")])],1)},r=[],i=(t(9653),t(74916),t(77601),t(15306),t(3843),t(83710),t(53045)),n=t(64436),a={data:function(){return{passedImageVerifyCode:!1,showDialog:!0,form:{userName:"",imgCode:"",smsCode:"",password:"",confirmPassword:"",verifyToken:""},verifyImageBase64:"",smsCountdown:0,showPassword:!1,showConfirmPassword:!1,verifyUniqid:""}},computed:{mode:function(){return Number(this.$root.registerMode)},placeholder:function(){return 1===this.mode?"用户名":2===this.mode?"手机号":void 0},icon:function(){return 1===this.mode?"manager":2===this.mode?"phone":void 0},graphicVerify:function(){return 1===Number(this.$root.verifyCodeType)},slideVerify:function(){return 2===Number(this.$root.verifyCodeType)}},created:function(){this.refreshImageVerifyCode()},methods:{onSubmit:function(){var e=this;if(1===this.mode&&!/^.{6,20}$/.test(this.form.userName))return this.$toast.fail("请输入6-20位用户名");if(2===this.mode&&!/^1[3456789]\d{9}$/.test(this.form.userName))return this.$toast.fail("请输入合法的手机号码");if(this.slideVerify&&!this.form.verifyToken)return this.$toast.fail("请滑动验证");if(this.graphicVerify&&this.form.imgCode.length<=0)return this.refreshImageVerifyCode(),this.$toast.fail("请输入图片验证码");if(2===this.mode&&4!==this.form.smsCode.length)return this.$toast.fail("请输入4位短信验证码");if(!/^(?![^a-zA-Z]+$)(?!\D+$)/.test(this.form.password)||this.form.password.length<6||this.form.password.length>15)return this.$toast.fail("请输入6-15位字母数字组成的密码");if(this.form.password!==this.form.confirmPassword)return this.$toast.fail("两次输入的密码不一致");var o=function(){e.refreshImageVerifyCode(),e.dx&&e.dx.reload(),e.form.verifyToken="",e.form.imgCode=""};(0,i.z2)({smsCode:this.form.smsCode,userName:this.form.userName,password:this.form.password,code:this.form.imgCode,verifyUniqid:this.verifyUniqid,verifyToken:this.form.verifyToken}).then((function(t){t.data;var s=t.ok,r=t.msg;s?(e.$router.replace("/layout_auth"),e.$toast.success(r)):(e.$toast.fail(r),o())}))},refreshImageVerifyCode:function(){var e=this;(0,n.mg)({codeType:"register"}).then((function(o){var t=o.ok,s=o.data,r=o.code;if(t)e.verifyUniqid=s.verifyUniqid,e.verifyImageBase64=s.verifyCode;else if(400===r)return e.$toast.fail("请输入合法的手机号码")}))},getSmsVerifyCode:function(){var e=this;this.smsCountdown||(0,n.Z3)({phoneNumber:this.form.userName,codeType:"register"}).then((function(o){var t=o.ok,s=o.msg;o.data;t?(e.$toast.success(s),e.smsCountdown=6e4,e.$st.set("LAST_SMS_REQUEST",Date.now())):e.$toast.fail(s)}))}},mounted:function(){var e=this,o=this.$refs.dx;o&&_dx.Captcha(o,{appId:"ff5d9ebfae73ebe5d524d6414abf66de",apiServer:"https://cap-api.dingxiang-inc.com",style:"inline",success:function(o){e.form.verifyToken=o},fail:function(){e.form.verifyToken=""}})}},f=a,d=t(1001),m=(0,d.Z)(f,s,r,!1,null,null,null),l=m.exports},64436:function(e,o,t){t.d(o,{H6:function(){return n},Z3:function(){return i},mg:function(){return r}});var s=t(95426),r=function(e){return(0,s.q)({url:"/Api/Common/VerifyCode/getImageCode",method:"POST",data:e})},i=function(e){return(0,s.q)({url:"/Api/Common/VerifyCode/sendCode",method:"POST",data:e})},n=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,s.q)({url:"/Api/User/UploadFile/uploadLargeVideo",method:"POST",data:e,opts:o})}}}]);
//# sourceMappingURL=1017.c521c83f.js.map