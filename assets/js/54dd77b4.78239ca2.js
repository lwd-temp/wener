"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93443],{49613:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(d,i(i({ref:e},u),{},{components:r})):n.createElement(d,i({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24046:function(t,e,r){r.r(e),r.d(e,{assets:function(){return N},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&u(t,r,e[r]);if(o)for(var r of o(e))c.call(e,r)&&u(t,r,e[r]);return t},s=(t,e)=>l(t,i(e)),f=(t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&c.call(t,n)&&(r[n]=t[n]);return r};const d={title:"CBOR",tags:["RFC"]},b="CBOR",k={unversionedId:"service/api/cbor",id:"service/api/cbor",title:"CBOR",description:"- cbor - Concise Binary Object Representation",source:"@site/../notes/service/api/cbor.md",sourceDirName:"service/api",slug:"/service/api/cbor",permalink:"/notes/service/api/cbor",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/cbor.md",tags:[{label:"RFC",permalink:"/notes/tags/rfc"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"CBOR",tags:["RFC"]},sidebar:"docs",previous:{title:"buf",permalink:"/notes/service/api/buf"},next:{title:"Dubbo",permalink:"/notes/service/api/dubbo"}},N={},g=[],y={toc:g},O="wrapper";function h(t){var e=t,{components:r}=e,a=f(e,["components"]);return(0,n.kt)(O,s(m(m({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"cbor"}),"CBOR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://cbor.io/"}),"cbor")," - Concise Binary Object Representation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RFC 8949"),(0,n.kt)("li",{parentName:"ul"},"JSON \u7684\u4e8c\u8fdb\u5236\u66ff\u4ee3"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4f1a\u548c JSON \u6df7\u5408\u4f7f\u7528"))),(0,n.kt)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f\uff1a IoT\u3001SOA\u3001\u9700\u8981\u6027\u80fd\u3001\u9700\u8981\u51cf\u5c11\u5e26\u5bbd"),(0,n.kt)("li",{parentName:"ul"},"adopted by",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WebAuthN"),(0,n.kt)("li",{parentName:"ul"},"WebIntegraty"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://cbor.me"}),"cbor.me"),"\nOnline converter"),(0,n.kt)("li",{parentName:"ul"},"Golang - ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fxamacker/cbor"}),"fxamacker/cbor")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc8949"}),"rfc8949"),"\nCBOR - Concise Binary Object Representation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc8610"}),"rfc8610"),"\nCDDL - Concise Data Definition Language"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc8152"}),"rfc8152"),"\nCOSE - CBOR Object Signing and Encryption"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc8392"}),"rfc8392"),"\nCWT - CBOR Web Token")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"th"},{href:"https://datatracker.ietf.org/doc/html/rfc8949.html#section-3.1"}),"Major Type")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Meaning"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Content"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"unsigned integer N"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"negative integer -1-N"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"byte string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"N bytes - base64url - wo pad")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"text string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"N bytes (UTF-8 text)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"array"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"N data items (elements)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"map"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2N data items (key/ value pairs)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"tag of number N"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1 data item")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"7"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"simple/float"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"-")))))}h.isMDXComponent=!0}}]);