"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10462],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),b=a,m=s["".concat(u,".").concat(b)]||s[b]||f[b]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},43421:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>i(e,o(t)),b=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"Liquibase"},y="Liquibase",d={unversionedId:"java/lib/liquibase",id:"java/lib/liquibase",title:"Liquibase",description:"- \u4f7f\u7528 XML, \u53ef\u4ee5\u64cd\u4f5c\u4e0d\u540c\u5e93",source:"@site/../notes/java/lib/liquibase.md",sourceDirName:"java/lib",slug:"/java/lib/liquibase",permalink:"/notes/java/lib/liquibase",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/lib/liquibase.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678678348,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Liquibase"},sidebar:"docs",previous:{title:"JMH",permalink:"/notes/java/lib/jmh"},next:{title:"MapStruct",permalink:"/notes/java/lib/mapstruct"}},v={},O=[],j={toc:O},g="wrapper";function w(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(g,f(s(s({},j),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"liquibase"}),"Liquibase"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 XML, \u53ef\u4ee5\u64cd\u4f5c\u4e0d\u540c\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e00\u4e2a changelog \u6765\u8ddf\u8e2a\u6240\u6709\u6267\u884c\u7684\u53d8\u66f4"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u5199 SQL \u7684 XML \u6807\u7b7e, \u4f46\u4e0d\u5efa\u8bae\u4f7f\u7528, \u56e0\u4e3a\u5c31\u5931\u53bb\u4e86\u5176\u672c\u8eab\u7684\u4f18\u52bf"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5de5\u5177\u652f\u6301\u4ece\u73b0\u6709\u6570\u636e\u5e93\u751f\u6210 XML")))}w.isMDXComponent=!0}}]);