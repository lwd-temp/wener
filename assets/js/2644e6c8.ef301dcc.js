"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30230],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25008:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))l.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"TOTP"},h="TOTP",y={unversionedId:"service/auth/authn/totp",id:"service/auth/authn/totp",title:"TOTP",description:"- Time-based One-time Passwords",source:"@site/../notes/service/auth/authn/totp.md",sourceDirName:"service/auth/authn",slug:"/service/auth/authn/totp",permalink:"/notes/service/auth/authn/totp",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/authn/totp.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633860901,formattedLastUpdatedAt:"Oct 10, 2021",frontMatter:{title:"TOTP"},sidebar:"docs",previous:{title:"2FA",permalink:"/notes/service/auth/authn/2fa"},next:{title:"Casbin",permalink:"/notes/service/auth/authz/casbin"}},b={},O=[],v={toc:O},g="wrapper";function w(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(g,f(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"totp"}),"TOTP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Time-based One-time Passwords",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SHA-1, rotates every 30 seconds"),(0,n.kt)("li",{parentName:"ul"},"otpauth://totp/ - ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/google/google-authenticator/wiki/Key-Uri-Format"}),"Key Uri Format"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"algorithm=sha1 - sha1,sha256,sha512"),(0,n.kt)("li",{parentName:"ul"},"digits=6 - 1-10"),(0,n.kt)("li",{parentName:"ul"},"period=30"))))),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e 2FA \u7684\u65b9\u5f0f\u4e4b\u4e00"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://bitwarden.com/help/article/authenticator-keys/"}),"Bitwarden Authenticator (TOTP)"))))))}w.isMDXComponent=!0}}]);