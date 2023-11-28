"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50947],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(a),d=r,c=k["".concat(o,".").concat(d)]||k[d]||m[d]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19405:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return N},default:function(){return g},frontMatter:function(){return c},metadata:function(){return y},toc:function(){return b}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&s(e,a,t[a]);return e},m=(e,t)=>l(e,i(t)),d=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a};const c={title:"KeyDB"},N="KeyDB",y={unversionedId:"db/kv/keydb",id:"db/kv/keydb",title:"KeyDB",description:"- KeyDB",source:"@site/../notes/db/kv/keydb.md",sourceDirName:"db/kv",slug:"/db/kv/keydb",permalink:"/notes/db/kv/keydb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/keydb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685599201,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"KeyDB"},sidebar:"docs",previous:{title:"FoundationDB",permalink:"/notes/db/kv/foundationdb"},next:{title:"KV DB Awesome",permalink:"/notes/db/kv/awesome"}},f={},b=[{value:"Active Replica",id:"active-replica",level:2},{value:"Flash",id:"flash",level:2},{value:"KeyDB vs Redis",id:"keydb-vs-redis",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],h={toc:b},v="wrapper";function g(e){var t=e,{components:a}=t,r=d(t,["components"]);return(0,n.kt)(v,m(k(k({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",k({},{id:"keydb"}),"KeyDB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/Snapchat/KeyDB"}),"KeyDB"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSD-3, C++,C"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b Redis - IO \u591a\u7ebf\u7a0b\uff0c\u4e8b\u52a1\u5355\u7ebf\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"ModJS - \u53ef\u4ee5\u901a\u8fc7 V8 \u6269\u5c55"),(0,n.kt)("li",{parentName:"ul"},"\u540c\u6b65 redis \u6e90\u7801 - \u7248\u672c\u5339\u914d"),(0,n.kt)("li",{parentName:"ul"},"active-replication, multi-master, flash, s3 backup"),(0,n.kt)("li",{parentName:"ul"},"\u88ab Snapchat \u6536\u8d2d - 2022-05-11",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u4f01\u4e1a\u7248\u529f\u80fd v6.3.0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Active Replication PSYNC"),(0,n.kt)("li",{parentName:"ul"},"Async Commands - GET, MGET"),(0,n.kt)("li",{parentName:"ul"},"Async Rehash"),(0,n.kt)("li",{parentName:"ul"},"In Process Background Saving - fork -> snapshot - \u53ef\u63a7\u5236\u6700\u5927\u5185\u5b58\u4f7f\u7528\u91cf"),(0,n.kt)("li",{parentName:"ul"},"IStorage Interface - \u672a\u5305\u542b FLASH \u5b58\u50a8\u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.keydb.dev/docs/coming-soon/"}),"https://docs.keydb.dev/docs/coming-soon/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Namespaces"),(0,n.kt)("li",{parentName:"ul"},"JSON"),(0,n.kt)("li",{parentName:"ul"},"RAFT"))))),(0,n.kt)("li",{parentName:"ul"},"FLASH \u529f\u80fd\u5927\u7ea6\u5728 2022-09 \u53d1\u5e03"))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/EQ-Alpha/ModJS"}),"EQ-Alpha/ModJS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e V8")))))),(0,n.kt)("admonition",k({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u652f\u6301\u591a\u7ebf\u7a0b\uff0c\u56e0\u6b64\u4f5c\u4e3a\u5355\u8282\u70b9 KeyDB \u4f1a\u6bd4\u5355\u8282\u70b9 Redis Cluster \u597d\u7ef4\u62a4\u7684\u591a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Redis 6 I/O \u90e8\u5206\u652f\u6301\u591a\u7ebf\u7a0b"))),(0,n.kt)("li",{parentName:"ul"},"Multi-Tenancy Support ",(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/EQ-Alpha/KeyDB/issues/286"}),"#286")),(0,n.kt)("li",{parentName:"ul"},"SET \u6210\u5458, HASH KEY \u652f\u6301 TTL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"EXPIREMEMBER <key> <subkey> <timeout-in-seconds> <OPTIONAL:unit-time-format>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"EXPIREMEMBERAT <key> <subkey> <expiration-timestamp>")),(0,n.kt)("li",{parentName:"ul"},"PEXPIREMEMBERAT"),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u67e5 TTL ",(0,n.kt)("inlineCode",{parentName:"li"},"PTTL/TTL <key> <subkey>")),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4ea7\u751f expired \u4e8b\u4ef6 - ",(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/Snapchat/KeyDB/issues/85"}),"#85")))),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55\u547d\u4ee4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"KEYDB.CRON name [single/repeat] [optional: start] delay script numkeys [key N] [arg N]"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5468\u671f\u8fd0\u884c lua \u811a\u672c"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"KEYDB.HRENAME key [src hash key] [dst hash key]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"KEYDB.MEXISTS key [key ...]")),(0,n.kt)("li",{parentName:"ul"},"KEYDB.MVCCRESTORE"),(0,n.kt)("li",{parentName:"ul"},"keydb.nhset,keydb.nhget"),(0,n.kt)("li",{parentName:"ul"},"stralgo"),(0,n.kt)("li",{parentName:"ul"},"lfence,failover,reset,"))),(0,n.kt)("li",{parentName:"ul"},"2022 Q3 - Redis 7 ",(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/Snapchat/KeyDB/issues/420"}),"#420")),(0,n.kt)("li",{parentName:"ul"},"WIP JSON - ",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.keydb.dev/docs/coming-soon/"}),"coming-soon")))),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm \\\n  -p 6379:6379 -v $PWD/data:/data \\\n  --name keydb eqalpha/keydb:alpine_x86_64_v6.3.1 keydb-server /etc/keydb/keydb.conf \\\n  --appendonly yes \\\n  --server-threads 2 --requirepass password\n")),(0,n.kt)("h2",k({},{id:"active-replica"}),"Active Replica"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"active-replica yes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591a\u526f\u672c\uff0c\u540c\u65f6\u53ef\u8bfb\u5199"),(0,n.kt)("li",{parentName:"ul"},"\u5355\u4e2a replicaof"))),(0,n.kt)("li",{parentName:"ul"},"multi-master yes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u526f\u672c\u57fa\u7840\u4e0a\u540c\u65f6\u652f\u6301\u540c\u6b65\u591a\u4e2a master \u7684\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u591a\u4e2a replicaof"))),(0,n.kt)("li",{parentName:"ul"},"cluster",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6570\u636e\u5206\u7247 - \u6bcf\u4e2a\u8282\u70b9\u7684\u6570\u636e\u4e0d\u5bf9\u7b49")))),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{}),"# keydb-1 \u4e0a\u6267\u884c\nreplicaof keydb-0:6379\n# keydb-0 \u4e0a\u6267\u884c\nreplicaof keydb-1:6379\n")),(0,n.kt)("h2",k({},{id:"flash"}),"Flash"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"docker run -d -it -p 6379:6379 \\\n  --mount type=bind,dst=/flash,src=/$PWD/flash/ \\\n  --name keydb eqalpha/keydb keydb-server /etc/keydb/keydb.conf --storage-provider flash /flash --maxmemory 1G --maxmemory-policy allkeys-lfu\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"--maxmemory-policy - \u5355\u8fbe\u5230 maxmemory \u65f6\uff0c\u5982\u4f55\u6e05\u7406\u5185\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"noeviction"),(0,n.kt)("li",{parentName:"ul"},"allkeys-lru"),(0,n.kt)("li",{parentName:"ul"},"volatile-lru - \u6709\u8bbe\u7f6e expire \u7684 key"),(0,n.kt)("li",{parentName:"ul"},"allkeys-random"),(0,n.kt)("li",{parentName:"ul"},"volatile-random"),(0,n.kt)("li",{parentName:"ul"},"volatile-ttl"))),(0,n.kt)("li",{parentName:"ul"},"Flash ",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.keydb.dev/docs/flash/"}),"https://docs.keydb.dev/docs/flash/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RocksDB on SSD"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5168\u90e8\u5b58\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u9700\u8981 Redis \u7684 RDB/AOF")))),(0,n.kt)("h2",k({},{id:"keydb-vs-redis"}),"KeyDB vs Redis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Redis",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IO \u591a\u7ebf\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"Redis 7 - ACL R/W \u63a7\u5236"))),(0,n.kt)("li",{parentName:"ul"},"KeyDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IO \u591a\u7ebf\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u671f Merge Redis \u4e0a\u6e38",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Redis 6 fork - \u76ee\u524d\u5c1a\u672a\u5408\u5e76 Redis 7 \u529f\u80fd"))),(0,n.kt)("li",{parentName:"ul"},"\u517c\u5bb9 Redis \u6269\u5c55 - \u4f46\u53ea\u80fd\u5355\u7ebf\u7a0b\u6267\u884c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u6d41 Redis \u6269\u5c55\u7684\u534f\u8bae\u90fd\u4e0d\u80fd\u5546\u7528 - RedisStack \u7cfb\u5217"))),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u64cd\u4f5c\u652f\u6301\u5e76\u884c - MVCC"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u64cd\u4f5c\u652f\u6301 ASYNC"),(0,n.kt)("li",{parentName:"ul"},"\u989d\u5916\u529f\u80fd - HASH Key \u652f\u6301 TTL, CRON"),(0,n.kt)("li",{parentName:"ul"},"Active Replica - \u4e2a\u4eba\u63a8\u8350"),(0,n.kt)("li",{parentName:"ul"},"Multi Master - \u4e2a\u4eba\u4e0d\u90a3\u4e48\u63a8\u8350"),(0,n.kt)("li",{parentName:"ul"},"FLASH \u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"S3 \u5907\u4efd/\u52a0\u8f7d")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.keydb.dev/docs/migration/"}),"https://docs.keydb.dev/docs/migration/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.keydb.dev/docs/faq#how-is-keydb-different-than-redis"}),"https://docs.keydb.dev/docs/faq#how-is-keydb-different-than-redis"))),(0,n.kt)("h2",k({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.keydb.dev/docs/config-file"}),"https://docs.keydb.dev/docs/config-file"))),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-ini"}),"# scratch-file-path /tmp/\n\n# yes - replica \u8fd8\u6ca1\u51c6\u5907\u597d\u65f6\u4e5f\u63a5\u53d7\u5ba2\u6237\u7aef\u8bf7\u6c42\n# no - \u8fd4\u56de\u9519\u8bef\u4fe1\u606f\nreplica-serve-stale-data yes\n\n# \u5904\u7406\u8bf7\u6c42\u7684 worker \u7ebf\u7a0b\n# \u53d6\u51b3\u4e8e\u7f51\u7edc\u800c\u4e0d\u662f CPU \u6838\u5fc3\u6570\n# \u5efa\u8bae \u6700\u5927\u4e0d\u8d85\u8fc7 16\uff0c\u6700\u597d\u5c11\u4e8e 8\uff0c\u4e00\u822c 1 \u6216 2 \u5c31\u53ef\u4ee5\u4e86\nserver-threads 1\n\nserver-thread-affinity false\n\nactive-replica no\n")))}g.isMDXComponent=!0}}]);