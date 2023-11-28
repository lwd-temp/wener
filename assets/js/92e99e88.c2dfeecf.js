"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84919],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65635:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return O}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&l(e,n,t[n]);return e},d=(e,t)=>a(e,s(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"dnstap"},b="dnstap",y={unversionedId:"service/dns/dnstap",id:"service/dns/dnstap",title:"dnstap",description:"- \u7528\u4e8e dns \u65e5\u5fd7",source:"@site/../notes/service/dns/dnstap.md",sourceDirName:"service/dns",slug:"/service/dns/dnstap",permalink:"/notes/service/dns/dnstap",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/dnstap.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1687429668,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"dnstap"},sidebar:"docs",previous:{title:"dnsmasq",permalink:"/notes/service/dns/dnsmasq"},next:{title:"Domain",permalink:"/notes/service/dns/domain"}},v={},O=[],g={toc:O},h="wrapper";function w(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(h,d(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"dnstap"}),"dnstap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e dns \u65e5\u5fd7"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://dnstap.info/"}),"https://dnstap.info/")),(0,r.kt)("li",{parentName:"ul"},"Protobuf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://vector.dev/docs/reference/configuration/sources/dnstap/"}),"vector dnstap source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/dnstap/dnstap.pb/blob/master/dnstap.proto"}),"https://github.com/dnstap/dnstap.pb/blob/master/dnstap.proto"))))}w.isMDXComponent=!0}}]);