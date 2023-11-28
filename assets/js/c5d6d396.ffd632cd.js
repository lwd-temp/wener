"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55866],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return g}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,g=s["".concat(u,".").concat(f)]||s[f]||b[f]||a;return t?n.createElement(g,c(c({ref:r},p),{},{components:t})):n.createElement(g,c({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},43079:function(e,r,t){t.r(r),t.d(r,{assets:function(){return y},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return g},metadata:function(){return d},toc:function(){return v}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&p(e,t,r[t]);return e},b=(e,r)=>a(e,c(r)),f=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const g={title:"borg"},m="borg",d={unversionedId:"service/storage/backup/borg",id:"service/storage/backup/borg",title:"borg",description:"- borgbackup/borg",source:"@site/../notes/service/storage/backup/borg.md",sourceDirName:"service/storage/backup",slug:"/service/storage/backup/borg",permalink:"/notes/service/storage/backup/borg",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/backup/borg.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679060062,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"borg"},sidebar:"docs",previous:{title:"\u5b58\u50a8\u670d\u52a1",permalink:"/notes/service/storage/"},next:{title:"mutagen",permalink:"/notes/service/storage/backup/mutagen"}},y={},v=[],O={toc:v},k="wrapper";function w(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(k,b(s(s({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"borg"}),"borg"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/borgbackup/borg"}),"borgbackup/borg"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSD, Python"),(0,n.kt)("li",{parentName:"ul"},"\u53bb\u91cd - content-defined chunking, sha256"),(0,n.kt)("li",{parentName:"ul"},"\u538b\u7f29 - LZ4, zlib, LZMA, zstd"),(0,n.kt)("li",{parentName:"ul"},"\u52a0\u5bc6"),(0,n.kt)("li",{parentName:"ul"},"fuse mount")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"export BORG_REPO=$PWD/borg\nborg rcreate -e repokey-aes-ocb\n")))}w.isMDXComponent=!0}}]);