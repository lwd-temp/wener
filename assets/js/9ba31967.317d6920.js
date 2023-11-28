"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64217],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64100:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return h}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"mod_opal"},b="mod_opal",y={unversionedId:"voip/freeswitch/mod_opal",id:"voip/freeswitch/mod_opal",title:"mod_opal",description:"- mod_opal",source:"@site/../notes/voip/freeswitch/mod_opal.md",sourceDirName:"voip/freeswitch",slug:"/voip/freeswitch/mod_opal",permalink:"/notes/voip/freeswitch/mod_opal",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/freeswitch/mod_opal.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634658458,formattedLastUpdatedAt:"Oct 19, 2021",frontMatter:{title:"mod_opal"},sidebar:"docs",previous:{title:"mod_dptools",permalink:"/notes/voip/freeswitch/mod_dptools"},next:{title:"mod_sofia",permalink:"/notes/voip/freeswitch/mod_sofia"}},w={},h=[],v={toc:h},O="wrapper";function g(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(O,f(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"mod_opal"}),"mod_opal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mod_opal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,n.kt)("a",u({parentName:"li"},{href:"http://www.opalvoip.org/"}),"opal")," \u7684 endpoint \u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 H.323 \u548c IAX2"),(0,n.kt)("li",{parentName:"ul"},"beta \u8d28\u91cf"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/signalwire/freeswitch/tree/master/src/mod/endpoints/mod_opal"}),"src/mod/endpoints/mod_opal")))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2010 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://lists.freeswitch.org/pipermail/freeswitch-users/2010-September/062503.html"}),"what happened to iax"))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"originate opal/h323:foo@bar.com &echo\noriginate opal/iax2:foo@bar.com &echo\n")))}g.isMDXComponent=!0}}]);