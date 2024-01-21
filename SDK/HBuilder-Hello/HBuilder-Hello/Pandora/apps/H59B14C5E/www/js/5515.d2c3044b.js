"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[5515],{79194:function(t,n,e){e.d(n,{Z:function(){return m}});var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cryptoDepositDescription"},[e("div",{staticClass:"title"},[t._v("保证金规则说明：")]),e("div",{staticClass:"content"},[e("div",{staticClass:"title2"},[t._v("一、保证金规则")]),e("div",{staticClass:"content2"},[t._m(0),e("table",[t._m(1),e("tbody",[e("tr",[e("td",[t._v("黄金商家")]),e("td",[t._v(" "+t._s(t.config.ordinaryBusinessDepositScope.min)+"~ "+t._s(t.config.ordinaryBusinessDepositScope.max)+" USDT ")])]),e("tr",[e("td",[t._v("铂金商家")]),e("td",[t._v(" "+t._s(t.config.platinumGoldBusinessDepositScope.min)+"~ "+t._s(t.config.platinumGoldBusinessDepositScope.max)+" USDT ")])]),e("tr",[e("td",[t._v("钻石商家")]),e("td",[t._v(" "+t._s(t.config.diamondBusinessDepositScope.min)+"~"+t._s(t.config.diamondBusinessDepositScope.max)+" USDT ")])]),e("tr",[e("td",[t._v("皇冠商家")]),e("td",[t._v(" "+t._s(t.config.crownBusinessDepositScope.min)+" USDT以上 ")])])])])]),e("div",{staticClass:"title2"},[t._v("2.高级商家权益")]),e("div",{staticClass:"content2"},[t._m(2),t._m(3),e("p",[e("span",{staticClass:"bold"},[t._v(" （3）更高补贴：")]),t._v(" 高级商家比普通商家享有更高补贴，商家等级越高，补贴越高，详情请见 "),e("a",{on:{click:t.showPromoBonusList}},[t._v("商家补贴对照表")]),t._v("。 ")])]),e("div",{staticClass:"title2"},[t._v("3.冻结保证金情形")]),t._m(4),e("div",{staticClass:"title2"},[t._v("4.违规处罚")]),t._m(5),e("div",{staticClass:"title2"},[t._v("5.保证金转出")]),e("div",{staticClass:"content2"},[t._v(" 保证金可以随时申请转出，申请转出24小时后自动到账；若转出过程中出现行的争议订单，且超额，将终止最近的转出申请，直到被冻结的商家余额+保证金≥争议订单总金额。 ")])]),e("van-popup",{attrs:{closeable:""},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[e("div",{staticClass:"bonusList"},[e("table",[e("thead",[e("tr",[e("th",{attrs:{colspan:"5"}},[t._v("商家补贴比例（随市场和政策浮动）")])]),e("tr",[e("th",{staticClass:"headLine"},[e("span",{staticClass:"leftBottom"},[t._v("变现")]),e("span",{staticClass:"rightTop"},[t._v("等级")])]),e("th",[t._v(" 黄金 "),e("br"),t._v(" 商家 ")]),e("th",[t._v(" 铂金 "),e("br"),t._v(" 商家 ")]),e("th",[t._v(" 钻石 "),e("br"),t._v(" 商家 ")]),e("th",[t._v(" 皇冠 "),e("br"),t._v(" 商家 ")])])]),e("tbody",[e("tr",[e("td",[t._v(" 微信/支付宝 "),e("br"),e("span",[t._v("小额"+t._s(t.sellingConfig.wechatAlipayAmountMin.min)+"~"+t._s(t.sellingConfig.wechatAlipayAmountMin.max))])]),e("td",[t._v(t._s(t.config.ordinaryBusinessWechatAlipayReward.min)+"%")]),e("td",[t._v(t._s(t.config.platinumGoldBusinessWechatAlipayReward.min)+"%")]),e("td",[t._v(t._s(t.config.diamondBusinessWechatAlipayReward.min)+"%")]),e("td",[t._v(t._s(t.config.crownBusinessWechatAlipayReward.min)+"%")])]),e("tr",[e("td",[t._v(" 微信/支付宝 "),e("br"),e("span",[t._v("中额"+t._s(t.sellingConfig.wechatAlipayAmountMiddle.min)+"~"+t._s(t.sellingConfig.wechatAlipayAmountMiddle.max))])]),e("td",[t._v(t._s(t.config.ordinaryBusinessWechatAlipayReward.middle)+"%")]),e("td",[t._v(t._s(t.config.platinumGoldBusinessWechatAlipayReward.middle)+"%")]),e("td",[t._v(t._s(t.config.diamondBusinessWechatAlipayReward.middle)+"%")]),e("td",[t._v(t._s(t.config.crownBusinessWechatAlipayReward.middle)+"%")])]),e("tr",[e("td",[t._v(" 微信/支付宝 "),e("br"),e("span",[t._v("大额"+t._s(t.sellingConfig.wechatAlipayAmountMax.min)+"以上")])]),e("td",[t._v(t._s(t.config.ordinaryBusinessWechatAlipayReward.max)+"%")]),e("td",[t._v(t._s(t.config.platinumGoldBusinessWechatAlipayReward.max)+"%")]),e("td",[t._v(t._s(t.config.diamondBusinessWechatAlipayReward.max)+"%")]),e("td",[t._v(t._s(t.config.crownBusinessWechatAlipayReward.max)+"%")])]),e("tr",[e("td",[t._v(" 银行卡 "),e("br"),e("span",[t._v("小额"+t._s(t.sellingConfig.bankCardAmountMin.min)+"~"+t._s(t.sellingConfig.bankCardAmountMin.max))])]),e("td",[t._v(t._s(t.config.ordinaryBusinessBankCardReward.min)+"%")]),e("td",[t._v(t._s(t.config.platinumGoldBusinessBankCardReward.min)+"%")]),e("td",[t._v(t._s(t.config.diamondBusinessBankCardReward.min)+"%")]),e("td",[t._v(t._s(t.config.crownBusinessBankCardReward.min)+"%")])]),e("tr",[e("td",[t._v(" 银行卡 "),e("br"),e("span",[t._v("小额"+t._s(t.sellingConfig.bankCardAmountMiddle.min)+"~"+t._s(t.sellingConfig.bankCardAmountMiddle.max))])]),e("td",[t._v(t._s(t.config.ordinaryBusinessBankCardReward.middle)+"%")]),e("td",[t._v(t._s(t.config.platinumGoldBusinessBankCardReward.middle)+"%")]),e("td",[t._v(t._s(t.config.diamondBusinessBankCardReward.middle)+"%")]),e("td",[t._v(t._s(t.config.crownBusinessBankCardReward.middle)+"%")])]),e("tr",[e("td",[t._v(" 银行卡 "),e("br"),e("span",[t._v("大额"+t._s(t.sellingConfig.bankCardAmountMax.min)+"以上")])]),e("td",[t._v(t._s(t.config.ordinaryBusinessBankCardReward.max)+"%")]),e("td",[t._v(t._s(t.config.platinumGoldBusinessBankCardReward.max)+"%")]),e("td",[t._v(t._s(t.config.diamondBusinessBankCardReward.max)+"%")]),e("td",[t._v(t._s(t.config.crownBusinessBankCardReward.max)+"%")])]),e("tr",[e("td",[t._v("保证金")]),e("td",[t._v(t._s(t.config.ordinaryBusinessDepositScope.min)+"U起")]),e("td",[t._v(t._s(t.config.platinumGoldBusinessDepositScope.min)+"U起")]),e("td",[t._v(t._s(t.config.diamondBusinessDepositScope.min)+"U起")]),e("td",[t._v(t._s(t.config.crownBusinessDepositScope.min)+"U起")])])])])])])],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("span",{staticClass:"bold"},[t._v("1.高级商家说明：")]),t._v(" 主动缴纳保证金即可成为高级商家，高级商家可以享受更多特权、更多订单、更高补贴，系统根据缴纳保证金数额分为 "),e("span",{staticClass:"highlight"},[t._v("黄金商家、 铂金商家、钻石商家、皇冠商家")]),t._v("。 ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("等级")]),e("th",[t._v("缴纳金额")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("span",{staticClass:"bold"},[t._v("（1）订单优先权：")]),t._v("高级商家享有订单优先权，可承接更多订单；")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("span",{staticClass:"bold"},[t._v(" （2）保证金利息：")]),t._v("缴纳保证金享有高额收益，利息每小时结算(时息=保证金本金×时利率）,利息超过1USDT可领取，领取利息按实时汇率兑换V币，自动存入VipPay钱包余额； ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content2"},[e("p",[e("span",{staticClass:"bold"},[t._v("（1）优先冻结搬砖余额：")]),t._v(" 当变现或代付订单，被对方发起争议订单时，平台将按1:1比例，优先冻结商家余额，直到争议订单结束，此时不占用保证金额度；若判定商家败诉，将直接扣除相应商家余额； ")]),e("p",[e("span",{staticClass:"bold"},[t._v("（2）冻结保证金：")]),t._v(" 当代付、争议中变现订单累计金额大于商户余额，则按6:1的固定比例，冻结您的保证金，直到争议订单结束；若商家败诉，将直接扣除相应商家余额，不足不分则按实时汇率扣除相应保证金。 ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content2"},[e("p",[e("span",{staticClass:"bold"},[t._v("（1）暂停变现或代付：")]),t._v(" 若您同时出现3笔或以上争议订单（包含变现或代付），系统会判定您的账号存在骗单或逃单可能，将暂停您的变现和代付功能，直到争议订单解决为止； ")]),e("p",[e("span",{staticClass:"bold"},[t._v("（2）一般违规：")]),t._v(" 若您被提起争议订单（例："),e("span",{staticClass:"highlight"},[t._v("恶意拖欠时间，提前操作已支付或未足额支付等违规")]),t._v("），经平台工作人员核查属实的，每违规1次暂停变现和代付功能24小时；若累计5次或以上的，将暂停变现和代付功能7天；若累计8次或以上的，将直接暂停变现和付功能30天，若累计10次或以上的，将直接取消商家资格； ")]),e("p",[e("span",{staticClass:"bold"},[t._v("（3）严重违规：")]),t._v(" 若您被提起争议订单（例："),e("span",{staticClass:"highlight"},[t._v("恶意终止交易，虚假操作已支付、骗单或逃单等情形")]),t._v("），经平台工作人员核查属实的，首次违规暂停变现、代付功能7天；若累计2次的，将直接取消商家资格；若累计3次或以上、金额巨大、不够赔付或其他严重情形的，将直接禁用账号，没收全部资产。 ")])])}],a=e(39873),r=(e(83040),e(12879)),o={name:"CryptoDepositDescription",data:function(){return{show:!1,sellingConfig:{wechatAlipayAmountMin:{min:10,max:1e4},wechatAlipayAmountMiddle:{min:10001,max:3e4},wechatAlipayAmountMax:{min:30001,max:6e4},bankCardAmountMin:{min:33,max:1e4},bankCardAmountMiddle:{min:10003,max:3e4},bankCardAmountMax:{min:30001,max:6e4}},config:{ordinaryBusinessDepositScope:{min:1,max:1e4},ordinaryBusinessWechatAlipayReward:{min:1,middle:1,max:1},ordinaryBusinessBankCardReward:{min:1,middle:1,max:1},platinumGoldBusinessDepositScope:{min:10001,max:2e4},platinumGoldBusinessWechatAlipayReward:{min:2,middle:2,max:2},platinumGoldBusinessBankCardReward:{min:2,middle:2,max:2},diamondBusinessDepositScope:{min:20001,max:3e4},diamondBusinessWechatAlipayReward:{min:3,middle:3,max:3},diamondBusinessBankCardReward:{min:3,middle:3,max:3},crownBusinessDepositScope:{min:30001,max:4e4},crownBusinessWechatAlipayReward:{min:4,middle:4,max:4},crownBusinessBankCardReward:{min:4,middle:4,max:4}}}},created:function(){this.getBusinessConfig()},methods:{showPromoBonusList:function(){this.show=!0},getBusinessConfig:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function n(){var e,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.cf)();case 2:e=n.sent,s=e.ok,i=e.data,s&&(t.config=i.business_range_config,t.sellingConfig=i.amount_range_config);case 6:case"end":return n.stop()}}),n)})))()}}},c=o,d=e(1001),u=(0,d.Z)(c,s,i,!1,null,null,null),m=u.exports},39766:function(t,n,e){e.d(n,{D:function(){return r},x:function(){return a}});var s=e(39873),i=(e(83040),e(41539),e(32564),e(53045)),a=function(t){return t.$toast("请输入资金密码"),new Promise((function(n,e){t.$root.showPassowordKeyboard=!0,t.$root.$once("root:global-password",function(){var t=(0,s.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n(e));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}))},r=function(t){return t.$root.userInfo&&t.$root.userInfo.isGoogleAuthenticator?(t.$toast("请输入Google安全码"),new Promise((function(n,e){setTimeout((function(){t.$root.showPassowordKeyboard=!0,t.$root.$once("root:global-password",function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(s){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s&&"close-by-route-change"!==s){e.next=2;break}return e.abrupt("return",n(!1));case 2:return e.next=4,(0,i.Wg)({safeCode:s});case 4:a=e.sent,r=a.ok,o=a.msg,r?n(!0):(n(!1),t.$toast.fail(o));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),0)}))):Promise.resolve(!0)}},89828:function(t,n,e){e.d(n,{RY:function(){return u},VM:function(){return m},fN:function(){return d},mi:function(){return l}});var s=e(49749),i=e(52336),a=e(39873),r=(e(56977),e(54678),e(32564),e(83040),e(12879)),o=e(75461),c=["ok","data","msg"],d={data:function(){return{cryptoAccountInfo:{address:"",otcTicker:""}}},methods:{businessGetAccountInfo:function(t){var n=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var a,o,d,u,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.bb)({type:t});case 2:return a=e.sent,o=a.ok,d=a.data,u=a.msg,m=(0,i.Z)(a,c),o?(n.cryptoAccountInfo=d,n.updateQRcode()):n.$toast(u),e.abrupt("return",(0,s.Z)({ok:o,data:d,msg:u},m));case 9:case"end":return e.stop()}}),e)})))()},updateQRcode:function(t){o.toDataURL(t||this.cryptoAccountInfo.address).then((function(t){var n=document.querySelector(".QRcode");n&&n.setAttribute("src",t)}))}}},u={computed:{isCryptoMerchant:function(){return"1"===this.$route.query.m},amICryptoMerchant:function(){return 1===this.$root.userInfo.BusinessStatus},ApiPath:function(){return this.isCryptoMerchant?"Business":""},BuyerApiPath:function(){return this.isCryptoMerchant&&this.amICryptoMerchant?"Business":""}}},m={data:function(){return{countdown:0,orderType:"TronDeposit",form:{paymentType:"",amount:""},orderInfo:{userId:null,paymentType:"",amount:"",passageType:"",receivingAddress:"",copeAmount:0,createDate:"",status:"",createTime:"",updateTime:"",orderId:0,orderNo:""}}},computed:{isTrading:function(){return!!this.orderInfo.orderId}},created:function(){this.getDepositDetail(this.isBuyVb)},methods:{getDepositDetail:function(){var t=arguments,n=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var s,i,a,o,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.length>0&&void 0!==t[0]&&t[0],e.next=3,(0,r.IA)({orderType:n.orderType});case 3:i=e.sent,a=i.ok,o=i.data,c=i.msg,a?o&&(n.$set(n,"orderInfo",o.order),n.form.amount=s?o.order.amount:o.order.copeAmount,n.form.paymentType=o.order.paymentType,n.cryptoAccountInfo.address=o.order.receivingAddress,n.cryptoAccountInfo.otcTicker=parseFloat(String(o.order.amount/o.order.copeAmount)).toFixed(2),n.updateQRcode(),o.currentStateExpireTime&&(o.currentStateExpireTime.expire?(n.countdown=1e3*o.currentStateExpireTime.expire-n.$root.getServerTime(),n.countdown>0&&(d=setTimeout((function(){return n.getDepositDetail(s)}),5e3),n.$once("hook:beforeDestroy",(function(){return clearTimeout(d)})))):n.countdown=0)):n.$toast(c);case 8:case"end":return e.stop()}}),e)})))()}}},l={computed:{isMerchant:function(){return"1"===this.$route.query.m||"merchant"===this.$route.params.type},hideAlipayWechat:function(){return this.isMerchant&&!this.$root.isMerchantAlipayWechatOpen},hideAlipayWechatAtMerchantPage:function(){return!this.$root.isMerchantAlipayWechatOpen},payments:function(){return this.isMerchant?this.$root.merchantPayments:this.$root.payments}}}}}]);
//# sourceMappingURL=5515.d2c3044b.js.map