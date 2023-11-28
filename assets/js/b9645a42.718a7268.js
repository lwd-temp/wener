"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99693],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),b=a,m=f["".concat(c,".").concat(b)]||f[b]||s[b]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7325:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>i(e,o(t)),b=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"Tair"},d="Tair",v={unversionedId:"db/kv/tair",id:"db/kv/tair",title:"Tair",description:"- alibaba/tair - \u5206\u5e03\u5f0f KV \u5b58\u50a8",source:"@site/../notes/db/kv/tair.md",sourceDirName:"db/kv",slug:"/db/kv/tair",permalink:"/notes/db/kv/tair",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/tair.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633617108,formattedLastUpdatedAt:"Oct 7, 2021",frontMatter:{title:"Tair"},sidebar:"docs",previous:{title:"RocksDB",permalink:"/notes/db/kv/rocksdb"},next:{title:"TiKV",permalink:"/notes/db/kv/tikv"}},y={},O=[],k={toc:O},g="wrapper";function w(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(g,s(f(f({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"tair"}),"Tair"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/alibaba/tair"}),"alibaba/tair")," - \u5206\u5e03\u5f0f KV \u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MDB \u7eaf\u5185\u5b58\uff0c\u57fa\u4e8e memcache\uff1brdb \u57fa\u4e8e Redis\uff1bLDB \u57fa\u4e8e leveldb"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5206\u4e3a ConfigServer \u548c DataServer"),(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8def\u7531"),(0,n.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7d22\u5f15"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7248\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5931\u6548"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u8ba1\u6570\u5668")))))))}w.isMDXComponent=!0}}]);