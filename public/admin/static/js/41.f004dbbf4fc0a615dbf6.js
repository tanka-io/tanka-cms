webpackJsonp([41],{299:function(t,e,a){"use strict";function o(t){a(432)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(434),l=a(435),s=a(169),c=o,n=s(r.a,l.a,!1,c,"data-v-c24742c0",null);e.default=n.exports},432:function(t,e,a){var o=a(433);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(259)("183f64c7",o,!0)},433:function(t,e,a){e=t.exports=a(258)(!0),e.push([t.i,".margin-top[data-v-c24742c0]{margin-top:32px}","",{version:3,sources:["/home/heiyuki/work/Tanka/tanka-cms-admin/src/components/Schemas/DataBlock.vue"],names:[],mappings:"AACA,6BACE,eAAiB,CAClB",file:"DataBlock.vue",sourcesContent:["\n.margin-top[data-v-c24742c0] {\n  margin-top: 32px;\n}\n"],sourceRoot:""}])},434:function(t,e,a){"use strict";var o=a(287);e.a={name:"DataBlock",props:{block:{type:Object,required:!0},schemas:{type:Array,required:!0}},methods:{extend:function(){this.block._children||(this.block._children=new Array);var t=new o.a;this.block._children.push(t),this.$forceUpdate()}}}},435:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},["array"===t.block._type||"ref"===t.block._type?a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.block._title,expression:"block._title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.block._title},on:{input:function(e){e.target.composing||t.$set(t.block,"_title",e.target.value)}}})])]):t._e(),t._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Type")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.block._type,expression:"block._type"}],staticClass:"form-control",attrs:{type:"text"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.block,"_type",e.target.multiple?a:a[0])},function(e){t.$forceUpdate()}]}},[a("option",{attrs:{value:"text"}},[t._v("Text")]),t._v(" "),a("option",{attrs:{value:"number"}},[t._v("Number")]),t._v(" "),a("option",{attrs:{value:"date"}},[t._v("Date")]),t._v(" "),a("option",{attrs:{value:"array"}},[t._v("Array")]),t._v(" "),a("option",{attrs:{value:"object"}},[t._v("Object")]),t._v(" "),a("option",{attrs:{value:"ref"}},[t._v("Reference")])])])]),t._v(" "),a("div",{staticClass:"col-6"},["array"!==t.block._type&&"ref"!==t.block._type?a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.block._title,expression:"block._title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.block._title},on:{input:function(e){e.target.composing||t.$set(t.block,"_title",e.target.value)}}})]):t._e(),t._v(" "),"array"===t.block._type?a("div",{staticClass:"form-group"},[a("label",[t._v("Array Type")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.block._arrType,expression:"block._arrType"}],staticClass:"form-control",attrs:{type:"text"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.block,"_arrType",e.target.multiple?a:a[0])},function(e){t.$forceUpdate()}]}},[a("option",{attrs:{value:"text"}},[t._v("Text")]),t._v(" "),a("option",{attrs:{value:"number"}},[t._v("Number")]),t._v(" "),a("option",{attrs:{value:"date"}},[t._v("Date")]),t._v(" "),a("option",{attrs:{value:"object"}},[t._v("Object")]),t._v(" "),a("option",{attrs:{value:"ref"}},[t._v("Reference")])]),t._v(" "),"ref"===t.block._arrType?a("div",{staticClass:"form-group"},[a("label",[t._v("Schemas")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.block._arrRef,expression:"block._arrRef"}],staticClass:"form-control",attrs:{type:"text"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.block,"_arrRef",e.target.multiple?a:a[0])},function(e){t.$forceUpdate()}]}},t._l(t.schemas,function(e){return a("option",{key:e._id,domProps:{value:e}},[t._v(t._s(e._title))])}))]):t._e()]):t._e(),t._v(" "),"ref"===t.block._type?a("div",{staticClass:"form-group"},[a("label",[t._v("Schemas")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.block._schema,expression:"block._schema"}],staticClass:"form-control",attrs:{type:"text"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.block,"_schema",e.target.multiple?a:a[0])},function(e){t.$forceUpdate()}]}},t._l(t.schemas,function(e){return a("option",{key:e._id,domProps:{value:e}},[t._v(t._s(e._title))])}))]):t._e()]),t._v(" "),a("div",{staticClass:"col-2"},["object"===t.block._type?a("button",{staticClass:"btn btn-primary margin-top",attrs:{type:"button"},on:{click:t.extend}},[t._v("Etendre")]):t._e()]),t._v(" "),"object"===t.block._type?a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},t._l(t.block._children,function(e){return a("div",{key:e._id,staticClass:"col-11 offset-1"},[a("DataBlock",{attrs:{block:e,schemas:t.schemas}})],1)}))]):t._e()])},r=[],l={render:o,staticRenderFns:r};e.a=l}});
//# sourceMappingURL=41.f004dbbf4fc0a615dbf6.js.map