import{n as e,r as o}from"./index.b71bdeda.js";import{T as i,S as c}from"./TableEdit.2e7227d9.js";/* empty css                                                                 */const n={__name:"KPIDateMainten",setup(a){const t={yymm:5,name:5},s=o([{date:"2016-05-03",name:"\u738B\u5C0F\u864E"}]);return{__sfc:!0,showbox:t,tableData:s,TableEdit:i,Sraech:c}}};var _=function(){var t=this,s=t._self._c,r=t._self._setupProxy;return s("div",{staticClass:"m-3"},[s("h1",[t._v("ME KPI\u8CC7\u6599\u7DAD\u8B77")]),s(r.Sraech,{attrs:{showbox:r.showbox}}),s("div",{staticClass:"yahome-table-wrap"},[s("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#303c50",color:"#ffffff"},data:r.tableData,height:"250"}},[s("el-table-column",{attrs:{fixed:"",prop:"date",label:"\u5E74\u6708",width:"150"}}),s("el-table-column",{attrs:{fixed:"",prop:"id",label:"\u5EE0\u5225",width:"150"}}),s("el-table-column",{attrs:{fixed:"",prop:"name",label:"\u7FA4\u7D44",width:"150"}}),s("el-table-column",{attrs:{prop:"departmentCode",label:"\u54E1\u5DE5\u5DE5\u865F",width:"150"}}),s("el-table-column",{attrs:{prop:"department",label:"\u54E1\u5DE5\u59D3\u540D",width:"150"}}),s("el-table-column",{attrs:{prop:"registrationDate",label:"\u7E3D\u6210\u7E3E",width:"150"}}),s("el-table-column",{attrs:{prop:"LeaveDate",label:"\u71C8\u865F",width:"150"}}),s("el-table-column",{attrs:{prop:"workTime",label:"\u6700\u7D42\u6210\u7E3E",width:"150"}}),s("el-table-column",{attrs:{prop:"actualWork",label:"\u7B49\u7B2C",width:"150"}}),s(r.TableEdit)],1)],1),s("div",{staticClass:"modal fade",attrs:{id:"addNewOne","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",{staticClass:"row g-3"},[t._m(1),s("div",{staticClass:"row col-12 mb-2"},[s("div",{staticClass:"col-md-2 pr-0"},[s("label",{staticClass:"form-label mb-0",attrs:{for:"vacationCAT"}},[t._v("\u5EE0\u5225")]),s("el-select",{attrs:{placeholder:"\u9078\u64C7"},model:{value:t.value,callback:function(l){t.value=l},expression:"value"}},t._l(5,function(l){return s("el-option",{key:l.value,attrs:{label:l.label,value:l.value}})}),1)],1),t._m(2),t._m(3),t._m(4),t._m(5)]),s("div",{staticClass:"row col-12 mb-2"},[s("div",{staticClass:"col-md-2 pr-0"},[s("label",{staticClass:"form-label mb-0",attrs:{for:"vacationCAT"}},[t._v("\u7E3D\u6210\u7E3E")]),s("el-select",{attrs:{placeholder:"\u9078\u64C7"},model:{value:t.value,callback:function(l){t.value=l},expression:"value"}},t._l(5,function(l){return s("el-option",{key:l.value,attrs:{label:l.label,value:l.value}})}),1)],1),t._m(6),t._m(7),t._m(8),t._m(9)]),t._m(10),t._m(11)])]),t._m(12)])])]),s("div",{staticClass:"modal fade",attrs:{id:"viewOne","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl"},[s("div",{staticClass:"modal-content"},[t._m(13),s("div",{staticClass:"modal-body"},[s("form",{staticClass:"row g-3"},[t._m(14),t._m(15),s("div",{staticClass:"row col-12 mb-2"},[s("div",{staticClass:"col-md-2 pr-0"},[s("label",{staticClass:"form-label mb-0",attrs:{for:"vacationCAT"}},[t._v("\u8077\u985E")]),s("el-select",{attrs:{placeholder:"\u9078\u64C7"},model:{value:t.value,callback:function(l){t.value=l},expression:"value"}},t._l(5,function(l){return s("el-option",{key:l.value,attrs:{label:l.label,value:l.value}})}),1)],1),t._m(16),t._m(17),t._m(18),t._m(19)]),s("div",{staticClass:"row col-12 mb-2"},[s("div",{staticClass:"col-md-2 pr-0"},[s("label",{staticClass:"form-label mb-0",attrs:{for:"vacationCAT"}},[t._v("\u5C08\u696D\u8077\u80FD\u71C8\u865F")]),s("el-select",{attrs:{placeholder:"\u9078\u64C7"},model:{value:t.value,callback:function(l){t.value=l},expression:"value"}},t._l(5,function(l){return s("el-option",{key:l.value,attrs:{label:l.label,value:l.value}})}),1)],1),t._m(20),t._m(21),t._m(22),t._m(23)]),t._m(24)])]),t._m(25)])])])],1)},d=[function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[a._v("\u65B0\u589E")]),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("\xD7")])])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"row col-12 mb-2"},[t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"data"}},[a._v("\u5E74\u6708")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"data"}})]),t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"person"}},[a._v("\u54E1\u5DE5")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"person"}})])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u7FA4\u7D44")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u7D44\u7E54\u540D\u7A31")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u8077\u7B49")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u8077\u7B49\u7FA4")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u71C8\u865F")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u6700\u7D42\u71C8\u865F")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u7B49\u7B2C")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u5206\u985E")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"row col-12 mb-2"},[t("div",{staticClass:"col-lg-10 col-md-10"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationCATCf"}},[a._v("\u5099\u8A3B")]),t("input",{staticClass:"form-control",attrs:{type:"textarea",id:"vacationCATCf",placeholder:"1234 Main St"}})])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"row col-12 mb-2"},[t("div",{staticClass:"col-lg-6 col-md-6"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationCATCf"}},[a._v("\u5C0F\u7FA4\u7D44")]),t("input",{staticClass:"form-control",attrs:{type:"textarea",id:"vacationCATCf",placeholder:"1234 Main St"}})]),t("div",{staticClass:"col-lg-6 col-md-6"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationCATCf"}},[a._v("\u5DE5\u5EE0")]),t("input",{staticClass:"form-control",attrs:{type:"textarea",id:"vacationCATCf",placeholder:"1234 Main St"}})])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[a._v("\u53D6\u6D88")]),t("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a._v("\u5132\u5B58")])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[a._v("\u6AA2\u8996")]),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("\xD7")])])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"row col-12 mb-2"},[t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"data"}},[a._v("\u5E74\u6708")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"data"}})]),t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"person"}},[a._v("\u54E1\u5DE5")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"person"}})]),t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"dpt"}},[a._v("\u5230\u8077\u65E5\u671F")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"dpt",disabled:"disable"}})])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"row col-12 mb-2"},[t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"shouldWork"}},[a._v("\u5EE0\u5225")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"shouldWork",placeholder:"1234 Main St"}})]),t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"workTime"}},[a._v("\u90E8\u9580")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"workTime",placeholder:"1234 Main St"}})]),t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"workTime"}},[a._v("\u7AD9\u9EDE")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"workTime",placeholder:"1234 Main St"}})])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u8077\u7B49")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u8077\u7A31")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u5E74\u8CC7")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u5728\u8077\u72C0\u614B")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("\u7E3D\u71C8\u865F")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("2nd \u91CD\u6E2C\u71C8\u865F")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("3rd \u91CD\u6E2C\u71C8\u865F")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"col-md-2 pr-0"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationHours"}},[a._v("Owncr")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationHours",placeholder:"1234 Main St"}})])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"row col-12 mb-2"},[t("div",{staticClass:"col-lg-10 col-md-10"},[t("label",{staticClass:"form-label mb-0",attrs:{for:"vacationCATCf"}},[a._v("\u7E3D\u71C8\u865F\u5099\u8A3B")]),t("input",{staticClass:"form-control",attrs:{type:"text",id:"vacationCATCf",placeholder:"1234 Main St"}})])])},function(){var a=this,t=a._self._c;return a._self._setupProxy,t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[a._v("\u53D6\u6D88")]),t("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a._v("\u5132\u5B58")])])}],m=e(n,_,d,!1,null,"34c2ebe3",null,null);const p=m.exports;export{p as default};
