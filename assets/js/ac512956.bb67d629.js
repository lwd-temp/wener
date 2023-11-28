"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28007],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,y=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98776:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return O},default:function(){return g},frontMatter:function(){return y},metadata:function(){return d},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>i(e,a(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={title:"POSIX"},O="POSIX",d={unversionedId:"os/linux/posix",id:"os/linux/posix",title:"POSIX",description:"- Portable Operating System Interface",source:"@site/../notes/os/linux/posix.md",sourceDirName:"os/linux",slug:"/os/linux/posix",permalink:"/notes/os/linux/posix",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/posix.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642517272,formattedLastUpdatedAt:"Jan 18, 2022",frontMatter:{title:"POSIX"},sidebar:"docs",previous:{title:"Partition",permalink:"/notes/os/linux/partition"},next:{title:"ACL",permalink:"/notes/os/linux/security/chmod"}},b={},v=[],w={toc:v},P="wrapper";function g(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(P,f(s(s({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"posix"}),"POSIX"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Portable Operating System Interface"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/POSIX"}),"POSIX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.quobyte.com/storage-explained/posix-filesystem"}),"What is a POSIX file system?")))),(0,n.kt)("li",{parentName:"ul"},"POSIX Programmer's Manual")))}g.isMDXComponent=!0}}]);