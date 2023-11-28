"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96699],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,g=u["".concat(i,".").concat(m)]||u[m]||f[m]||l;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22612:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return P}});var n=r(49613),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>l(e,a(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const g={title:"PostgreSQL PL"},d="PostgreSQL PL",b={unversionedId:"db/relational/postgresql/postgresql-pl",id:"db/relational/postgresql/postgresql-pl",title:"PostgreSQL PL",description:"- \u5185\u7f6e PL/pgSQL, PL/Tcl, PL/Perl, PL/Python.",source:"@site/../notes/db/relational/postgresql/postgresql-pl.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/pl",permalink:"/notes/db/relational/postgresql/pl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-pl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1632926151,formattedLastUpdatedAt:"Sep 29, 2021",frontMatter:{title:"PostgreSQL PL"},sidebar:"docs",previous:{title:"PostgreSQL JSON",permalink:"/notes/db/relational/postgresql/json"},next:{title:"PL/pgSQL",permalink:"/notes/db/relational/postgresql/plpgsql"}},y={},P=[],v={toc:P},O="wrapper";function h(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(O,f(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"postgresql-pl"}),"PostgreSQL PL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5185\u7f6e PL/pgSQL, PL/Tcl, PL/Perl, PL/Python."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.postgresql.org/docs/current/external-pl.html"}),"https://www.postgresql.org/docs/current/external-pl.html")),(0,n.kt)("li",{parentName:"ul"},"java ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/tada/pljava"}),"tada/pljava")),(0,n.kt)("li",{parentName:"ul"},"lua ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/pllua/pllua"}),"pllua/pllua")),(0,n.kt)("li",{parentName:"ul"},"js ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/plv8/plv8"}),"plv8/plv8")),(0,n.kt)("li",{parentName:"ul"},"go ",(0,n.kt)("a",u({parentName:"li"},{href:"https://gitlab.com/microo8/plgo"}),"microo8/plgo"))))}h.isMDXComponent=!0}}]);