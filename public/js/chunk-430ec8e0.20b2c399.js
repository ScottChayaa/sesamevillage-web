(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-430ec8e0","chunk-74c42831"],{"04fd":function(t,e,s){"use strict";s.r(e),s.d(e,"QuizForm",(function(){return h}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("SideNav",{attrs:{currentPage:"homework"}}),s("div",{staticClass:"main"},[s("h1",[t._v("作業管理-組卷資料")]),s("div",{staticClass:"btn-area"},[s("router-link",{staticClass:"btn",attrs:{to:"/admin/homework/verify"}},[s("i",{staticClass:"fa fa-chevron-left"}),t._v(" 返回 ")])],1),s("form",{attrs:{action:""}},[s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("學生姓名")]),s("span",[t._v(t._s(t.quizForm.student))])]),s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("上課分校")]),s("span",[t._v(t._s(t.quizForm.city)+" "+t._s(t.quizForm.school))])]),s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("上課班級")]),s("span",[t._v(t._s(t.quizForm.class))])]),s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("作業名稱")]),s("span",[t._v(t._s(t.quizForm.name))])]),s("div",{staticClass:"input-box box-16"}),s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("級數")]),s("span",[t._v(t._s(t.quizForm.grade))])]),s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("Level")]),s("span",[t._v(t._s(t.quizForm.level))])]),s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("單元")]),s("span",[t._v(t._s(t.quizForm.unit))])]),s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("作業日期")]),s("span",[t._v(t._s(t.quizForm.date))])]),s("div",{staticClass:"input-box box-16"},[s("label",{attrs:{for:"tit"}},[t._v("完成日期")]),s("span",[t._v(t._s(t.quizForm.completeDate))])]),t._l(t.quizForm.question,(function(e,i){return s("div",{key:i,staticClass:"input-box input-box-w exam-group"},[0===i?s("label",[t._v("作業內容")]):t._e(),s("div",{staticClass:"h-flexSpaceB-ju"},[s("div",{staticClass:"h-flexColumn h-box100"},[s("div",{staticClass:"input-box input-box-w"},[s("p",{staticClass:"exam-tit",domProps:{innerHTML:t._s(i+1+"."+e.question.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>"))}})]),"3"!==e.type?s("div",{staticClass:"input-box input-box-w"},[s("div",{staticClass:"check-list"},t._l(Object.keys(e.option).length,(function(n){return s("label",{key:n,staticClass:"h-flexCenter-ai exam-option-box",attrs:{for:"option"+(i+1)+"_"+n}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.studentAnswer,expression:"item.studentAnswer"}],staticClass:"radio-box",attrs:{type:"radio",name:"option"+(i+1),id:"option"+(i+1)+"_"+n,disabled:""},domProps:{value:n,checked:t._q(e.studentAnswer,n)},on:{change:function(s){return t.$set(e,"studentAnswer",n)}}}),s("div",{staticClass:"radio-box"}),s("span",{staticClass:"exam-option box-85"},[t._v(t._s(e.option[n]))]),e.answer==n?s("label",{staticClass:"correct"},[t._v("正確")]):t._e(),e.studentAnswer==n&&e.studentAnswer!=e.answer?s("label",{staticClass:"error"},[t._v("錯誤")]):t._e()])})),0),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"item.comment"}],staticClass:"input-sty desc-info",attrs:{placeholder:"老師評語"},domProps:{value:e.comment},on:{input:function(s){s.target.composing||t.$set(e,"comment",s.target.value)}}})]):t._e(),"3"===e.type?s("div",{staticClass:"input-box input-box-w"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.studentAnswer,expression:"item.studentAnswer"}],staticClass:"input-sty desc-info",attrs:{disabled:""},domProps:{value:e.studentAnswer},on:{input:function(s){s.target.composing||t.$set(e,"studentAnswer",s.target.value)}}}),s("p",{staticClass:"h-pt10 h-my10"},[t._v("參考答案")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.suggestAns,expression:"item.suggestAns"}],staticClass:"input-sty desc-info",attrs:{name:"suggestAns",id:"suggestAns",disabled:""},domProps:{value:e.suggestAns},on:{input:function(s){s.target.composing||t.$set(e,"suggestAns",s.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"item.comment"}],staticClass:"input-sty desc-info h-mt10",attrs:{placeholder:"老師評語"},domProps:{value:e.comment},on:{input:function(s){s.target.composing||t.$set(e,"comment",s.target.value)}}})]):t._e()]),s("div",{staticClass:"h-flexColumn h-box100"},[s("img",{staticClass:"img-paper",attrs:{src:e.pic,alt:""}})])])])})),s("div",{staticClass:"h-box100"},[s("div",{staticClass:"input-box"},[s("label",{attrs:{for:"tit"}},[t._v("評分")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quizForm.score,expression:"quizForm.score",modifiers:{number:!0}}],staticClass:"input-sty",attrs:{type:"text"},domProps:{value:t.quizForm.score},on:{input:function(e){e.target.composing||t.$set(t.quizForm,"score",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),""!==t.errorMsgMap["score"]?s("label",{staticClass:"error"},[t._v(t._s(t.errorMsgMap["score"]))]):t._e()])]),s("div",{staticClass:"btn-area"},[s("router-link",{staticClass:"btn btn-cancel",attrs:{to:"/admin/homework/verify"}},[s("i",{staticClass:"fa fa-chevron-left"}),t._v(" 取消")]),s("div",{staticClass:"btn btn-submit"},[s("i",{staticClass:"fa fa-check"}),t._v(" 確認 "),s("input",{staticClass:"btn",attrs:{type:"button",disabled:t.doubleClick},on:{click:function(e){return e.preventDefault(),t.validateAndSubmit()}}})])],1)],2)]),s("Lightbox",{attrs:{message:t.errorMsg,openLB:t.openLB},on:{closeLightbox:t.closeLB}})],1)},n=[],o=s("9ab4"),r=s("1b40"),a=s("4f4c"),c=s("0d59"),u=s("3617"),l=s("93f3"),d=s("60b9"),h=function(){function t(){this.shid="",this.name="",this.student="",this.city="",this.school="",this.class="",this.grade="",this.unit="",this.level="",this.question=[],this.num=0,this.currentQuestion=0,this.score=0,this.date="",this.completeDate="",this.token=window.localStorage.getItem("adminToken")}return t}(),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.quizForm=new h,e.errorMsg="",e.openLB=!1,e.errNo=0,e.token=window.localStorage.getItem("adminToken"),e.errorMsgMap={score:""},e}return Object(o["c"])(e,t),e.prototype.created=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e;return Object(o["d"])(this,(function(s){switch(s.label){case 0:return t={shid:this.$route.query.shid,token:this.token},[4,c["d"].getResult(t)];case 1:return e=s.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){d["a"].checkToken(t.ERR_CODE);var e=t.info;this.quizForm.shid=e.shid,this.quizForm.name=e.name,this.quizForm.student=e.student,this.quizForm.city=e.city,this.quizForm.school=e.school,this.quizForm.class=e.class,this.quizForm.grade=e.grade,this.quizForm.unit=e.unit,this.quizForm.level=e.level,this.quizForm.date=e.date,this.quizForm.completeDate=e.completeDate,this.quizForm.question=e.question,this.quizForm.num=e.num,this.quizForm.currentQuestion=e.currentQuestion,this.quizForm.score=e.score},e.prototype.validateAndSubmit=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t;return Object(o["d"])(this,(function(e){switch(e.label){case 0:return"number"!==typeof this.quizForm.score?(this.errorMsgMap={score:""},this.errorMsgMap["score"]="請填入數字",[2]):this.doubleClick?[3,2]:(this.doubleClick=!0,t=this,[4,c["d"].verify(this.quizForm)]);case 1:t.errNo=e.sent(),d["a"].checkToken(this.errNo),this.openLB=!0,this.doubleClick=!1,this.errorMsg=l["b"][this.errNo],e.label=2;case 2:return[2]}}))}))},e.prototype.closeLB=function(){this.openLB=!1,this.errNo===l["a"].Success&&this.$router.push("/admin/homework/verify")},e=Object(o["b"])([Object(r["a"])({components:{SideNav:a["e"],Lightbox:u["i"]}})],e),e}(r["d"]),m=p,v=(s("8cf3"),s("2877")),b=Object(v["a"])(m,i,n,!1,null,null,null);e["default"]=b.exports},"60b9":function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s("9ab4"),n=s("1b40"),o=s("0d59"),r=s("93f3"),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token=window.localStorage.getItem("adminToken"),e}return Object(i["c"])(e,t),Object.defineProperty(e,"instance",{get:function(){return e.sInstance||(e.sInstance=new e),e.sInstance},enumerable:!1,configurable:!0}),e.prototype.logout=function(){window.localStorage.clear(),window.location.href="/admin/login"},e.prototype.checkToken=function(t){t!==r["a"].InvalidToken||this.logout()},e.prototype.getGrade=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,o["c"].getGrade(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getLevel=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={grade:t,token:this.token},[4,o["c"].getLevel(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getUnit=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){for(t={},e=1;e<=25;e++)t[e]={unit:"Unit-"+e};return t[26]={unit:"Midterm Exam"},t[27]={unit:"Final Exam"},[2,t]}))}))},e.prototype.getAllCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,o["c"].getAllCity(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getRegion=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getRegion(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getSchoolCity=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,e;return Object(i["d"])(this,(function(s){switch(s.label){case 0:return t={token:this.token},[4,o["c"].getSchoolCity(t)];case 1:return e=s.sent(),this.checkToken(e.ERR_CODE),[2,e.list]}}))}))},e.prototype.getCity=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={sid:t,token:this.token},[4,o["c"].getCity(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getSchool=function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,s;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return e={cid:t,token:this.token},[4,o["c"].getSchool(e)];case 1:return s=i.sent(),this.checkToken(s.ERR_CODE),[2,s.list]}}))}))},e.prototype.getClass=function(t,e,s){return Object(i["a"])(this,void 0,void 0,(function(){var n,r;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return n={type:t,sid:e,clid:s,token:this.token},[4,o["f"].getClass(n)];case 1:return r=i.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e.prototype.getTeacher=function(t,e,s){return Object(i["a"])(this,void 0,void 0,(function(){var n,r;return Object(i["d"])(this,(function(i){switch(i.label){case 0:return n={type:t,clid:e,tid:s,token:this.token},[4,o["f"].getClassTeacher(n)];case 1:return r=i.sent(),this.checkToken(r.ERR_CODE),[2,r.list]}}))}))},e}(n["d"]),c=a.instance},"8cf3":function(t,e,s){}}]);
//# sourceMappingURL=chunk-430ec8e0.20b2c399.js.map