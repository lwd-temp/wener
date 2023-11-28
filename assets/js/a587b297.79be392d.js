"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7825],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=p(r),y=o,d=l["".concat(u,".").concat(y)]||l[y]||f[y]||c;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[l]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},11706:function(e,t,r){r.r(t),r.d(t,{assets:function(){return O},contentTitle:function(){return m},default:function(){return P},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>c(e,i(t)),y=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"PKCS"},m="PKCS",b={unversionedId:"security/pkcs",id:"security/pkcs",title:"PKCS",description:"- PKCS - Public-Key Cryptography Standards [rfc7292]",source:"@site/../notes/security/pkcs.md",sourceDirName:"security",slug:"/security/pkcs",permalink:"/notes/security/pkcs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/pkcs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"PKCS"},sidebar:"docs",previous:{title:"OpenSSL",permalink:"/notes/security/openssl"},next:{title:"trivy",permalink:"/notes/security/scan/trivy"}},O={},v=[],g={toc:v},w="wrapper";function P(e){var t=e,{components:r}=t,o=y(t,["components"]);return(0,n.kt)(w,f(l(l({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"pkcs"}),"PKCS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PKCS - Public-Key Cryptography Standards ","[rfc7292]")))}P.isMDXComponent=!0}}]);