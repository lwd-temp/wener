"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88415],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(59496);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=s,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87668:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return g}});var n=r(49613),s=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&l(e,r,t[r]);return e},m=(e,t)=>a(e,o(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"statsd_exporter"},b="statsd_exporter",y={unversionedId:"service/observability/metrics/prometheus/exporter/exporter-statsd",id:"service/observability/metrics/prometheus/exporter/exporter-statsd",title:"statsd_exporter",description:"- prometheus/statsdexporter",source:"@site/../notes/service/observability/metrics/prometheus/exporter/exporter-statsd.md",sourceDirName:"service/observability/metrics/prometheus/exporter",slug:"/service/observability/metrics/prometheus/exporter/statsd",permalink:"/notes/service/observability/metrics/prometheus/exporter/statsd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/prometheus/exporter/exporter-statsd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"statsd_exporter"},sidebar:"docs",previous:{title:"Redis",permalink:"/notes/service/observability/metrics/prometheus/exporter/redis"},next:{title:"windows_exporter",permalink:"/notes/service/observability/metrics/prometheus/exporter/windows"}},v={},g=[{value:"asterisk",id:"asterisk",level:2}],x={toc:g},h="wrapper";function k(e){var t=e,{components:r}=t,s=d(t,["components"]);return(0,n.kt)(h,m(u(u({},x),s),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"statsd_exporter"}),"statsd_exporter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/prometheus/statsd_exporter"}),"prometheus/statsd_exporter")),(0,n.kt)("li",{parentName:"ul"},"statsd \u9ed8\u8ba4\u7aef\u53e3 8125/udp"),(0,n.kt)("li",{parentName:"ul"},"statsd_exporter metrics 9102, statsd 9125")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'docker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  --name statsd-exporter prom/statsd-exporter\n\ndocker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  -v $PWD/statsd_mapping.yml:/tmp/statsd_mapping.yml \\\n  --name statsd-exporter prom/statsd-exporter --statsd.mapping-config=/tmp/statsd_mapping.yml\n\n# \u6d4b\u8bd5\n# -c close - \u4f46 busybox \u7684 nc \u4e0d\u652f\u6301\necho "deploys.test.myservice:1|c" | nc -w 1 -u 127.0.0.1 8125\necho "deploys.test.myservice:1|c" | socat -t 0 STDIN UDP:127.0.0.1:8125\n')),(0,n.kt)("h2",u({},{id:"asterisk"}),"asterisk"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"statsd.conf")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"[general]\nenabled = yes\nserver = 192.168.1.1:8125\nprefix = ast-1\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"asterisk -R -x 'module reload res_statsd.so'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'<PREFIX>_PJSIP_contacts_<CONTACT>__<ID>_rtt{quantile="0.5"} -0.001\n')),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"mappings:\n  - match: '([^.]+)[.]PJSIP[.]contacts[.]([^;]+)(;[^.]*)?[.]rtt'\nmatch_type: regex\nname: 'pjsip_contacts_rtt'\nlabels:\nasterisk: '$1'\nconact: '$2'\nsummary_options:\nquantiles:\n  - quantile: 0.99\n    error: 0.001\n  - quantile: 0.9\n    error: 0.05\n  - quantile: 0.5\n    error: 0.005\nmax_summary_age: 60s\nsummary_age_buckets: 3\nstream_buffer_size: 1000\n")))}k.isMDXComponent=!0}}]);