"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27584],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40049:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={tags:["FAQ"]},g="Woodpecker FAQ",v={unversionedId:"service/forge/woodpecker/woodpecker-faq",id:"service/forge/woodpecker/woodpecker-faq",title:"Woodpecker FAQ",description:"You are not allowed to login",source:"@site/../notes/service/forge/woodpecker/woodpecker-faq.md",sourceDirName:"service/forge/woodpecker",slug:"/service/forge/woodpecker/faq",permalink:"/notes/service/forge/woodpecker/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/woodpecker/woodpecker-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"Agent",permalink:"/notes/service/forge/woodpecker/agent"},next:{title:"Pipeline",permalink:"/notes/service/forge/woodpecker/pipeline"}},b={},y=[{value:"You are not allowed to login",id:"you-are-not-allowed-to-login",level:2},{value:"Insufficient privileges to use volumes",id:"insufficient-privileges-to-use-volumes",level:2},{value:"Cannot configure both commands and custom attributes",id:"cannot-configure-both-commands-and-custom-attributes",level:2}],w={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(k,f(p(p({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"woodpecker-faq"}),"Woodpecker FAQ"),(0,n.kt)("h2",p({},{id:"you-are-not-allowed-to-login"}),"You are not allowed to login"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-ini"}),"# \u5141\u8bb8\u975e Admin \u767b\u5f55\nWOODPECKER_OPEN: true\n")),(0,n.kt)("h2",p({},{id:"insufficient-privileges-to-use-volumes"}),"Insufficient privileges to use volumes"),(0,n.kt)("p",null,"\u5c06\u9879\u76ee\u8bbe\u7f6e\u4e3a Trusted"),(0,n.kt)("h2",p({},{id:"cannot-configure-both-commands-and-custom-attributes"}),"Cannot configure both commands and custom attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"custom attributes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4f7f\u7528 settings"))),(0,n.kt)("li",{parentName:"ul"},"commands",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u955c\u50cf\u547d\u4ee4\u884c")))))}O.isMDXComponent=!0}}]);