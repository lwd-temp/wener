"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85566],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37706:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"SAML"},y="SAML",b={unversionedId:"service/auth/saml",id:"service/auth/saml",title:"SAML",description:"- SAML - Security Assertion Markup Language",source:"@site/../notes/service/auth/saml.md",sourceDirName:"service/auth",slug:"/service/auth/saml",permalink:"/notes/service/auth/saml",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/saml.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625926581,formattedLastUpdatedAt:"Jul 10, 2021",frontMatter:{title:"SAML"},sidebar:"docs",previous:{title:"Passkeys",permalink:"/notes/service/auth/passkeys"},next:{title:"SSO",permalink:"/notes/service/auth/sso"}},v={},k=[],O={toc:k},h="wrapper";function w(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,m(s(s({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"saml"}),"SAML"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SAML - Security Assertion Markup Language",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SAML 1.0 2002"),(0,n.kt)("li",{parentName:"ul"},"SAML 1.1 2003"),(0,n.kt)("li",{parentName:"ul"},"SAML 2.0 2005"))),(0,n.kt)("li",{parentName:"ul"},"federated single sign on"),(0,n.kt)("li",{parentName:"ul"},"IDP XML <-> SP XML - \u4ea4\u6362\u914d\u7f6e\u521b\u5efa\u4fe1\u4efb\u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 IdP \u53d1\u8d77\u4e5f\u53ef\u4ee5\u901a\u8fc7 SP \u53d1\u8d77",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IdP \u53d1\u8d77",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c06\u5185\u90e8\u6388\u6743\u7528\u6237\u4ea4\u7ed9\u5916\u90e8\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u5728\u7edf\u4e00\u6388\u6743\u767b\u9646\u540e\u4fbf\u80fd\u8bbf\u95ee\u5176\u4ed6\u670d\u52a1"))),(0,n.kt)("li",{parentName:"ul"},"SP \u53d1\u8d77",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u5728\u8bbf\u95ee\u5177\u4f53\u670d\u52a1\u65f6\u76f4\u63a5\u8fdb\u884c\u8ba4\u8bc1"))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Chrome ",(0,n.kt)("a",s({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/saml-tracer/mpdajninpobndbfcldcmbpnnbhibjmch"}),"SAML Tracker")," \u6269\u5c55\u53ef\u7528\u4e8e\u8c03\u8bd5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.youtube.com/watch?v=i8wFExDSZv0"}),"SAML Overview"))))))}w.isMDXComponent=!0}}]);