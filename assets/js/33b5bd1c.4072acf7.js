"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62978],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69778:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return g},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>i(e,a(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"nps"},y="nps",b={unversionedId:"service/network/nps",id:"service/network/nps",title:"nps",description:"- ehang-io/nps \u662f\u4ec0\u4e48?",source:"@site/../notes/service/network/nps.md",sourceDirName:"service/network",slug:"/service/network/nps",permalink:"/notes/service/network/nps",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/nps.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1623852073,formattedLastUpdatedAt:"Jun 16, 2021",frontMatter:{title:"nps"},sidebar:"docs",previous:{title:"NextDNS",permalink:"/notes/service/network/nextdns"},next:{title:"\u4ee3\u7406",permalink:"/notes/service/network/proxy/"}},v={},O=[],w={toc:O},k="wrapper";function g(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(k,f(u(u({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"nps"}),"nps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/ehang-io/nps"}),"ehang-io/nps")," \u662f\u4ec0\u4e48?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GPL"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u7f51\u7a7f\u900f\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c frp (Apache 2.0) - \u7ba1\u7406\u754c\u9762\u548c\u529f\u80fd\u76f8\u5bf9\u66f4\u52a0\u5b8c\u5584")))),(0,n.kt)("admonition",u({},{title:"\u6ce8\u610f",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u5f00\u53d1\u505c\u6ede\uff0c\u8f6c\u5411\u95ed\u6e90\u6536\u8d39")))}g.isMDXComponent=!0}}]);