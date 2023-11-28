"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31811],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95006:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return h}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>a(e,p(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"SPOE"},y="HAProxy SPOE",b={unversionedId:"devops/web/haproxy/haproxy-spoe",id:"devops/web/haproxy/haproxy-spoe",title:"SPOE",description:"- \u53c2\u8003",source:"@site/../notes/devops/web/haproxy/haproxy-spoe.md",sourceDirName:"devops/web/haproxy",slug:"/devops/web/haproxy/spoe",permalink:"/notes/devops/web/haproxy/spoe",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy/haproxy-spoe.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688206885,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"SPOE"},sidebar:"docs",previous:{title:"HAProxy Proxy Protocol",permalink:"/notes/devops/web/haproxy/proxy-protocol"},next:{title:"HAProxy Tuning",permalink:"/notes/devops/web/haproxy/tuning"}},g={},h=[],O={toc:h},k="wrapper";function w(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(k,m(u(u({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"haproxy-spoe"}),"HAProxy SPOE"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/haproxy/haproxy/blob/master/doc/SPOE.txt"}),"https://github.com/haproxy/haproxy/blob/master/doc/SPOE.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.haproxy.com/blog/extending-haproxy-with-the-stream-processing-offload-engine"}),"https://www.haproxy.com/blog/extending-haproxy-with-the-stream-processing-offload-engine"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"term"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"SPOE"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Stream Processing Offload Engine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"SPOA"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Stream Processing Offload Agent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"SPOP"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Stream Processing Offload Protocol")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"frontend myproxy\n  # \u8c03\u7528 SPOE\n  # filter spoe [engine <name>] config <spoe-config-file>\n  filter spoe engine ip-reputation config iprep.conf\n  # \u901a\u8fc7 SPOE \u53d8\u91cf\u505a\u5224\u65ad\n  tcp-request content reject if { var(sess.iprep.ip_score) -m int lt 20 }\n\n# \u5b9a\u4e49 SPOE \u540e\u7aef\nbackend agents\n    mode tcp\n    balance roundrobin\n    timeout connect 5s  # greater than hello timeout\n    timeout server  3m  # greater than idle timeout\n    option spop-check\n    server agent2 192.168.1.11:12345 check\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"spoe-config-file")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"[ip-reputation]\nspoe-agent iprep-agent\n    messages check-client-ip\n    # \u53d8\u91cf\u524d\u7f00\n    option var-prefix iprep\n    timeout hello 2s\n    timeout idle  2m\n    timeout processing 10ms\n    # \u6307\u5411\u540e\u7aef\n    use-backend agents\n    log global\n\nspoe-message check-client-ip\n    args ip=src\n    event on-client-session if ! { src -f /etc/haproxy/whitelist.lst }\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/SpiderLabs/ModSecurity"}),"SpiderLabs/ModSecurity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/corazawaf/coraza"}),"corazawaf/coraza"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u517c\u5bb9 ModSecurity")))))}w.isMDXComponent=!0}}]);