(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229853"],{de95:function(t,i,e){"use strict";e.r(i),e.d(i,"LoginForm",(function(){return v}));var o=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{staticClass:"login-page"},[o("div",{staticClass:"login-box"},[o("div",{staticClass:"box"}),o("form",{attrs:{method:"post",name:"login",id:"login"}},[t._m(0),t._m(1),o("div",{staticClass:"l-login"},[o("div",{staticClass:"logo"}),o("h1",[t._v("忘記密碼")]),o("div",{staticClass:"input-box"},[o("i",{staticClass:"fa fa-user"}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.account,expression:"loginForm.account"}],staticClass:"input-sty",attrs:{type:"text",name:"account",id:"account",placeholder:" 請輸入您的帳號E-mail",autocomplete:"off"},domProps:{value:t.loginForm.account},on:{input:function(i){i.target.composing||t.$set(t.loginForm,"account",i.target.value)}}}),o("label",{directives:[{name:"show",rawName:"v-show",value:""!==t.errorMsgMap["account"],expression:"errorMsgMap['account'] !== ''"}],staticClass:"error"},[t._v(t._s(t.errorMsgMap["account"]))])]),o("div",{staticClass:"input-box input-number h-flexCenter-ai"},[o("img",{staticClass:"val-img",attrs:{src:t.verificationCode.imgSrc}}),o("img",{staticClass:"refresh",attrs:{id:"refresh",src:e("28c0"),disabled:t.doubleClick},on:{click:function(i){return i.preventDefault(),t.refreshVerificationCode()}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.verification,expression:"loginForm.verification"}],staticClass:"input-code code",attrs:{type:"text",placeholder:"輸入驗證碼",maxlength:4,name:"code_num",id:"code_num"},domProps:{value:t.loginForm.verification},on:{input:function(i){i.target.composing||t.$set(t.loginForm,"verification",i.target.value)}}}),o("label",{directives:[{name:"show",rawName:"v-show",value:""!==t.errorMsgMap["verification"],expression:"errorMsgMap['verification'] !== ''"}],staticClass:"error"},[t._v(t._s(t.errorMsgMap["verification"]))])]),t._m(2),o("div",{staticClass:"l-login-btn-box"},[o("a",{staticClass:"btn login-submit-btn",attrs:{disabled:t.doubleClick},on:{click:function(i){return i.preventDefault(),t.validateAndSubmit()}}},[t._v("送出")])]),o("div",{staticClass:"l-login-footer"},[t._v(" ©2021 芝蔴街e學園 ")]),t._m(3)])])])]),o("APLightbox",{attrs:{message:t.lightbox.errorMsg,showLB:t.lightbox.showLB},on:{closeAPLightbox:t.closeLB}})],1)},r=[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"login_dec02"},[o("img",{attrs:{src:e("2b89")}})])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"login_dec03"},[o("img",{attrs:{src:e("57d9")}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"l-login-error-mesg"},[e("i",{staticClass:"fa fa-exclamation-circle"}),t._v("送出後將由系統發送密碼重置信至此帳號信箱")])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"dec login_dec01"},[o("img",{attrs:{src:e("8472")}})])}],s=e("9ab4"),a=e("1b40"),n=e("87d7"),c=e("f2fa"),l=e("43e4"),u=e("93f3"),d=e("0d59"),h=e("3617"),f=e("f00f"),v=function(){function t(){this.account="",this.verification=""}return Object(s["b"])([Object(n["a"])(),Object(c["a"])({message:"*必填"})],t.prototype,"account",void 0),Object(s["b"])([Object(n["a"])(),Object(c["a"])({message:"*必填"})],t.prototype,"verification",void 0),t}(),g=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.doubleClick=!1,i.loginForm=new v,i.verificationCode={uid:"",imgSrc:""},i.errorMsgMap={account:"",verification:""},i.lightbox={showLB:!1,errorMsg:""},i}return Object(s["c"])(i,t),i.prototype.created=function(){this.refreshVerificationCode()},i.prototype.refreshVerificationCode=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,i,e,o;return Object(s["d"])(this,(function(r){switch(r.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,t=Math.floor(Date.now()/1e3).toString(),i=Math.floor(1e3*Math.random()).toString(),this.verificationCode.uid=t+i,e={uniqueID:this.verificationCode.uid},o=this.verificationCode,[4,d["a"].refreshCodeImg(e)]);case 1:o.imgSrc=r.sent(),this.doubleClick=!1,r.label=2;case 2:return[2]}}))}))},i.prototype.validateAndSubmit=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t=this;return Object(s["d"])(this,(function(i){return Object(l["a"])(this.loginForm,{skipMissingProperties:!0}).then((function(i){return Object(s["a"])(t,void 0,void 0,(function(){var t,e,o,r,a=this;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return this.errorMsgMap={account:"",verification:""},0!==i.length?(i.forEach((function(t,i){var e=t.constraints;Object.keys(e).forEach((function(i){a.errorMsgMap[t.property]=e[i]}))})),[2]):this.doubleClick?[3,3]:(this.doubleClick=!0,t={code:this.loginForm.verification,uniqueID:this.verificationCode.uid},[4,d["a"].verificationCodeCheck(t)]);case 1:return e=s.sent(),e!==u["a"].Success?(this.errorMsgMap["verification"]=u["b"][e],this.doubleClick=!1,this.refreshVerificationCode(),[2]):(o={acc:this.loginForm.account},[4,d["a"].teForgetPwd(o)]);case 2:r=s.sent(),r===u["a"].Success?(this.lightbox.errorMsg="已發送重設密碼信件，請前往電子信箱查看",f["a"].setCookie("resetPwd",this.loginForm.account,"/teacher"),this.lightbox.showLB=!0):(this.lightbox.errorMsg=u["b"][r],this.lightbox.showLB=!0,this.refreshVerificationCode()),this.doubleClick=!1,s.label=3;case 3:return[2]}}))}))})),[2]}))}))},i.prototype.closeLB=function(){this.lightbox.showLB=!1},i=Object(s["b"])([Object(a["a"])({components:{APLightbox:h["c"]}})],i),i}(a["d"]),m=g,b=(e("d380"),e("2877")),p=Object(b["a"])(m,o,r,!1,null,null,null);i["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d229853.e1448aad.js.map