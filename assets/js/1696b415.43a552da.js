"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98704],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),y=o,f=s["".concat(c,".").concat(y)]||s[y]||m[y]||a;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},13428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return x},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return h}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>a(e,p(t)),y=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={tags:["Tuning"]},d="HAProxy Tuning",g={unversionedId:"devops/web/haproxy/haproxy-tuning",id:"devops/web/haproxy/haproxy-tuning",title:"HAProxy Tuning",description:"- maxconn",source:"@site/../notes/devops/web/haproxy/haproxy-tuning.md",sourceDirName:"devops/web/haproxy",slug:"/devops/web/haproxy/tuning",permalink:"/notes/devops/web/haproxy/tuning",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/haproxy/haproxy-tuning.md",tags:[{label:"Tuning",permalink:"/notes/tags/tuning"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688543048,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{tags:["Tuning"]},sidebar:"docs",previous:{title:"SPOE",permalink:"/notes/devops/web/haproxy/spoe"},next:{title:"HAProxy Version",permalink:"/notes/devops/web/haproxy/version"}},b={},h=[],v={toc:h},w="wrapper";function x(e){var t=e,{components:n}=t,o=y(t,["components"]);return(0,r.kt)(w,m(s(s({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"haproxy-tuning"}),"HAProxy Tuning"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),'haproxy -vv\necho "show info" | socat stdio /run/haproxy-runtime-api.sock\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"maxconn"),(0,r.kt)("li",{parentName:"ul"},"CPU Pinning",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nbproc"),(0,r.kt)("li",{parentName:"ul"},"nbthread"),(0,r.kt)("li",{parentName:"ul"},"cpu-map")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ini",metastring:'title="/etc/sysctl.d/30-haproxy.conf"',title:'"/etc/sysctl.d/30-haproxy.conf"'}),"net.ipv4.tcp_rmem            = 4096 16060 262144\nnet.ipv4.tcp_wmem            = 4096 16384 262144\nnet.ipv4.tcp_tw_reuse        = 1\nnet.ipv4.ip_local_port_range = 1024 65023\nnet.ipv4.tcp_max_syn_backlog = 60000\n#net.ipv4.tcp_fin_timeout     = 30\nnet.ipv4.tcp_synack_retries  = 3\nnet.core.somaxconn           = 60000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/documentation/hapee/latest/getting-started/system-tuning/"}),"https://www.haproxy.com/documentation/hapee/latest/getting-started/system-tuning/"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"# CPU Pinning\nnbproc 2\ncpu-map 1 0\ncpu-map 2 1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.haproxy.com/blog/multithreading-in-haproxy"}),"https://www.haproxy.com/blog/multithreading-in-haproxy"))))}x.isMDXComponent=!0}}]);