(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zones"],{"0fd3":function(t,e,a){"use strict";var n=a("d538"),i=a.n(n);i.a},"38ba":function(t,e,a){},"43c3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"page-header",class:{"flex justify-between items-center my-6":!t.noflex}},[t._t("default")],2)},i=[],s={props:{noflex:{type:Boolean,default:!1}}},r=s,o=(a("e234"),a("2877")),l=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=l.exports},4566:function(t,e,a){},"5f76":function(t,e,a){},b068:function(t,e,a){"use strict";var n=a("4566"),i=a.n(n);i.a},b6c6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.hideBreadcrumbs?t._e():a("Krumbs",{attrs:{items:t.routes}})],1)},i=[],s=(a("4de4"),a("c975"),a("d81d"),a("b0c0"),a("07ac"),a("ac1f"),a("1276"),a("498a"),a("15fd")),r=a("5530"),o=a("d7c2"),l={computed:{pageMesh:function(){return this.$route.params.mesh},routes:function(){var t=this,e=[];this.$route.matched.map((function(a){t.calculateRouteText(a),t.calculateRouteTitle(a);var n=void 0!==a.redirect&&void 0!==a.redirect.name?a.redirect.name:a.name;t.isCurrentRoute(a)&&t.pageMesh&&e.push({key:t.pageMesh,to:{path:"/meshes/".concat(t.pageMesh)},title:"Mesh Overview for ".concat(t.pageMesh),text:t.pageMesh}),t.isCurrentRoute(a)&&a.meta.parent&&"undefined"!==a.meta.parent?e.push({key:a.meta.parent,to:{name:a.meta.parent},title:a.meta.title,text:a.meta.breadcrumb||a.meta.title}):t.isCurrentRoute(a)&&!a.meta.excludeAsBreadcrumb?e.push({key:n,to:{name:n},title:a.meta.title,text:a.meta.breadcrumb||a.meta.title}):a.meta.parent&&"undefined"!==a.meta.parent&&e.push({key:a.meta.parent,to:{name:a.meta.parent},title:a.meta.title,text:a.meta.breadcrumb||a.meta.title})}));var a=this.calculateRouteTextAdvanced(this.$route);return a&&e.push({title:a,text:a}),e},hideBreadcrumbs:function(){return this.$route.query.hide_breadcrumb}},methods:{getBreadcrumbItem:function(t,e,a,n){return{key:t,to:e,title:a,text:n}},isCurrentRoute:function(t){return t.name&&t.name===this.$router.currentRoute.name||t.redirect===this.$router.currentRoute.name},calculateRouteFromQuery:function(t){var e=t.entity_id,a=t.entity_type;if(e&&a){var n=this.$router.resolve({name:"show-".concat(a.split("_")[0]),params:{id:e.split(",")[0]}}).normalizedTo,i=Object(r["a"])(Object(r["a"])({},n),{},{meta:Object(r["a"])({},n.meta)}),s=i.params.id.split("-")[0];return e.split(",").length>1&&e.split(",")[1]&&(s=e.split(",")[1]),i.meta.breadcrumb=s,[Object(r["a"])({},this.getBreadcrumbItem(i.name,i,this.calculateRouteTitle(i),this.calculateRouteText(i)))]}},calculateRouteText:function(t){if(t.path&&t.path.indexOf(":mesh")>-1){var e=this.$router.currentRoute.params;return(e&&e.mesh&&Object(o["f"])(e.mesh)?e.mesh.split("-")[0].trim():e.mesh)||t.meta.breadcrumb||t.meta.title}return t.meta&&(t.meta.breadcrumb||t.meta.title)||t.name||t.meta.breadcrumb||t.meta.title},calculateRouteTitle:function(t){return t.params&&t.params.mesh||t.path.indexOf(":mesh")>-1&&this.$router.currentRoute.params&&this.$router.currentRoute.params.mesh},calculateRouteTextAdvanced:function(t){var e=t.params,a=(e.expandSidebar,Object(s["a"])(e,["expandSidebar"])),n="mesh-overview"===t.name,i=Object.assign({},a,{mesh:null});return n?e.mesh:Object.values(i).filter((function(t){return t}))[0]}}},c=l,u=(a("e7ab"),a("2877")),m=Object(u["a"])(c,n,i,!1,null,null,null);e["a"]=m.exports},c153:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zones"},[a("page-header",{attrs:{noflex:""}},[a("breadcrumbs")],1),!1===t.multicluster?a("KEmptyState",{staticClass:"global-api-status"},[a("template",{slot:"title"},[a("KIcon",{staticClass:"kong-icon--centered",attrs:{icon:"dangerCircle",size:"64"}}),t._v(" Kuma is running in Standalone mode. ")],1),a("template",{slot:"message"},[a("p",[t._v(" To access this page, you must be running in "),a("strong",[t._v("Multi-Zone")]),t._v(" mode. ")])]),a("template",{slot:"cta"},[a("KButton",{attrs:{to:"https://kuma.io/docs/0.6.0/documentation/deployments/",target:"_blank",appearance:"primary"}},[t._v(" Learn More ")])],1)],2):a("FrameSkeleton",[a("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"display-data-table":!0,"table-data":t.tableData,"table-data-is-empty":t.tableDataIsEmpty,"table-data-function-text":"View","table-data-row":"name"},on:{tableAction:t.tableAction,reloadData:t.loadData}},[a("template",{slot:"pagination"},[a("Pagination",{attrs:{"has-previous":t.previous.length>0,"has-next":t.hasNext},on:{next:t.goToNextPage,previous:t.goToPreviousPage}})],1)],2),!1===t.isEmpty?a("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"}},[a("template",{slot:"tabHeader"},[a("div",[a("h3",[t._v(t._s(t.tabGroupTitle))])])]),a("template",{slot:"overview"},[a("LabelList",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty}},[a("div",[a("ul",t._l(t.entity,(function(e,n){return a("li",{key:n},[a("h4",[t._v(" "+t._s(n)+" ")]),"status"===n?a("p",[a("KBadge",{attrs:{appearance:"Offline"===e?"danger":"success"}},[t._v(" "+t._s(e)+" ")])],1):a("p",[t._v(" "+t._s(e)+" ")])])})),0)])])],1),a("template",{slot:"insights"},[a("LoaderCard",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty}},[t.rawEntity?a("div",t._l(t.rawEntity.zoneInsight.subscriptions,(function(e,n){return a("div",{key:n,staticClass:"overview-stack"},[a("h4",{staticClass:"overview-title"},[t._v(" ID: "),a("span",{staticClass:"mono"},[t._v(t._s(e.id))])]),e.globalInstanceId||e.connectTime||e.disconnectTime?a("div",[a("h5",{staticClass:"overview-tertiary-title"},[t._v(" General Information: ")]),a("ul",[e.globalInstanceId?a("li",[a("strong",[t._v("Global Instance ID:")]),t._v(" "),a("span",{staticClass:"mono"},[t._v(t._s(e.globalInstanceId))])]):t._e(),e.connectTime?a("li",[a("strong",[t._v("Last Connected:")]),t._v(" "+t._s(t._f("readableDate")(e.connectTime))+" ")]):t._e(),e.disconnectTime?a("li",[a("strong",[t._v("Last Disconnected:")]),t._v(" "+t._s(t._f("readableDate")(e.disconnectTime))+" ")]):t._e()])]):t._e(),e.status?a("div",[e.status.stat?a("ul",{staticClass:"overview-stat-grid"},t._l(e.status.stat,(function(e,n){return a("li",{key:n},[a("h6",{staticClass:"overview-tertiary-title"},[t._v(" "+t._s(t._f("humanReadable")(n))+": ")]),a("ul",t._l(e,(function(e,n){return a("li",{key:n},[a("strong",[t._v(t._s(t._f("humanReadable")(n))+":")]),t._v(" "),a("span",{staticClass:"mono"},[t._v(t._s(t._f("formatError")(t._f("formatValue")(e))))])])})),0)])})),0):t._e()]):a("KAlert",{staticClass:"mt-4",attrs:{appearance:"info"}},[a("template",{slot:"alertIcon"},[a("KIcon",{attrs:{icon:"portal"}})],1),a("template",{slot:"alertMessage"},[t._v(" There are no Policy statistics for "),a("strong",[t._v(t._s(e.id))])])],2)],1)})),0):t._e()])],1),a("template",{slot:"yaml"},[a("YamlView",{attrs:{title:t.entityOverviewTitle,"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty,content:t.yamlEntity}})],1)],2):t._e()],1)],1)},i=[],s=(a("99af"),a("4160"),a("b0c0"),a("d3b7"),a("25f0"),a("159b"),a("2909")),r=a("5530"),o=a("2f62"),l=a("d7c2"),c=a("8218"),u=a("1d10"),m=a("43c3"),d=a("b6c6"),p=a("1799"),h=a("2778"),f=a("251b"),v=a("ff9d"),b=a("0ada"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader-card"},[t.isReady?a("div",{staticClass:"loader-card-content"},[t.isLoading||t.isEmpty?t._e():a("KCard",{attrs:{"border-variant":"noBorder"}},[a("template",{slot:"body"},[t._t("default")],2)],2)],1):t._e(),t.isLoading?a("KEmptyState",{attrs:{"cta-is-hidden":""}},[a("template",{slot:"title"},[a("div",{staticClass:"card-icon mb-3"},[a("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1),t._v(" Data Loading... ")])],2):t._e(),t.isEmpty&&!t.isLoading?a("KEmptyState",{attrs:{"cta-is-hidden":""}},[a("template",{slot:"title"},[a("div",{staticClass:"card-icon mb-3"},[a("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-200)",icon:"warning",size:"42"}})],1),t._v(" There is no data to display. ")])],2):t._e(),t.hasError?a("KEmptyState",{attrs:{"cta-is-hidden":""}},[a("template",{slot:"title"},[a("div",{staticClass:"card-icon mb-3"},[a("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-200)",icon:"warning",size:"42"}})],1),t._v(" An error has occurred while trying to load this data. ")])],2):t._e()],1)},g=[],_={name:"LoaderCard",props:{title:{type:String,default:null},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},computed:{isReady:function(){return!this.isEmpty&&!this.hasError&&!this.isLoading}}},E=_,w=(a("b068"),a("2877")),x=Object(w["a"])(E,y,g,!1,null,null,null),O=x.exports,I={name:"Zones",metaInfo:{title:"Zones"},components:{FrameSkeleton:u["a"],PageHeader:m["a"],Breadcrumbs:d["a"],Pagination:p["a"],DataOverview:h["a"],Tabs:f["a"],YamlView:v["a"],LabelList:b["a"],LoaderCard:O},filters:{formatValue:function(t){return t?parseInt(t).toLocaleString("en").toString():0},readableDate:function(t){return Object(l["e"])(t)},humanReadable:function(t){return Object(l["a"])(t)},formatError:function(t){return"--"===t?"error calculating":t}},mixins:[c["a"]],data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Zones present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Insights"},{hash:"#yaml",title:"YAML"}],entity:[],rawEntity:null,yamlEntity:null,firstEntity:null,pageSize:this.$pageSize,pageOffset:null,next:null,hasNext:!1,previous:[],tabGroupTitle:null,entityOverviewTitle:null,itemsPerCol:3}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(o["c"])({mesh:"selectedMesh"})),Object(o["b"])({multicluster:"getMulticlusterStatus"})),{},{pageTitle:function(){var t=this.$route.meta.title;return t},shareUrl:function(){var t=this,e="".concat(window.location.origin,"#"),a=this.entity,n=function(){return t.$route.query.ns?t.$route.fullPath:"".concat(e).concat(t.$route.fullPath,"?ns=").concat(a.name)};return n()}}),watch:{$route:function(t,e){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.multicluster&&this.loadData()},goToPreviousPage:function(){this.pageOffset=this.previous.pop(),this.next=null,this.loadData()},goToNextPage:function(){this.previous.push(this.pageOffset),this.pageOffset=this.next,this.next=null,this.loadData()},tableAction:function(t){var e=t;this.$store.dispatch("updateSelectedTab",this.tabs[0].hash),this.$store.dispatch("updateSelectedTableRow",e.name),this.getEntity(e)},loadData:function(){var t=this;this.isLoading=!0,this.isEmpty=!1;var e=this.$api.getZoneStatus(),a=function(){return e.then((function(e){var a=!(!e||!e.next)&&e.next;a?(t.next=Object(l["c"])(e.next),t.hasNext=!0):t.hasNext=!1;var n=e;n&&n.length>0?(n.forEach((function(t){var e=!1===t.active?"Offline":"Online";delete t.active,t.status=e})),t.sortEntities(n),t.firstEntity=n[0].name,t.getEntity(n[0]),t.$store.dispatch("updateSelectedTableRow",t.firstEntity),t.tableData.data=Object(s["a"])(n),t.tableDataIsEmpty=!1,t.isEmpty=!1):(t.tableData.data=[],t.tableDataIsEmpty=!0,t.isEmpty=!0,t.getEntity(null))})).catch((function(e){t.hasError=!0,t.isEmpty=!0,console.error(e)})).finally((function(){setTimeout((function(){t.isLoading=!1}),"500")}))};a()},getEntity:function(t){var e=this;this.entityIsLoading=!0,this.entityIsEmpty=!1;var a=["type","name","mesh"],n=new Promise((function(e,a){if(t&&null!==t)e(t);else{var n=new Error("Entity is either undefined or not present.");a(n)}}));t&&null!==t?n.then((function(t){t?e.$api.getZoneOverview(t.name).then((function(t){e.tabGroupTitle="Zone: ".concat(t.name),e.entityOverviewTitle="Zone Overview for ".concat(t.name);var n=function(){var e=Object.assign({},t);return delete e.zoneInsight,e};e.entity=Object(l["d"])(t,a),e.rawEntity=Object(l["i"])(t),e.yamlEntity=n()})):(e.entity=null,e.entityIsEmpty=!0)})).catch((function(t){e.entityHasError=!0,console.error(t)})).finally((function(){setTimeout((function(){e.entityIsLoading=!1}),"500")})):setTimeout((function(){e.entityIsEmpty=!0,e.entityIsLoading=!1}),"500")}}},T=I,C=(a("0fd3"),Object(w["a"])(T,n,i,!1,null,"2d0325e7",null));e["default"]=C.exports},d538:function(t,e,a){},e234:function(t,e,a){"use strict";var n=a("38ba"),i=a.n(n);i.a},e7ab:function(t,e,a){"use strict";var n=a("5f76"),i=a.n(n);i.a}}]);