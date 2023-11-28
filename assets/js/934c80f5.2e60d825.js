"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26559],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,y=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return O}});var r=n(49613),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,a(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const y={title:"mitigations"},d="mitigations",b={unversionedId:"os/linux/sys/mitigations",id:"os/linux/sys/mitigations",title:"mitigations",description:"- \u4e3b\u8981\u5f71\u54cd\u65e7\u7684 Intel CPU",source:"@site/../notes/os/linux/sys/mitigations.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/mitigations",permalink:"/notes/os/linux/sys/mitigations",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/mitigations.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688543048,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{title:"mitigations"},sidebar:"docs",previous:{title:"memtest",permalink:"/notes/os/linux/sys/memtest"},next:{title:"sys/mman.h",permalink:"/notes/os/linux/sys/mman.h"}},g={},O=[],w={toc:O},v="wrapper";function h(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(v,m(p(p({},w),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"mitigations"}),"mitigations"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"lscpu # \u67e5\u770b\u7528\u4e86\u54ea\u4e9b mitigation\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5f71\u54cd\u65e7\u7684 Intel CPU"),(0,r.kt)("li",{parentName:"ul"},"Linux \u9ed8\u8ba4\u5f00\u542f\u4e86 mitigations=on - \u53ef\u4ee5\u8003\u8651\u5173\u95ed\u4ee5\u63d0\u9ad8\u6027\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u524d\u63d0\u662f\u8fd0\u884c\u7684 ",(0,r.kt)("strong",{parentName:"li"},"\u53ef\u4fe1")," \u7684 VM"),(0,r.kt)("li",{parentName:"ul"},"Spectre\u3001Meltdown\u3001L1TF\uff08Foreshadow\uff09\u3001ZombieLoad"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://www.phoronix.com/review/3-years-specmelt/2"}),"https://www.phoronix.com/review/3-years-specmelt/2"))))))}h.isMDXComponent=!0}}]);