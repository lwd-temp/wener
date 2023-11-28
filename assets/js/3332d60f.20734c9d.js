"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86693],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,y=s["".concat(c,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63342:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return y},metadata:function(){return k},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>l(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={title:"Let's Encrypt"},d="Let's Encrypt",k={unversionedId:"security/cert/letsencrypt",id:"security/cert/letsencrypt",title:"Let's Encrypt",description:"- letsdebug",source:"@site/../notes/security/cert/letsencrypt.md",sourceDirName:"security/cert",slug:"/security/cert/letsencrypt",permalink:"/notes/security/cert/letsencrypt",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/cert/letsencrypt.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Let's Encrypt"},sidebar:"docs",previous:{title:"LEGO",permalink:"/notes/security/cert/lego"},next:{title:"smallstep",permalink:"/notes/security/cert/smallstep"}},b={},g=[],O={toc:g},N="wrapper";function v(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(N,m(s(s({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"lets-encrypt"}),"Let's Encrypt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://letsdebug.net/"}),"letsdebug"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u57df\u540d\u8bc1\u4e66\u95ee\u9898"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://letsencrypt.org/docs/rate-limits/"}),"\u9891\u7387\u9650\u5236"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"50 \u8bc1\u4e66/\u6ce8\u518c\u57df\u540d/\u5468",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u57df\u540d\u6309\u7167\u9876\u7ea7\u57df\u540d\u7b97"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,n.kt)("a",s({parentName:"li"},{href:"http://www.example.com"}),"www.example.com")," -> example.com"))),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8bc1\u4e66\u6700\u591a 100 \u4e2a\u57df\u540d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u5468\u6700\u591a 5000 \u57df\u540d\u8bc1\u4e66"))),(0,n.kt)("li",{parentName:"ul"},"\u7eed\u671f\u4e0d\u8ba1\u5165\u6bcf\u5468\u6ce8\u518c\u57df\u540d\u6570 - \u6bcf\u5468\u6700\u591a 5 \u91cd\u590d\u8bc1\u4e66",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8bc1\u4e66\u5185 SAN \u5224\u65ad\u662f\u5426\u76f8\u540c"))),(0,n.kt)("li",{parentName:"ul"},"Revoke \u65e0\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u5c0f\u65f6\u6700\u591a 5 \u6b21\u9a8c\u8bc1\u5931\u8d25"),(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u63a5\u53e3 20 RPS\uff0c\u975e\u6838\u5fc3 40 RPS"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4e0d\u4f1a\u9047\u5230\u7684\u9650\u5236",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"10 \u8d26\u6237/IP/3 \u5c0f\u65f6"),(0,n.kt)("li",{parentName:"ul"},"500 \u8d26\u6237/IPv6-48/3 \u5c0f\u65f6"),(0,n.kt)("li",{parentName:"ul"},"300 \u5f85\u9a8c\u8bc1\u6388\u6743/\u8d26\u6237"))))),(0,n.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u6709\u6548\u671f \u4e09\u4e2a\u6708, 90 \u5929, 13 \u5468"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://letsencrypt.org/docs/staging-environment/"}),"staging"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://acme-staging-v02.api.letsencrypt.org/directory"}),"https://acme-staging-v02.api.letsencrypt.org/directory")),(0,n.kt)("li",{parentName:"ul"},"ACME v2 New Orders 1,500/3h")))))}v.isMDXComponent=!0}}]);