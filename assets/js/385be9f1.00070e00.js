"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[72445],{49613:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75333:function(e,r,t){t.r(r),t.d(r,{assets:function(){return w},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return k}});var n=t(49613),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&s(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&s(e,t,r[t]);return e},f=(e,r)=>i(e,c(r)),d=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={title:"Pipeline"},b="Woodpecker Pipeline",y={unversionedId:"service/forge/woodpecker/woodpecker-pipeline",id:"service/forge/woodpecker/woodpecker-pipeline",title:"Pipeline",description:"- \u914d\u7f6e\u987a\u5e8f - constant.go#L27-L32",source:"@site/../notes/service/forge/woodpecker/woodpecker-pipeline.md",sourceDirName:"service/forge/woodpecker",slug:"/service/forge/woodpecker/pipeline",permalink:"/notes/service/forge/woodpecker/pipeline",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/woodpecker/woodpecker-pipeline.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679563201,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Pipeline"},sidebar:"docs",previous:{title:"Woodpecker FAQ",permalink:"/notes/service/forge/woodpecker/faq"},next:{title:"Server",permalink:"/notes/service/forge/woodpecker/server"}},w={},k=[],g={toc:k},v="wrapper";function O(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(v,f(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"woodpecker-pipeline"}),"Woodpecker Pipeline"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u987a\u5e8f - ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/46452fbd848bb57ad78c7069a5d2ffa63f3156ec/shared/constant/constant.go#L27-L32"}),"constant.go#L27-L32"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},".woodpecker/"),(0,n.kt)("li",{parentName:"ul"},".woodpecker.yml"),(0,n.kt)("li",{parentName:"ul"},".woodpecker.yaml"),(0,n.kt)("li",{parentName:"ul"},".drone.yml")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"WOODPECKER_DATABASE_DRIVER=postgres\nWOODPECKER_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n")))}O.isMDXComponent=!0}}]);