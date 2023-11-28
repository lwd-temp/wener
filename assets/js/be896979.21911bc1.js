"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67059],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2227:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"\u7c7b\u578b"},y="\u7c7b\u578b",h={unversionedId:"dev/theory/typing",id:"dev/theory/typing",title:"\u7c7b\u578b",description:"- \u7c7b\u578b\u662f\u8ba9\u6240\u6709\u4e0d\u540c\u80cc\u666f\u7684\u4eba\u90fd\u80fd\u9ad8\u6548\u6c9f\u901a\u7684\u5143\u8bed\u8a00",source:"@site/../notes/dev/theory/typing.md",sourceDirName:"dev/theory",slug:"/dev/theory/typing",permalink:"/notes/dev/theory/typing",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/theory/typing.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641638108,formattedLastUpdatedAt:"Jan 8, 2022",frontMatter:{title:"\u7c7b\u578b"},sidebar:"docs",previous:{title:"\u9650\u5236\u7406\u8bba",permalink:"/notes/dev/theory/of-constraints"},next:{title:"timezone",permalink:"/notes/dev/timezone"}},g={},b=[],v={toc:b},w="wrapper";function O(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(w,f(s(s({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u662f\u8ba9\u6240\u6709\u4e0d\u540c\u80cc\u666f\u7684\u4eba\u90fd\u80fd\u9ad8\u6548\u6c9f\u901a\u7684\u5143\u8bed\u8a00"),(0,n.kt)("li",{parentName:"ul"},"Hindley-Milner"),(0,n.kt)("li",{parentName:"ul"},"free theorems",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://ttic.uchicago.edu/~dreyer/course/papers/wadler.pdf"}),"https://ttic.uchicago.edu/~dreyer/course/papers/wadler.pdf")))),(0,n.kt)("li",{parentName:"ul"},"Haskell \u7684 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://hoogle.haskell.org/"}),"Hoogle")," \u652f\u6301\u57fa\u4e8e\u51fd\u6570\u7c7b\u578b\u641c\u7d22"),(0,n.kt)("li",{parentName:"ul"},"Lightweight higher-kinded polymorphism",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf"}),"https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf"))))))}O.isMDXComponent=!0}}]);