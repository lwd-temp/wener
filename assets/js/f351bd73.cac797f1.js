"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[12190],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return h}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={tags:["FAQ"]},y="ClickHouse FAQ",b={unversionedId:"db/column/clickhouse/clickhouse-faq",id:"db/column/clickhouse/clickhouse-faq",title:"ClickHouse FAQ",description:"\u6587\u4ef6\u7cfb\u7edf",source:"@site/../notes/db/column/clickhouse/clickhouse-faq.md",sourceDirName:"db/column/clickhouse",slug:"/db/column/clickhouse/faq",permalink:"/notes/db/column/clickhouse/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/column/clickhouse/clickhouse-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"Clickhouse \u914d\u7f6e",permalink:"/notes/db/column/clickhouse/conf"},next:{title:"Clickhouse SQL",permalink:"/notes/db/column/clickhouse/sql"}},k={},h=[{value:"\u6587\u4ef6\u7cfb\u7edf {filesystem}",id:"\u6587\u4ef6\u7cfb\u7edf-filesystem",level:2},{value:"Cannot modify &#39;add_http_cors_header&#39; setting in readonly mode",id:"cannot-modify-add_http_cors_header-setting-in-readonly-mode",level:2}],O={toc:h},g="wrapper";function v(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(g,d(p(p({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"clickhouse-faq"}),"ClickHouse FAQ"),(0,r.kt)("h2",p({},{id:"\u6587\u4ef6\u7cfb\u7edf-filesystem"}),"\u6587\u4ef6\u7cfb\u7edf {filesystem}"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://kb.altinity.com/altinity-kb-setup-and-maintenance/filesystems/"}),"https://kb.altinity.com/altinity-kb-setup-and-maintenance/filesystems/"))),(0,r.kt)("h2",p({},{id:"cannot-modify-add_http_cors_header-setting-in-readonly-mode"}),"Cannot modify 'add_http_cors_header' setting in readonly mode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528  readonly=2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",p({parentName:"p"},{href:"https://clickhouse.com/docs/en/operations/settings/permissions-for-queries/#readonly"}),"https://clickhouse.com/docs/en/operations/settings/permissions-for-queries/#readonly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"0 \u2014 Read, Write, and Change settings queries are allowed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1 \u2014 Only Read data queries are allowed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2 \u2014 Read data and Change settings queries are allowed."))))}v.isMDXComponent=!0}}]);