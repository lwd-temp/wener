"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75962],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,b=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20248:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return w},default:function(){return O},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return d}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>a(e,c(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const b={title:"V8"},w="V8",y={unversionedId:"web/browser/chrome/v8",id:"web/browser/chrome/v8",title:"V8",description:"- https://chromium.googlesource.com/v8/v8.git",source:"@site/../notes/web/browser/chrome/v8.md",sourceDirName:"web/browser/chrome",slug:"/web/browser/chrome/v8",permalink:"/notes/web/browser/chrome/v8",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/browser/chrome/v8.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1696583601,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{title:"V8"},sidebar:"docs",previous:{title:"Puppeteer",permalink:"/notes/web/browser/chrome/puppeteer"},next:{title:"Safari",permalink:"/notes/web/browser/safari/"}},v={},d=[],h={toc:d},g="wrapper";function O(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(g,m(u(u({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"v8"}),"V8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://chromium.googlesource.com/v8/v8.git"}),"https://chromium.googlesource.com/v8/v8.git")),(0,n.kt)("li",{parentName:"ul"},"semi-space"),(0,n.kt)("li",{parentName:"ul"},"scavenge garbage collector"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.memorymanagement.org/glossary/s.html#semi.space"}),"https://www.memorymanagement.org/glossary/s.html#semi.space")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/a/24989927/1870054"}),"How does Bluebird's util.toFastProperties function make an object's properties \u201cfast\u201d?")),(0,n.kt)("li",{parentName:"ul"},"V8 \u7248\u672c\u4e0e Chrome \u7248\u672c\u5173\u7cfb - ",(0,n.kt)("a",u({parentName:"li"},{href:"http://omahaproxy.appspot.com/"}),"http://omahaproxy.appspot.com/"))))}O.isMDXComponent=!0}}]);