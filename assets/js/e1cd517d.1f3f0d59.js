"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98807],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96094:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"NanoPi"},b="NanoPi",y={unversionedId:"hardware/sbc/nanopi",id:"hardware/sbc/nanopi",title:"NanoPi",description:"- NanoPi [R2S]",source:"@site/../notes/hardware/sbc/nanopi.md",sourceDirName:"hardware/sbc",slug:"/hardware/sbc/nanopi",permalink:"/notes/hardware/sbc/nanopi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/sbc/nanopi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645033829,formattedLastUpdatedAt:"Feb 16, 2022",frontMatter:{title:"NanoPi"},sidebar:"docs",previous:{title:"SBC",permalink:"/notes/hardware/sbc/"},next:{title:"Orange Pi",permalink:"/notes/hardware/sbc/opi/"}},w={},O=[],h={toc:O},v="wrapper";function k(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,f(s(s({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"nanopi"}),"NanoPi"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NanoPi ",(0,n.kt)("a",s({parentName:"li"},{href:"https://wiki.friendlyarm.com/wiki/index.php/NanoPi_R2S"}),"R2S"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RK3328 SoC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dual-Gbps Ethernet"),(0,n.kt)("li",{parentName:"ul"},"1G DDR4"))),(0,n.kt)("li",{parentName:"ul"},"RTL8153B"),(0,n.kt)("li",{parentName:"ul"},"RTL8211E - \u7f51\u5361"))),(0,n.kt)("li",{parentName:"ul"},"NanoPi ",(0,n.kt)("a",s({parentName:"li"},{href:"https://wiki.friendlyarm.com/wiki/index.php/NanoPi_R2C"}),"R2C"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"YT8521S - \u7f51\u5361")))))}k.isMDXComponent=!0}}]);