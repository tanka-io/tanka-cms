webpackJsonp([6],{267:function(t,e,n){"use strict";function a(t){n(337)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(339),c=n(352),o=n(169),r=a,i=o(s.a,c.a,!1,r,"data-v-2b5991cf",null);e.default=i.exports},295:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},297:function(t,e,n){"use strict";var a=n(295),s=n.n(a),c=function t(){s()(this,t),this.en={},this.fr={},this.ar={}};e.a=c},337:function(t,e,n){var a=n(338);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(264)("f4e75bd0",a,!0)},338:function(t,e,n){e=t.exports=n(263)(!0),e.push([t.i,".black[data-v-2b5991cf]{color:#000}.red[data-v-2b5991cf]{color:red}","",{version:3,sources:["/home/heiyuki/work/Tanka/tanka-cms-admin/src/components/Pages/New.vue"],names:[],mappings:"AACA,wBACE,UAAa,CACd,AACD,sBACE,SAAW,CACZ",file:"New.vue",sourcesContent:["\n.black[data-v-2b5991cf] {\n  color: black;\n}\n.red[data-v-2b5991cf] {\n  color: red;\n}\n"],sourceRoot:""}])},339:function(t,e,n){"use strict";var a=n(297),s=function(){return n.e(48).then(n.bind(null,304))};e.a={data:function(){return{page:{ar:{},fr:{},en:{},tabs:[{ar:{title:"Tab1"},fr:{title:"Tab1"},en:{title:"Tab1"},children:[new a.a]}]}}},methods:{add:function(){var t=this;this.page.createdAt=new Date,this.$store.dispatch("insertPage",this.page).then(function(e){t.$router.go(-1)}).catch(function(t){console.log(t)})},back:function(){this.$router.go(-1)}},components:{PageForm:s},created:function(){this.$store.dispatch("getAllSchemas")},computed:{schemas:function(){return this.$store.getters.getAllSchemas}}}},352:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageForm",{attrs:{page:t.page,schemas:t.schemas},on:{submit:t.add,back:t.back}})],1)},s=[],c={render:a,staticRenderFns:s};e.a=c}});
//# sourceMappingURL=6.f84514f7f1dbfa1ce85a.js.map