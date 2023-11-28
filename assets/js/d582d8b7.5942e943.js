"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76080],{49613:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return s}});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),d=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return r.createElement(m.Provider,{value:e},t.children)},u="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=d(a),N=n,s=u["".concat(m,".").concat(N)]||u[N]||o[N]||l;return a?r.createElement(s,i(i({ref:e},k),{},{components:a})):r.createElement(s,i({ref:e},k))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[u]="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},61937:function(t,e,a){a.r(e),a.d(e,{assets:function(){return b},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return y}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,k=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&k(t,a,e[a]);if(p)for(var a of p(e))d.call(e,a)&&k(t,a,e[a]);return t},o=(t,e)=>l(t,i(e)),N=(t,e)=>{var a={};for(var r in t)m.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&p)for(var r of p(t))e.indexOf(r)<0&&d.call(t,r)&&(a[r]=t[r]);return a};const s={title:"Redis"},g="Redis",c={unversionedId:"db/kv/redis/README",id:"db/kv/redis/README",title:"Redis",description:"- redis/redis",source:"@site/../notes/db/kv/redis/README.md",sourceDirName:"db/kv/redis",slug:"/db/kv/redis/",permalink:"/notes/db/kv/redis/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/redis/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690351481,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{title:"Redis"},sidebar:"docs",previous:{title:"LMDB",permalink:"/notes/db/kv/lmdb"},next:{title:"ACL",permalink:"/notes/db/kv/redis/acl"}},b={},y=[{value:"Stream",id:"stream",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"Module",id:"module",level:2},{value:"\u952e\u53d8\u5316\u901a\u77e5",id:"\u952e\u53d8\u5316\u901a\u77e5",level:2},{value:"redis-benchmark",id:"redis-benchmark",level:2},{value:"Inside",id:"inside",level:2}],f={toc:y},h="wrapper";function v(t){var e=t,{components:a}=e,n=N(e,["components"]);return(0,r.kt)(h,o(u(u({},f),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"redis"}),"Redis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/redis/redis"}),"redis/redis"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BSD-3, C"))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b: string, bitmap, hll, list, pub/sub, hash, set, sorted set, stream"),(0,r.kt)("li",{parentName:"ul"},"Redis Stack \u6269\u5c55: bloom, cuckoo, count-min, graph, json, suggest, search, t-digest, timeserial, top-k"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://redislabs.com/blog/5-key-takeaways-for-developing-with-redis"}),"5 Key Takeaways for Developing with Redis"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Keep Track of Your Keys"),(0,r.kt)("li",{parentName:"ol"},"Keep Track of the Length of Your Key Names"),(0,r.kt)("li",{parentName:"ol"},"Use the Right Data Structures"),(0,r.kt)("li",{parentName:"ol"},"Use SCAN, Never Use KEYS"),(0,r.kt)("li",{parentName:"ol"},"Use Server-Side Lua Scripts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://scaleyourcode.com/blog/article/15"}),"Redis configuration for production"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.youtube.com/watch?v=X01gn5a2WQ0"}),"YouTube")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/RedisLabsModules/redis-graph/"}),"RedisGraph"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A graph database as a Redis module")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\nwget http://download.redis.io/redis-stable/redis.conf\nredis-server redis.conf\n# macOS \u5b89\u88c5\nbrew install redis\n# \u901a\u8fc7 docker \u542f\u52a8\n# \u6570\u636e\u5b58\u50a8\u4e8e ~/data/redis\ndocker run --rm -it -v $PWD/data:/data -p 6379:6379 --name redis redis redis-server --appendonly ye\n\nredis-server --bind=0.0.0.0\n")),(0,r.kt)("admonition",u({},{type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"HASH Key \u4e0d\u652f\u6301 TTL ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/redis/redis/issues/6620"}),"#6620"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./keydb.md"}),"keydb")," \u53ef\u4ee5 - \u4f46\u662f\u6ca1\u6709\u4e8b\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},"Redis Cluster V2 project ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/redis/redis/issues/8948"}),"redis#8948")),(0,r.kt)("li",{parentName:"ul"},"HSETEX, HMSETEX ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/redis/redis/issues/2905"}),"redis#2905")),(0,r.kt)("li",{parentName:"ul"},"\u6279\u91cf\u5220\u9664 key ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/redis/redis/issues/4153"}),"redis#4153")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"# \u83b7\u53d6 key \u6570\u91cf - \u53ef\u80fd\u5931\u6548\u7684\u4e5f\u5305\u542b\ndbsize\n# \u83b7\u53d6 key \u4fe1\u606f\ninfo keyspace\n\n# \u626b\u63cf key - SCAN,SSCAN,HSCAN,ZSCAN\n# SCAN cursor [MATCH pattern] [COUNT count] [TYPE type]\nscan 0\n")),(0,r.kt)("h2",u({},{id:"stream"}),"Stream"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"redis ",(0,r.kt)("a",u({parentName:"li"},{href:"https://gist.github.com/antirez/4e7049ce4fce4aa61bf0cfbc3672e64d"}),"api")),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://gist.github.com/antirez/68e67f3251d10f026861be2d0fe0d2f4"}),"Redis Streams: consumer groups v2 specification document")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://antirez.com/news/116"}),"An update on Redis Streams development"))))),(0,r.kt)("h2",u({},{id:"\u547d\u4ee4"}),"\u547d\u4ee4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L - List"),(0,r.kt)("li",{parentName:"ul"},"H - Hash"),(0,r.kt)("li",{parentName:"ul"},"Z - SortedSet"),(0,r.kt)("li",{parentName:"ul"},"S - Set"),(0,r.kt)("li",{parentName:"ul"},"X - Stream"),(0,r.kt)("li",{parentName:"ul"},"Channel - SUBSCRIBE,PUBLISH,UNSUBSCRIBE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"P - Pattern - PSUBSCRIBE,PUNSUBSCRIBE"),(0,r.kt)("li",{parentName:"ul"},"S - Shared - \u96c6\u7fa4 channel")))),(0,r.kt)("h2",u({},{id:"module"}),"Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://redislabs.com/blog/writing-redis-modules"}),"\u5199 Redis \u6a21\u5757\u7684\u6559\u7a0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://redismodules.com/"}),"Redis \u6a21\u5757\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://antirez.com/news/106"}),"Antirez \u5173\u4e8e Redis \u6a21\u5757\u7684\u535a\u5ba2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/wenerme/go-rm"}),"wenerme/go-rm"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Golang \u5199 Redis \u6a21\u5757")))),(0,r.kt)("h2",u({},{id:"\u952e\u53d8\u5316\u901a\u77e5"}),"\u952e\u53d8\u5316\u901a\u77e5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"notify-keyspace-events"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a \u7a7a - \u65e0\u4e8b\u4ef6\u4ea7\u751f"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u4e3a KEA \u4ea7\u751f\u5927\u591a\u6570\u4e8b\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__keyspace@<db>__:<key> event"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"key \u53d8\u5316"),(0,r.kt)("li",{parentName:"ul"},"key -> event"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__keyevent@<db>__:<key> event"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"event -> key")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"flag"),(0,r.kt)("th",u({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"__keyspace@<db>__")," \u524d\u7f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"E"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"__keyevent@<db>__")," \u524d\u7f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"g"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u901a\u7528\u547d\u4ee4 - DEL, EXPIRE, RENAME, ...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"$"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"l"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"s"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"h"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"hash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"z"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Sorted set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"stream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"d"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"module key type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"expired events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"e"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"evicted events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"m"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"key miss events - \u8bbf\u95ee\u4e0d\u5b58\u5728\u7684 KEY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"n"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"new key events - A \u4e0d\u5305\u542b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"A"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"g$lshztxed")," - \u9664\u4e86 mn \u7684\u6240\u6709\u4e8b\u4ef6")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"evennt"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"del"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"DEL,MIGRATE,RPOP,LPOP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"rename_from,rename_to"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"RENAME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"move_from,move_to"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"MOVE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"copy_to"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"COPY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"restore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"RESTORE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"expire"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"EXPIRE,SETEX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"sortstore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SORT STORE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"set"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SET,MSET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"setrange"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SETRANG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"incrby"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"INCR, DECR, INCRBY, DECRBY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"incrbyfloat"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"INCRBYFLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"append"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"lpush"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"rpush"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"rpop"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"lpop"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"linsert"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"lrem"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ltrim"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"hset"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"HSET, HSETNX, HMSET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"hincrby"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"hincrbyfloat"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"hdel"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"sadd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SADD,SMOVE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"srem"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SREM,SMOVE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"spop"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"sinterstore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"sunionstore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"sdiffstore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"zincr"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"zadd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"zrem"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"zrembyscore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"zrembyrank"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"zdiffstore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"zinterstore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"zunionstore"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xadd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xdel"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xgroup-create"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xgroup-destroy"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xgroup-setid"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xgroup-setid"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xsetid"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xtrim"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xgroup-createconsumer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"xgroup-delconsumer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"persist"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{l,r}{pop,push}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RPOPLPUSH, BRPOPLPUSH"),(0,r.kt)("li",{parentName:"ul"},"LMOVE, BLMOVE"))),(0,r.kt)("li",{parentName:"ul"},"expired"),(0,r.kt)("li",{parentName:"ul"},"evicted"),(0,r.kt)("li",{parentName:"ul"},"new")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u6240\u6709\u4e8b\u4ef6\nredis-cli --csv psubscribe '__key*__:*'\n")),(0,r.kt)("h2",u({},{id:"redis-benchmark"}),"redis-benchmark"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"redis-benchmark -q -n 100000\nredis-benchmark -q -n 100000 -t set,get -P 16\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://redis.io/docs/reference/optimization/benchmarks/"}),"https://redis.io/docs/reference/optimization/benchmarks/"))),(0,r.kt)("h2",u({},{id:"inside"}),"Inside"))}v.isMDXComponent=!0}}]);