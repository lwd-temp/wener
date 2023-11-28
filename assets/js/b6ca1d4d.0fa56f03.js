"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11669],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68782:function(e,t,r){r.r(t),r.d(t,{assets:function(){return O},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return w}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const d={title:"\u7f16\u8f91\u5668"},b="Editor",y={unversionedId:"web/editor/README",id:"web/editor/README",title:"\u7f16\u8f91\u5668",description:"\u57fa\u4e8e Web \u7684\u7f16\u8f91\u5668\u5206\u4e3a\u51e0\u4e2a\u5c42\u6b21",source:"@site/../notes/web/editor/README.md",sourceDirName:"web/editor",slug:"/web/editor/",permalink:"/notes/web/editor/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1653630561,formattedLastUpdatedAt:"May 27, 2022",frontMatter:{title:"\u7f16\u8f91\u5668"},sidebar:"docs",previous:{title:"DOM",permalink:"/notes/web/dom"},next:{title:"ansi",permalink:"/notes/web/editor/ansi"}},O={},w=[],v={toc:w},k="wrapper";function g(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(k,f(s(s({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"editor"}),"Editor"),(0,n.kt)("p",null,"\u57fa\u4e8e Web \u7684\u7f16\u8f91\u5668\u5206\u4e3a\u51e0\u4e2a\u5c42\u6b21"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u589e\u5f3a textarea - \u4f8b\u5982 mention"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e contentEditbale - \u5bcc\u6587\u672c\u7f16\u8f91\u5668 - WYSIWYG - \u6240\u89c1\u5373\u6240\u5f97",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5b9e\u73b0\u7f16\u8f91\u529f\u80fd"),(0,n.kt)("li",{parentName:"ol"},"core+render"))),(0,n.kt)("li",{parentName:"ul"},"Block Editor"),(0,n.kt)("li",{parentName:"ul"},"DnD Designer"),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u7f16\u8f91\u5668 - \u9ad8\u4eae"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u672c\u5904\u7406\u5668 - Canvas")),(0,n.kt)("p",null,"RTE \u529f\u80fd\u4e5f\u5206\u4e3a\u5f88\u591a\u5c42\u6b21"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u7840 - mention, hashtag, link, emoji"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u7ae0 - medium\u3001ghost\u3001wordpress"),(0,n.kt)("li",{parentName:"ul"},"WYSIWYG - CMS\u3001RCT"),(0,n.kt)("li",{parentName:"ul"},"\u534f\u4f5c\u7f16\u8f91")))}g.isMDXComponent=!0}}]);