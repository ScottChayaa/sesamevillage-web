(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52f09426"],{"088f":function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var o=e("9ab4"),i=e("1b40"),c=e("0d59"),r=e("93f3"),s=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.token=window.localStorage.getItem("studentToken"),n}return Object(o["c"])(n,t),Object.defineProperty(n,"instance",{get:function(){return n.sInstance||(n.sInstance=new n),n.sInstance},enumerable:!1,configurable:!0}),n.prototype.logout=function(){window.localStorage.clear(),window.location.href="/student/login"},n.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},n.prototype.getAllCity=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,n;return Object(o["d"])(this,(function(e){switch(e.label){case 0:return t={token:this.token},[4,c["a"].stGetAllCity(t)];case 1:return n=e.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},n.prototype.getRegion=function(t){return Object(o["a"])(this,void 0,void 0,(function(){var n,e;return Object(o["d"])(this,(function(o){switch(o.label){case 0:return n={cid:t,token:this.token},[4,c["a"].stGetRegion(n)];case 1:return e=o.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},n}(i["d"]),u=s.instance},f7c1:function(t,n,e){}}]);
//# sourceMappingURL=chunk-52f09426.3a1fa6b4.js.map