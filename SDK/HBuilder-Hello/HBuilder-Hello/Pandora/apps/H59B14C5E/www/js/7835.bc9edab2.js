"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[7835],{99338:function(t,n,s){s.r(n),s.d(n,{default:function(){return T}});var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"page page-transaction_sale"},[s("div",{staticClass:"top-wrapper"},[s("div",{staticClass:"card"},[s("div",{staticClass:"title"},[s("span",{staticClass:"split"},[t._v(" "+t._s(t.orderInfo.isSplit?"可拆分":"不可拆分")+" ")]),0===t.orderInfo.status?s("span",{staticClass:"status canceled"},[t._v(" "+t._s(t.orderInfo.amount==t.orderInfo.soldAmount?"已售罄":"取消挂单")+" ")]):s("span",{staticClass:"status",class:t._f("transactingOrderStatus")(t.status)},[t._v(" "+t._s(t._f("transactingOrderStatus")(t.status,"seller-content"))+" ")]),s("span",{staticClass:"btn",class:{loading:t.loading},on:{click:function(){return t.loadDetails(t.orderInfo.pendingOrderId)}}},[s("van-icon",{attrs:{name:"replay"}})],1)]),s("div",{staticClass:"time"},[t.status==t.TRANSACTING_ORDER_STATUS.HANGING?[t._v(" 创建时间 "+t._s(t._f("dateFormat")(t.orderInfo.createTime,"Y/M/D h:m:s"))+" ")]:t._e(),t.status==t.TRANSACTING_ORDER_STATUS.BUYER_REQUEST?[s("span",{staticStyle:{color:"red"}},[t._v(" "+t._s(t.$root.waitingSellerConfirmOrderStr)+" ")]),t._v(" 内未操作系统将默认卖家取消交易 ")]:[t._v("  ")]],2),s("div",{staticClass:"orderId"},[t._v(" 挂单编号 "+t._s(t.orderInfo.pendingOrderNo)+" "),s("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.orderInfo.pendingOrderNo||"",expression:"orderInfo.pendingOrderNo || ''"}],staticClass:"copy copyBtn",on:{success:t.$root.copySuccessful}})])])]),s("van-cell",{staticClass:"kv amount",attrs:{title:"售卖数量"}},[t._v(" V币 "+t._s(t.orderInfo.validAmount)+" ")]),t.status==t.TRANSACTING_ORDER_STATUS.BUYER_REQUEST?[s("div",{staticClass:"underOrders gary-8"},[s("div",{staticClass:"title title_line"},[t._v("交易订单")]),s("div",{staticClass:"list"},t._l(t.underOrders,(function(n,a){return s("div",{key:a,staticClass:"item border_bottom_1px",on:{click:function(s){return t.$router.push("/transaction_sale/"+n.orderId+"?m="+(t.isCryptoMerchant?1:0))}}},[s("div",{staticClass:"col time"},[t._v(" 发起时间 "),s("br"),t._v(" "+t._s(t._f("dateFormat")(n.createTime,"M/D h:m:s"))+" ")]),s("div",{staticClass:"col money"},[s("div",[t._v("购买数量")]),s("div",{staticClass:"amount"},[t._v(" "+t._s(parseFloat(n.amount).toFixed(2))+"V币 ")])]),s("div",{staticClass:"col payment",class:"pay"+n.paymentType}),s("div",{staticClass:"col status",class:t._f("transactingOrderStatus")(n.status)},[t._v(" "+t._s(t._f("transactingOrderStatus")(n.status,"seller-content"))+" ")]),s("van-icon",{attrs:{name:"arrow"}})],1)})),0)])]:[s("van-cell",{staticClass:"kv payment",attrs:{title:"收款方式"}},[s("van-radio-group",{model:{value:t.radio,callback:function(n){t.radio=n},expression:"radio"}},t._l(t.payments,(function(n,a){return s("van-radio",{key:a,staticClass:"btn",attrs:{name:n}},[s("van-button",{staticClass:"btn",attrs:{slot:"icon"},slot:"icon"},[s("span",{staticClass:"item",class:"pay"+n}),t._v(" "+t._s(t._f("paymentMethod")(n,"content"))+" ")])],1)})),1)],1)],t.status==t.TRANSACTING_ORDER_STATUS.HANGING?s(t.componentsMapping[t.radio],{tag:"components",attrs:{hide:t.hide,payment:t.hide?void 0:t.getPaymentInfo.info,title:"收款信息"}}):t._e(),0!=t.orderInfo.status?s("div",{staticClass:"btns"},[t.status==t.TRANSACTING_ORDER_STATUS.HANGING?[s("van-button",{staticClass:"danger block",on:{click:t.cancel_hanging}},[t._v(" 取消挂单 ")])]:t._e()],2):t._e()],2)},e=[],i=s(7067),r=(s(69826),s(41539),s(32564),s(86947)),o=s(41360),c=s(21288),d=s(54025),u=s(89828),l={components:{BankPaymentInfo:c.JF,WechatPaymentInfo:c.Ey,AliPaymentInfo:c.q$},mixins:[u.RY],data:function(){var t;return{STATUS_TYPE:r.Z2,STEP:r.g0,TRANSACTING_ORDER_STATUS:r.eD,status:r.eD.HANGING,countdown:1,isTimeOut:!1,loading:!1,radio:"",orderInfo:{},orderPayments:[],underOrders:[],componentsMapping:(t={},(0,i.Z)(t,r.hL.BANK,"BankPaymentInfo"),(0,i.Z)(t,r.hL.ALI,"AliPaymentInfo"),(0,i.Z)(t,r.hL.WE_CHAT,"WechatPaymentInfo"),t)}},computed:{hide:function(){return this.status==this.TRANSACTING_ORDER_STATUS.SELLER_CANCELED_DEAL||this.status==this.TRANSACTING_ORDER_STATUS.BUYRER_CANCELD_DEAL||this.status==this.TRANSACTING_ORDER_STATUS.SELLER_DID_NOT_RECEIVE&&this.isCountdownEnd||this.status==this.TRANSACTING_ORDER_STATUS.CONFIRM_TRANSFER||this.status==this.TRANSACTING_ORDER_STATUS.CANCELED_BY_OFFICIAL||this.status==this.TRANSACTING_ORDER_STATUS.CONFIRMED_BY_OFFICIAL||this.status==this.TRANSACTING_ORDER_STATUS.DEAL||this.status==this.TRANSACTING_ORDER_STATUS.TIME_OVER},isCountdownEnd:function(){return this.countdown<=0},stepsActive:function(){return this.STEP[this.status]},isTimeoutDisputing:function(){return!(this.status!=this.TRANSACTING_ORDER_STATUS.DISPUTING||!this.isTimeOut)},payments:function(){return this.$root.parsePayments(this.orderInfo.paymentType)},getPaymentInfo:function(){var t=this;return this.orderPayments.find((function(n){return n.type===t.radio}))||{}}},created:function(){this.loadDetails(this.$route.params.id),this.$root.$emit("root:set-topbar",["left-back","customer-service"])},beforeDestroy:function(){clearTimeout(this.timer)},methods:{transactingOrderStatus:function(){var t;return(t=this.$options.filters).transactingOrderStatus.apply(t,arguments)},cancel_hanging:function(){this.cancelHangOrder()},start_transaction:function(){(0,o.H9)()},cancel_transaction:function(){(0,o.VN)(2)},loadDetails:function(t){var n=this;this.loading||(this.loading=!0,(0,d.cf)({pendingOrderId:t},this.ApiPath).then((function(s){var a=s.ok,e=s.msg,i=s.data;n.loading=!1,a?(n.orderInfo=i.pendingOrder,n.orderPayments=i.paymentType,n.radio=n.payments[0],n.orderInfo.underwayOrder>0?(n.status=r.eD.BUYER_REQUEST,n.loadUnderOrders()):(n.status=r.eD.HANGING,n.underOrders=[]),0!==n.orderInfo.status&&(n.timer=setTimeout((function(){return n.loadDetails(t)}),1e4))):n.$toast.fail(e)})))},loadUnderOrders:function(){var t=this;(0,d.vi)({pendingOrderId:this.orderInfo.pendingOrderId,page:1,pageSize:20},this.ApiPath).then((function(n){var s=n.ok,a=n.msg,e=n.data;s?t.underOrders=e.list:t.$toast.fail(a)}))},cancelHangOrder:function(){var t=this;(0,d.$i)({pendingOrderId:this.orderInfo.pendingOrderId},this.ApiPath).then((function(n){var s=n.ok,a=n.msg;s?(t.$router.back(),t.$toast.success(a)):t.$toast.fail(a)}))}}},_=l,f=s(1001),p=(0,f.Z)(_,a,e,!1,null,null,null),T=p.exports},41360:function(t,n,s){s.d(n,{EQ:function(){return o},H9:function(){return i},VN:function(){return r}});s(41539),s(92222);var a=s(60026),e=function(t,n){return new Promise((function(s,e){a.Z.confirm({title:t,message:n,confirmButtonText:"是",cancelButtonText:"否",confirmButtonColor:"#6f59fe",allowHtml:!0,beforeClose:function(t,n){n(),"confirm"===t?s():e()}})["catch"]((function(t){}))}))},i=function(){return e("是否开始交易","<div>\n开始交易后可在“交易记录”，“订单”中\n「我的卖单」完成后续操作\n</div>")},r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return e("是否取消该笔交易",'<div>\n      <div class="tip">\n        提示：\n      </div>\n      <div>\n          1.如果你在一天内取消<span style="color:#FB2222">'.concat(n,'次</span>订单，当天你的账户将会被停止买卖。\n      </div>\n      <div class="al-c">\n          今日还可取消\n          <span style="color:#FB2222">').concat(t,"次</span>\n          订单，请谨慎操作\n      </div>\n    </div>\n"))},o=function(){return e("是否未收到转账",'请再次确认您的收款账户是否未收到转账，\n如发现\n<span style="color:#FB2222">恶意不确认转币</span>\n可能会面临\n<span style="color:#FB2222">「永久封号」</span>\n处理')}}}]);
//# sourceMappingURL=7835.bc9edab2.js.map