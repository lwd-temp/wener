"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11310],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),s=a,d=f["".concat(c,".").concat(s)]||f[s]||m[s]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3473:function(e,t,r){r.r(t),r.d(t,{assets:function(){return O},contentTitle:function(){return y},default:function(){return N},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>i(e,o(t)),s=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"NLP"},y="NLP",b={unversionedId:"ai/nlp/README",id:"ai/nlp/README",title:"NLP",description:"- General terms",source:"@site/../notes/ai/nlp/README.md",sourceDirName:"ai/nlp",slug:"/ai/nlp/",permalink:"/notes/ai/nlp/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ai/nlp/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"NLP"},sidebar:"docs",previous:{title:"Named Entity Recognition",permalink:"/notes/ai/ner"},next:{title:"\u4e2d\u6587\u5206\u8bcd",permalink:"/notes/ai/nlp/chinese-tokenizer"}},O={},k=[],g={toc:k},v="wrapper";function N(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(v,m(f(f({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"nlp"}),"NLP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"General terms"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u672c\u5206\u6790",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6587\u672c\u5206\u6bb5"))),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u6458\u8981"),(0,n.kt)("li",{parentName:"ul"},"\u673a\u5668\u7ffb\u8bd1"),(0,n.kt)("li",{parentName:"ul"},"\u8bed\u4e49\u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"Computer-assisted reviewing (CAR) - \u8ba1\u7b97\u673a\u8f85\u52a9\u5ba1\u9605"),(0,n.kt)("li",{parentName:"ul"},"Automatic identification and data capture (AIDC) - \u81ea\u52a8\u8bc6\u522b\u4e0e\u6570\u636e\u6355\u83b7",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Optical character recognition (OCR) - \u5149\u5b66\u5b57\u7b26\u8bc6\u522b"),(0,n.kt)("li",{parentName:"ul"},"Intelligent character recognition (ICR) - \u667a\u80fd\u5b57\u7b26\u8bc6\u522b"),(0,n.kt)("li",{parentName:"ul"},"TTS - \u6587\u672c\u8f6c\u8bed\u97f3/\u8bed\u97f3\u5408\u6210"),(0,n.kt)("li",{parentName:"ul"},"Magnetic ink character recognition (MICR)"),(0,n.kt)("li",{parentName:"ul"},"Optical mark recognition (OMR)"),(0,n.kt)("li",{parentName:"ul"},"Barcode"),(0,n.kt)("li",{parentName:"ul"},"Radio-frequency identification (RFID)"),(0,n.kt)("li",{parentName:"ul"},"Biometric identification")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"/notes/ai/nlp/awesome"}),"Awesome")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"/notes/ai/nlp/faq"}),"FAQ"))))}N.isMDXComponent=!0}}]);