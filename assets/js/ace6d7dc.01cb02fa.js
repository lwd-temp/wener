"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59708],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},34242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return N},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return C}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>l(e,i(t)),k=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const d={title:"ACL"},N="Redis ACL",f={unversionedId:"db/kv/redis/redis-acl",id:"db/kv/redis/redis-acl",title:"ACL",description:"- Redis v6 ACLv1",source:"@site/../notes/db/kv/redis/redis-acl.md",sourceDirName:"db/kv/redis",slug:"/db/kv/redis/acl",permalink:"/notes/db/kv/redis/acl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/redis/redis-acl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"ACL"},sidebar:"docs",previous:{title:"Redis",permalink:"/notes/db/kv/redis/"},next:{title:"\u914d\u7f6e",permalink:"/notes/db/kv/redis/conf"}},b={},C=[],y={toc:C},g="wrapper";function v(e){var t=e,{components:n}=t,r=k(t,["components"]);return(0,a.kt)(g,c(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"redis-acl"}),"Redis ACL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redis v6 ACLv1"),(0,a.kt)("li",{parentName:"ul"},"Redis v7 ACLv1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u3001\u547d\u4ee4")))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"ACL \u662f\u914d\u7f6e\uff0c\u4e0d\u662f\u6570\u636e\uff0c\u56e0\u6b64\u4e0d\u4f1a\u540c\u6b65\uff0c\u4e0d\u4f1a\u6301\u4e45\u3002 ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/redis/redis/issues/7988"}),"#7988"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTH <username> <password>")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7528\u6237 ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTH <password>"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-txt",metastring:'title="\u9ed8\u8ba4\u914d\u7f6e"',title:'"\u9ed8\u8ba4\u914d\u7f6e"'}),"user default on nopass ~* &* +@all\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u8bbe\u7f6e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nopass")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">\u5bc6\u7801"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"<\u5bc6\u7801")," - \u8bbe\u7f6e/\u79fb\u9664 \u660e\u6587\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#<hash>"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"!<hash>")," - \u8bbe\u7f6e/\u79fb\u9664 SHA-256 \u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"resetpass \u91cd\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u6743\u9650",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+<command>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"-<command>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"+@<category>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"-@<category>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"v7.0 \u652f\u6301\u7981\u6b62\u5b50\u547d\u4ee4 - \u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"-config|set")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ACL CAT")," \u6240\u6709\u5206\u7c7b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+<command>|arg"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982: ",(0,a.kt)("inlineCode",{parentName:"li"},"-SELECT|1")," \u7981\u6b62 select 1 DB"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allcommands")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"+@all")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nocommands")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"-@all")))),(0,a.kt)("li",{parentName:"ul"},"Key \u6743\u9650\u9650\u5b9a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~<pattern>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allkeys")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"~*")),(0,a.kt)("li",{parentName:"ul"},"resetkeys - \u91cd\u7f6e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%R~<pattern>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"%W~<pattern>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"%RW~<pattern>")," - v7.0+ \u9650\u5b9a \u8bfb\u5199"))),(0,a.kt)("li",{parentName:"ul"},"Pub/Sub \u9650\u5b9a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&<pattern>")," - v6.2+"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allchannels")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"&*")),(0,a.kt)("li",{parentName:"ul"},"resetchannels - \u91cd\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},"reset - \u91cd\u7f6e\u6240\u6709\u89c4\u5219"),(0,a.kt)("li",{parentName:"ul"},"selector - v7.0+",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(<rule list>)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clearselectors"))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ini"}),"# user default on nopass ~* &* +@all\n\n# \u4e3a\u9ed8\u8ba4\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\nACL SETUSER default >PASSWD\n\n# \u5ba2\u6237\u7aef \u6d4b\u8bd5\u5bc6\u7801\u662f\u5426\u6b63\u786e\nHELLO 3 AUTH default PASSWD\n\n# \u5173\u95ed\u9ed8\u8ba4\u7528\u6237 - \u5982\u679c\u52a0\u4e86\u5176\u4ed6\u7528\u6237\nACL SETUSER default off\n\n# \u91cd\u65b0\u8bbe\u7f6e\nACL SETUSER admin reset on ~* >ADMIN &* +@all\n# \u91cd\u65b0\u8ba4\u8bc1\u4e3a admin\nAUTH admin ADMIN\n# \u4fee\u6539\u9ed8\u8ba4\u7528\u6237\u6743\u9650\nACL SETUSER default reset on nopass ~* &* +@all -@admin\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u8f93\u51fa \u5bc6\u7801 \u548c sha-256\nuuidgen | tee /dev/fd/2 | tr -d '[:space:]' | sha256sum\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sentinel")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"ACL SETUSER sentinel-user on >somepassword allchannels +multi +slaveof +ping +exec +subscribe +config|rewrite +role +publish +info +client|setname +client|kill +script|kill\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"replica")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"ACL setuser replica-user on >somepassword +psync +replconf +ping\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u547d\u4ee4\u7c7b\u76ee")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keyspace"),(0,a.kt)("li",{parentName:"ul"},"read"),(0,a.kt)("li",{parentName:"ul"},"write"),(0,a.kt)("li",{parentName:"ul"},"set"),(0,a.kt)("li",{parentName:"ul"},"sortedset"),(0,a.kt)("li",{parentName:"ul"},"list"),(0,a.kt)("li",{parentName:"ul"},"hash"),(0,a.kt)("li",{parentName:"ul"},"string"),(0,a.kt)("li",{parentName:"ul"},"bitmap"),(0,a.kt)("li",{parentName:"ul"},"hyperloglog"),(0,a.kt)("li",{parentName:"ul"},"geo"),(0,a.kt)("li",{parentName:"ul"},"stream"),(0,a.kt)("li",{parentName:"ul"},"pubsub"),(0,a.kt)("li",{parentName:"ul"},"admin"),(0,a.kt)("li",{parentName:"ul"},"fast - O(1)"),(0,a.kt)("li",{parentName:"ul"},"slow"),(0,a.kt)("li",{parentName:"ul"},"blocking"),(0,a.kt)("li",{parentName:"ul"},"dangerous - FLUSHALL, MIGRATE, RESTORE, SORT, KEYS, CLIENT, DEBUG, INFO, CONFIG, SAVE, REPLICAOF"),(0,a.kt)("li",{parentName:"ul"},"connection"),(0,a.kt)("li",{parentName:"ul"},"transaction - WATCH, MULTI, EXEC"),(0,a.kt)("li",{parentName:"ul"},"scripting"),(0,a.kt)("li",{parentName:"ul"},"replication",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"keydb"),(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4: ping, replconf, sync, replping, psync,")))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://redis.io/topics/acl"}),"ACL"))))}v.isMDXComponent=!0}}]);