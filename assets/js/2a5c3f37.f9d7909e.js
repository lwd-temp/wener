"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19493],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76606:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return j},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"Code FAQ",tags:["FAQ"]},y="Code FAQ",b={unversionedId:"dev/code-faq",id:"dev/code-faq",title:"Code FAQ",description:"\u4e8c\u5206",source:"@site/../notes/dev/code-faq.md",sourceDirName:"dev",slug:"/dev/code-faq",permalink:"/notes/dev/code-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/code-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656950348,formattedLastUpdatedAt:"Jul 4, 2022",frontMatter:{title:"Code FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Dapr",permalink:"/notes/dev/cloud/dapr"},next:{title:"infer",permalink:"/notes/dev/coding/infer"}},v={},O=[{value:"\u4e8c\u5206",id:"\u4e8c\u5206",level:2}],g={toc:O},w="wrapper";function j(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(w,s(f(f({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"code-faq"}),"Code FAQ"),(0,n.kt)("h2",f({},{id:"\u4e8c\u5206"}),"\u4e8c\u5206"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// \u53ef\u80fd\u6ea2\u51fa\nmid = (min + max) / 2;\n// \u907f\u514d\u6ea2\u51fa\nmid = (max - min) / 2 + min;\n")))}j.isMDXComponent=!0}}]);