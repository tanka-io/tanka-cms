webpackJsonp([10],{272:function(t,e,n){"use strict";function s(t){n(383)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(385),o=n(391),r=n(169),i=s,u=r(a.a,o.a,!1,i,"data-v-11511a03",null);e.default=u.exports},383:function(t,e,n){var s=n(384);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(264)("ce2357b4",s,!0)},384:function(t,e,n){e=t.exports=n(263)(!0),e.push([t.i,".but[data-v-11511a03]{margin-bottom:50px}","",{version:3,sources:["/home/heiyuki/work/Tanka/tanka-cms-admin/src/components/Themes/Index.vue"],names:[],mappings:"AACA,sBACE,kBAAoB,CACrB",file:"Index.vue",sourcesContent:["\n.but[data-v-11511a03] {\n  margin-bottom: 50px;\n}\n"],sourceRoot:""}])},385:function(t,e,n){"use strict";var s=function(){return n.e(42).then(n.bind(null,386))};e.a={computed:{themes:function(){return this.$store.getters.getAllThemes},lang:function(){return this.$store.getters.getLang}},created:function(){this.$store.dispatch("getAllThemes")},components:{ThemeList:s}}},391:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("router-link",{attrs:{to:{path:"new"},append:""}},[n("button",{staticClass:"btn btn-success float-right but"},[t._v("Nouvelle Themes")])]),t._v(" "),n("ThemeList",{attrs:{themes:t.themes,lang:t.lang}})],1)},a=[],o={render:s,staticRenderFns:a};e.a=o}});
//# sourceMappingURL=10.6ee6e0631b8a5a145e81.js.map