(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22fddbe0"],{"40bb":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("STHeader",{attrs:{currentPage:"learning"}}),a("div",{staticClass:"c-wrap1400"},[t._m(0),a("ul",{staticClass:"c-list h-mt40"},[t._m(1),t._l(t.resultList,(function(s,e){return a("li",{key:e},[a("div",{staticClass:"group-box-92",attrs:{title:"編輯",alt:"編輯"}},[a("div",{staticClass:"box-16"},[t._v(t._s(s.name))]),a("div",{staticClass:"box-10"},[t._v(t._s(s.grade))]),a("div",{staticClass:"box-12"},[t._v(t._s(s.school))]),a("div",{staticClass:"box-10"},[t._v(t._s(s.city))]),a("div",{staticClass:"box-12"},[t._v(t._s(s.class))]),a("div",{staticClass:"box-12"},[t._v(t._s(s.teacher))]),a("div",{staticClass:"box-10"},[t._v(t._s("1"===s.active?"":s.accuracy+"%"))]),a("div",{staticClass:"box-16"},[t._v(t._s(s.completeDate))])]),a("div",{staticClass:"box-8 c-operate"},[a("router-link",{attrs:{to:"/student/quiz/result/info?sqid="+s.sqid,target:"_blank",title:"編輯",alt:"編輯"}},[a("i",{staticClass:"fa fa-pencil"})])],1)])})),a("p",{staticClass:"h-mt25 h-txt-grey"},[t._v("共"+t._s(t.num)+"筆資料")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.num>t.perpage,expression:"num > perpage"}],staticClass:"c-pagination"},[a("a",{staticClass:"c-page-prev",on:{click:function(s){return s.preventDefault(),t.getPageList(t.page-1)}}},[a("img",{attrs:{src:e("bbc6"),alt:"前一頁"}})]),t._l(t.maxPage,(function(s){return a("a",{key:s,class:{act:s==t.page},on:{click:function(e){return e.preventDefault(),t.getPageList(s)}}},[t._v(t._s(s))])})),a("a",{on:{click:function(s){return s.preventDefault(),t.getPageList(t.page+1)}}},[a("img",{attrs:{src:e("bbc6"),alt:"下一頁"}})])],2)],2)]),a("STFooter")],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"c-tab"},[e("h3",{staticClass:"c-tit"},[t._v("學習歷程")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"title"},[e("div",{staticClass:"group-box-92"},[e("div",{staticClass:"box-16"},[t._v("測驗名稱")]),e("div",{staticClass:"box-10"},[t._v("級數")]),e("div",{staticClass:"box-12"},[t._v("分校名稱")]),e("div",{staticClass:"box-10"},[t._v("縣市")]),e("div",{staticClass:"box-12"},[t._v("班級名稱")]),e("div",{staticClass:"box-12"},[t._v("組卷老師")]),e("div",{staticClass:"box-10"},[t._v("正確率")]),e("div",{staticClass:"box-16"},[t._v("測驗日期")])]),e("div",{staticClass:"box-8"},[t._v("查看試卷")])])}],c=e("9ab4"),n=e("1b40"),r=e("4f4c"),l=e("0d59"),o=e("088f"),u=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return s.resultList={},s.num=0,s.page=1,s.perpage=50,s.maxPage=0,s.token=window.localStorage.getItem("studentToken"),s.stid=window.localStorage.getItem("student_stid"),s}return Object(c["c"])(s,t),s.prototype.created=function(){this.getResultList()},s.prototype.getResultList=function(){return Object(c["a"])(this,void 0,void 0,(function(){var t,s;return Object(c["d"])(this,(function(e){switch(e.label){case 0:return t={page:this.page,perpage:this.perpage,stid:this.stid,token:this.token},[4,l["f"].stGetLearningList(t)];case 1:return s=e.sent(),o["a"].checkToken(s.ERR_CODE),this.num=s.num,this.resultList=s.list,this.maxPage=Math.ceil(this.num/this.perpage),[2]}}))}))},s.prototype.getPageList=function(t){this.page=t<1?1:t>this.maxPage?this.maxPage:t,this.getResultList()},s=Object(c["b"])([Object(n["a"])({components:{STHeader:r["d"],STFooter:r["c"]}})],s),s}(n["d"]),v=u,d=(e("f7c1"),e("2877")),p=Object(d["a"])(v,a,i,!1,null,null,null);s["default"]=p.exports},bbc6:function(t,s,e){t.exports=e.p+"img/iocn_arrow.89c14ccc.svg"}}]);
//# sourceMappingURL=chunk-22fddbe0.5d2667fc.js.map