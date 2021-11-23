(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5ab4ec8","chunk-74c42831"],{2745:function(t,e,o){"use strict";o.r(e),o.d(e,"TextbookForm",(function(){return f}));var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrap"},[o("SideNav",{attrs:{currentPage:"textbook"}}),o("div",{staticClass:"main"},[o("h1",[t._v("教材資料")]),o("div",{staticClass:"btn-area"},[o("router-link",{staticClass:"btn",attrs:{to:"/admin/textbook"}},[o("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),o("form",{attrs:{action:"",method:"post",name:"textbookForm",id:"textbookForm"}},[o("div",{staticClass:"input-box"},[t._m(0),o("select",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.grade,expression:"textbookForm.grade"}],staticClass:"select-sty w200",attrs:{name:"grade"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.textbookForm,"grade",e.target.multiple?o:o[0])},t.getLevel]}},[o("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,r){return o("option",{key:r,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2),""!==t.errorMsgMap["grade"]?o("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["grade"]))]):t._e()]),o("div",{staticClass:"input-box"},[t._m(1),o("select",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.category,expression:"textbookForm.category"}],staticClass:"select-sty w200",attrs:{name:"category"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.textbookForm,"category",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"1"}},[t._v("全部")]),o("option",{attrs:{value:"2"}},[t._v("直營")]),o("option",{attrs:{value:"3"}},[t._v("加盟")])]),""!==t.errorMsgMap["category"]?o("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["category"]))]):t._e()]),o("div",{staticClass:"input-box input-box-w"},[t._m(2),o("select",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.level,expression:"textbookForm.level"}],staticClass:"select-sty w200",attrs:{name:"level"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.textbookForm,"level",e.target.multiple?o:o[0])},t.getUnit]}},[o("option",{attrs:{value:""}},[t._v("請選擇Level")]),t._l(t.levelList,(function(e,r){return o("option",{key:r,domProps:{value:e.level}},[t._v(t._s(e.level))])}))],2),""!==t.errorMsgMap["level"]?o("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["level"]))]):t._e()]),o("div",{staticClass:"input-box input-box-w"},[t._m(3),o("select",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.unit,expression:"textbookForm.unit"}],staticClass:"select-sty w200",attrs:{name:"unit"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.textbookForm,"unit",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("請選擇單元")]),t._l(t.unitList,(function(e,r){return o("option",{key:r,domProps:{value:e.unit}},[t._v(t._s(e.unit))])}))],2),""!==t.errorMsgMap["unit"]?o("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["unit"]))]):t._e()]),o("div",{staticClass:"input-box input-box-w"},[t._m(4),o("div",{staticClass:"note"},[t._v("建議尺寸 300x400，格式限jpg、png、jpeg，檔案大小限2M內")]),o("div",{staticClass:"upload-img"},[o("div",{staticClass:"textbook-box upload-box-sty",on:{click:function(e){return t.$refs.file.click()}}},[o("input",{ref:"file",staticClass:"upload-pic",attrs:{type:"file",name:"pic",id:"pic",accept:"image/*"},on:{change:function(e){return t.changePic(e)}}}),o("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[o("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.textbookForm.pic,expression:"textbookForm.pic != ''"}],attrs:{src:t.textbookForm.pic,alt:""}})])])]),""!==t.errorMsgMap["pic"]?o("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pic"]))]):t._e()]),o("div",{staticClass:"input-box input-box-w"},[t._m(5),o("div",{staticClass:"note"},[t._v("上傳單個檔案，格式限pdf，檔案大小限5M內")]),o("div",{staticClass:"upload-form-file"},[o("div",{staticClass:"form-file"},[o("input",{attrs:{type:"file",name:"pdf",id:"pdf",accept:".pdf"},on:{change:t.changePdf}}),o("i",{staticClass:"fa fa-cloud-upload"}),t._v(" 上傳pdf檔 ")]),o("span",{staticClass:"file-name",attrs:{id:"fileNameBox"}},[t._v(t._s(t.textbookForm.pdf))])]),""!==t.errorMsgMap["pdf"]?o("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["pdf"]))]):t._e()]),o("div",{staticClass:"input-box"},[t._m(6),o("div",{staticClass:"check-list"},[o("label",{attrs:{for:"active_1"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.active,expression:"textbookForm.active"}],attrs:{type:"radio",name:"active",id:"active_1",value:"1"},domProps:{checked:t._q(t.textbookForm.active,"1")},on:{change:function(e){return t.$set(t.textbookForm,"active","1")}}}),o("div",{staticClass:"radio-box"}),o("span",[t._v("啟用")])]),o("label",{attrs:{for:"active_2"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.textbookForm.active,expression:"textbookForm.active"}],staticClass:"radio-box",attrs:{type:"radio",name:"active",id:"active_2",value:"2"},domProps:{checked:t._q(t.textbookForm.active,"2")},on:{change:function(e){return t.$set(t.textbookForm,"active","2")}}}),o("div",{staticClass:"radio-box"}),o("span",[t._v("停用")])]),""!==t.errorMsgMap["active"]?o("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["active"]))]):t._e()])]),o("div",{staticClass:"btn-area"},[o("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/textbook"}},[o("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),o("div",{staticClass:"btn btn-submit"},[o("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),o("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)])]),o("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"grade"}},[o("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("級數")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"category"}},[o("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("使用分校")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"level"}},[o("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("Level")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"unit"}},[o("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("單元")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"pic"}},[o("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("上傳教材封面圖")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"pdf"}},[o("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("檔案上傳")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"active"}},[o("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("狀態")])}],a=o("9ab4"),n=o("1b40"),s=o("87d7"),c=o("f2fa"),l=o("43e4"),u=o("4f4c"),v=o("3617"),d=o("93f3"),p=o("0d59"),b=o("60b9"),f=function(){function t(){this.grade="",this.category="1",this.level="",this.unit="",this.pic="",this.pdf="",this.active="",this.tbid=""}return Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"grade",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"category",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"level",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"unit",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"pic",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"pdf",void 0),Object(a["b"])([Object(s["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"active",void 0),t}(),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.textbookForm=new f,e.token=window.localStorage.getItem("adminToken"),e.gradeList={},e.levelList={},e.unitList={},e.errorMsg="",e.openLB=!1,e.errorMsgMap={grade:"",category:"",level:"",unit:"",pic:"",pdf:"",active:""},e}return Object(a["c"])(e,t),e.prototype.created=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e,o,r,i,n;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return t={tbid:this.$route.query.tbid,token:this.token},[4,p["k"].get(t)];case 1:return e=a.sent(),this.assignDataToForm(e),o=this.textbookForm.grade,this.textbookForm.level,r=this,[4,b["a"].getGrade()];case 2:return r.gradeList=a.sent(),i=this,[4,b["a"].getLevel(o)];case 3:for(i.levelList=a.sent(),n=1;n<=25;n++)this.unitList[n]={unit:"Unit-"+n};return[2]}}))}))},e.prototype.assignDataToForm=function(t){b["a"].checkToken(t.ERR_CODE);var e=t.info;this.textbookForm.tbid=e.tbid,this.textbookForm.grade=e.grade,this.textbookForm.category=e.category,this.textbookForm.level=e.level,this.textbookForm.unit=e.unit,this.textbookForm.pic=e.pic,this.textbookForm.pdf=e.pdf,this.textbookForm.active=e.active},e.prototype.getLevel=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t,e;return Object(a["d"])(this,(function(o){switch(o.label){case 0:return this.textbookForm.level="",this.textbookForm.unit="",t=this.textbookForm.grade,e=this,[4,b["a"].getLevel(t)];case 1:return e.levelList=o.sent(),this.unitList={},[2]}}))}))},e.prototype.getUnit=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t;return Object(a["d"])(this,(function(e){for(this.textbookForm.unit="",t=1;t<=25;t++)this.unitList[t]={unit:"Unit-"+t};return[2]}))}))},e.prototype.changePic=function(t){var e=this,o=t.target.files[0];if(o){var r=o.name.substring(o.name.lastIndexOf(".")+1);if("jpg"!==r&&"png"!==r&&"jpeg"!==r)return this.errorMsg="上傳檔案只能是 jpg、png、jpeg 格式！",void(this.openLB=!0);var i=o.size/1024/1024<2;if(!i)return this.errorMsg="上傳檔案不能超過 2MB！",void(this.openLB=!0);var a=new FileReader;a.onload=function(t){e.textbookForm.pic=t.target.result},a.readAsDataURL(o)}},e.prototype.changePdf=function(t){return Object(a["a"])(this,void 0,void 0,(function(){var e,o,r,i,n=this;return Object(a["d"])(this,(function(a){if(e=t.target.files[0],e){if(o=e.name.substring(e.name.lastIndexOf(".")+1),"pdf"!==o)return this.errorMsg="上傳檔案只能是 pdf 格式！",this.openLB=!0,[2];if(r=e.size/1024/1024<5,!r)return this.errorMsg="上傳檔案不能超過 5MB！",this.openLB=!0,[2];i=new FileReader,i.onload=function(t){n.textbookForm.pdf=e.name},i.readAsDataURL(e)}return[2]}))}))},e.prototype.validateAndSubmit=function(){var t=this;Object(l["a"])(this.textbookForm,{skipMissingProperties:!0}).then((function(e){return Object(a["a"])(t,void 0,void 0,(function(){var t,o,r,i=this;return Object(a["d"])(this,(function(a){switch(a.label){case 0:return 0!==e.length?(this.errorMsgMap={grade:"",category:"",level:"",unit:"",pic:"",pdf:"",active:""},e.forEach((function(t,e){var o=t.constraints;Object.keys(o).forEach((function(e){i.errorMsgMap[t.property]=o[e]}))})),[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t=document.getElementById("textbookForm"),o=new FormData(t),o.append("tbid",this.textbookForm.tbid),o.append("token",this.token),r=this,[4,p["k"].edit(o)]);case 1:if(r.errNo=a.sent(),this.errNo===d["a"].InvalidToken)return b["a"].logout(),[2];this.openLB=!0,this.doubleClick=!1,this.errorMsg=d["b"][this.errNo],a.label=2;case 2:return[2]}}))}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===d["a"].Success&&this.$router.push("/admin/textbook")},e=Object(a["b"])([Object(n["a"])({components:{SideNav:u["e"],Lightbox:v["i"]}})],e),e}(n["d"]),m=h,g=(o("8cf3"),o("2877")),k=Object(g["a"])(m,r,i,!1,null,null,null);e["default"]=k.exports},"60b9":function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var r=o("9ab4"),i=o("1b40"),a=o("0d59"),n=o("93f3"),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e}return Object(r["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==n["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(o){switch(o.label){case 0:return t={token:this.token},[4,a["c"].getGrade(t)];case 1:return e=o.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,o;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={grade:t,token:this.token},[4,a["c"].getLevel(e)];case 1:return o=r.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getUnit=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(o){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]}))}))},e.prototype.getAllCity=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(o){switch(o.label){case 0:return t={token:this.token},[4,a["c"].getAllCity(t)];case 1:return e=o.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,o;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getRegion(e)];case 1:return o=r.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(o){switch(o.label){case 0:return t={token:this.token},[4,a["c"].getSchoolCity(t)];case 1:return e=o.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,o;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={sid:t,token:this.token},[4,a["c"].getCity(e)];case 1:return o=r.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getSchool=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var e,o;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return e={cid:t,token:this.token},[4,a["c"].getSchool(e)];case 1:return o=r.sent(),this.checkToken(o.ERR_CODE),[2,o.list]}}))}))},e.prototype.getClass=function(t,e,o){return Object(r["a"])(this,void 0,void 0,(function(){var i,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return i={type:t,sid:e,clid:o,token:this.token},[4,a["f"].getClass(i)];case 1:return n=r.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e.prototype.getTeacher=function(t,e,o){return Object(r["a"])(this,void 0,void 0,(function(){var i,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return i={type:t,clid:e,tid:o,token:this.token},[4,a["f"].getClassTeacher(i)];case 1:return n=r.sent(),this.checkToken(n.ERR_CODE),[2,n.list]}}))}))},e}(i["d"]),c=s.instance},"8cf3":function(t,e,o){}}]);
//# sourceMappingURL=chunk-c5ab4ec8.9431b3ac.js.map