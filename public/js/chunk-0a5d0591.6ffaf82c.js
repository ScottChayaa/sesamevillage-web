(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a5d0591","chunk-74c42831"],{"60b9":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("9ab4"),o=n("1b40"),c=n("0d59"),r=n("93f3"),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(i["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,c["c"].getGrade(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={grade:t,token:this.token},[4,c["c"].getLevel(e)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getUnit=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(n){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,c["c"].getAllCity(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,c["c"].getRegion(e)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(n){switch(n.label){case 0:return t={token:this.token},[4,c["c"].getSchoolCity(t)];case 1:return e=n.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={sid:t,token:this.token},[4,c["c"].getCity(e)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getSchool=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,n;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,c["c"].getSchool(e)];case 1:return n=i.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getClass=function(t,e,n){return Object(i["a"])(this,void 0,void 0,(function(){var o,r;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return o={type:t,sid:e,clid:n,token:this.token},[4,c["f"].getClass(o)];case 1:return r=i.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e.prototype.getTeacher=function(t,e,n){return Object(i["a"])(this,void 0,void 0,(function(){var o,r;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return o={type:t,clid:e,tid:n,token:this.token},[4,c["f"].getClassTeacher(o)];case 1:return r=i.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e}(o["d"]),a=s.instance},"8cf3":function(t,e,n){},ecf9:function(t,e,n){"use strict";n.r(e),n.d(e,"InputForm",(function(){return l}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("SideNav",{attrs:{currentPage:"instructions"}}),n("div",{staticClass:"main"},[n("h1",[t._v("使用說明")]),n("form",{attrs:{name:"inputForm",id:"inputForm"}},[n("div",{staticClass:"input-box input-box-w"},[n("label",{attrs:{for:"desc"}},[t._v("內文")]),n("Tinymce",{ref:"editor",on:{input:function(e){t.inputForm.content=e}}})],1),n("div",{staticClass:"btn-area"},[n("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/instructions"}},[n("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),n("div",{staticClass:"btn btn-submit"},[n("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),n("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)])]),n("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},o=[],c=n("9ab4"),r=n("1b40"),s=n("4f4c"),a=n("60b9"),u=n("3617"),d=n("0d59"),h=n("93f3"),l=function(){function t(){this.iid="",this.content=""}return t}(),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.inputForm=new l,e.token=window.localStorage.getItem("adminToken"),e.errorMsg="",e.openLB=!1,e.errNo=0,e}return Object(c["c"])(e,t),e.prototype.created=function(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["d"])(this,(function(n){switch(n.label){case 0:return t={iid:this.$route.query.iid,token:this.token},[4,d["e"].get(t)];case 1:return e=n.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){a["a"].checkToken(t.ERR_CODE);var e=t.info;this.inputForm.iid=e.iid;var n=this.$refs.editor;n.setContent(e.content),this.inputForm.content=e.content},e.prototype.validateAndSubmit=function(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e,n;return Object(c["d"])(this,(function(i){switch(i.label){case 0:return this.doubleClick?[3,2]:(this.doubleClick=!0,t=document.getElementById("inputForm"),e=new FormData(t),e.append("token",this.token),e.append("iid",this.inputForm.iid),e.append("content",this.inputForm.content),n=this,[4,d["e"].edit(e)]);case 1:n.errNo=i.sent(),a["a"].checkToken(this.errNo),this.openLB=!0,this.doubleClick=!1,this.errorMsg=h["b"][this.errNo],i.label=2;case 2:return[2]}}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===h["a"].Success&&this.$router.push("/admin/instructions")},e=Object(c["b"])([Object(r["a"])({components:{SideNav:s["e"],Tinymce:u["k"],Lightbox:u["i"]}})],e),e}(r["d"]),p=f,b=(n("8cf3"),n("2877")),k=Object(b["a"])(p,i,o,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-0a5d0591.6ffaf82c.js.map