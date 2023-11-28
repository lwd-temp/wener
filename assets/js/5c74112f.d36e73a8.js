"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73981],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),o=p(a),c=r,d=o["".concat(s,".").concat(c)]||o[c]||k[c]||l;return a?n.createElement(d,i(i({ref:e},u),{},{components:a})):n.createElement(d,i({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var m={};for(var s in e)hasOwnProperty.call(e,s)&&(m[s]=e[s]);m.originalType=t,m[o]="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68765:function(t,e,a){a.r(e),a.d(e,{assets:function(){return f},contentTitle:function(){return N},default:function(){return O},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return b}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,o=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&u(t,a,e[a]);if(m)for(var a of m(e))p.call(e,a)&&u(t,a,e[a]);return t},k=(t,e)=>l(t,i(e)),c=(t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a};const d={title:"NATS JetStream"},N="NATS JetStream",g={unversionedId:"queue/nats/nats-jetstream",id:"queue/nats/nats-jetstream",title:"NATS JetStream",description:"- \u6301\u4e45\u5316\u6d88\u606f\u961f\u5217 - \u5bf9\u6807 Kafka",source:"@site/../notes/queue/nats/nats-jetstream.md",sourceDirName:"queue/nats",slug:"/queue/nats/jetstream",permalink:"/notes/queue/nats/jetstream",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/nats/nats-jetstream.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675953425,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{title:"NATS JetStream"},sidebar:"docs",previous:{title:"NATS FAQ",permalink:"/notes/queue/nats/faq"},next:{title:"Nats on K8S",permalink:"/notes/queue/nats/k8s"}},f={},b=[{value:"Notes",id:"notes",level:2},{value:"KV",id:"kv",level:2},{value:"Cannot read properties of undefined (reading ack_policy)",id:"cannot-read-properties-of-undefined-reading-ack_policy",level:2},{value:"invalid stream name - stream name cannot contain :",id:"invalid-stream-name---stream-name-cannot-contain-",level:2}],y={toc:b},R="wrapper";function O(t){var e=t,{components:a}=e,r=c(e,["components"]);return(0,n.kt)(R,k(o(o({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"nats-jetstream"}),"NATS JetStream"),(0,n.kt)("admonition",o({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316\u6d88\u606f\u961f\u5217 - \u5bf9\u6807 Kafka"),(0,n.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 STAN"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/nats-io/jetstream"}),"nats-io/jetstream")),(0,n.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"At-least-once delivery; exactly once within a window"),(0,n.kt)("li",{parentName:"ul"},"Store messages and replay by time or sequence"),(0,n.kt)("li",{parentName:"ul"},"Wildcard support"),(0,n.kt)("li",{parentName:"ul"},"Account aware"),(0,n.kt)("li",{parentName:"ul"},"Data at rest encryption"),(0,n.kt)("li",{parentName:"ul"},"Cleanse specific messages (GDPR)"),(0,n.kt)("li",{parentName:"ul"},"Horizontal scalability"),(0,n.kt)("li",{parentName:"ul"},"Persist Streams and replay via Consumers"),(0,n.kt)("li",{parentName:"ul"},"WebSocket"))),(0,n.kt)("li",{parentName:"ul"},"Replica",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Source",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7684 stream \u6307\u5b9a source \u540e\u4f1a\u53bb\u6d88\u8d39\uff0c\u53ef\u591a\u4e2a source"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u88ab\u89c6\u4e3a\u526f\u672c - \u8be5 stream \u591a\u8282\u70b9\u8fd0\u884c\u53ef\u5b9e\u73b0\u591a\u526f\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e0d\u540c\u7684\u6301\u4e45\u5316\u7b56\u7565"))),(0,n.kt)("li",{parentName:"ul"},"Mirror",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf\u53e6\u5916\u4e00\u4e2a stream"),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u6d88\u8d39"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 mirror \u4e00\u4e2a \u526f\u672c stream \u63d0\u4f9b\u8fd1\u671f\u67e5\u8be2\u548c\u6d88\u8d39"))))),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Raft \u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u52a0\u5165 Meta Group"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a stream \u7ec4\u6210\u4e00\u4e2a Stream Group"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a consumer \u7ec4\u6210\u4e00\u4e2a Consumer Group"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350\u6df7\u5408 JetStream \u548c\u4e00\u822c Nats",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a JetStream \u9700\u8981\u5b58\u50a8 - \u914d\u7f6e\u540e\u53ef\u9488\u5bf9\u8282\u70b9\u4f7f\u7528 JetStream \u4f18\u5316\u5b58\u50a8"))))),(0,n.kt)("li",{parentName:"ul"},"nats://demo.nats.io:4222"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/nats-io/jsm.go"}),"nats-io/jsm.go"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"JetStream Management Library for Golang"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/nats-io/nats-surveyor"}),"nats-io/nats-surveyor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"metrics, dashboard"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/nats-io/terraform-provider-jetstream/"}),"nats-io/terraform-provider-jetstream"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Terraform \u7ba1\u7406 JetStream"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/nats-io/nack"}),"nats-io/nack"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"K8S Controller"))))),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e jetstream \u7684\u529f\u80fd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kv"),(0,n.kt)("li",{parentName:"ul"},"object store"),(0,n.kt)("li",{parentName:"ul"},"service rpc")))),(0,n.kt)("admonition",o({},{type:"info"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5c1a\u4e0d\u652f\u6301\u96c6\u7fa4"))),(0,n.kt)("admonition",o({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u540d\u5b57\u5c11\u4e8e 32 \u5b57\u7b26"))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'# \u542f\u52a8 jetstream\nnats-server -js\n# \u914d\u7f6e\u542f\u52a8\nnats-server -c js.conf\n\n# \u5bb9\u5668\u542f\u52a8\n# \u9ed8\u8ba4 scrach \u955c\u50cf\u53ea\u5305\u542b /nats-server\ndocker run --rm -it -p 4222:4222 --name js nats:alpine -js\n\n# nats stream\n# ==================\n# \u521b\u5efa Stream\nnats str add ORDERS --subjects "ORDERS.*" --ack --max-msgs=-1 --max-bytes=-1 --max-age=1y --storage file --retention limits --max-msg-size=-1 --discard=old --replicas 3 --dupe-window=2m\n# \u8f93\u51fa stream \u914d\u7f6e\nnats str info ORDERS -j | jq .config\n# \u901a\u8fc7\u914d\u7f6e\u521b\u5efa\nnats str add ORDERS --config orders.json\n\n# \u6240\u6709 stream\nnats str ls\n# stream \u4fe1\u606f\nnats str info ORDERS\n# \u590d\u5236 stream\nnats str cp ORDERS ARCHIVE --subjects "ORDERS_ARCVHIVE.*" --max-age 2y\n# \u4fee\u6539 stream \u5355\u9879\u914d\u7f6e\nnats str edit ORDERS --subjects "ORDERS.*"\n# \u914d\u7f6e\u8986\u76d6\nnats str edit ORDERS --config orders.json\n\n# \u53d1\u5e03\u6d88\u606f\nnats pub ORDERS.scratch hello\n# \u53d1\u5e03\u5e26 ACK - \u786e\u8ba4\u6536\u5230\u6301\u4e45\u5316\nnats req ORDERS.scratch hello\n# \u6e05\u9664\u6240\u6709\u6d88\u606f\nnats str purge ORDERS -f\n# \u5220\u9664\u4e00\u6761\u6d88\u606f - SEQ\nnats str rmm ORDERS 1 -f\n\n# \u79fb\u9664 steam\nnats str rm ORDERS -f\n\n# nats consumer\n# ==================\n# \u6240\u6709 consumer\nnats con ls ORDERS\nnats con add ORDERS DISPATCH --filter ORDERS.processed --ack explicit --pull --deliver all --sample 100 --max-deliver 20 --replay instant --max-pending 0\nnats con add ORDERS NEW --filter ORDERS.received --ack explicit --pull --deliver all --max-deliver=-1 --sample 100\n# \u914d\u7f6e\nnats con info ORDERS DISPATCH -j | jq .config\n# MONITOR push\nnats con add ORDERS MONITOR --filter \'\' --ack none --target monitor.ORDERS --deliver last --replay instant\n\n# consumer \u72b6\u6001\nnats con info ORDERS DISPATCH\n\nnats pub ORDERS.processed "order 1"\nnats pub ORDERS.processed "order 2"\nnats pub ORDERS.processed "order 3"\n\n# Pull \u6d88\u8d39 ACK \u6d88\u606f\n# --no-ack \u4e0d ACK \u7ee7\u7eed\u6d88\u8d39\n# ACK \u6267\u884c\u4e00\u6b21\u6d88\u8d39\u4e00\u6761\nnats con next ORDERS DISPATCH\nnats req \'$JS.API.CONSUMER.MSG.NEXT.ORDERS.DISPATCH\' \'\'\n\nnats con info ORDERS MONITOR\n# push \u6d88\u8d39 - \u4f1a\u4e00\u6b21\u6027\u6d88\u8d39\u6240\u6709\nnats sub monitor.ORDERS\n\n# nats \u76d1\u63a7\n# ==========\nnats event --js-advisory\n\n# nats \u5176\u4ed6\n# ==========\n# \u62a5\u544a\u7edf\u8ba1\nnats s report\n# \u53d1\u9001\u591a\u6761\u6d88\u606f\nnats req ORDERS.new "ORDER {{Count}}" --count 100\n\n# \u8f93\u51fa\u526f\u672c\u5173\u7cfb\u4e3a dot \u56fe\nnats s report --dot replication.dot\n\n# \u521b\u5efa\u6a21\u677f - \u5728 pub \u7684\u65f6\u5019\u751f\u6210\n# \u5220\u9664 template \u4f1a\u5220\u9664 \u6240\u6709 stream\nnats str template add CLIENTS --subjects "CLIENT.*" --ack --max-msgs=-1 --max-bytes=-1 --max-age=1y --storage file --retention limits --max-msg-size 2048 --max-streams 1024 --discard old\n')),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-conf"}),"jetstream {\n   store_dir=nats\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"stream.json")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "name": "ORDERS",\n  "subjects": ["ORDERS.*"],\n  "retention": "limits",\n  "max_consumers": -1,\n  "max_msgs": -1,\n  "max_bytes": -1,\n  "max_age": 31536000000000000,\n  "max_msg_size": -1,\n  "storage": "file",\n  "discard": "old",\n  "num_replicas": 1,\n  "duplicate_window": 120000000000\n}\n')),(0,n.kt)("h2",o({},{id:"notes"}),"Notes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stream \u5c5e\u6027")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"attr"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"default"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"mean"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Storage"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Subjects"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u6d88\u8d39\u7684\u4e3b\u9898 - \u652f\u6301\u901a\u914d\u7b26")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Replicas"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u96c6\u7fa4\u526f\u672c - \u6700\u591a 5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"MaxAge"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u6d88\u606f\u7559\u5b58\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"MaxBytes"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u6d88\u606f\u6570\u636e\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"MaxMsgs"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u6d88\u606f\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"MaxMsgSize"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"MaxConsumers"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"NoAck"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u7981\u7528 ACK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Rentention"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"LimitsPolicy"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u7559\u5b58\u7b56\u7565 - LimitsPolicy,InterestPolicy,WorkQueuePolicy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Discard"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"DiscardOld"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u4e22\u5f03\u7b56\u7565 - DiscardNew,DiscardOld")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Duplicates"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u53bb\u91cd\u65f6\u95f4\u7a97\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Sealed"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"DenyDelete"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"DenyPurge"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"AllowRollup"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53bb\u91cd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Nats-Msg-Id"))),(0,n.kt)("li",{parentName:"ul"},"stream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"name - ",(0,n.kt)("inlineCode",{parentName:"li"},"[^\\s.*>/]")),(0,n.kt)("li",{parentName:"ul"},"duration, size, interest"),(0,n.kt)("li",{parentName:"ul"},"subjects",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6355\u83b7\u6240\u6709\u7684\u8fd9\u4e9b\u6d88\u606f\u5e76\u5b58\u50a8"))))),(0,n.kt)("li",{parentName:"ul"},"client",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pull/push")))),(0,n.kt)("h2",o({},{id:"kv"}),"KV"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e JetStream \u7684 KV \u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://pkg.go.dev/github.com/nats-io/nats.go#KeyValue"}),"https://pkg.go.dev/github.com/nats-io/nats.go#KeyValue")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/nats-io/nats-architecture-and-design/blob/main/adr/ADR-8.md"}),"https://github.com/nats-io/nats-architecture-and-design/blob/main/adr/ADR-8.md"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"read in-memory cache"),(0,n.kt)("li",{parentName:"ul"},"key ",(0,n.kt)("inlineCode",{parentName:"li"},"\\A[-/_=\\.a-zA-Z0-9]+\\z")," - \u4e0d\u80fd ",(0,n.kt)("inlineCode",{parentName:"li"},".")," \u5f00\u5934\u6216\u7ed3\u5c3e"),(0,n.kt)("li",{parentName:"ul"},"bucket ",(0,n.kt)("inlineCode",{parentName:"li"},"\\A[a-zA-Z0-9_-]+\\z")),(0,n.kt)("li",{parentName:"ul"},"bucket",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"main ",(0,n.kt)("inlineCode",{parentName:"li"},"KV_<Bucket Name>")),(0,n.kt)("li",{parentName:"ul"},"ingest subject ",(0,n.kt)("inlineCode",{parentName:"li"},"$KV.<Bucket Name>.>")),(0,n.kt)("li",{parentName:"ul"},"max_msgs_per_subject - \u5386\u53f2\u7248\u672c\u6570 - \u6700\u5927 64"),(0,n.kt)("li",{parentName:"ul"},"rollup_hdrs - rollup \u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"max_age - TTL"),(0,n.kt)("li",{parentName:"ul"},"max_msg_size - value size"),(0,n.kt)("li",{parentName:"ul"},"max_bytes - bucket size"))),(0,n.kt)("li",{parentName:"ul"},"$KV.CONFIGURATION.auth.username",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"io.nats.jetstream.api.v1.stream_msg_get_request")))))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"nats kv\n")),(0,n.kt)("h1",o({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",o({},{id:"cannot-read-properties-of-undefined-reading-ack_policy"}),"Cannot read properties of undefined (reading ack_policy)"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"await jsc.pullSubscribe('send.*', {\n  mack: true,\n  // \u5c11\u4e86 config\n  config: {\n    durable_name: 'agent',\n    ack_policy: AckPolicy.Explicit,\n    ack_wait: 10_000_000, // 10s\n  },\n});\n")),(0,n.kt)("h2",o({},{id:"invalid-stream-name---stream-name-cannot-contain-"}),"invalid stream name - stream name cannot contain :"),(0,n.kt)("p",null,"nats \u53ef\u4ee5\u521b\u5efa\uff0c\u4f46\u662f nats.ws \u7528\u4e0d\u4e86"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/nats-io/nats.ws/issues/186"}),"nats.ws#186"))))}O.isMDXComponent=!0}}]);