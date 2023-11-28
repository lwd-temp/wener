"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1449],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,b=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28631:function(e,t,r){r.r(t),r.d(t,{assets:function(){return j},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return O}});var n=r(49613),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,a(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const b={title:"superjson"},d="superjson",y={unversionedId:"web/script/lib/superjson",id:"web/script/lib/superjson",title:"superjson",description:"- blitz-js/superjson",source:"@site/../notes/web/script/lib/superjson.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/superjson",permalink:"/notes/web/script/lib/superjson",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/lib/superjson.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1682624699,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"superjson"},sidebar:"docs",previous:{title:"SocketIO",permalink:"/notes/web/script/lib/socketio"},next:{title:"SystemJS",permalink:"/notes/web/script/lib/systemjs"}},j={},O=[],v={toc:O},w="wrapper";function g(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(w,m(u(u({},v),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"superjson"}),"superjson"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/blitz-js/superjson"}),"blitz-js/superjson"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 undefined, bigint, Date, RegExp, Set, Map, Error, URL"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 async"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/kiliman/remix-typedjson"}),"kiliman/remix-typedjson"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u6269\u5c55\uff0c\u7528\u4e8e remix")))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"import { Decimal } from 'decimal.js';\n\nSuperJSON.registerCustom<Decimal, string>(\n  {\n    isApplicable: (v): v is Decimal => Decimal.isDecimal(v),\n    serialize: (v) => v.toJSON(),\n    deserialize: (v) => new Decimal(v),\n  },\n  'decimal.js',\n);\n")))}g.isMDXComponent=!0}}]);