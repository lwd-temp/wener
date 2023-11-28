"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84315],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54291:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return h}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>l(e,s(t)),d=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const f={title:"ECS"},g="ECS",y={unversionedId:"platform/aliyun/aliyun-ecs",id:"platform/aliyun/aliyun-ecs",title:"ECS",description:"Agent",source:"@site/../notes/platform/aliyun/aliyun-ecs.md",sourceDirName:"platform/aliyun",slug:"/platform/aliyun/ecs",permalink:"/notes/platform/aliyun/ecs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/platform/aliyun/aliyun-ecs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693122196,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{title:"ECS"},sidebar:"docs",previous:{title:"\u963f\u91cc\u4e91",permalink:"/notes/platform/aliyun/"},next:{title:"\u963f\u91cc\u4e91 FAQ",permalink:"/notes/platform/aliyun/faq"}},b={},h=[{value:"Agent",id:"agent",level:2},{value:"Logtail",id:"logtail",level:2}],_={toc:h},k="wrapper";function v(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(k,m(p(p({},_),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",p({},{id:"ecs"}),"ECS"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"curl http://100.100.100.200/latest/meta-data/region-id\n")),(0,a.kt)("h2",p({},{id:"agent"}),"Agent"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'mkdir -p /tmp/dl && cd $_\n\n# \u5185\u7f51 "https://aliyun-client-assist-{regionId}.oss-{regionId}-internal.aliyuncs.com/linux/aliyun_assist_latest.rpm"\ncurl -LO "https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest_update.zip"\n\nsudo unzip aliyun_assist_latest_update.zip -d /usr/local/share/aliyun-assist/\nVERSION=$(cat /usr/local/share/aliyun-assist/version)\n\nsudo apk add psutils procps-ng\n\nsudo chmod a+x /usr/local/share/aliyun-assist/$VERSION/update_install\nsudo bash /usr/local/share/aliyun-assist/$VERSION/update_install\n\nservice aliyun-service status\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/opt/local/share/assist-daemon"),(0,a.kt)("li",{parentName:"ul"},"/usr/local/share/assist-daemon",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"assist_daemon"))),(0,a.kt)("li",{parentName:"ul"},"/usr/local/share/aliyun-assist"),(0,a.kt)("li",{parentName:"ul"},"/usr/local/share/aliyun-assist/version"),(0,a.kt)("li",{parentName:"ul"},"/usr/local/share/aliyun-assist/$VERSION/")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# by RPM\ncurl -LO "https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.rpm"\napk add rpm2cpio\nrpm2cpio aliyun_assist_latest.rpm | cpio -idmv\nsudo rsync -av ./usr/local/share/aliyun-assist/ /usr/local/share/aliyun-assist/\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"bash: line 1: chkconfig: command not found\n\n * service: Exec format error\n")),(0,a.kt)("h2",p({},{id:"logtail"}),"Logtail"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/usr/local/ilogtail"),(0,a.kt)("li",{parentName:"ul"},"ca-bundle.crt"),(0,a.kt)("li",{parentName:"ul"},"ilogtail_config.json")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add libuuid\n\nwget http://logtail-release-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/linux64/logtail.sh -O logtail.sh\nchmod 755 logtail.sh\n./logtail.sh install auto\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "UUID": "",\n  "hostname": "test-debian",\n  "instance_id": "XXX",\n  "ip": "1.1.1.1",\n  "logtail_version": "1.6.0",\n  "os": "Linux; 6.1.44-0-virt; #1-Alpine SMP PREEMPT_DYNAMIC Wed, 09 Aug 2023 09:39:37 +0000; x86_64",\n  "update_time": "2023-08-18 17:30:07"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"cat /usr/local/ilogtail/ilogtail_config.json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "config_server_address": "http://logtail.cn-chengdu-intranet.log.aliyuncs.com",\n  "data_server_list": [\n    {\n      "cluster": "cn-chengdu",\n      "endpoint": "cn-chengdu-intranet.log.aliyuncs.com"\n    }\n  ],\n  "cpu_usage_limit": 0.4,\n  "mem_usage_limit": 384,\n  "max_bytes_per_sec": 20971520,\n  "bytes_per_sec": 1048576,\n  "buffer_file_num": 25,\n  "buffer_file_size": 20971520,\n  "buffer_map_num": 5,\n  "streamlog_open": false,\n  "streamlog_pool_size_in_mb": 50,\n  "streamlog_rcv_size_each_call": 1024,\n  "streamlog_formats": [],\n  "streamlog_tcp_port": 11111\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"tail -f /usr/local/ilogtail/ilogtail.LOG\n")))}v.isMDXComponent=!0}}]);