webpackJsonp([36],{320:function(t,n,e){"use strict";function s(t){e(369)}Object.defineProperty(n,"__esModule",{value:!0});var a=e(371),i=e(377),c=e(169),o=s,r=c(a.a,i.a,!1,o,"data-v-d8c93b70",null);n.default=r.exports},369:function(t,n,e){var s=e(370);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(264)("7f61475c",s,!0)},370:function(t,n,e){n=t.exports=e(263)(!0),n.push([t.i,".max[data-v-d8c93b70]{width:100%;height:100%;min-width:0}","",{version:3,sources:["/home/heiyuki/work/Tanka/tanka-cms-admin/src/components/Sections/Section.Form.vue"],names:[],mappings:"AACA,sBACE,WAAY,AACZ,YAAa,AACb,WAAe,CAChB",file:"Section.Form.vue",sourcesContent:["\n.max[data-v-d8c93b70] {\n  width: 100%;\n  height: 100%;\n  min-width: 0px;\n}\n"],sourceRoot:""}])},371:function(t,n,e){"use strict";var s=function(){return e.e(33).then(e.bind(null,296))},a=function(){return e.e(40).then(e.bind(null,372))};n.a={props:{section:{type:Object,required:!0},pages:{type:Array,required:!0},schemas:{type:Array,required:!0}},data:function(){return{lang:"fr",block:null}},methods:{submit:function(){this.$emit("submit")},back:function(){this.$emit("back")},isSelected:function(t){return this.lang===t?"btn btn-primary":"btn btn-secondary"},setLang:function(t){this.lang=t}},components:{Datepicker:s,SubSectionComponent:a}}},377:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("form",{staticClass:"container",on:{submit:function(n){n.preventDefault(),t.submit(n)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t._v("\n        Changer de langue:\n        "),e("button",{class:t.isSelected("fr"),attrs:{type:"button"},on:{click:function(n){t.setLang("fr")}}},[t._v("Fr")]),t._v(" "),e("button",{class:t.isSelected("ar"),attrs:{type:"button"},on:{click:function(n){t.setLang("ar")}}},[t._v("Ar")]),t._v(" "),e("button",{class:t.isSelected("en"),attrs:{type:"button"},on:{click:function(n){t.setLang("en")}}},[t._v("En")])]),t._v(" "),e("SubSectionComponent",{attrs:{section:t.section,lang:t.lang,pages:t.pages,schemas:t.schemas}}),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(" Valider ")]),t._v(" "),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.back}},[t._v(" Retour ")])])])],1)])])},a=[],i={render:s,staticRenderFns:a};n.a=i}});
//# sourceMappingURL=36.c3547536f560ba0c5a68.js.map