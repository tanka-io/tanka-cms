webpackJsonp([5],{279:function(t,e,n){"use strict";function a(t){n(439)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(441),c=n(446),o=n(169),r=a,i=o(s.a,c.a,!1,r,"data-v-1d56da7d",null);e.default=i.exports},295:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},302:function(t,e,n){"use strict";var a=n(295),s=n.n(a),c=function t(){s()(this,t),this._type="",this._value="",this.ar={},this.fr={},this.en={}};e.a=c},439:function(t,e,n){var a=n(440);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(264)("1f7e6289",a,!0)},440:function(t,e,n){e=t.exports=n(263)(!0),e.push([t.i,".black[data-v-1d56da7d]{color:#000}.red[data-v-1d56da7d]{color:red}","",{version:3,sources:["/home/heiyuki/work/Tanka/tanka-cms-admin/src/components/Schemas/New.vue"],names:[],mappings:"AACA,wBACE,UAAa,CACd,AACD,sBACE,SAAW,CACZ",file:"New.vue",sourcesContent:["\n.black[data-v-1d56da7d] {\n  color: black;\n}\n.red[data-v-1d56da7d] {\n  color: red;\n}\n"],sourceRoot:""}])},441:function(t,e,n){"use strict";var a=n(302),s=function(){return n.e(45).then(n.bind(null,303))};e.a={data:function(){return{schema:new a.a}},methods:{add:function(){var t=this;this.schema._createdAt=new Date,this.$store.dispatch("insertSchema",this.schema).then(function(e){t.$router.go(-1)}).catch(function(t){console.log(t)})},back:function(){this.$router.go(-1)}},components:{SchemaForm:s},computed:{schemas:function(){return this.$store.getters.getAllSchemas}},created:function(){this.$store.dispatch("getAllSchemas")}}},446:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SchemaForm",{attrs:{schema:t.schema,schemas:t.schemas},on:{submit:t.add,back:t.back}})],1)},s=[],c={render:a,staticRenderFns:s};e.a=c}});
//# sourceMappingURL=5.050c12c8d6dd6ef5a2ca.js.map