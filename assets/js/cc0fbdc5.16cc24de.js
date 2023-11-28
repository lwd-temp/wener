"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30915],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),b=a,m=s["".concat(l,".").concat(b)]||s[b]||f[b]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2938:function(e,t,r){r.r(t),r.d(t,{assets:function(){return O},contentTitle:function(){return d},default:function(){return j},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),b=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"acorn"},d="acorn",y={unversionedId:"web/script/lib/acorn",id:"web/script/lib/acorn",title:"acorn",description:"- acornjs/acorn",source:"@site/../notes/web/script/lib/acorn.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/acorn",permalink:"/notes/web/script/lib/acorn",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/lib/acorn.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"acorn"},sidebar:"docs",previous:{title:"ECMAScript Version",permalink:"/notes/web/script/js/version"},next:{title:"ajv",permalink:"/notes/web/script/lib/ajv"}},O={},v=[],w={toc:v},g="wrapper";function j(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(g,f(s(s({},w),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"acorn"}),"acorn"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/acornjs/acorn"}),"acornjs/acorn"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"small, fast, JavaScript-based JavaScript parser")))),(0,n.kt)("admonition",s({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u5305\u542b stage4+ \u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"stage3 \u901a\u8fc7\u63d2\u4ef6\u63d0\u4f9b ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/acornjs/acorn-stage3"}),"acorn-stage3")))),(0,n.kt)("li",{parentName:"ul"},"rollup \u5185\u90e8\u4f7f\u7528 acorn"))))}j.isMDXComponent=!0}}]);