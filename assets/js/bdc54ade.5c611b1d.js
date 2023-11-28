"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97047],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2023:function(t,e,n){n.r(e),n.d(e,{assets:function(){return y},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&s(t,n,e[n]);if(o)for(var n of o(e))u.call(e,n)&&s(t,n,e[n]);return t},m=(t,e)=>l(t,i(e)),d=(t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n};const f={title:"IOPS"},k="IOPS",g={unversionedId:"os/linux/sys/iops",id:"os/linux/sys/iops",title:"IOPS",description:"| Type/RPM  | 4k,rand | 64k,rand | 64k,rand,MB/s | 512k,rand | 512k,rand,MB/s | seq,MB/s     |",source:"@site/../notes/os/linux/sys/iops.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/iops",permalink:"/notes/os/linux/sys/iops",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/iops.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"IOPS"},sidebar:"docs",previous:{title:"dtb",permalink:"/notes/os/linux/sys/dtb"},next:{title:"isolate",permalink:"/notes/os/linux/sys/isolate"}},y={},b=[],N={toc:b},O="wrapper";function v(t){var e=t,{components:n}=e,a=d(e,["components"]);return(0,r.kt)(O,m(c(c({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"iops"}),"IOPS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type/RPM"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"4k,rand"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"64k,rand"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"64k,rand,MB/s"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"512k,rand"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"512k,rand,MB/s"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"seq,MB/s"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SAS/15K"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"195"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"185"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"11.5"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"125"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"58.9 \u2013 68.9"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"91.5 \u2013 126.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SAS/10K"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"145"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"135"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"8.5"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"90"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"40.9 \u2013 53.1"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"58.1 \u2013 107.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SATA/7200"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"75"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"70"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"4.5"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"55"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"24.3 \u2013 32.1"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"43.4 \u2013 97.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SATA/5400"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"57"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"55"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"3.5"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"44"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"22.6"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/notes/ops/admin/fio"}),"fio")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/notes/hardware/fio-out"}),"fio examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://en.wikipedia.org/wiki/IOPS"}),"IOPS"))))}v.isMDXComponent=!0}}]);