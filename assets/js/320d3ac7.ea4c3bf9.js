"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[5961],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58009:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))l.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>i(e,c(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"cilium"},b="cilium",y={unversionedId:"devops/kubernetes/network/cilium",id:"devops/kubernetes/network/cilium",title:"cilium",description:"- cilium/cilium",source:"@site/../notes/devops/kubernetes/network/cilium.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/cilium",permalink:"/notes/devops/kubernetes/network/cilium",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/cilium.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645033829,formattedLastUpdatedAt:"Feb 16, 2022",frontMatter:{title:"cilium"},sidebar:"docs",previous:{title:"Calico",permalink:"/notes/devops/kubernetes/network/calico"},next:{title:"emissary-ingress",permalink:"/notes/devops/kubernetes/network/emissary-ingress"}},v={},O=[],k={toc:O},w="wrapper";function g(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(w,f(p(p({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"cilium"}),"cilium"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/cilium/cilium"}),"cilium/cilium"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e eBPF \u7684\u7f51\u7edc\u7ec4\u5efa"),(0,n.kt)("li",{parentName:"ul"},"\u65e0 sidecar")))))}g.isMDXComponent=!0}}]);