(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-653374ba"],{"407b":function(t,e,s){t.exports=s.p+"img/role04.cf3e6cb5.png"},"7d77":function(t,e,s){"use strict";s.r(e),s.d(e,"PaperForm",(function(){return p}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",{attrs:{currentPage:"homework"}}),a("div",{staticClass:"c-wrap1400"},[t._m(0),a("div",{staticClass:"c-item-group"},[a("div",{staticClass:"c-item h-flex-column"},[a("div",{staticClass:"h-flex"},[a("div",{staticClass:"input-box box-20"},[a("label",{attrs:{for:"tit"}},[t._v("上課分校")]),a("span",[t._v(t._s(t.paperForm.city)+" "+t._s(t.paperForm.school))])]),a("div",{staticClass:"input-box box-20"},[a("label",{attrs:{for:"tit"}},[t._v("上課班級")]),a("span",[t._v(t._s(t.paperForm.class))])]),a("div",{staticClass:"input-box box-20"},[a("label",{attrs:{for:"tit"}},[t._v("作業名稱")]),a("span",[t._v(t._s(t.paperForm.name))])])]),a("div",[a("div",{staticClass:"input-box box-20"},[a("label",{attrs:{for:"tit"}},[t._v("級數")]),a("span",[t._v(t._s(t.paperForm.grade))])]),a("div",{staticClass:"input-box box-20"},[a("label",{attrs:{for:"tit"}},[t._v("Level")]),a("span",[t._v(t._s(t.paperForm.level))])]),a("div",{staticClass:"input-box box-20"},[a("label",{attrs:{for:"tit"}},[t._v("單元")]),a("span",[t._v(t._s(t.paperForm.unit))])]),a("div",{staticClass:"input-box box-20"},[a("label",{attrs:{for:"tit"}},[t._v("作業日期")]),a("span",[t._v(t._s(t.paperForm.date))])])])]),a("img",{staticClass:"img-role04",attrs:{src:s("407b")}})]),a("div",{staticClass:"c-tit-bar"},[t._v("作業內容")]),t._l(t.questionList,(function(e,s){return a("div",{key:s,staticClass:"input-box-w c-exam-group"},["3"!==e.type||""!==e.pic?a("div",{staticClass:"h-flexSpaceB-ju"},[a("div",{staticClass:"h-flexColumn h-box100"},[a("div",{staticClass:"input-box input-box-w"},[a("p",{staticClass:"c-exam-tit",domProps:{innerHTML:t._s(s+1+". "+e.question.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>"))}}),"3"!==e.type?a("div",{staticClass:"check-list"},t._l(Object.keys(e.option).length,(function(i){return a("label",{key:i,staticClass:"h-flexCenter-ai c-exam-option-box",attrs:{for:"option"+(s+1)+"_"+i}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"item.answer"}],staticClass:"radio-box required",attrs:{type:"radio",name:"option"+(s+1),id:"option"+(s+1)+"_"+i,title:"至少選擇一個"},domProps:{value:i,checked:t._q(e.answer,i)},on:{change:function(s){return t.$set(e,"answer",i)}}}),a("div",{staticClass:"radio-box"}),a("span",{staticClass:"c-exam-option",class:{act:e.answer==i}},[t._v(t._s(e.option[i]))]),e.answer==i?a("label",{staticClass:"correct"},[t._v("正確")]):t._e()])})),0):t._e(),"3"===e.type?a("textarea",{staticClass:"input-sty c-exam-desc required",attrs:{name:"note"+(s+1),id:"note"+(s+1)}}):t._e()])]),a("div",{staticClass:"h-flexColumnEnd-ai h-box100"},[a("div",{staticClass:"c-examImg-wrap"},[a("img",{attrs:{src:e.pic,alt:""}})])])]):t._e(),"3"===e.type&&""===e.pic?a("div",{staticClass:"input-box input-box-w"},[a("p",{staticClass:"c-exam-tit",domProps:{innerHTML:t._s(s+1+".&nbsp;"+e.question.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>"))}}),a("textarea",{staticClass:"input-sty c-exam-desc required",attrs:{name:"note"+(s+1),id:"note"+(s+1)}})]):t._e()])})),a("div",{staticClass:"c-btn-area h-mt50"},[a("router-link",{staticClass:"c-btn c-btn-cancel h-mr30",attrs:{to:"/teacher/homework/paper"}},[t._v("取消")])],1)],2),a("Footer")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-tab"},[s("h3",{staticClass:"c-tit"},[t._v("作業管理 / 作業內容")])])}],r=s("9ab4"),o=s("1b40"),n=s("4f4c"),c=s("0d59"),l=s("4c63"),p=function(){function t(){this.name="",this.date="",this.city="",this.school="",this.class="",this.teacher="",this.grade="",this.level="",this.unit="",this.num=0,this.active="",this.hid=""}return t}(),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doubleClick=!1,e.paperForm=new p,e.questionList={},e.token=window.localStorage.getItem("teacherToken"),e}return Object(r["c"])(e,t),e.prototype.created=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(s){switch(s.label){case 0:return t={hid:this.$route.query.hid,token:this.token},[4,c["d"].teGetPaperInfo(t)];case 1:return e=s.sent(),this.assignDataToForm(e),[2]}}))}))},e.prototype.assignDataToForm=function(t){l["a"].checkToken(t.ERR_CODE);var e=t.info;this.paperForm.hid=e.hid,this.paperForm.name=e.name,this.paperForm.date=e.date,this.paperForm.city=e.city,this.paperForm.school=e.school,this.paperForm.class=e.class,this.paperForm.teacher=e.teacher,this.paperForm.grade=e.grade,this.paperForm.unit=e.unit,this.paperForm.level=e.level,this.paperForm.num=e.num,this.paperForm.active=e.active,this.questionList=t.list},e=Object(r["b"])([Object(o["a"])({components:{Header:n["b"],Footer:n["a"]}})],e),e}(o["d"]),d=u,h=(s("f7c1"),s("2877")),m=Object(h["a"])(d,a,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-653374ba.fe89e9e1.js.map