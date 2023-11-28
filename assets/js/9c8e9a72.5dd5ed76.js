"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45692],{49613:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return f}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(r),s=a,f=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},20535:function(t,e,r){r.r(e),r.d(e,{assets:function(){return N},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&d(t,r,e[r]);if(o)for(var r of o(e))u.call(e,r)&&d(t,r,e[r]);return t},m=(t,e)=>l(t,i(e)),s=(t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r};const f={title:"USB"},b="USB",k={unversionedId:"hardware/interface/usb",id:"hardware/interface/usb",title:"USB",description:"- \u7cfb\u7edf\u7ed3\u6784",source:"@site/../notes/hardware/interface/usb.md",sourceDirName:"hardware/interface",slug:"/hardware/interface/usb",permalink:"/notes/hardware/interface/usb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/interface/usb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667302770,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{title:"USB"},sidebar:"docs",previous:{title:"SATA",permalink:"/notes/hardware/interface/sata"},next:{title:"IoT",permalink:"/notes/hardware/iot/"}},N={},g=[{value:"\u901f\u5ea6",id:"\u901f\u5ea6",level:2}],y={toc:g},h="wrapper";function w(t){var e=t,{components:r}=e,a=s(e,["components"]);return(0,n.kt)(h,m(c(c({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"usb"}),"USB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://en.wikipedia.org/wiki/USB#System_design"}),"\u7cfb\u7edf\u7ed3\u6784"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Host + one or more downstream ports + multiple peripherals"),(0,n.kt)("li",{parentName:"ul"},"Hubs - \u6700\u591a 5 \u5c42"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a host \u53ef\u4ee5\u6709\u591a\u4e2a\u63a7\u5236\u5668\uff0c\u6bcf\u4e2a\u63a7\u5236\u5668\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7aef\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a host \u6700\u591a 127 \u8bbe\u5907"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8bbe\u5907\u53ef\u4ee5\u6709\u591a\u4e2a\u903b\u8f91\u8bbe\u5907 - device functions"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u8bbe\u5907\u53ef\u63d0\u4f9b\u591a\u4e2a\u529f\u80fd - webcam + microphone"),(0,n.kt)("li",{parentName:"ul"},"\u590d\u5408\u8bbe\u5907\u8fde\u63a5\u903b\u8f91\u8bbe\u5907\u5230\u5185\u5efa Hub"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://fabiensanglard.net/usbcheat/index.html"}),"https://fabiensanglard.net/usbcheat/index.html"))))),(0,n.kt)("h2",c({},{id:"\u901f\u5ea6"}),"\u901f\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Standard"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u53d1\u5e03\u65e5\u671f"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u6700\u5927\u4f20\u8f93\u901f\u7387"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"USB 1.1"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"1998-08"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Full Speed (12 Mbit/s)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"USB 2.0"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"2000-04"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"High Speed (480 Mbit/s)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"USB 3.0"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"2008-11"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"SuperSpeed (5 Gbit/s)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Thunderbolt"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"2011"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"10 Gbps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"USB 3.1"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"2013-07"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"SuperSpeed+ (10 Gbit/s)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Thunderbolt 2"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"2013"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"20 Gbps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"USB Type-C"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"2014"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Thunderbolt 3"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"2015"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"40 Gbps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"USB 3.2 Gen 1"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))))))}w.isMDXComponent=!0}}]);