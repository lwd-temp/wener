"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21446],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82623:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return h}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const d={title:"milvus"},b="milvus",v={unversionedId:"db/search/milvus",id:"db/search/milvus",title:"milvus",description:"- milvus-io/milvus",source:"@site/../notes/db/search/milvus.md",sourceDirName:"db/search",slug:"/db/search/milvus",permalink:"/notes/db/search/milvus",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/search/milvus.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667714749,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{title:"milvus"},sidebar:"docs",previous:{title:"Meilisearch",permalink:"/notes/db/search/meilisearch"},next:{title:"OpenSearch Dashboard",permalink:"/notes/db/search/opensearch-dashboard"}},y={},h=[],O={toc:h},k="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(k,m(p(p({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"milvus"}),"milvus"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/milvus-io/milvus"}),"milvus-io/milvus"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,n.kt)("li",{parentName:"ul"},"\u5411\u91cf\u6570\u636e\u5e93")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Docker")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"etcd"),(0,n.kt)("li",{parentName:"ul"},"minio"),(0,n.kt)("li",{parentName:"ul"},"milvus run standalone"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/milvus-io/milvus/blob/master/deployments/docker/standalone/docker-compose.yml"}),"https://github.com/milvus-io/milvus/blob/master/deployments/docker/standalone/docker-compose.yml"))))}g.isMDXComponent=!0}}]);