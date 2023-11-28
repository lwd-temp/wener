"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79303],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),s=a,m=p["".concat(d,".").concat(s)]||p[s]||f[s]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4615:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),s=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"dragonflydb"},b="dragonflydb",y={unversionedId:"db/kv/dragonflydb",id:"db/kv/dragonflydb",title:"dragonflydb",description:"- dragonflydb/dragonfly",source:"@site/../notes/db/kv/dragonflydb.md",sourceDirName:"db/kv",slug:"/db/kv/dragonflydb",permalink:"/notes/db/kv/dragonflydb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/dragonflydb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"dragonflydb"},sidebar:"docs",previous:{title:"Key Value",permalink:"/notes/db/kv/"},next:{title:"etcd",permalink:"/notes/db/kv/etcd"}},g={},k=[],v={toc:k},h="wrapper";function O(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(h,f(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"dragonflydb"}),"dragonflydb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/dragonflydb/dragonfly"}),"dragonflydb/dragonfly"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSL 1.1, C++,C"),(0,n.kt)("li",{parentName:"ul"},"\u517c\u5bb9 Redis, Memcached \u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/dragonflydb/dragonfly/blob/main/docs/api_status.md"}),"https://github.com/dragonflydb/dragonfly/blob/main/docs/api_status.md")),(0,n.kt)("li",{parentName:"ul"},"6379",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"http://127.0.0.1:6379"}),"http://127.0.0.1:6379")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},":6379/metrics"))))),(0,n.kt)("admonition",p({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Redis v7 RDB ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/dragonflydb/dragonfly/issues/1403"}),"#1403")),(0,n.kt)("li",{parentName:"ul"},"BullMQ ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/dragonflydb/dragonfly/issues/1398"}),"#1398"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/dragonflydb/dragonfly/issues/782"}),"#782")))))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# http://127.0.0.1:6379\ndocker run -it --rm \\\n  -p 6379:6379 \\\n  --ulimit memlock=-1 \\\n  --name dragonfly docker.dragonflydb.io/dragonflydb/dragonfly\n\nredis-cli PING\n")))}O.isMDXComponent=!0}}]);