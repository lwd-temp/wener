"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7547],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return N}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(a),c=n,N=k["".concat(o,".").concat(c)]||k[c]||s[c]||l;return a?r.createElement(N,i(i({ref:t},u),{},{components:a})):r.createElement(N,i({ref:t},u))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74417:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return N},metadata:function(){return b},toc:function(){return g}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&u(e,a,t[a]);return e},s=(e,t)=>l(e,i(t)),c=(e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const N={title:"WebStorage"},d="WebStorage",b={unversionedId:"web/spec/web-storage",id:"web/spec/web-storage",title:"WebStorage",description:"- https://web.dev/storage-for-the-web/",source:"@site/../notes/web/spec/web-storage.md",sourceDirName:"web/spec",slug:"/web/spec/web-storage",permalink:"/notes/web/spec/web-storage",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/web-storage.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"WebStorage"},sidebar:"docs",previous:{title:"Web Spec",permalink:"/notes/web/spec/web-spec"},next:{title:"Web Worker",permalink:"/notes/web/spec/web-worker"}},h={},g=[{value:"Library",id:"library",level:2}],f={toc:g},y="wrapper";function w(e){var t=e,{components:a}=t,n=c(t,["components"]);return(0,r.kt)(y,s(k(k({},f),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",k({},{id:"webstorage"}),"WebStorage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://web.dev/storage-for-the-web/"}),"https://web.dev/storage-for-the-web/")),(0,r.kt)("li",{parentName:"ul"},"chromium ",(0,r.kt)("a",k({parentName:"li"},{href:"https://chromium.googlesource.com/chromium/src/+/refs/heads/main/storage/browser/quota/quota_settings.cc"}),"storage/browser/quota/quota_settings.cc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://arty.name/localstorage.html"}),"Test of localStorage limits/quota")),(0,r.kt)("li",{parentName:"ul"},"mdn",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage_API"}),"Storage API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager"}),"StorageManager"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f30\u7b97\u4f7f\u7528\u91cf"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://reactnative.dev/docs/asyncstorage"}),"AsyncStorage")," - React Native")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u9650\u5236")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"name"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"limit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"sessionStorage"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"5 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"localStorage"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"5 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Cookie"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"4 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Cookie kv"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"1 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"IndexedDB"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"10 MB - 2GB")))),(0,r.kt)("admonition",k({},{type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u6d4f\u89c8\u5668\u9650\u5236\u4e0d\u540c\uff0c\u8fd9\u91cc\u5217\u4e3e \u5b89\u5168/\u5e38\u89c1\u503c"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IndexedDB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6301\u4e45\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u8de8 Tab"),(0,r.kt)("li",{parentName:"ul"},"Worker \u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u5165\u6027\u80fd\u5f31 - \u5b98\u65b9\u4ee5\u4f18\u5316\u8bfb\u53d6\u6027\u80fd\u4e3a\u4e3b"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://rxdb.info/slow-indexeddb.html"}),"Why IndexedDB is slow"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8003\u8651 relaxed \u6301\u4e45\u5316 - ",(0,r.kt)("a",k({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/durability"}),"durability")),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 in-memory \u8bfb\uff0cwrite back \u5230 indexeddb"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/"}),"Storing images and files in IndexedDB"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u4e3a Blob"))))))),(0,r.kt)("li",{parentName:"ul"},"sessionStorage",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6301\u4e45"),(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"KV"),(0,r.kt)("li",{parentName:"ul"},"\u53ef Observe"),(0,r.kt)("li",{parentName:"ul"},"\u8de8 Tab"))),(0,r.kt)("li",{parentName:"ul"},"localStorage",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u654f\u611f\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u8de8 Tab \u611f\u77e5\u53d8\u5316"))),(0,r.kt)("li",{parentName:"ul"},"Cookie",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u901a\u8baf credentials"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache"}),"CacheStorage"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Response stored in a Cache won't contain headers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://web.dev/cache-api-quick-guide/"}),"The Cache API: A quick guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://www.mnot.net/blog/2007/12/12/stale"}),"stale-while-revalidate"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://nolanlawson.github.io/database-comparison/"}),"Browser database comparison"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fork ",(0,r.kt)("a",k({parentName:"li"},{href:"https://pubkey.github.io/client-side-databases/database-comparison/index.html"}),"db tx write")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://rxdb.info/slow-indexeddb.html"}),"Why IndexedDB is slow and what to use instead"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"store"),(0,r.kt)("th",k({parentName:"tr"},{align:"right"}),"10000"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"localStorage"),(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"110ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"IndexedDB"),(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"1500-2200ms")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"IndexedDB \u5f88\u6162")),(0,r.kt)("h2",k({},{id:"library"}),"Library"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"/notes/web/script/lib/dexie"}),"dexie"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IndexedDB \u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u540c\u6b65 - \u4f46\u4e0d\u662f\u5f00\u7bb1\u5373\u7528"),(0,r.kt)("li",{parentName:"ul"},"~82kB/26kB - \u65e0\u4f9d\u8d56"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/pubkey/rxdb"}),"rxdb"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Typescript"),(0,r.kt)("li",{parentName:"ul"},"offline first"),(0,r.kt)("li",{parentName:"ul"},"\u6709 schema"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 punchdb, lokijs, dexie \u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u652f\u6301 REST \u548c GraphQL \u540c\u6b65"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 punchdb \u4e5f\u53ef\u4ee5\u7528 CouchDB \u7684\u540c\u6b65"),(0,r.kt)("li",{parentName:"ul"},"Premium: IndexedDB, SQLite, Sharding, Query Optimizer"),(0,r.kt)("li",{parentName:"ul"},"~114kB/31kB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"binary-decision-diagram"),(0,r.kt)("li",{parentName:"ul"},"broadcast-channel"),(0,r.kt)("li",{parentName:"ul"},"event-reduce-js"),(0,r.kt)("li",{parentName:"ul"},"spark-md5"),(0,r.kt)("li",{parentName:"ul"},"object-path"),(0,r.kt)("li",{parentName:"ul"},"clone"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/clientdb/clientdb"}),"clientdb/clientdb"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Typescript"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"in-memory")," database, realtime"))),(0,r.kt)("li",{parentName:"ul"},"PouchDB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CouchDB replication"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 attachments"),(0,r.kt)("li",{parentName:"ul"},"~117kB/37kB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uuid"),(0,r.kt)("li",{parentName:"ul"},"spark-md5"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/techfort/LokiJS"}),"techfort/LokiJS"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"in-memory")," database"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/YousefED/SyncedStore"}),"YousefED/SyncedStore"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e yjs \u540c\u6b65"),(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u534f\u4f5c\u5e94\u7528"))),(0,r.kt)("li",{parentName:"ul"},"localForge",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c localStorage"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u540e\u7aef"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/Nozbe/WatermelonDB"}),"Nozbe/WatermelonDB"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u662f DB - \u4f7f\u7528 class+decorator \u5b9a\u4e49 \u6a21\u578b"),(0,r.kt)("li",{parentName:"ul"},"React - LokiJS"),(0,r.kt)("li",{parentName:"ul"},"React Native - SQLite"),(0,r.kt)("li",{parentName:"ul"},"~155kB - \u57fa\u4e8e rxjs"))),(0,r.kt)("li",{parentName:"ul"},"Absurd-SQL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"indexeddb"))),(0,r.kt)("li",{parentName:"ul"},"SQLite",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"empscripten Filesystem API"))),(0,r.kt)("li",{parentName:"ul"},"DuckDB WASM"),(0,r.kt)("li",{parentName:"ul"},"Supabase"),(0,r.kt)("li",{parentName:"ul"},"RethinkDB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Horizon"))),(0,r.kt)("li",{parentName:"ul"},"NeDB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Node.js, nw.js, Electron, Browser"),(0,r.kt)("li",{parentName:"ul"},"MongoDB \u67e5\u8be2\u8bed\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u505c\u6b62"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/amark/gun"}),"amark/gun"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"syncing decentralized graph data"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",k({parentName:"li"},{href:"https://github.com/isaacs/node-lru-cache"}),"isaacs/node-lru-cache"))))}w.isMDXComponent=!0}}]);