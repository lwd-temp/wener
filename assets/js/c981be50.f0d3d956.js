"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32169],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),y=i,m=p["".concat(u,".").concat(y)]||p[y]||f[y]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},65489:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return j},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return O}});var n=r(49613),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&l(e,r,t[r]);return e},f=(e,t)=>o(e,a(t)),y=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"trivy"},d="trivy",v={unversionedId:"security/scan/trivy",id:"security/scan/trivy",title:"trivy",description:"- aquasecurity/trivy",source:"@site/../notes/security/scan/trivy.md",sourceDirName:"security/scan",slug:"/security/scan/trivy",permalink:"/notes/security/scan/trivy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/scan/trivy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"trivy"},sidebar:"docs",previous:{title:"PKCS",permalink:"/notes/security/pkcs"},next:{title:"Security Awesome",permalink:"/notes/security/awesome"}},b={},O=[],w={toc:O},g="wrapper";function j(e){var t=e,{components:r}=t,i=y(t,["components"]);return(0,n.kt)(g,f(p(p({},w),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"trivy"}),"trivy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/aquasecurity/trivy"}),"aquasecurity/trivy"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Golang"),(0,n.kt)("li",{parentName:"ul"},"Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more")))))}j.isMDXComponent=!0}}]);