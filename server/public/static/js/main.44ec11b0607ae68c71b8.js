(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,function(e,t,n){"use strict"},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(72);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var r=n(67);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var i=n(63);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=n(59);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var l=n(57);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(74);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var r=n(53);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var i=n(51);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=n(47);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GET_PHONES_FAILURE=t.GET_PHONES_SUCCESS=t.GET_PHONES=void 0,t.getPhonesList=function(){return function(e){return e({type:r}),(0,o.PhonesServiceFactory)().getPhones().then(function(t){var n;e((n=t.data,{type:i,payload:n}))}).catch(function(){e({type:a})})}};var o=n(97);n(9),n(8);var r=t.GET_PHONES="GET_PHONES",i=t.GET_PHONES_SUCCESS="GET_PHONES_SUCCESS",a=t.GET_PHONES_FAILURE="GET_PHONES_FAILURE"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(9),i=n(98),a=(o=i)&&o.__esModule?o:{default:o};var l=(0,r.combineReducers)({phones:a.default});t.default=l},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){(e.exports=n(7)(!1)).push([e.i,":root{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:16px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{font-family:sans-serif}",""])},function(e,t,n){var o=n(41);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o},a=n(10),l=n(12);t.default=function(){return i.default.createElement(a.Switch,null,i.default.createElement(a.Route,{exact:!0,path:"/",component:l.PhoneListContainer}),i.default.createElement(a.Route,{path:"/detail/:id",component:l.PhoneDetailContainer}))}},function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,"._3aJAFcg3r_l0tAGmFGZKNR{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:calc(100vh - 5.625em);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""]),t.locals={spinnerContainer:"_3aJAFcg3r_l0tAGmFGZKNR"}},function(e,t,n){var o=n(44);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(1)),r=n(11),i=a(n(45));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return o.default.createElement("div",{className:i.default.spinnerContainer},o.default.createElement(r.Spinner,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(46);Object.defineProperty(t,"SpinnerContainer",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,"._2nJBijySHKdolEFhGnbdgf{display:block}@media (min-width:37.5em){._2nJBijySHKdolEFhGnbdgf{display:-webkit-box;display:-ms-flexbox;display:flex}}.tw8X6gvYZWYeb4unKPhtl{display:block;text-align:center}@media (min-width:37.5em){.tw8X6gvYZWYeb4unKPhtl{display:inline-block}}.YB-e1p3p8Js7ud-01ypg0{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1em}._2AXW0NuTpQaClIYPdpK4Qq{font-size:2.5rem;margin-bottom:.5em;text-align:center;text-transform:uppercase}@media (min-width:37.5em){._2AXW0NuTpQaClIYPdpK4Qq{text-align:left}}._2uagnMBxFNppGy8HmpSljk{font-weight:700;text-align:center}@media (min-width:37.5em){._2uagnMBxFNppGy8HmpSljk{text-align:left}}._2ZyCwkKYbUqjen3P-VdBt-{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#a02929;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;height:3em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}@media (min-width:37.5em){._2ZyCwkKYbUqjen3P-VdBt-{width:6em}}",""]),t.locals={container:"_2nJBijySHKdolEFhGnbdgf",imageContainer:"tw8X6gvYZWYeb4unKPhtl",info:"YB-e1p3p8Js7ud-01ypg0",title:"_2AXW0NuTpQaClIYPdpK4Qq",manufacturer:"_2uagnMBxFNppGy8HmpSljk",price:"_2ZyCwkKYbUqjen3P-VdBt-"}},function(e,t,n){var o=n(48);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapStateToProps=t.PhoneDetailContainerTesting=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=f(r),a=n(14),l=n(10),u=n(16),s=n(12);n(9),n(17),n(8);var c=f(n(49));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;void 0===this.props.phone&&e((0,u.getPhonesList)())}},{key:"render",value:function(){return void 0===this.props.phone?i.default.createElement(s.SpinnerContainer,null):i.default.createElement("div",{className:c.default.container},i.default.createElement("div",{className:c.default.imageContainer},i.default.createElement("img",{src:this.props.phone.image,alt:this.props.phone.name})),i.default.createElement("div",{className:c.default.info},i.default.createElement("h2",{className:c.default.title},this.props.phone.name),i.default.createElement("p",{className:c.default.manufacturer},"Built by: ",this.props.phone.manufacturer),i.default.createElement("p",{className:c.default.price},this.props.phone.price),i.default.createElement("p",{className:c.default.description},this.props.phone.description)))}}]),t}(),p=function(e,t){return{phone:e.phones.phones.find(function(e){return e.id===parseInt(t.match.params.id,10)})}};t.default=(0,l.withRouter)((0,a.connect)(p)(d)),t.PhoneDetailContainerTesting=d,t.mapStateToProps=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(50);Object.defineProperty(t,"PhoneDetailContainer",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapStateToProps=t.PhotoListContainerTesting=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),a=(o=i)&&o.__esModule?o:{default:o},l=n(14),u=n(11),s=n(12),c=n(16);n(8),n(9),n(17);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;this.props.isLoaded||e((0,c.getPhonesList)())}},{key:"render",value:function(){return a.default.createElement("div",null,this.props.isLoading?a.default.createElement(s.SpinnerContainer,null):null,this.props.isLoaded?a.default.createElement(u.PhoneList,{phones:this.props.phones}):null)}}]),t}(),d=function(e){return{phones:e.phones.phones,isLoading:e.phones.isLoading,isLoaded:e.phones.isLoaded}};t.default=(0,l.connect)(d)(f),t.PhotoListContainerTesting=f,t.mapStateToProps=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(52);Object.defineProperty(t,"PhoneListContainer",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,'._3q8xbTG4aotRgd6r45oikk{display:inline-block;height:64px;width:64px}._3q8xbTG4aotRgd6r45oikk:after{-webkit-animation:_3SKH3Byq6Uqo4x599D7sLZ 1.2s linear infinite;animation:_3SKH3Byq6Uqo4x599D7sLZ 1.2s linear infinite;border:5px solid #212240;border-color:#212240 transparent;border-radius:50%;content:"";display:block;height:46px;margin:1px;width:46px}@-webkit-keyframes _3SKH3Byq6Uqo4x599D7sLZ{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _3SKH3Byq6Uqo4x599D7sLZ{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.locals={spinner:"_3q8xbTG4aotRgd6r45oikk","lds-dual-ring":"_3SKH3Byq6Uqo4x599D7sLZ"}},function(e,t,n){var o=n(54);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(1)),r=i(n(55));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return o.default.createElement("div",{className:r.default.spinner,role:"alertdialog","aria-busy":"true","aria-live":"assertive"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(56);Object.defineProperty(t,"Spinner",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollToTopTesting=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=n(10);var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}();t.ScrollToTopTesting=a,t.default=(0,i.withRouter)(a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(58);Object.defineProperty(t,"ScrollToTop",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,"._2CjWNa3ShQo4NN8i_yjj4t{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:1em;width:calc(100% - 1em)}@media (min-width:37.5em){._2CjWNa3ShQo4NN8i_yjj4t{width:calc(100% / 2 - 1em)}}@media (min-width:56.25em){._2CjWNa3ShQo4NN8i_yjj4t{width:calc(100% / 3 - 1em)}}._2CjWNa3ShQo4NN8i_yjj4t+._2CjWNa3ShQo4NN8i_yjj4t{margin-top:1.25em}@media (min-width:37.5em){._2CjWNa3ShQo4NN8i_yjj4t+._2CjWNa3ShQo4NN8i_yjj4t{margin-top:0}}._2CjWNa3ShQo4NN8i_yjj4t:nth-child(n+4){margin-top:0}@media (min-width:37.5em){._2CjWNa3ShQo4NN8i_yjj4t:nth-child(n+4){margin-top:2em}}.o8TWpeOVn47OcMte5loj3{height:12.5em;width:12.5em}.vtRB_Dl6NrIfKVbsUR_Hz{margin:1em 0 .5em}.ufQ8SYWWR0NYyN3WtjJbC{color:#a02929;font-weight:700;margin-bottom:1.5em}.qqz2B8dSQI8ex6wyRShre{background:#6495ed;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.5em;text-decoration:none;width:10em}",""]),t.locals={container:"_2CjWNa3ShQo4NN8i_yjj4t",phoneImg:"o8TWpeOVn47OcMte5loj3",title:"vtRB_Dl6NrIfKVbsUR_Hz",price:"ufQ8SYWWR0NYyN3WtjJbC",btnAction:"qqz2B8dSQI8ex6wyRShre"}},function(e,t,n){var o=n(60);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PhoneListItemTesting=void 0;var o=a(n(1)),r=n(10);n(8);var i=a(n(61));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t="detail/"+e.phone.id;return o.default.createElement("div",{className:i.default.container,onClick:function(){e.history.push(t)},onKeyUp:function(n){13===n.keyCode&&e.history.push(t)},role:"listitem",tabIndex:0,id:"phone-list-item-container-"+e.phone.id},o.default.createElement("img",{className:i.default.phoneImg,src:e.phone.image,alt:e.phone.name}),o.default.createElement("h2",{className:i.default.title},e.phone.name),o.default.createElement("p",{className:i.default.price},e.phone.price),o.default.createElement("a",{href:"#",className:i.default.btnAction,onClick:function(n){n.stopPropagation(),n.preventDefault(),e.history.push(t)}},"See more"))};t.PhoneListItemTesting=l,t.default=(0,r.withRouter)(l)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(62);Object.defineProperty(t,"PhoneListItem",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,".jdaLTRyw3UrAKEsNmRKyp{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (min-width:37.5em){.jdaLTRyw3UrAKEsNmRKyp{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}",""]),t.locals={container:"jdaLTRyw3UrAKEsNmRKyp"}},function(e,t,n){var o=n(64);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(1)),r=n(11);n(8);var i=a(n(65));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.phones.map(function(e,t){return o.default.createElement(r.PhoneListItem,{phone:e,key:t})});return o.default.createElement("div",{role:"list",className:i.default.container},t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(66);Object.defineProperty(t,"PhoneList",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},,function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,".izfMlpocQzlhdzhHXlcLP{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#23334a;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;height:5.625em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""]),t.locals={container:"izfMlpocQzlhdzhHXlcLP"}},function(e,t,n){var o=n(69);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(1)),r=i(n(70));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return o.default.createElement("header",{className:r.default.container},o.default.createElement("h1",null,"Photo Catalog"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(71);Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o},a=n(11);t.default=function(e){return i.default.createElement(a.ScrollToTop,null,i.default.createElement(a.Header,null),e.routes)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(73);Object.defineProperty(t,"Layout",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_URL=""},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HttpClient=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(30),a=(o=i)&&o.__esModule?o:{default:o};t.HttpClient=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.BASE_URL=t}return r(e,[{key:"get",value:async function(e){return a.default.get(this.BASE_URL+e)}},{key:"post",value:async function(e,t){return a.default.post(this.BASE_URL+e,t)}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PhonesService=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(95),i=n(75);n(30),n(8);t.PhonesService=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.httpClient=new r.HttpClient(i.BASE_URL)}return o(e,[{key:"getPhones",value:function(){return this.httpClient.get("/phones")}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PhonesServiceFactory=void 0;var o=n(96);t.PhonesServiceFactory=function(){return new o.PhonesService}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(16);n(8);var i=t.initialState={phones:[],isLoading:!1,isLoaded:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case r.GET_PHONES:return o({},e,{phones:[],isLoading:!0,isLoaded:!1});case r.GET_PHONES_SUCCESS:return o({},e,{phones:t.payload,isLoading:!1,isLoaded:!0});case r.GET_PHONES_FAILURE:return o({},e,{phones:[],isLoading:!1,isLoaded:!1});default:return e}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.createStore)(i.default,e,l)};var o=n(9),r=a(n(99)),i=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}var l=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.compose)((0,o.applyMiddleware)(r.default))},,,,,,,,,,,,,,function(e,t,n){"use strict";var o=c(n(1)),r=n(112),i=n(14),a=n(10),l=c(n(100)),u=n(12),s=c(n(43));function c(e){return e&&e.__esModule?e:{default:e}}n(42);var f=(0,l.default)(),d=o.default.createElement(i.Provider,{store:f},o.default.createElement(a.HashRouter,null,o.default.createElement(u.Layout,{routes:(0,s.default)()})));(0,r.render)(d,document.getElementById("root"))},function(e,t,n){e.exports=n(114)}],[[115,0,1]]]);
//# sourceMappingURL=main.44ec11b0607ae68c71b8.js.map