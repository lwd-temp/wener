"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29289],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return O},contentTitle:function(){return b},default:function(){return x},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return v}});var r=n(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},f=(e,t)=>i(e,a(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const d={title:"Linux Admin",tags:["Admin"]},b="Linux Admin",y={unversionedId:"os/linux/admin/README",id:"os/linux/admin/README",title:"Linux Admin",description:"Free RAM is wasted RAM",source:"@site/../notes/os/linux/admin/README.md",sourceDirName:"os/linux/admin",slug:"/os/linux/admin/",permalink:"/notes/os/linux/admin/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/admin/README.md",tags:[{label:"Admin",permalink:"/notes/tags/admin"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"Linux Admin",tags:["Admin"]},sidebar:"docs",previous:{title:"LibreELEC",permalink:"/notes/os/libreelec"},next:{title:"Filesystem Hierarchy Standard",permalink:"/notes/os/linux/admin/fhs"}},O={},v=[],w={toc:v},g="wrapper";function x(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(g,f(p(p({},w),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"linux-admin"}),"Linux Admin"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Free RAM is wasted RAM")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU L1 > L2 > L3 > RAM > NVDIMM > Disk Cache > Disk")))}x.isMDXComponent=!0}}]);