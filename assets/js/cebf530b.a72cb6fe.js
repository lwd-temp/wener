"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52248],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,y=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27705:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return y},metadata:function(){return d},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const y={title:"coreutils",tags:["Utility"]},b="coreutils",d={unversionedId:"os/linux/coreutils",id:"os/linux/coreutils",title:"coreutils",description:"- https://www.gnu.org/software/coreutils/",source:"@site/../notes/os/linux/coreutils.md",sourceDirName:"os/linux",slug:"/os/linux/coreutils",permalink:"/notes/os/linux/coreutils",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/coreutils.md",tags:[{label:"Utility",permalink:"/notes/tags/utility"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1648327879,formattedLastUpdatedAt:"Mar 26, 2022",frontMatter:{title:"coreutils",tags:["Utility"]},sidebar:"docs",previous:{title:"Linux cluster awesome",permalink:"/notes/os/linux/cluster/awesome"},next:{title:"Desktop",permalink:"/notes/os/linux/desktop/"}},w={},O=[],g={toc:O},v="wrapper";function k(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(v,f(p(p({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"coreutils"}),"coreutils"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.gnu.org/software/coreutils/"}),"https://www.gnu.org/software/coreutils/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"since 2002, \u5408\u5e76 extutils, shellutils, fileutils \u548c\u5176\u4ed6\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.gnu.org/software/coreutils/manual/coreutils.html"}),"manual")))),(0,n.kt)("li",{parentName:"ul"},"\u66ff\u4ee3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"busybox"),(0,n.kt)("li",{parentName:"ul"},"toybox")))))}k.isMDXComponent=!0}}]);