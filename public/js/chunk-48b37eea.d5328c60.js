(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48b37eea","chunk-74c42831"],{"05bf":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("8b1c"),n=i("e48f"),o=i("4fc0");function a(t,e){return function(i,a){var r={type:s["a"].CONDITIONAL_VALIDATION,target:i.constructor,propertyName:a,constraints:[t],validationOptions:e};Object(o["b"])().addValidationMetadata(new n["a"](r))}}},"0dd9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var s=n(i("d887"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){var i,n;(0,s.default)(t),"object"===o(e)?(i=e.min||0,n=e.max):(i=arguments[1]||0,n=arguments[2]);var a=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],r=t.length-a.length;return r>=i&&("undefined"===typeof n||r<=n)}t.exports=e.default,t.exports.default=e.default},"60b9":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("9ab4"),n=i("1b40"),o=i("0d59"),a=i("93f3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e.admin_identity=window.localStorage.getItem("admin_identity"),e}return Object(s["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==a["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getGrade(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={grade:t,token:this.token},[4,o["c"].getLevel(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getUnit=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return("/admin/quiz/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/quiz/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/add"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)&&("/admin/homework/question/edit"!=window.location.pathname||"2"!=this.admin_identity&&"3"!=this.admin_identity)?(t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]):[2,t]}))}))},e.prototype.getAllCity=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getAllCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getRegion(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e;return Object(s["d"])(this,(function(i){switch(i.label){case 0:return t={token:this.token},[4,o["c"].getSchoolCity(t)];case 1:return e=i.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={sid:t,token:this.token},[4,o["c"].getCity(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getSchool=function(t){return Object(s["a"])(this,void 0,void 0,(function(){var e,i;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getSchool(e)];case 1:return i=s.sent(),this.checkToken(i.ERR_CODE),[2,i.list]}}))}))},e.prototype.getClass=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,sid:e,clid:i,token:this.token},[4,o["f"].getClass(n)];case 1:return a=s.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e.prototype.getTeacher=function(t,e,i){return Object(s["a"])(this,void 0,void 0,(function(){var n,a;return Object(s["d"])(this,(function(s){switch(s.label){case 0:return n={type:t,clid:e,tid:i,token:this.token},[4,o["f"].getClassTeacher(n)];case 1:return a=s.sent(),this.checkToken(a.ERR_CODE),[2,a.list]}}))}))},e}(n["d"]),c=r.instance},"7f42":function(t,e,i){"use strict";i.r(e),i.d(e,"QuestionForm",(function(){return b}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("SideNav",{attrs:{currentPage:"homework"}}),i("div",{staticClass:"main"},[i("h1",[t._v("作業管理-題目資料")]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn",attrs:{to:"/admin/homework/question"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),i("form",{attrs:{action:"",method:"post",name:"questionAdd",id:"questionAdd"}},[i("div",{staticClass:"input-box box-16"},[t._m(0),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.grade,expression:"questionForm.grade"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"grade"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"grade",e.target.multiple?i:i[0])},t.getLevel]}},[i("option",{attrs:{value:""}},[t._v("請選擇級數")]),t._l(t.gradeList,(function(e,s){return i("option",{key:s,domProps:{value:e.grade}},[t._v(t._s(e.grade))])}))],2),""!==t.errorMsgMap["grade"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["grade"]))]):t._e()]),i("div",{staticClass:"input-box box-16"},[t._m(1),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.level,expression:"questionForm.level"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"level"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"level",e.target.multiple?i:i[0])},t.getUnit]}},[i("option",{attrs:{value:""}},[t._v("請選擇Level")]),t._l(t.levelList,(function(e,s){return i("option",{key:s,domProps:{value:e.level}},[t._v(t._s(e.level))])}))],2),""!==t.errorMsgMap["level"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["level"]))]):t._e()]),i("div",{staticClass:"input-box box-16"},[t._m(2),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.unit,expression:"questionForm.unit"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"unit"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"unit",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇單元")]),t._l(t.unitList,(function(e,s){return i("option",{key:s,domProps:{value:e.unit}},[t._v(t._s(e.unit))])}))],2),""!==t.errorMsgMap["unit"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["unit"]))]):t._e()]),i("div",{staticClass:"input-box box-16"},[t._m(3),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.difficulty,expression:"questionForm.difficulty"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"difficulty",id:"difficulty"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"difficulty",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇難易度")]),i("option",{attrs:{value:"1"}},[t._v("難")]),i("option",{attrs:{value:"2"}},[t._v("中")]),i("option",{attrs:{value:"3"}},[t._v("易")])]),""!==t.errorMsgMap["difficulty"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["difficulty"]))]):t._e()]),i("div",{staticClass:"input-box box-16"},[t._m(4),i("select",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.tid,expression:"questionForm.tid"}],staticClass:"select-sty h-mr10 box-100",attrs:{name:"tid",id:"tid"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.questionForm,"tid",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:""}},[t._v("請選擇老師")]),t._l(t.teacherList,(function(e,s){return i("option",{key:s,domProps:{value:e.tid}},[t._v(t._s(e.name))])}))],2),""!==t.errorMsgMap["tid"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["tid"]))]):t._e()]),i("div",{staticClass:"input-box input-box-w"},[t._m(5),i("div",{staticClass:"check-list"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type,expression:"questionForm.type"}],attrs:{type:"radio",name:"type",id:"type_1",value:"1"},domProps:{checked:t._q(t.questionForm.type,"1")},on:{change:function(e){return t.$set(t.questionForm,"type","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("選擇題")])]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type,expression:"questionForm.type"}],staticClass:"radio-box",attrs:{type:"radio",name:"type",id:"type_2",value:"2"},domProps:{checked:t._q(t.questionForm.type,"2")},on:{change:function(e){return t.$set(t.questionForm,"type","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("是非題")])]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.type,expression:"questionForm.type"}],staticClass:"radio-box",attrs:{type:"radio",name:"type",id:"type_3",value:"3"},domProps:{checked:t._q(t.questionForm.type,"3")},on:{change:function(e){return t.$set(t.questionForm,"type","3")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("問答題")])]),""!==t.errorMsgMap["type"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["type"]))]):t._e()])]),i("div",{staticClass:"input-box"},[t._m(6),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.question,expression:"questionForm.question"}],staticClass:"input-sty h-h320 desc-info",attrs:{name:"question",id:"question",maxlength:1e3,placeholder:"(必填)"},domProps:{value:t.questionForm.question},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"question",e.target.value)}}}),""!==t.errorMsgMap["question"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["question"]))]):t._e()]),i("div",{staticClass:"input-box"},[i("label",{attrs:{for:""}},[t._v("題目圖片")]),i("div",{staticClass:"note"},[t._v("建議尺寸 500x280 以上，格式限jpg、png、gif、jpeg，檔案大小限3M ")]),i("div",{staticClass:"upload-img"},[i("div",{staticClass:"exam-box upload-box-sty",on:{click:function(e){return t.$refs.file.click()}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic,expression:"questionForm.pic != ''"}],staticClass:"del",on:{click:function(e){return t.delPic()}}},[i("i",{staticClass:"fa fa-times"})]),i("input",{ref:"file",staticClass:"upload-pic",attrs:{type:"file",name:"pic",id:"pic",accept:"image/*"},on:{change:function(e){return t.previewPic(e)}}}),i("div",{staticClass:"upload-click-area",attrs:{id:"previews"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.questionForm.pic,expression:"questionForm.pic != ''"}],attrs:{src:t.questionForm.pic,alt:""}})])])])]),1==t.questionForm.type||2==t.questionForm.type?i("div",{staticClass:"input-box input-box-w"},[t._m(7),i("div",{staticClass:"check-list"},[i("label",{staticClass:"h-flexCenter-ai",attrs:{for:"answer_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_1",value:"1"},domProps:{checked:t._q(t.questionForm.answer,"1")},on:{change:function(e){return t.$set(t.questionForm,"answer","1")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"w150"},[t._v("選為答案")]),i("span",{staticClass:"h-mr20"},[t._v("1")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.option1,expression:"questionForm.option1"}],staticClass:"input-sty",attrs:{type:"text",name:"option[1]"},domProps:{value:t.questionForm.option1},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"option1",e.target.value)}}}),""!==t.errorMsgMap["option1"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["option1"]))]):t._e()]),i("label",{staticClass:"h-flexCenter-ai",attrs:{for:"answer_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_2",value:"2"},domProps:{checked:t._q(t.questionForm.answer,"2")},on:{change:function(e){return t.$set(t.questionForm,"answer","2")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"w150"},[t._v("選為答案")]),i("span",{staticClass:"h-mr20"},[t._v("2")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.option2,expression:"questionForm.option2"}],staticClass:"input-sty",attrs:{type:"text",name:"option[2]"},domProps:{value:t.questionForm.option2},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"option2",e.target.value)}}}),""!==t.errorMsgMap["option2"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["option2"]))]):t._e()]),1==t.questionForm.type?i("label",{staticClass:"h-flexCenter-ai",attrs:{for:"answer_3"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_3",value:"3"},domProps:{checked:t._q(t.questionForm.answer,"3")},on:{change:function(e){return t.$set(t.questionForm,"answer","3")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"w150"},[t._v("選為答案")]),i("span",{staticClass:"h-mr20"},[t._v("3")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.option3,expression:"questionForm.option3"}],staticClass:"input-sty",attrs:{type:"text",name:"option[3]"},domProps:{value:t.questionForm.option3},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"option3",e.target.value)}}})]):t._e(),1==t.questionForm.type?i("label",{staticClass:"h-flexCenter-ai",attrs:{for:"answer_4"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.answer,expression:"questionForm.answer"}],staticClass:"radio-box",attrs:{type:"radio",name:"answer",id:"answer_4",value:"4"},domProps:{checked:t._q(t.questionForm.answer,"4")},on:{change:function(e){return t.$set(t.questionForm,"answer","4")}}}),i("div",{staticClass:"radio-box"}),i("span",{staticClass:"w150"},[t._v("選為答案")]),i("span",{staticClass:"h-mr20"},[t._v("4")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.option4,expression:"questionForm.option4"}],staticClass:"input-sty",attrs:{type:"text",name:"option[4]"},domProps:{value:t.questionForm.option4},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"option4",e.target.value)}}})]):t._e(),""!==t.errorMsgMap["answer"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["answer"]))]):t._e()])]):t._e(),3==t.questionForm.type?i("div",{staticClass:"input-box input-box-w"},[i("label",[t._v("參考答案")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.suggestAns,expression:"questionForm.suggestAns"}],staticClass:"input-sty desc-info",attrs:{name:"suggestAns",id:"suggestAns"},domProps:{value:t.questionForm.suggestAns},on:{input:function(e){e.target.composing||t.$set(t.questionForm,"suggestAns",e.target.value)}}}),""!==t.errorMsgMap["suggestAns"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["suggestAns"]))]):t._e()]):t._e(),i("div",{staticClass:"input-box"},[t._m(8),i("div",{staticClass:"check-list"},[i("label",{attrs:{for:"active_1"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.active,expression:"questionForm.active"}],attrs:{type:"radio",name:"active",id:"active_1",value:"1"},domProps:{checked:t._q(t.questionForm.active,"1")},on:{change:function(e){return t.$set(t.questionForm,"active","1")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("啟用")])]),i("label",{attrs:{for:"active_2"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.questionForm.active,expression:"questionForm.active"}],staticClass:"radio-box",attrs:{type:"radio",name:"active",id:"active_2",value:"2"},domProps:{checked:t._q(t.questionForm.active,"2")},on:{change:function(e){return t.$set(t.questionForm,"active","2")}}}),i("div",{staticClass:"radio-box"}),i("span",[t._v("停用")])]),""!==t.errorMsgMap["active"]?i("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["active"]))]):t._e()])]),i("div",{staticClass:"btn-area"},[i("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/homework/question"}},[i("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),i("div",{staticClass:"btn btn-submit"},[i("i",{staticClass:"fa fa-check"}),t._v(" 確認送出 "),i("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)])]),i("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("級數")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("Level")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("單元")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("難易度")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("出題老師")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("題型")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"question"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("題目名稱")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"tit"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("答案選項")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"articleTime"}},[i("span",{staticClass:"h-txt-red"},[t._v("*")]),t._v("狀態")])}],o=i("9ab4"),a=i("1b40"),r=i("87d7"),c=i("f2fa"),u=i("c00b"),l=i("05bf"),d=i("43e4"),p=i("4f4c"),v=i("3617"),m=i("93f3"),f=i("0d59"),h=i("60b9"),b=function(){function t(){this.grade="",this.level="",this.unit="",this.difficulty="",this.tid="",this.type="1",this.question="",this.pic="",this.option1="",this.option2="",this.option3="",this.option4="",this.suggestAns="",this.answer="",this.active="1"}return Object(o["b"])([Object(r["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"grade",void 0),Object(o["b"])([Object(r["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"level",void 0),Object(o["b"])([Object(r["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"unit",void 0),Object(o["b"])([Object(r["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"difficulty",void 0),Object(o["b"])([Object(r["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"tid",void 0),Object(o["b"])([Object(r["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"type",void 0),Object(o["b"])([Object(r["a"])(),Object(c["a"])({message:"必填"}),Object(u["a"])(1e3,{message:"最多輸入1000字"})],t.prototype,"question",void 0),Object(o["b"])([Object(l["a"])((function(t){return"1"===t.type||"2"===t.type})),Object(c["a"])({message:"必填"})],t.prototype,"option1",void 0),Object(o["b"])([Object(l["a"])((function(t){return"1"===t.type||"2"===t.type})),Object(c["a"])({message:"必填"})],t.prototype,"option2",void 0),Object(o["b"])([Object(r["a"])(),Object(u["a"])(500,{message:"最多輸入500字"})],t.prototype,"suggestAns",void 0),Object(o["b"])([Object(l["a"])((function(t){return"1"===t.type||"2"===t.type})),Object(c["a"])({message:"必填"})],t.prototype,"answer",void 0),Object(o["b"])([Object(r["a"])(),Object(c["a"])({message:"必填"})],t.prototype,"active",void 0),t}(),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.questionForm=new b,e.teacherList={},e.gradeList={},e.levelList={},e.unitList={},e.token=window.localStorage.getItem("adminToken"),e.errorMsg="",e.openLB=!1,e.errNo=0,e.errorMsgMap={grade:"",unit:"",level:"",difficulty:"",tid:"",type:"",question:"",option1:"",option2:"",suggestAns:"",answer:"",active:""},e}return Object(o["c"])(e,t),e.prototype.created=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t;return Object(o["d"])(this,(function(e){switch(e.label){case 0:return this.getTeacher(),t=this,[4,h["a"].getGrade()];case 1:return t.gradeList=e.sent(),[2]}}))}))},e.prototype.getLevel=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e;return Object(o["d"])(this,(function(i){switch(i.label){case 0:return this.questionForm.level="",this.questionForm.unit="",t=this.questionForm.grade,e=this,[4,h["a"].getLevel(t)];case 1:return e.levelList=i.sent(),this.unitList={},[2]}}))}))},e.prototype.getUnit=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t;return Object(o["d"])(this,(function(e){switch(e.label){case 0:return this.questionForm.unit="",t=this,[4,h["a"].getUnit()];case 1:return t.unitList=e.sent(),[2]}}))}))},e.prototype.getTeacher=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e,i,s;return Object(o["d"])(this,(function(n){switch(n.label){case 0:return t=window.localStorage.getItem("admin_identity"),e=window.localStorage.getItem("admin_sid"),i={type:1,identity:t,sid:e,token:this.token},[4,f["f"].getTeacher(i)];case 1:return s=n.sent(),h["a"].checkToken(s.ERR_CODE),this.teacherList=s.list,[2]}}))}))},e.prototype.previewPic=function(t){var e=this,i=t.target.files[0];if(i){var s=i.name.substring(i.name.lastIndexOf(".")+1);if("jpg"!==s&&"png"!==s&&"gif"!==s&&"jpeg"!==s)return this.errorMsg="上傳檔案只能是 jpg、png、gif、jpeg 格式！",void(this.openLB=!0);var n=i.size/1024/1024<3;if(!n)return this.errorMsg="上傳檔案不能超過 3MB！",void(this.openLB=!0);var o=new FileReader;o.onload=function(t){e.questionForm.pic=t.target.result},o.readAsDataURL(i)}},e.prototype.delPic=function(){this.questionForm.pic=""},e.prototype.validateAndSubmit=function(){var t=this;Object(d["a"])(this.questionForm,{skipMissingProperties:!0}).then((function(e){return Object(o["a"])(t,void 0,void 0,(function(){var t,i,s,n=this;return Object(o["d"])(this,(function(o){switch(o.label){case 0:return 0!==e.length?(this.errorMsgMap={grade:"",unit:"",level:"",difficulty:"",tid:"",question:"",type:"",option1:"",option2:"",suggestAns:"",answer:"",active:""},e.forEach((function(t,e){var i=t.constraints;Object.keys(i).forEach((function(e){n.errorMsgMap[t.property]=i[e]}))})),[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t=document.getElementById("questionAdd"),i=new FormData(t),i.append("token",this.token),s=this,[4,f["d"].addQuestion(i)]);case 1:s.errNo=o.sent(),h["a"].checkToken(this.errNo),this.openLB=!0,this.doubleClick=!1,this.errorMsg=m["b"][this.errNo],o.label=2;case 2:return[2]}}))}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===m["a"].Success&&this.$router.push("/admin/homework/question")},e=Object(o["b"])([Object(a["a"])({components:{SideNav:p["e"],Lightbox:v["i"]}})],e),e}(a["d"]),_=g,y=(i("8cf3"),i("2877")),q=Object(y["a"])(_,s,n,!1,null,null,null);e["default"]=q.exports},"8cf3":function(t,e,i){},c00b:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("472e"),n=i("0dd9"),o=i.n(n),a="maxLength";function r(t,e){return"string"===typeof t&&o()(t,{min:0,max:e})}function c(t,e){return Object(s["a"])({name:a,constraints:[t],validator:{validate:function(t,e){return r(t,e.constraints[0])},defaultMessage:Object(s["b"])((function(t){return t+"$property must be shorter than or equal to $constraint1 characters"}),e)}},e)}}}]);
//# sourceMappingURL=chunk-48b37eea.d5328c60.js.map