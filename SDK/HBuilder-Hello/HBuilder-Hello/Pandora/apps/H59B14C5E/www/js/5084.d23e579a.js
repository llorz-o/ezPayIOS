"use strict";(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[5084],{45084:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page page_layout_trading"},[a("van-tabs",{model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},[a("van-tab",{attrs:{title:"挂单市场",name:"transaction",to:"/trade/transaction",replace:""}}),a("van-tab",{attrs:{title:"区块链交易",name:"crypto_trading",to:"/trade/crypto_trading",replace:""}}),this.$root.userInfo.BusinessStatus?a("van-tab",{attrs:{title:"赚钱",name:"earn",to:"/trade/earn",replace:""}}):a("van-tab",{attrs:{title:"赚钱",name:"earn_agreement",to:"/trade/earn_agreement",replace:""}})],1),a("router-view",{key:t.$route.path,staticClass:"ios-pd-tp ios-pd-bt",attrs:{hasBottomBar:t.$root.bottomBarDisplay,hasTopBar:t.$root.topBarDisplay,isHome:t.$route.meta.isHome}})],1)},o=[],n=(a(74916),a(15306),{data:function(){return{isAgreement:!0,active:""}},computed:{tabActive:{set:function(){this.active=this.$route.path.replace("/trade/","")},get:function(){return this.active}}},created:function(){this.$root.$emit("root:set-topbar",["notices","customer-service"]),this.$root.$emit("root:set-layout",{bottom:!0})}}),s=n,i=a(1001),c=(0,i.Z)(s,r,o,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=5084.d23e579a.js.map