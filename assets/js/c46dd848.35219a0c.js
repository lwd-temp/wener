"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77215],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),b=o,d=s["".concat(i,".").concat(b)]||s[b]||f[b]||a;return r?n.createElement(d,u(u({ref:t},p),{},{components:r})):n.createElement(d,u({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},50947:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return j},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>a(e,u(t)),b=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"SonarQube"},m="SonarQube",y={unversionedId:"dev/qa/sonarqube",id:"dev/qa/sonarqube",title:"SonarQube",description:"",source:"@site/../notes/dev/qa/sonarqube.md",sourceDirName:"dev/qa",slug:"/dev/qa/sonarqube",permalink:"/notes/dev/qa/sonarqube",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/qa/sonarqube.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685087225,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"SonarQube"},sidebar:"docs",previous:{title:"QoDana",permalink:"/notes/dev/qa/qodana"},next:{title:"Quantum",permalink:"/notes/dev/quantum"}},v={},O=[],g={toc:O},w="wrapper";function j(e){var t=e,{components:r}=t,o=b(t,["components"]);return(0,n.kt)(w,f(s(s({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"sonarqube"}),"SonarQube"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# https://hub.docker.com/_/sonarqube\n# --stop-timeout 3600\ndocker run --rm -it sonarqube:lts\n")))}j.isMDXComponent=!0}}]);