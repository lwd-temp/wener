"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96779],{49613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return g}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(g,o(o({ref:e},c),{},{components:n})):r.createElement(g,o({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28904:function(t,e,n){n.r(e),n.d(e,{assets:function(){return y},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&c(t,n,e[n]);return t},d=(t,e)=>l(t,o(e)),m=(t,e)=>{var n={};for(var r in t)u.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n};const g={title:"Vlang Build"},f="Vlang Build",b={unversionedId:"languages/v/v-build",id:"languages/v/v-build",title:"Vlang Build",description:"pseudo variables",source:"@site/../notes/languages/v/v-build.md",sourceDirName:"languages/v",slug:"/languages/v/build",permalink:"/notes/languages/v/build",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/v/v-build.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1623656447,formattedLastUpdatedAt:"Jun 14, 2021",frontMatter:{title:"Vlang Build"},sidebar:"docs",previous:{title:"V",permalink:"/notes/languages/v/"},next:{title:"Vlang FAQ",permalink:"/notes/languages/v/faq"}},y={},k=[],v={toc:k},N="wrapper";function O(t){var e=t,{components:n}=e,a=m(e,["components"]);return(0,r.kt)(N,d(s(s({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"vlang-build"}),"Vlang Build"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"\n# \u652f\u6301\u4ee3\u7801\u70ed\u91cd\u8f7d\n# \u51fd\u6570\u6dfb\u52a0 [live]\nv -live message.v\n\n# \u4ea4\u53c9\u7f16\u8bd1\nv -os windows .\nv -os linux .\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"pseudo variables")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"var"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@FN"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"name of the current V function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@METHOD"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"replaced with ReceiverType.MethodName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@MOD"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"name of the current V module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@STRUCT"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"name of the current V struct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@FILE"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"path of the V source file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@LINE"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"V line number where it appears (as a string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@COLUMN"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"column where it appears (as a string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@VEXE"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"path to the V compiler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@VEXEROOT"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"folder, where the V executable is (as a string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@VHASH"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"shortened commit hash of the V compiler (as a string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@VMOD_FILE"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"contents of the nearest v.mod file (as a string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"@VMODROOT"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"folder, where the nearest v.mod file is (as a string).")))))}O.isMDXComponent=!0}}]);