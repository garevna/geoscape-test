(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d49dbfe8"],{"1f4f":function(e,t,s){"use strict";s("a9e3");var a=s("5530"),r=(s("8b37"),s("80d2")),n=s("7560"),i=s("58df");t["a"]=Object(i["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["d"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},7605:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"transparent",attrs:{flat:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-simple-table",{attrs:{dark:""},scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[e._v(" Property ")]),s("th",{staticClass:"text-left"},[e._v(" Value ")])])]),s("tbody",e._l(e.properties,(function(t){return s("tr",{key:t},[e.addressDetails[t]?s("td",{staticClass:"text-left"},[e._v(e._s(t))]):e._e(),e.addressDetails[t]?s("td",{staticClass:"text-left"},[e._v(e._s(e.addressDetails[t]))]):e._e()])})),0)]},proxy:!0}])})],1)],1)},r=[],n=(s("b64b"),s("d3b7"),s("96cf"),s("1da1")),i={name:"",props:["addressId","geolocation","relatedBuildingIds"],data:function(){return{properties:[],addressDetails:null,geoDatumCode:"",geoFeature:"",coordinates:[],geometryType:"",buildings:[],buildingIds:[]}},watch:{coordinates:{deep:!0,handler:function(e){this.$emit("update:geolocation",e)}},addressId:function(e){e&&(this.getAddressDetails(),this.getBuildings())}},methods:{getAddressDetails:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.psma.com.au/v1/addresses/".concat(e.addressId,"?include=geo,addressDetails"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:Object({VUE_APP_API_KEY:"JQj5hS4OFWNvp0JQ58DDDKzKLCAoqpA0",NODE_ENV:"production",BASE_URL:"/dgtek-geoscape/"}).VUE_APP_GEOSCAPE_KEY}});case 2:return t.next=4,t.sent.json();case 4:s=t.sent,e.addressDetails=s.addressDetails,e.geoDatumCode=s.geo.geoDatumCode,e.geoFeature=s.geo.geoFeature,e.coordinates=s.geo.geometry.coordinates,e.geometryType=s.geo.geometry.type,e.buildingIds=s.relatedBuildingIds,e.$emit("update:relatedBuildingIds",e.buildingIds),e.properties=Object.keys(e.addressDetails);case 13:case"end":return t.stop()}}),t)})))()},getBuildings:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.psma.com.au/v1/addresses/".concat(e.addressId,"/buildings"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:Object({VUE_APP_API_KEY:"JQj5hS4OFWNvp0JQ58DDDKzKLCAoqpA0",NODE_ENV:"production",BASE_URL:"/dgtek-geoscape/"}).VUE_APP_GEOSCAPE_KEY}}).catch((function(e){return console.warn(e)}));case 2:return t.next=4,t.sent.json();case 4:return s=t.sent,e.buildings=s.data,e.$emit("update:relatedBuildingIds",e.buildingIds),t.abrupt("return",s.data);case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.addressId&&this.getAddressDetails()}},d=i,o=s("2877"),u=s("6544"),c=s.n(u),l=s("b0af"),p=s("0fd9"),h=s("1f4f"),g=Object(o["a"])(d,a,r,!1,null,null,null);t["default"]=g.exports;c()(g,{VCard:l["a"],VRow:p["a"],VSimpleTable:h["a"]})},"8b37":function(e,t,s){}}]);