webpackJsonp([16],{263:function(t,e,s){"use strict";function n(t){s(334)}Object.defineProperty(e,"__esModule",{value:!0});var a=s(336),o=s(337),r=s(169),i=n,c=r(a.a,o.a,!1,i,"data-v-4fddb8eb",null);e.default=c.exports},334:function(t,e,s){var n=s(335);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(259)("74131db0",n,!0)},335:function(t,e,s){e=t.exports=s(258)(!0),e.push([t.i,".black[data-v-4fddb8eb]{color:#000}.red[data-v-4fddb8eb]{color:red}","",{version:3,sources:["/home/heiyuki/work/Tanka/tanka-cms-admin/src/components/Pages/Edit.vue"],names:[],mappings:"AACA,wBACE,UAAa,CACd,AACD,sBACE,SAAW,CACZ",file:"Edit.vue",sourcesContent:["\n.black[data-v-4fddb8eb] {\n  color: black;\n}\n.red[data-v-4fddb8eb] {\n  color: red;\n}\n"],sourceRoot:""}])},336:function(t,e,s){"use strict";var n=function(){return s.e(30).then(s.bind(null,295))};e.a={created:function(){this.$store.dispatch("getAllSchemas"),this.$store.dispatch("getPageById",this.$route.params.idPage)},computed:{page:function(){return this.$store.getters.getSelectedPage},schemas:function(){return this.$store.getters.getAllSchemas}},components:{Pageform:n},methods:{submit:function(){var t=this;this.$store.dispatch("editPage",this.page).then(function(e){t.$router.go(-1)})},back:function(){this.$router.go(-1)},remove:function(){var t=this;this.$store.dispatch("deletePage",this.page._id).then(function(e){t.$router.go(-1)})}}}},337:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Pageform",{attrs:{page:t.page,schemas:t.schemas,pwd:"false"},on:{submit:t.submit,back:t.back}}),t._v(" "),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.remove}},[t._v(" supprimer ")])],1)},a=[],o={render:n,staticRenderFns:a};e.a=o}});
//# sourceMappingURL=16.f530ccee8effd29bd7e3.js.map